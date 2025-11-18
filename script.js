// ========================================
// VALORANT QUIZ - MAIN SCRIPT
// ========================================

// API Configuration
const API_BASE = 'https://valorant-api.com/v1';
const API_LANG = 'en-US';

// Global State
let gameState = {
    currentMode: null,
    agents: [],
    weapons: [],
    maps: [],
    currentAgentIndex: 0,
    smashList: [],
    passList: [],
    currentQuestionIndex: 0,
    score: 0,
    attempts: 0,
    maxAttempts: 6,
    currentAnswer: null,
    answeredQuestions: []
};

// Agent quotes database (since API doesn't provide quotes)
const agentQuotes = {
    'Jett': [
        "Watch this!",
        "Get out of my way!",
        "I am the wind!",
        "No one can stop me!"
    ],
    'Phoenix': [
        "You can't kill me!",
        "Here comes the heat!",
        "Too hot to handle!",
        "Watch me fly!"
    ],
    'Sage': [
        "I will heal you.",
        "You are safe with me.",
        "Death is not the end.",
        "Balance must be preserved."
    ],
    'Sova': [
        "I am the hunter.",
        "The hunter cannot be hunted.",
        "Not even the wind can hide from me.",
        "I know exactly where you are."
    ],
    'Viper': [
        "Welcome to my world.",
        "You're in my playground now.",
        "Do not fear complexity.",
        "Breathe it in."
    ],
    'Cypher': [
        "I know exactly where you are.",
        "You can hide, but you cannot run.",
        "I always know what you're doing.",
        "Secrets keep me one step ahead."
    ],
    'Reyna': [
        "For you, and no one else.",
        "I will feast on them all.",
        "They were nothing.",
        "More!"
    ],
    'Killjoy': [
        "Everything has a place.",
        "Science rules!",
        "Let's make it explode!",
        "Efficiency is elegant."
    ],
    'Breach': [
        "Clear the way!",
        "Who needs a door?",
        "Breaking through!",
        "Nothing stops me!"
    ],
    'Omen': [
        "Darkness within darkness.",
        "I am the beginning. I am the end.",
        "Watch them run.",
        "Scatter!"
    ],
    'Brimstone': [
        "Hold the line!",
        "I've got what you need!",
        "One down!",
        "Let's go, let's go, let's go!"
    ],
    'Raze': [
        "Here comes the party!",
        "Time to party!",
        "Showtime!",
        "Let's blow something up!"
    ],
    'Skye': [
        "Let's get started!",
        "Stay close!",
        "Seek them out!",
        "I'll watch your back!"
    ],
    'Yoru': [
        "Watch this!",
        "You'll never see me coming.",
        "I am everywhere.",
        "Too slow!"
    ],
    'Astra': [
        "The stars align.",
        "Destiny awaits.",
        "Written in the stars.",
        "Balance returns."
    ],
    'KAY/O': [
        "Null sector engaged.",
        "Target eliminated.",
        "System online.",
        "Hostile detected."
    ],
    'Chamber': [
        "Perfection.",
        "Magnifique!",
        "Style matters.",
        "One is all I need."
    ],
    'Neon': [
        "Let's go!",
        "Catch me if you can!",
        "Too fast for you!",
        "Watch your step!"
    ],
    'Fade': [
        "Face your fears.",
        "Nightmares manifest.",
        "I will find them.",
        "No escape."
    ],
    'Harbor': [
        "The tide rises.",
        "Flow like water.",
        "Reclaim this ground.",
        "Under my protection."
    ],
    'Gekko': [
        "Let's do this!",
        "Wingman, go!",
        "We got this!",
        "My crew's ready!"
    ],
    'Deadlock': [
        "Target acquired.",
        "Lock them down.",
        "No escape.",
        "Secured."
    ],
    'Iso': [
        "One versus one.",
        "Face me.",
        "Just you and me.",
        "Challenge accepted."
    ],
    'Clove': [
        "Not dead yet!",
        "Death is just a setback.",
        "Back in action!",
        "Can't keep me down!"
    ],
    'Vyse': [
        "Control is everything.",
        "Precision is key.",
        "Calculate. Execute.",
        "Perfect form."
    ]
};

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', async () => {
    showLoading(true);
    await loadAllData();
    showLoading(false);
    initializeUI();
});

// ========================================
// API FUNCTIONS
// ========================================

async function loadAllData() {
    try {
        // Load agents
        const agentsResponse = await fetch(`${API_BASE}/agents?language=${API_LANG}&isPlayableCharacter=true`);
        if (!agentsResponse.ok) {
            throw new Error(`Failed to load agents: ${agentsResponse.status}`);
        }
        const agentsData = await agentsResponse.json();

        // Validate and filter agents
        if (!agentsData || !agentsData.data || !Array.isArray(agentsData.data)) {
            throw new Error('Invalid agents data received from API');
        }
        gameState.agents = agentsData.data.filter(agent =>
            agent && agent.isPlayableCharacter && agent.displayName
        );

        // Load weapons
        const weaponsResponse = await fetch(`${API_BASE}/weapons?language=${API_LANG}`);
        if (!weaponsResponse.ok) {
            throw new Error(`Failed to load weapons: ${weaponsResponse.status}`);
        }
        const weaponsData = await weaponsResponse.json();

        // Validate weapons data
        if (!weaponsData || !weaponsData.data || !Array.isArray(weaponsData.data)) {
            throw new Error('Invalid weapons data received from API');
        }
        gameState.weapons = weaponsData.data.filter(weapon =>
            weapon && weapon.displayName && weapon.displayIcon
        );

        // Load maps
        const mapsResponse = await fetch(`${API_BASE}/maps?language=${API_LANG}`);
        if (!mapsResponse.ok) {
            throw new Error(`Failed to load maps: ${mapsResponse.status}`);
        }
        const mapsData = await mapsResponse.json();

        // Validate maps data
        if (!mapsData || !mapsData.data || !Array.isArray(mapsData.data)) {
            throw new Error('Invalid maps data received from API');
        }
        gameState.maps = mapsData.data.filter(map =>
            map && map.displayName && map.splash
        );

        // Verify we have enough data to play
        if (gameState.agents.length === 0) {
            throw new Error('No agents loaded from API');
        }
        if (gameState.weapons.length === 0) {
            throw new Error('No weapons loaded from API');
        }
        if (gameState.maps.length === 0) {
            throw new Error('No maps loaded from API');
        }

        console.log('Data loaded successfully:', {
            agents: gameState.agents.length,
            weapons: gameState.weapons.length,
            maps: gameState.maps.length
        });
    } catch (error) {
        console.error('Error loading data:', error);
        showLoading(false);
        alert(`Error loading VALORANT data: ${error.message}\n\nPlease refresh the page to try again.`);
        throw error; // Re-throw to prevent initialization
    }
}

// ========================================
// UI INITIALIZATION
// ========================================

function initializeUI() {
    // Hamburger menu
    const hamburger = document.getElementById('hamburgerMenu');
    const sidebar = document.getElementById('sidebar');
    const closeMenu = document.getElementById('closeMenu');

    hamburger?.addEventListener('click', () => {
        sidebar?.classList.add('active');
    });

    closeMenu?.addEventListener('click', () => {
        sidebar?.classList.remove('active');
    });

    // Game mode selection - from home screen
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', () => {
            const mode = card.getAttribute('data-mode');
            if (mode) {
                startGameMode(mode);
                sidebar?.classList.remove('active');
            }
        });
    });

    // Game mode selection - from sidebar
    document.querySelectorAll('.menu-options a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const mode = link.getAttribute('data-mode');
            if (mode) {
                startGameMode(mode);
                sidebar?.classList.remove('active');
            }
        });
    });

    // Show hero logo on home screen
    const heroLogo = document.getElementById('heroLogo');
    if (heroLogo) heroLogo.parentElement.style.display = 'flex';
}

// ========================================
// GAME MODE CONTROLLER
// ========================================

function startGameMode(mode) {
    // Hide all containers
    hideAllContainers();

    // Reset game state
    gameState.currentMode = mode;
    gameState.currentAgentIndex = 0;
    gameState.smashList = [];
    gameState.passList = [];
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.attempts = 0;
    gameState.answeredQuestions = [];

    // Start appropriate game mode
    switch (mode) {
        case 'daily-ranked':
            startDailyRanked();
            break;
        case 'ranking':
            showRanking();
            break;
        case 'smash-or-pass-agents':
            startSmashOrPassAgents();
            break;
        case 'guess-ability':
            startGuessAbility();
            break;
        case 'guess-quote':
            startGuessQuote();
            break;
        case 'guess-agent':
            startGuessAgent();
            break;
        case 'weapon-quiz':
            startWeaponQuiz();
            break;
        case 'map-quiz':
            startMapQuiz();
            break;
        default:
            console.error('Unknown game mode:', mode);
    }
}

function hideAllContainers() {
    const containers = [
        'homeContainer',
        'smashOrPassContainer',
        'statsContainer',
        'guessAbilityContainer',
        'guessQuoteContainer',
        'guessAgentContainer',
        'weaponQuizContainer',
        'mapQuizContainer'
    ];

    containers.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = 'none';
    });
}

function showLoading(show) {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = show ? 'flex' : 'none';
    }
}

// ========================================
// SMASH OR PASS - AGENTS
// ========================================

function startSmashOrPassAgents() {
    gameState.currentAgentIndex = 0;
    gameState.smashList = [];
    gameState.passList = [];

    // Shuffle agents
    gameState.agents = shuffleArray([...gameState.agents]);

    document.getElementById('smashOrPassContainer').style.display = 'block';
    document.getElementById('totalCount').textContent = gameState.agents.length;

    displayCurrentAgent();

    // Event listeners
    document.getElementById('smashBtn').onclick = () => handleSmashOrPass('smash');
    document.getElementById('passBtn').onclick = () => handleSmashOrPass('pass');
    document.getElementById('restartBtn').onclick = () => startGameMode('smash-or-pass-agents');
}

function displayCurrentAgent() {
    const agent = gameState.agents[gameState.currentAgentIndex];

    document.getElementById('agentImg').src = agent.fullPortrait || agent.displayIcon;
    document.getElementById('agentName').textContent = agent.displayName;
    document.getElementById('agentRole').textContent = agent.role?.displayName || '';
    document.getElementById('currentCount').textContent = gameState.currentAgentIndex + 1;
}

function handleSmashOrPass(choice) {
    const agent = gameState.agents[gameState.currentAgentIndex];

    if (choice === 'smash') {
        gameState.smashList.push(agent.displayName);
    } else {
        gameState.passList.push(agent.displayName);
    }

    gameState.currentAgentIndex++;

    if (gameState.currentAgentIndex < gameState.agents.length) {
        displayCurrentAgent();
    } else {
        showSmashOrPassResults();
    }
}

function showSmashOrPassResults() {
    document.getElementById('smashOrPassContainer').style.display = 'none';
    document.getElementById('statsContainer').style.display = 'block';

    document.getElementById('smashCount').textContent = gameState.smashList.length;
    document.getElementById('passCount').textContent = gameState.passList.length;

    const smashListEl = document.getElementById('smashList');
    smashListEl.innerHTML = '';
    gameState.smashList.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        smashListEl.appendChild(li);
    });
}

// ========================================
// GUESS BY ABILITY
// ========================================

function startGuessAbility() {
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.attempts = 0;
    gameState.answeredQuestions = [];

    document.getElementById('guessAbilityContainer').style.display = 'block';

    loadNextAbilityQuestion();

    // Event listeners
    document.getElementById('abilityGuessBtn').onclick = () => checkAbilityGuess();
    document.getElementById('abilityGuessInput').onkeypress = (e) => {
        if (e.key === 'Enter') checkAbilityGuess();
    };
    document.getElementById('restartAbilityBtn').onclick = () => loadNextAbilityQuestion();

    // Autocomplete
    setupAutocomplete('abilityGuessInput', 'abilityAutocomplete');
}

function loadNextAbilityQuestion() {
    // Get a random agent with abilities
    const agentsWithAbilities = gameState.agents.filter(agent =>
        agent.abilities &&
        Array.isArray(agent.abilities) &&
        agent.abilities.length > 0 &&
        agent.abilities.some(ability => ability && ability.displayIcon && ability.displayName)
    );

    if (agentsWithAbilities.length === 0) {
        console.error('No agents with valid abilities found');
        alert('Unable to load ability quiz. Please try another game mode.');
        return;
    }

    const randomAgent = agentsWithAbilities[Math.floor(Math.random() * agentsWithAbilities.length)];

    // Get abilities with valid icons
    const validAbilities = randomAgent.abilities.filter(ability =>
        ability && ability.displayIcon && ability.displayName
    );

    if (validAbilities.length === 0) {
        // Try another agent
        loadNextAbilityQuestion();
        return;
    }

    const randomAbility = validAbilities[Math.floor(Math.random() * validAbilities.length)];

    gameState.currentAnswer = randomAgent.displayName;
    gameState.attempts = 0;
    gameState.currentQuestionIndex++;

    // Display ability
    document.getElementById('abilityIcon').src = randomAbility.displayIcon;
    document.getElementById('abilityName').textContent = randomAbility.displayName;
    document.getElementById('abilityGuessInput').value = '';
    document.getElementById('abilityGuessInput').disabled = false;
    document.getElementById('abilityGuessBtn').disabled = false;
    document.getElementById('abilityAttempts').textContent = '0';
    document.getElementById('abilityAttemptsList').innerHTML = '';
    document.getElementById('abilityResult').textContent = '';
    document.getElementById('abilityResult').className = 'result-message';
    document.getElementById('restartAbilityBtn').style.display = 'none';
    document.getElementById('abilityTotal').textContent = gameState.currentQuestionIndex;
}

function checkAbilityGuess() {
    const guess = document.getElementById('abilityGuessInput').value.trim();

    if (!guess) return;

    gameState.attempts++;
    document.getElementById('abilityAttempts').textContent = gameState.attempts;

    // Add attempt to list
    const attemptsList = document.getElementById('abilityAttemptsList');
    const attemptItem = document.createElement('div');
    attemptItem.className = 'attempt-item';
    attemptItem.textContent = `${gameState.attempts}. ${guess}`;
    attemptsList.appendChild(attemptItem);

    if (guess.toLowerCase() === gameState.currentAnswer.toLowerCase()) {
        // Correct!
        gameState.score++;
        document.getElementById('abilityScore').textContent = gameState.score;
        document.getElementById('abilityResult').textContent = '✓ Correct!';
        document.getElementById('abilityResult').className = 'result-message correct';
        document.getElementById('restartAbilityBtn').style.display = 'block';
        document.getElementById('abilityGuessInput').disabled = true;
        document.getElementById('abilityGuessBtn').disabled = true;
    } else if (gameState.attempts >= gameState.maxAttempts) {
        // Out of attempts
        document.getElementById('abilityResult').textContent = `✗ The answer was ${gameState.currentAnswer}`;
        document.getElementById('abilityResult').className = 'result-message incorrect';
        document.getElementById('restartAbilityBtn').style.display = 'block';
        document.getElementById('abilityGuessInput').disabled = true;
        document.getElementById('abilityGuessBtn').disabled = true;
    }

    document.getElementById('abilityGuessInput').value = '';
}

// ========================================
// GUESS BY QUOTE
// ========================================

function startGuessQuote() {
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.attempts = 0;

    document.getElementById('guessQuoteContainer').style.display = 'block';

    loadNextQuoteQuestion();

    // Event listeners
    document.getElementById('quoteGuessBtn').onclick = () => checkQuoteGuess();
    document.getElementById('quoteGuessInput').onkeypress = (e) => {
        if (e.key === 'Enter') checkQuoteGuess();
    };
    document.getElementById('restartQuoteBtn').onclick = () => loadNextQuoteQuestion();

    // Autocomplete
    setupAutocomplete('quoteGuessInput', 'quoteAutocomplete');
}

function loadNextQuoteQuestion() {
    // Get random agent with quotes
    const agentNames = Object.keys(agentQuotes);
    const randomAgentName = agentNames[Math.floor(Math.random() * agentNames.length)];
    const quotes = agentQuotes[randomAgentName];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    gameState.currentAnswer = randomAgentName;
    gameState.attempts = 0;
    gameState.currentQuestionIndex++;

    // Display quote
    document.getElementById('quoteText').textContent = `"${randomQuote}"`;
    document.getElementById('quoteGuessInput').value = '';
    document.getElementById('quoteGuessInput').disabled = false;
    document.getElementById('quoteGuessBtn').disabled = false;
    document.getElementById('quoteAttempts').textContent = '0';
    document.getElementById('quoteAttemptsList').innerHTML = '';
    document.getElementById('quoteResult').textContent = '';
    document.getElementById('quoteResult').className = 'result-message';
    document.getElementById('restartQuoteBtn').style.display = 'none';
    document.getElementById('quoteTotal').textContent = gameState.currentQuestionIndex;
}

function checkQuoteGuess() {
    const guess = document.getElementById('quoteGuessInput').value.trim();

    if (!guess) return;

    gameState.attempts++;
    document.getElementById('quoteAttempts').textContent = gameState.attempts;

    // Add attempt to list
    const attemptsList = document.getElementById('quoteAttemptsList');
    const attemptItem = document.createElement('div');
    attemptItem.className = 'attempt-item';
    attemptItem.textContent = `${gameState.attempts}. ${guess}`;
    attemptsList.appendChild(attemptItem);

    if (guess.toLowerCase() === gameState.currentAnswer.toLowerCase()) {
        // Correct!
        gameState.score++;
        document.getElementById('quoteScore').textContent = gameState.score;
        document.getElementById('quoteResult').textContent = '✓ Correct!';
        document.getElementById('quoteResult').className = 'result-message correct';
        document.getElementById('restartQuoteBtn').style.display = 'block';
        document.getElementById('quoteGuessInput').disabled = true;
        document.getElementById('quoteGuessBtn').disabled = true;
    } else if (gameState.attempts >= gameState.maxAttempts) {
        // Out of attempts
        document.getElementById('quoteResult').textContent = `✗ The answer was ${gameState.currentAnswer}`;
        document.getElementById('quoteResult').className = 'result-message incorrect';
        document.getElementById('restartQuoteBtn').style.display = 'block';
        document.getElementById('quoteGuessInput').disabled = true;
        document.getElementById('quoteGuessBtn').disabled = true;
    }

    document.getElementById('quoteGuessInput').value = '';
}

// ========================================
// GUESS THE AGENT (by portrait)
// ========================================

function startGuessAgent() {
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.attempts = 0;

    document.getElementById('guessAgentContainer').style.display = 'block';

    loadNextAgentQuestion();

    // Event listeners
    document.getElementById('agentGuessBtn').onclick = () => checkAgentGuess();
    document.getElementById('agentGuessInput').onkeypress = (e) => {
        if (e.key === 'Enter') checkAgentGuess();
    };
    document.getElementById('restartAgentBtn').onclick = () => loadNextAgentQuestion();

    // Autocomplete
    setupAutocomplete('agentGuessInput', 'agentAutocomplete');
}

function loadNextAgentQuestion() {
    const randomAgent = gameState.agents[Math.floor(Math.random() * gameState.agents.length)];

    gameState.currentAnswer = randomAgent.displayName;
    gameState.attempts = 0;
    gameState.currentQuestionIndex++;

    // Display agent portrait (blurred for challenge)
    document.getElementById('agentPortrait').src = randomAgent.displayIcon;
    document.getElementById('agentGuessInput').value = '';
    document.getElementById('agentGuessInput').disabled = false;
    document.getElementById('agentGuessBtn').disabled = false;
    document.getElementById('agentAttempts').textContent = '0';
    document.getElementById('agentAttemptsList').innerHTML = '';
    document.getElementById('agentResult').textContent = '';
    document.getElementById('agentResult').className = 'result-message';
    document.getElementById('restartAgentBtn').style.display = 'none';
    document.getElementById('agentTotal').textContent = gameState.currentQuestionIndex;

    // Apply initial blur effect
    applyBlurEffect(0);
}

function checkAgentGuess() {
    const guess = document.getElementById('agentGuessInput').value.trim();

    if (!guess) return;

    gameState.attempts++;
    document.getElementById('agentAttempts').textContent = gameState.attempts;

    // Update blur effect (image gets clearer with each attempt)
    applyBlurEffect(gameState.attempts);

    // Add attempt to list
    const attemptsList = document.getElementById('agentAttemptsList');
    const attemptItem = document.createElement('div');
    attemptItem.className = 'attempt-item';
    attemptItem.textContent = `${gameState.attempts}. ${guess}`;
    attemptsList.appendChild(attemptItem);

    if (guess.toLowerCase() === gameState.currentAnswer.toLowerCase()) {
        // Correct!
        gameState.score++;
        document.getElementById('agentScore').textContent = gameState.score;
        document.getElementById('agentResult').textContent = '✓ Correct!';
        document.getElementById('agentResult').className = 'result-message correct';
        document.getElementById('restartAgentBtn').style.display = 'block';
        document.getElementById('agentGuessInput').disabled = true;
        document.getElementById('agentGuessBtn').disabled = true;
        // Remove blur on correct answer
        applyBlurEffect(6);
    } else if (gameState.attempts >= gameState.maxAttempts) {
        // Out of attempts
        document.getElementById('agentResult').textContent = `✗ The answer was ${gameState.currentAnswer}`;
        document.getElementById('agentResult').className = 'result-message incorrect';
        document.getElementById('restartAgentBtn').style.display = 'block';
        document.getElementById('agentGuessInput').disabled = true;
        document.getElementById('agentGuessBtn').disabled = true;
        // Remove blur on game over
        applyBlurEffect(6);
    }

    document.getElementById('agentGuessInput').value = '';
}

// ========================================
// WEAPON QUIZ
// ========================================

function startWeaponQuiz() {
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;

    document.getElementById('weaponQuizContainer').style.display = 'block';
    document.getElementById('weaponScore').textContent = '0';
    document.getElementById('weaponTotal').textContent = '0';

    loadNextWeaponQuestion();
}

function loadNextWeaponQuestion() {
    gameState.currentQuestionIndex++;

    // Get random weapon
    const randomWeapon = gameState.weapons[Math.floor(Math.random() * gameState.weapons.length)];
    gameState.currentAnswer = randomWeapon.displayName;

    // Display weapon
    document.getElementById('weaponImage').src = randomWeapon.displayIcon;

    // Generate options (correct answer + 3 random wrong answers)
    const options = [randomWeapon.displayName];
    while (options.length < 4) {
        const randomOption = gameState.weapons[Math.floor(Math.random() * gameState.weapons.length)].displayName;
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    // Shuffle options
    const shuffledOptions = shuffleArray(options);

    // Display options
    const optionsGrid = document.getElementById('weaponOptionsGrid');
    optionsGrid.innerHTML = '';

    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkWeaponAnswer(option, btn);
        optionsGrid.appendChild(btn);
    });

    document.getElementById('weaponResult').textContent = '';
    document.getElementById('weaponResult').className = 'result-message';
    document.getElementById('weaponTotal').textContent = gameState.currentQuestionIndex;
}

function checkWeaponAnswer(selected, btn) {
    // Disable all buttons
    const allButtons = document.querySelectorAll('#weaponOptionsGrid .option-btn');
    allButtons.forEach(b => b.disabled = true);

    if (selected === gameState.currentAnswer) {
        gameState.score++;
        btn.classList.add('correct');
        document.getElementById('weaponResult').textContent = '✓ Correct!';
        document.getElementById('weaponResult').className = 'result-message correct';
    } else {
        btn.classList.add('incorrect');
        // Highlight correct answer
        allButtons.forEach(b => {
            if (b.textContent === gameState.currentAnswer) {
                b.classList.add('correct');
            }
        });
        document.getElementById('weaponResult').textContent = `✗ Correct answer: ${gameState.currentAnswer}`;
        document.getElementById('weaponResult').className = 'result-message incorrect';
    }

    document.getElementById('weaponScore').textContent = gameState.score;

    // Auto-advance after 2 seconds
    setTimeout(() => {
        loadNextWeaponQuestion();
    }, 2000);
}

// ========================================
// MAP QUIZ
// ========================================

function startMapQuiz() {
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;

    document.getElementById('mapQuizContainer').style.display = 'block';
    document.getElementById('mapScore').textContent = '0';
    document.getElementById('mapTotal').textContent = '0';

    loadNextMapQuestion();
}

function loadNextMapQuestion() {
    gameState.currentQuestionIndex++;

    // Get random map
    const randomMap = gameState.maps[Math.floor(Math.random() * gameState.maps.length)];
    gameState.currentAnswer = randomMap.displayName;

    // Display map
    document.getElementById('mapImage').src = randomMap.splash;

    // Generate options (correct answer + 3 random wrong answers)
    const options = [randomMap.displayName];
    while (options.length < 4) {
        const randomOption = gameState.maps[Math.floor(Math.random() * gameState.maps.length)].displayName;
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    // Shuffle options
    const shuffledOptions = shuffleArray(options);

    // Display options
    const optionsGrid = document.getElementById('mapOptionsGrid');
    optionsGrid.innerHTML = '';

    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkMapAnswer(option, btn);
        optionsGrid.appendChild(btn);
    });

    document.getElementById('mapResult').textContent = '';
    document.getElementById('mapResult').className = 'result-message';
    document.getElementById('mapTotal').textContent = gameState.currentQuestionIndex;
}

function checkMapAnswer(selected, btn) {
    // Disable all buttons
    const allButtons = document.querySelectorAll('#mapOptionsGrid .option-btn');
    allButtons.forEach(b => b.disabled = true);

    if (selected === gameState.currentAnswer) {
        gameState.score++;
        btn.classList.add('correct');
        document.getElementById('mapResult').textContent = '✓ Correct!';
        document.getElementById('mapResult').className = 'result-message correct';
    } else {
        btn.classList.add('incorrect');
        // Highlight correct answer
        allButtons.forEach(b => {
            if (b.textContent === gameState.currentAnswer) {
                b.classList.add('correct');
            }
        });
        document.getElementById('mapResult').textContent = `✗ Correct answer: ${gameState.currentAnswer}`;
        document.getElementById('mapResult').className = 'result-message incorrect';
    }

    document.getElementById('mapScore').textContent = gameState.score;

    // Auto-advance after 2 seconds
    setTimeout(() => {
        loadNextMapQuestion();
    }, 2000);
}

// ========================================
// AUTOCOMPLETE SYSTEM
// ========================================

function setupAutocomplete(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);

    if (!input || !dropdown) return;

    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();

        if (!value) {
            dropdown.classList.remove('active');
            dropdown.innerHTML = '';
            return;
        }

        const matches = gameState.agents.filter(agent =>
            agent.displayName.toLowerCase().includes(value)
        ).slice(0, 5);

        if (matches.length > 0) {
            dropdown.innerHTML = '';
            matches.forEach(agent => {
                const item = document.createElement('div');
                item.className = 'autocomplete-item';
                item.textContent = agent.displayName;
                item.onclick = () => {
                    input.value = agent.displayName;
                    dropdown.classList.remove('active');
                    dropdown.innerHTML = '';
                };
                dropdown.appendChild(item);
            });
            dropdown.classList.add('active');
        } else {
            dropdown.classList.remove('active');
            dropdown.innerHTML = '';
        }
    });

    // Close dropdown when pressing Enter
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            dropdown.classList.remove('active');
            dropdown.innerHTML = '';
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
            dropdown.innerHTML = '';
        }
    });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ========================================
// DAILY RANKED SYSTEM
// ========================================

const VALORANT_RANKS = [
    { name: 'Radiant', minScore: 950, icon: '⭐', color: 'rank-radiant', emoji: '🌟' },
    { name: 'Immortal', minScore: 850, icon: '💎', color: 'rank-immortal', emoji: '💎' },
    { name: 'Ascendant', minScore: 750, icon: '🔺', color: 'rank-ascendant', emoji: '🔺' },
    { name: 'Diamond', minScore: 650, icon: '💠', color: 'rank-diamond', emoji: '💠' },
    { name: 'Platinum', minScore: 550, icon: '🔷', color: 'rank-platinum', emoji: '🔷' },
    { name: 'Gold', minScore: 450, icon: '🟡', color: 'rank-gold', emoji: '🟡' },
    { name: 'Silver', minScore: 350, icon: '⚪', color: 'rank-silver', emoji: '⚪' },
    { name: 'Bronze', minScore: 250, icon: '🟤', color: 'rank-bronze', emoji: '🟤' },
    { name: 'Iron', minScore: 0, icon: '⚫', color: 'rank-iron', emoji: '⚫' }
];

const DAILY_MODES = [
    { id: 'guess-ability', name: 'Guess by Ability', description: 'Identify agent by ability', maxScore: 300 },
    { id: 'guess-quote', name: 'Guess by Quote', description: 'Identify agent by quote', maxScore: 300 },
    { id: 'guess-agent', name: 'Guess the Agent', description: 'Identify the agent', maxScore: 300 },
    { id: 'weapon-quiz', name: 'Weapon Quiz', description: 'Identify weapons', maxScore: 250 },
    { id: 'map-quiz', name: 'Map Quiz', description: 'Identify maps', maxScore: 250 }
];

let dailyRankedState = {
    currentDate: null,
    todaysChallenges: [],
    currentChallengeIndex: 0,
    totalScore: 0,
    challengeScores: [],
    hasPlayedToday: false,
    viewingDate: null
};

// Get date string (YYYY-MM-DD)
function getDateString(date = new Date()) {
    return date.toISOString().split('T')[0];
}

// Seeded random for consistent daily rotation
function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Get today's challenges (same for everyone, changes daily)
function getDailyChallenges(dateString) {
    const seed = dateString.split('-').reduce((acc, val) => acc + parseInt(val), 0);
    const shuffled = [...DAILY_MODES];

    // Fisher-Yates shuffle with seed
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(seed + i) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, 4); // Return 4 random modes
}

// Get rank from score
function getRankFromScore(score) {
    for (const rank of VALORANT_RANKS) {
        if (score >= rank.minScore) {
            return rank;
        }
    }
    return VALORANT_RANKS[VALORANT_RANKS.length - 1];
}

// Check if user has played today
function hasPlayedToday() {
    const today = getDateString();
    const lastPlayed = localStorage.getItem('lastDailyPlay');
    return lastPlayed === today;
}

// Save daily play
function saveDailyPlay(score) {
    const today = getDateString();
    localStorage.setItem('lastDailyPlay', today);
    localStorage.setItem('todayScore', score.toString());
}

// Get today's score
function getTodayScore() {
    const today = getDateString();
    const lastPlayed = localStorage.getItem('lastDailyPlay');
    if (lastPlayed === today) {
        return parseInt(localStorage.getItem('todayScore') || '0');
    }
    return 0;
}

// Start Daily Ranked
function startDailyRanked() {
    hideAllContainers();
    document.getElementById('dailyRankedContainer').style.display = 'block';

    const today = getDateString();
    dailyRankedState.currentDate = today;
    dailyRankedState.todaysChallenges = getDailyChallenges(today);
    dailyRankedState.hasPlayedToday = hasPlayedToday();

    // Display today's date
    const dateObj = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('dailyDate').textContent = dateObj.toLocaleDateString('en-US', options);

    // Display challenges
    const challengesList = document.getElementById('challengesList');
    challengesList.innerHTML = '';
    dailyRankedState.todaysChallenges.forEach((challenge, index) => {
        const item = document.createElement('div');
        item.className = 'challenge-item';
        item.innerHTML = `
            <div class="challenge-number">${index + 1}</div>
            <div class="challenge-info">
                <div class="challenge-mode-name">${challenge.name}</div>
                <div class="challenge-description">${challenge.description}</div>
            </div>
        `;
        challengesList.appendChild(item);
    });

    // Show appropriate section
    if (dailyRankedState.hasPlayedToday) {
        document.getElementById('dailyChallenges').style.display = 'none';
        document.getElementById('dailyStartSection').style.display = 'none';
        document.getElementById('alreadyPlayed').style.display = 'block';

        const score = getTodayScore();
        const rank = getRankFromScore(score);
        document.getElementById('yourTodayScore').textContent = score;
        document.getElementById('yourRankIcon').innerHTML = rank.emoji;
        document.getElementById('yourRankIcon').className = `rank-icon ${rank.color}`;
        document.getElementById('yourRankName').textContent = rank.name;
        document.getElementById('yourRankName').className = `rank-name ${rank.color}`;
    } else {
        document.getElementById('dailyChallenges').style.display = 'block';
        document.getElementById('dailyStartSection').style.display = 'block';
        document.getElementById('alreadyPlayed').style.display = 'none';
    }

    // Event listeners
    document.getElementById('startDailyBtn').onclick = () => beginDailyRun();
    document.getElementById('viewRankingBtn').onclick = () => showRanking();
}

// Begin daily run
function beginDailyRun() {
    dailyRankedState.currentChallengeIndex = 0;
    dailyRankedState.totalScore = 0;
    dailyRankedState.challengeScores = [];

    document.getElementById('dailyChallenges').style.display = 'none';
    document.getElementById('dailyStartSection').style.display = 'none';
    document.getElementById('dailyProgressSection').style.display = 'block';

    loadDailyChallenge();
}

// Load daily challenge
function loadDailyChallenge() {
    const challenge = dailyRankedState.todaysChallenges[dailyRankedState.currentChallengeIndex];

    document.getElementById('currentChallenge').textContent = dailyRankedState.currentChallengeIndex + 1;
    document.getElementById('dailyScore').textContent = dailyRankedState.totalScore;
    document.getElementById('currentChallengeName').textContent = challenge.name;

    // Start the specific challenge mode
    gameState.dailyMode = true;
    gameState.dailyMaxScore = challenge.maxScore;
    startGameMode(challenge.id);
}

// Complete daily challenge
function completeDailyChallenge(score) {
    dailyRankedState.challengeScores.push(score);
    dailyRankedState.totalScore += score;
    dailyRankedState.currentChallengeIndex++;

    if (dailyRankedState.currentChallengeIndex < dailyRankedState.todaysChallenges.length) {
        // Next challenge
        setTimeout(() => {
            hideAllContainers();
            document.getElementById('dailyRankedContainer').style.display = 'block';
            document.getElementById('dailyProgressSection').style.display = 'block';
            loadDailyChallenge();
        }, 2000);
    } else {
        // All challenges complete
        setTimeout(() => {
            showDailyComplete();
        }, 2000);
    }
}

// Show daily complete
function showDailyComplete() {
    hideAllContainers();
    document.getElementById('dailyRankedContainer').style.display = 'block';
    document.getElementById('dailyProgressSection').style.display = 'none';
    document.getElementById('dailyCompleteSection').style.display = 'block';

    const finalScore = dailyRankedState.totalScore;
    const rank = getRankFromScore(finalScore);

    document.getElementById('finalDailyScore').textContent = finalScore;
    document.getElementById('finalRankIcon').innerHTML = rank.emoji;
    document.getElementById('finalRankIcon').className = `rank-icon-large ${rank.color}`;
    document.getElementById('finalRankName').textContent = rank.name;
    document.getElementById('finalRankName').className = `rank-name-large ${rank.color}`;

    // Save play
    saveDailyPlay(finalScore);

    // Event listeners
    document.getElementById('submitScoreBtn').onclick = () => submitScore();
    document.getElementById('viewRankingFromCompleteBtn').onclick = () => showRanking();
}

// Submit score to ranking
async function submitScore() {
    const username = document.getElementById('usernameInput').value.trim();

    if (!username) {
        alert('Please enter a username');
        return;
    }

    if (username.length < 2) {
        alert('Username must be at least 2 characters');
        return;
    }

    const score = dailyRankedState.totalScore;
    const rank = getRankFromScore(score);
    const today = getDateString();

    try {
        // Save to Firebase
        const scoreRef = database.ref(`rankings/${today}`).push();
        await scoreRef.set({
            username: username,
            score: score,
            rank: rank.name,
            timestamp: Date.now()
        });

        alert('Score submitted successfully!');
        showRanking();
    } catch (error) {
        console.error('Error submitting score:', error);
        // Fallback to localStorage if Firebase fails
        saveToLocalStorage(username, score, rank, today);
        alert('Score saved locally!');
        showRanking();
    }
}

// Fallback: Save to localStorage
function saveToLocalStorage(username, score, rank, date) {
    const key = `ranking_${date}`;
    let rankings = JSON.parse(localStorage.getItem(key) || '[]');
    rankings.push({
        username: username,
        score: score,
        rank: rank.name,
        timestamp: Date.now()
    });
    rankings.sort((a, b) => b.score - a.score);
    localStorage.setItem(key, JSON.stringify(rankings));
}

// Show ranking
async function showRanking(date = null) {
    hideAllContainers();
    document.getElementById('rankingContainer').style.display = 'block';

    const viewDate = date || getDateString();
    dailyRankedState.viewingDate = viewDate;

    // Display date
    const dateObj = new Date(viewDate);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('rankingCurrentDate').textContent = dateObj.toLocaleDateString('en-US', options);

    // Load rankings
    try {
        const snapshot = await database.ref(`rankings/${viewDate}`).once('value');
        const rankings = [];

        snapshot.forEach((childSnapshot) => {
            rankings.push(childSnapshot.val());
        });

        rankings.sort((a, b) => b.score - a.score);
        displayRankings(rankings);
    } catch (error) {
        console.error('Error loading rankings:', error);
        // Fallback to localStorage
        const key = `ranking_${viewDate}`;
        const rankings = JSON.parse(localStorage.getItem(key) || '[]');
        displayRankings(rankings);
    }

    // Event listeners
    document.getElementById('prevDateBtn').onclick = () => navigateDate(-1);
    document.getElementById('nextDateBtn').onclick = () => navigateDate(1);
    document.getElementById('backToMenuBtn').onclick = () => {
        hideAllContainers();
        document.getElementById('homeContainer').style.display = 'block';
        const heroLogo = document.getElementById('heroLogo');
        if (heroLogo) heroLogo.parentElement.style.display = 'flex';
    };

    // Disable next button if viewing today
    const today = getDateString();
    document.getElementById('nextDateBtn').disabled = viewDate === today;
}

// Display rankings
function displayRankings(rankings) {
    const list = document.getElementById('rankingList');

    if (rankings.length === 0) {
        list.innerHTML = '<div class="no-scores"><p>No scores yet for this day</p></div>';
        return;
    }

    list.innerHTML = '';
    rankings.forEach((entry, index) => {
        const rank = getRankFromScore(entry.score);
        const row = document.createElement('div');
        row.className = 'ranking-row';
        row.innerHTML = `
            <div class="rank-col">#${index + 1}</div>
            <div class="player-col">${entry.username}</div>
            <div class="score-col">${entry.score}</div>
            <div class="tier-col">
                <span class="tier-icon ${rank.color}">${rank.emoji}</span>
                <span class="tier-name ${rank.color}">${rank.name}</span>
            </div>
        `;
        list.appendChild(row);
    });
}

// Navigate dates
function navigateDate(days) {
    const currentDate = new Date(dailyRankedState.viewingDate);
    currentDate.setDate(currentDate.getDate() + days);
    const newDate = getDateString(currentDate);

    // Don't go into the future
    const today = getDateString();
    if (newDate > today) return;

    showRanking(newDate);
}

// ========================================
// BLUR EFFECT FOR GUESS THE AGENT
// ========================================

function applyBlurEffect(attempts) {
    const maxAttempts = 6;
    const minBlur = 0;
    const maxBlur = 20;

    // Calculate blur amount (decreases with attempts)
    const blurAmount = maxBlur - (attempts / maxAttempts) * maxBlur;

    const img = document.getElementById('agentPortrait');
    if (img) {
        img.style.filter = `blur(${blurAmount}px)`;
        img.style.transition = 'filter 0.3s ease';
    }
}

// ========================================
// UPDATE GAME MODES FOR DAILY RANKED
// ========================================

// Override hideAllContainers to include new containers
const originalHideAllContainers = hideAllContainers;
function hideAllContainers() {
    originalHideAllContainers();
    const newContainers = ['dailyRankedContainer', 'rankingContainer'];
    newContainers.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    // Hide logo when not on home
    const heroLogo = document.getElementById('heroLogo');
    if (heroLogo) heroLogo.parentElement.style.display = 'none';
}

// ========================================
// EXPORT FOR DEBUGGING
// ========================================

window.gameState = gameState;
window.startGameMode = startGameMode;
window.dailyRankedState = dailyRankedState;
window.startDailyRanked = startDailyRanked;
window.showRanking = showRanking;
