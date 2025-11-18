// ========== INTERNATIONALIZATION SYSTEM ==========
const translations = {
    en: {
        // Header
        gameTitle: 'LEAGUE OF LEGENDS GAMES',
        subtitle: 'Choose your game mode',
        gameModes: 'Game Modes',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'GUESS GAMES',
        quizGames: 'QUIZ GAMES',
        trivia: 'TRIVIA',
        esports: 'ESPORTS',
        hardMode: 'HARD MODE',

        // Menu items
        menuProPlayers: '👨 ProPlayers',
        menuChampions: '⚔️ Champions',
        menuClassic: '🎯 Classic',
        menuAbility: '⚡ Ability',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Quote',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Audio',
        menuGuessTeam: '🏆 Guess the Team',
        menuGuessName: '👤 Guess the Name',
        menuGuessIcon: '🎯 Guess the Icon',
        menuHardMode: '🔥 Extreme Trivia',
        menuEsportsTrivia: '🏆 Esports Trivia',
        menuDailyRun: '🏆 Daily Ranked',
        menuRanking: '🏅 Ranking',

        // Daily Challenge
        dailyChallenge: 'DAILY CHALLENGE',
        dailyRunTitle: '🎮 DAILY RUN',
        dailyRunSubtitle: 'Complete all challenges and climb the leaderboard!',
        rankingTitle: '🏅 RANKING',
        rankingSubtitle: 'Top players of the day',
        todayScore: 'Today\'s Score:',
        enterUsername: 'Enter your username',
        submitScore: 'Submit Score',
        playDailyRun: 'START DAILY RUN',
        alreadyPlayed: 'You already played today! Come back tomorrow.',
        comeBackTomorrow: 'Come back tomorrow for a new challenge!',
        challengeComplete: 'Challenge Complete!',
        finalScore: 'Final Score:',
        rank: 'Rank',
        username: 'Username',
        points: 'Points',
        noScoresToday: 'No scores yet today. Be the first!',
        challenge: 'Challenge',

        // Game cards
        proPlayers: 'ProPlayers',
        proPlayersDesc: 'Choose your favorite pro players',
        champions: 'Champions',
        championsDesc: 'Smash or pass LoL champions',
        classic: 'Classic',
        classicDesc: 'Guess with attribute clues',
        ability: 'Ability',
        abilityDesc: 'Guess by ability icon',
        splashArt: 'Splash Art',
        splashArtDesc: 'Guess the champion with zoom',
        quote: 'Quote',
        quoteDesc: 'Guess by iconic quotes',
        audio: 'Audio',
        audioDesc: 'Guess by champion voice',
        emoji: 'Emoji',
        emojiDesc: 'Guess by emoji clues',
        emojiGameTitle: '😊 Guess the Champion by Emoji',
        emojiGameSubtitle: 'Decode the emojis!',
        guessTeam: 'Guess the Team',
        guessTeamDesc: 'Which team did they play for?',
        guessName: 'Guess the Name',
        guessNameDesc: 'Who is this player?',
        guessIcon: 'Guess the Icon',
        guessIconDesc: 'Which team is this logo from?',
        hardModeGame: 'Hard Mode',
        hardModeDesc: 'Difficult stats and trivia',
        esportsTrivia: 'Esports Trivia',
        esportsTriviaDesc: 'Pro tournament questions',

        // Buttons
        startGame: 'START GAME',
        playAgain: 'Play Again',
        nextQuestion: 'Next Question',
        restart: 'Restart',
        guess: 'Guess',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Select Your Region',
        allRegions: '🌍 All Regions',
        lck: 'LCK (Korea)',
        lpl: 'LPL (China)',
        lec: 'LEC (Europe)',
        lcs: 'LCS (NA)',
        cblol: 'CBLOL (Brazil)',
        ljl: 'LJL (Japan)',
        lco: 'LCO (Oceania)',
        lcl: 'LCL (CIS)',

        // Gender selector
        selectGender: 'Select Gender',
        allChampions: '⚔️ All Champions',
        male: '👨 Male',
        female: '👩 Female',

        // Results
        yourResults: 'Your Results',
        yourSmash: 'Your SMASH ❤️',
        score: 'Score:',
        attempts: 'Attempts:',
        correct: 'Correct!',
        incorrect: 'Incorrect',
        gameOver: 'Game Over!',

        // Stats
        totalVotes: 'Total votes:',
        globalStats: 'Global Statistics',

        // Quiz questions
        whichTeamQuestion: 'Which team did this player play for?',
        whoIsPlayerQuestion: 'Who is this player?',
        whichTeamLogoQuestion: 'Which team is this logo from?',

        // Game titles
        abilityGameTitle: '⚡ Guess the Champion by Ability',
        abilityGameSubtitle: 'Which champion has this ability?',
        splashGameTitle: '🖼️ Guess the Champion by Splash Art',
        splashGameSubtitle: 'Zoom increases with each failed attempt',
        quoteGameTitle: '💬 Guess the Champion by Quote',
        quoteGameSubtitle: 'Which champion says this line?',
        classicGameTitle: '🎯 Classic',
        classicGameSubtitle: 'Guess with attribute clues',
        audioGameTitle: '🔊 Guess the Champion by Voice',
        audioGameSubtitle: 'Listen to the champion voice',
        playAudio: 'Play Audio',
        replay: 'Replay',

        // Input placeholders
        typeChampionName: 'Type champion name...',

        // Classic mode attributes
        gender: 'Gender',
        position: 'Position',
        species: 'Species',
        resource: 'Resource',
        range: 'Range',
        region: 'Region',

        // Hard Mode & Esports
        hardModeTitle: '🔥 HARD MODE - Extreme Trivia',
        hardModeSubtitle: 'Difficult questions about stats and LoL trivia',
        esportsTriviaTitle: '🏆 ESPORTS TRIVIA',
        esportsTriviaSubtitle: 'Questions about tournaments, teams and players',

        // Counter
        player: 'Player',
        champion: 'Champion',
        of: 'of'
    },
    es: {
        // Header
        gameTitle: 'LEAGUE OF LEGENDS GAMES',
        subtitle: 'Elige tu modo de juego',
        gameModes: 'Modos de Juego',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'GUESS GAMES',
        quizGames: 'QUIZ GAMES',
        trivia: 'TRIVIA',
        esports: 'ESPORTS',
        hardMode: 'HARD MODE',

        // Menu items
        menuProPlayers: '👨 ProPlayers',
        menuChampions: '⚔️ Campeones',
        menuClassic: '🎯 Classic',
        menuAbility: '⚡ Ability',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Quote',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Audio',
        menuGuessTeam: '🏆 Adivina el Equipo',
        menuGuessName: '👤 Adivina el Nombre',
        menuGuessIcon: '🎯 Adivina el Icono',
        menuHardMode: '🔥 Trivia Extrema',
        menuEsportsTrivia: '🏆 Esports Trivia',
        menuDailyRun: '🎮 Desafío Diario',
        menuRanking: '🏅 Ranking',

        // Daily Challenge
        dailyChallenge: 'DESAFÍO DIARIO',
        dailyRunTitle: '🎮 DESAFÍO DIARIO',
        dailyRunSubtitle: '¡Completa todos los retos y sube en la tabla de posiciones!',
        rankingTitle: '🏅 RANKING',
        rankingSubtitle: 'Mejores jugadores del día',
        todayScore: 'Puntuación de hoy:',
        enterUsername: 'Ingresa tu nombre de usuario',
        submitScore: 'Enviar Puntuación',
        playDailyRun: 'COMENZAR DESAFÍO',
        alreadyPlayed: '¡Ya jugaste hoy! Vuelve mañana.',
        comeBackTomorrow: '¡Vuelve mañana para un nuevo desafío!',
        challengeComplete: '¡Desafío Completado!',
        finalScore: 'Puntuación Final:',
        rank: 'Puesto',
        username: 'Usuario',
        points: 'Puntos',
        noScoresToday: 'Aún no hay puntuaciones hoy. ¡Sé el primero!',
        challenge: 'Desafío',

        // Game cards
        proPlayers: 'ProPlayers',
        proPlayersDesc: 'Elige tus pro players favoritos',
        champions: 'Campeones',
        championsDesc: 'Smash or pass de campeones de LoL',
        classic: 'Classic',
        classicDesc: 'Adivina con pistas de atributos',
        ability: 'Ability',
        abilityDesc: 'Adivina por el icono de habilidad',
        splashArt: 'Splash Art',
        splashArtDesc: 'Adivina el campeón con zoom',
        quote: 'Quote',
        quoteDesc: 'Adivina por frases icónicas',
        audio: 'Audio',
        audioDesc: 'Adivina por la voz del campeón',
        emoji: 'Emoji',
        emojiDesc: 'Adivina por los emojis',
        emojiGameTitle: '😊 Adivina el Campeón por Emoji',
        emojiGameSubtitle: '¡Descifra los emojis!',
        guessTeam: 'Adivina el Equipo',
        guessTeamDesc: '¿En qué equipo jugó?',
        guessName: 'Adivina el Nombre',
        guessNameDesc: '¿Quién es este jugador?',
        guessIcon: 'Adivina el Icono',
        guessIconDesc: '¿De qué equipo es este logo?',
        hardModeGame: 'Hard Mode',
        hardModeDesc: 'Stats y curiosidades difíciles',
        esportsTrivia: 'Esports Trivia',
        esportsTriviaDesc: 'Preguntas de torneos pro',

        // Buttons
        startGame: 'EMPEZAR JUEGO',
        playAgain: 'Jugar de Nuevo',
        nextQuestion: 'Siguiente Pregunta',
        restart: 'Reiniciar',
        guess: 'Adivinar',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Selecciona tu Región',
        allRegions: '🌍 Todas las Regiones',
        lck: 'LCK (Corea)',
        lpl: 'LPL (China)',
        lec: 'LEC (Europa)',
        lcs: 'LCS (NA)',
        cblol: 'CBLOL (Brasil)',
        ljl: 'LJL (Japón)',
        lco: 'LCO (Oceanía)',
        lcl: 'LCL (CIS)',

        // Gender selector
        selectGender: 'Selecciona el Género',
        allChampions: '⚔️ Todos los Campeones',
        male: '👨 Masculino',
        female: '👩 Femenino',

        // Results
        yourResults: 'Tus Resultados',
        yourSmash: 'Tus SMASH ❤️',
        score: 'Puntuación:',
        attempts: 'Intentos:',
        correct: '¡Correcto!',
        incorrect: 'Incorrecto',
        gameOver: '¡Game Over!',

        // Stats
        totalVotes: 'Total de votos:',
        globalStats: 'Estadísticas Globales',

        // Quiz questions
        whichTeamQuestion: '¿En qué equipo jugó este jugador?',
        whoIsPlayerQuestion: '¿Quién es este jugador?',
        whichTeamLogoQuestion: '¿De qué equipo es este logo?',

        // Game titles
        abilityGameTitle: '⚡ Adivina el Campeón por su Habilidad',
        abilityGameSubtitle: '¿Qué campeón tiene esta habilidad?',
        splashGameTitle: '🖼️ Adivina el Campeón por su Splash Art',
        splashGameSubtitle: 'El zoom se agranda con cada intento fallido',
        quoteGameTitle: '💬 Adivina el Campeón por su Frase',
        quoteGameSubtitle: '¿Qué campeón dice esta frase?',
        classicGameTitle: '🎯 Classic',
        classicGameSubtitle: 'Adivina con pistas de atributos',
        audioGameTitle: '🔊 Adivina el Campeón por su Voz',
        audioGameSubtitle: 'Escucha la voz del campeón',
        playAudio: 'Reproducir Audio',
        replay: 'Repetir',

        // Input placeholders
        typeChampionName: 'Escribe el nombre del campeón...',

        // Classic mode attributes
        gender: 'Género',
        position: 'Posición',
        species: 'Especie',
        resource: 'Recurso',
        range: 'Rango',
        region: 'Región',

        // Hard Mode & Esports
        hardModeTitle: 'HARD MODE - Trivia Extrema',
        hardModeSubtitle: 'Preguntas difíciles sobre estadísticas y curiosidades de LoL',
        esportsTriviaTitle: 'ESPORTS TRIVIA',
        esportsTriviaSubtitle: 'Preguntas sobre torneos profesionales, equipos y jugadores',

        // Counter
        player: 'Jugador',
        champion: 'Campeón',
        of: 'de'
    },

    pt: {
        // Header
        gameTitle: 'LEAGUE OF LEGENDS GAMES',
        subtitle: 'Escolha seu modo de jogo',
        gameModes: 'Modos de Jogo',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'JOGOS DE ADIVINHAÇÃO',
        quizGames: 'JOGOS DE QUIZ',
        trivia: 'TRIVIA',
        esports: 'ESPORTS',
        hardMode: 'MODO DIFÍCIL',

        // Menu items
        menuProPlayers: '👨 ProPlayers',
        menuChampions: '⚔️ Campeões',
        menuClassic: '🎯 Clássico',
        menuAbility: '⚡ Habilidade',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Frase',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Áudio',
        menuGuessTeam: '🏆 Adiv. o Time',
        menuGuessName: '👤 Adiv. o Nome',
        menuGuessIcon: '🎯 Adiv. o Ícone',
        menuHardMode: '🔥 Trivia Extrema',
        menuEsportsTrivia: '🏆 Trivia Esports',
        menuDailyRun: '🎮 Desafio Diário',
        menuRanking: '🏅 Ranking',

        // Daily Challenge
        dailyChallenge: 'DESAFIO DIÁRIO',
        dailyRunTitle: '🎮 DESAFIO DIÁRIO',
        dailyRunSubtitle: 'Complete todos os desafios e suba no ranking!',
        rankingTitle: '🏅 RANKING',
        rankingSubtitle: 'Melhores jogadores do dia',
        todayScore: 'Pontuação de hoje:',
        enterUsername: 'Digite seu nome de usuário',
        submitScore: 'Enviar Pontuação',
        playDailyRun: 'INICIAR DESAFIO',
        alreadyPlayed: 'Você já jogou hoje! Volte amanhã.',
        comeBackTomorrow: 'Volte amanhã para um novo desafio!',
        challengeComplete: 'Desafio Completo!',
        finalScore: 'Pontuação Final:',
        rank: 'Rank',
        username: 'Usuário',
        points: 'Pontos',
        noScoresToday: 'Ainda não há pontuações hoje. Seja o primeiro!',
        challenge: 'Desafio',

        // Game cards
        proPlayers: 'ProPlayers',
        proPlayersDesc: 'Escolha seus pro players favoritos',
        champions: 'Campeões',
        championsDesc: 'Smash or pass de campeões do LoL',
        classic: 'Clássico',
        classicDesc: 'Adivinhe com dicas de atributos',
        ability: 'Habilidade',
        abilityDesc: 'Adivinhe pelo ícone da habilidade',
        splashArt: 'Splash Art',
        splashArtDesc: 'Adivinhe o campeão com zoom',
        quote: 'Frase',
        quoteDesc: 'Adivinhe pelas frases icônicas',
        audio: 'Áudio',
        audioDesc: 'Adivinhe pela voz do campeão',
        emoji: 'Emoji',
        emojiDesc: 'Adivinhe pelos emojis',
        emojiGameTitle: '😊 Adivinhe o Campeão pelo Emoji',
        emojiGameSubtitle: 'Decifre os emojis!',
        guessTeam: 'Adivinhe o Time',
        guessTeamDesc: 'Em qual time ele jogou?',
        guessName: 'Adivinhe o Nome',
        guessNameDesc: 'Quem é este jogador?',
        guessIcon: 'Adivinhe o Ícone',
        guessIconDesc: 'De qual time é este logo?',
        hardModeGame: 'Modo Difícil',
        hardModeDesc: 'Estatísticas e curiosidades difíceis',
        esportsTrivia: 'Trivia Esports',
        esportsTriviaDesc: 'Perguntas sobre torneios profissionais',

        // Buttons
        startGame: 'INICIAR JOGO',
        playAgain: 'Jogar Novamente',
        nextQuestion: 'Próxima Pergunta',
        restart: 'Reiniciar',
        guess: 'Adivinhar',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Selecione sua Região',
        allRegions: '🌍 Todas as Regiões',
        lck: 'LCK (Coreia)',
        lpl: 'LPL (China)',
        lec: 'LEC (Europa)',
        lcs: 'LCS (NA)',
        cblol: 'CBLOL (Brasil)',
        ljl: 'LJL (Japão)',
        lco: 'LCO (Oceania)',
        lcl: 'LCL (CIS)',

        // Gender selector
        selectGender: 'Selecione o Gênero',
        allChampions: '⚔️ Todos os Campeões',
        male: '👨 Masculino',
        female: '👩 Feminino',

        // Results
        yourResults: 'Seus Resultados',
        yourSmash: 'Seus SMASH ❤️',
        score: 'Pontuação:',
        attempts: 'Tentativas:',
        correct: 'Correto!',
        incorrect: 'Incorreto',
        gameOver: 'Game Over!',

        // Stats
        totalVotes: 'Total de votos:',
        globalStats: 'Estatísticas Globais',

        // Quiz questions
        whichTeamQuestion: 'Em qual time este jogador jogou?',
        whoIsPlayerQuestion: 'Quem é este jogador?',
        whichTeamLogoQuestion: 'De qual time é este logo?',

        // Game titles
        abilityGameTitle: '⚡ Adivinhe o Campeão pela Habilidade',
        abilityGameSubtitle: 'Qual campeão tem esta habilidade?',
        splashGameTitle: '🖼️ Adivinhe o Campeão pelo Splash Art',
        splashGameSubtitle: 'O zoom aumenta a cada tentativa falhada',
        quoteGameTitle: '💬 Adivinhe o Campeão pela Frase',
        quoteGameSubtitle: 'Qual campeão diz esta frase?',
        classicGameTitle: '🎯 Clássico',
        classicGameSubtitle: 'Adivinhe com dicas de atributos',
        audioGameTitle: '🔊 Adivinhe o Campeão pela Voz',
        audioGameSubtitle: 'Ouça a voz do campeão',
        playAudio: 'Tocar Áudio',
        replay: 'Repetir',

        // Input placeholders
        typeChampionName: 'Digite o nome do campeão...',

        // Classic mode attributes
        gender: 'Gênero',
        position: 'Posição',
        species: 'Espécie',
        resource: 'Recurso',
        range: 'Alcance',
        region: 'Região',

        // Hard Mode & Esports
        hardModeTitle: '🔥 MODO DIFÍCIL - Trivia Extrema',
        hardModeSubtitle: 'Perguntas difíceis sobre estatísticas e curiosidades de LoL',
        esportsTriviaTitle: '🏆 TRIVIA ESPORTS',
        esportsTriviaSubtitle: 'Perguntas sobre torneios, times e jogadores',

        // Counter
        player: 'Jogador',
        champion: 'Campeão',
        of: 'de'
    },

    fr: {
        // Header
        gameTitle: 'LEAGUE OF LEGENDS GAMES',
        subtitle: 'Choisissez votre mode de jeu',
        gameModes: 'Modes de Jeu',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'JEUX DE DEVINETTES',
        quizGames: 'JEUX DE QUIZ',
        trivia: 'TRIVIA',
        esports: 'ESPORTS',
        hardMode: 'MODE DIFFICILE',

        // Menu items
        menuProPlayers: '👨 ProPlayers',
        menuChampions: '⚔️ Champions',
        menuClassic: '🎯 Classique',
        menuAbility: '⚡ Capacité',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Citation',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Audio',
        menuGuessTeam: '🏆 Devinez l\'équipe',
        menuGuessName: '👤 Devinez le nom',
        menuGuessIcon: '🎯 Devinez l\'icône',
        menuHardMode: '🔥 Trivia Extrême',
        menuEsportsTrivia: '🏆 Trivia Esports',
        menuDailyRun: '🎮 Défi Quotidien',
        menuRanking: '🏅 Classement',

        // Daily Challenge
        dailyChallenge: 'DÉFI QUOTIDIEN',
        dailyRunTitle: '🎮 DÉFI QUOTIDIEN',
        dailyRunSubtitle: 'Complétez tous les défis et montez dans le classement!',
        rankingTitle: '🏅 CLASSEMENT',
        rankingSubtitle: 'Meilleurs joueurs du jour',
        todayScore: 'Score d\'aujourd\'hui:',
        enterUsername: 'Entrez votre pseudo',
        submitScore: 'Envoyer le Score',
        playDailyRun: 'COMMENCER LE DÉFI',
        alreadyPlayed: 'Vous avez déjà joué aujourd\'hui! Revenez demain.',
        comeBackTomorrow: 'Revenez demain pour un nouveau défi!',
        challengeComplete: 'Défi Terminé!',
        finalScore: 'Score Final:',
        rank: 'Rang',
        username: 'Pseudo',
        points: 'Points',
        noScoresToday: 'Aucun score aujourd\'hui. Soyez le premier!',
        challenge: 'Défi',

        // Game cards
        proPlayers: 'ProPlayers',
        proPlayersDesc: 'Choisissez vos pro players préférés',
        champions: 'Champions',
        championsDesc: 'Smash or pass des champions de LoL',
        classic: 'Classique',
        classicDesc: 'Devinez avec des indices d\'attributs',
        ability: 'Capacité',
        abilityDesc: 'Devinez par l\'icône de capacité',
        splashArt: 'Splash Art',
        splashArtDesc: 'Devinez le champion avec le zoom',
        quote: 'Citation',
        quoteDesc: 'Devinez par les citations iconiques',
        audio: 'Audio',
        audioDesc: 'Devinez par la voix du champion',
        emoji: 'Emoji',
        emojiDesc: 'Devinez par les emojis',
        emojiGameTitle: '😊 Devinez le Champion par Emoji',
        emojiGameSubtitle: 'Déchiffrez les emojis!',
        guessTeam: 'Devinez l\'équipe',
        guessTeamDesc: 'Dans quelle équipe a-t-il joué?',
        guessName: 'Devinez le nom',
        guessNameDesc: 'Qui est ce joueur?',
        guessIcon: 'Devinez l\'icône',
        guessIconDesc: 'De quelle équipe est ce logo?',
        hardModeGame: 'Mode Difficile',
        hardModeDesc: 'Statistiques et curiosités difficiles',
        esportsTrivia: 'Trivia Esports',
        esportsTriviaDesc: 'Questions sur les tournois professionnels',

        // Buttons
        startGame: 'COMMENCER',
        playAgain: 'Rejouer',
        nextQuestion: 'Question Suivante',
        restart: 'Redémarrer',
        guess: 'Deviner',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Sélectionnez votre région',
        allRegions: '🌍 Toutes les régions',
        lck: 'LCK (Corée)',
        lpl: 'LPL (Chine)',
        lec: 'LEC (Europe)',
        lcs: 'LCS (NA)',
        cblol: 'CBLOL (Brésil)',
        ljl: 'LJL (Japon)',
        lco: 'LCO (Océanie)',
        lcl: 'LCL (CIS)',

        // Gender selector
        selectGender: 'Sélectionnez le genre',
        allChampions: '⚔️ Tous les champions',
        male: '👨 Masculin',
        female: '👩 Féminin',

        // Results
        yourResults: 'Vos résultats',
        yourSmash: 'Vos SMASH ❤️',
        score: 'Score:',
        attempts: 'Tentatives:',
        correct: 'Correct!',
        incorrect: 'Incorrect',
        gameOver: 'Game Over!',

        // Stats
        totalVotes: 'Total de votes:',
        globalStats: 'Statistiques globales',

        // Quiz questions
        whichTeamQuestion: 'Dans quelle équipe ce joueur a-t-il joué?',
        whoIsPlayerQuestion: 'Qui est ce joueur?',
        whichTeamLogoQuestion: 'De quelle équipe est ce logo?',

        // Game titles
        abilityGameTitle: '⚡ Devinez le Champion par sa Capacité',
        abilityGameSubtitle: 'Quel champion a cette capacité?',
        splashGameTitle: '🖼️ Devinez le Champion par son Splash Art',
        splashGameSubtitle: 'Le zoom augmente à chaque tentative échouée',
        quoteGameTitle: '💬 Devinez le Champion par sa Citation',
        quoteGameSubtitle: 'Quel champion dit cette phrase?',
        classicGameTitle: '🎯 Classique',
        classicGameSubtitle: 'Devinez avec des indices d\'attributs',
        audioGameTitle: '🔊 Devinez le Champion par sa Voix',
        audioGameSubtitle: 'Écoutez la voix du champion',
        playAudio: 'Jouer Audio',
        replay: 'Rejouer',

        // Input placeholders
        typeChampionName: 'Tapez le nom du champion...',

        // Classic mode attributes
        gender: 'Genre',
        position: 'Position',
        species: 'Espèce',
        resource: 'Ressource',
        range: 'Portée',
        region: 'Région',

        // Hard Mode & Esports
        hardModeTitle: '🔥 MODE DIFFICILE - Trivia Extrême',
        hardModeSubtitle: 'Questions difficiles sur les statistiques et curiosités de LoL',
        esportsTriviaTitle: '🏆 TRIVIA ESPORTS',
        esportsTriviaSubtitle: 'Questions sur les tournois, équipes et joueurs',

        // Counter
        player: 'Joueur',
        champion: 'Champion',
        of: 'de'
    },

    de: {
        // Header
        gameTitle: 'LEAGUE OF LEGENDS SPIELE',
        subtitle: 'Wähle deinen Spielmodus',
        gameModes: 'Spielmodi',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'RATESPIELE',
        quizGames: 'QUIZ-SPIELE',
        trivia: 'TRIVIA',
        esports: 'ESPORTS',
        hardMode: 'SCHWERER MODUS',

        // Menu items
        menuProPlayers: '👨 ProPlayers',
        menuChampions: '⚔️ Champions',
        menuClassic: '🎯 Klassisch',
        menuAbility: '⚡ Fähigkeit',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Zitat',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Audio',
        menuGuessTeam: '🏆 Rate das Team',
        menuGuessName: '👤 Rate den Namen',
        menuGuessIcon: '🎯 Rate das Symbol',
        menuHardMode: '🔥 Extremes Trivia',
        menuEsportsTrivia: '🏆 Esports Trivia',
        menuDailyRun: '🎮 Tägliche Challenge',
        menuRanking: '🏅 Rangliste',

        // Daily Challenge
        dailyChallenge: 'TÄGLICHE CHALLENGE',
        dailyRunTitle: '🎮 TÄGLICHE CHALLENGE',
        dailyRunSubtitle: 'Schließe alle Herausforderungen ab und klettere die Rangliste hoch!',
        rankingTitle: '🏅 RANGLISTE',
        rankingSubtitle: 'Beste Spieler des Tages',
        todayScore: 'Heutige Punktzahl:',
        enterUsername: 'Gib deinen Benutzernamen ein',
        submitScore: 'Punktzahl Einreichen',
        playDailyRun: 'CHALLENGE STARTEN',
        alreadyPlayed: 'Du hast heute schon gespielt! Komm morgen wieder.',
        comeBackTomorrow: 'Komm morgen für eine neue Herausforderung wieder!',
        challengeComplete: 'Challenge Abgeschlossen!',
        finalScore: 'Endpunktzahl:',
        rank: 'Rang',
        username: 'Benutzername',
        points: 'Punkte',
        noScoresToday: 'Noch keine Punktzahlen heute. Sei der Erste!',
        challenge: 'Challenge',

        // Game cards
        proPlayers: 'ProPlayers',
        proPlayersDesc: 'Wähle deine Lieblings-ProPlayer',
        champions: 'Champions',
        championsDesc: 'Smash or pass von LoL Champions',
        classic: 'Klassisch',
        classicDesc: 'Rate mit Attribut-Hinweisen',
        ability: 'Fähigkeit',
        abilityDesc: 'Rate anhand des Fähigkeitssymbols',
        splashArt: 'Splash Art',
        splashArtDesc: 'Rate den Champion mit Zoom',
        quote: 'Zitat',
        quoteDesc: 'Rate anhand ikonischer Zitate',
        audio: 'Audio',
        audioDesc: 'Rate anhand der Champion-Stimme',
        emoji: 'Emoji',
        emojiDesc: 'Rate anhand von Emojis',
        emojiGameTitle: '😊 Errate den Champion anhand von Emoji',
        emojiGameSubtitle: 'Entschlüssle die Emojis!',
        guessTeam: 'Rate das Team',
        guessTeamDesc: 'In welchem Team hat er gespielt?',
        guessName: 'Rate den Namen',
        guessNameDesc: 'Wer ist dieser Spieler?',
        guessIcon: 'Rate das Symbol',
        guessIconDesc: 'Von welchem Team ist dieses Logo?',
        hardModeGame: 'Schwerer Modus',
        hardModeDesc: 'Schwierige Statistiken und Wissenswertes',
        esportsTrivia: 'Esports Trivia',
        esportsTriviaDesc: 'Fragen zu professionellen Turnieren',

        // Buttons
        startGame: 'SPIEL STARTEN',
        playAgain: 'Nochmal Spielen',
        nextQuestion: 'Nächste Frage',
        restart: 'Neustart',
        guess: 'Raten',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Wähle deine Region',
        allRegions: '🌍 Alle Regionen',
        lck: 'LCK (Korea)',
        lpl: 'LPL (China)',
        lec: 'LEC (Europa)',
        lcs: 'LCS (NA)',
        cblol: 'CBLOL (Brasilien)',
        ljl: 'LJL (Japan)',
        lco: 'LCO (Ozeanien)',
        lcl: 'LCL (CIS)',

        // Gender selector
        selectGender: 'Wähle das Geschlecht',
        allChampions: '⚔️ Alle Champions',
        male: '👨 Männlich',
        female: '👩 Weiblich',

        // Results
        yourResults: 'Deine Ergebnisse',
        yourSmash: 'Deine SMASH ❤️',
        score: 'Punktzahl:',
        attempts: 'Versuche:',
        correct: 'Richtig!',
        incorrect: 'Falsch',
        gameOver: 'Game Over!',

        // Stats
        totalVotes: 'Gesamtstimmen:',
        globalStats: 'Globale Statistiken',

        // Quiz questions
        whichTeamQuestion: 'In welchem Team hat dieser Spieler gespielt?',
        whoIsPlayerQuestion: 'Wer ist dieser Spieler?',
        whichTeamLogoQuestion: 'Von welchem Team ist dieses Logo?',

        // Game titles
        abilityGameTitle: '⚡ Errate den Champion anhand der Fähigkeit',
        abilityGameSubtitle: 'Welcher Champion hat diese Fähigkeit?',
        splashGameTitle: '🖼️ Errate den Champion anhand des Splash Arts',
        splashGameSubtitle: 'Der Zoom vergrößert sich bei jedem fehlgeschlagenen Versuch',
        quoteGameTitle: '💬 Errate den Champion anhand des Zitats',
        quoteGameSubtitle: 'Welcher Champion sagt diese Zeile?',
        classicGameTitle: '🎯 Klassisch',
        classicGameSubtitle: 'Rate mit Attribut-Hinweisen',
        audioGameTitle: '🔊 Errate den Champion anhand der Stimme',
        audioGameSubtitle: 'Höre die Champion-Stimme',
        playAudio: 'Audio Abspielen',
        replay: 'Wiederholen',

        // Input placeholders
        typeChampionName: 'Champion-Namen eingeben...',

        // Classic mode attributes
        gender: 'Geschlecht',
        position: 'Position',
        species: 'Spezies',
        resource: 'Ressource',
        range: 'Reichweite',
        region: 'Region',

        // Hard Mode & Esports
        hardModeTitle: '🔥 SCHWERER MODUS - Extremes Trivia',
        hardModeSubtitle: 'Schwierige Fragen zu Statistiken und LoL-Wissenswertem',
        esportsTriviaTitle: '🏆 ESPORTS TRIVIA',
        esportsTriviaSubtitle: 'Fragen zu Turnieren, Teams und Spielern',

        // Counter
        player: 'Spieler',
        champion: 'Champion',
        of: 'von'
    },

    it: {
        // Header
        gameTitle: 'LEAGUE OF LEGENDS GAMES',
        subtitle: 'Scegli la tua modalità di gioco',
        gameModes: 'Modalità di Gioco',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'GIOCHI DI INDOVINELLI',
        quizGames: 'GIOCHI DI QUIZ',
        trivia: 'TRIVIA',
        esports: 'ESPORTS',
        hardMode: 'MODALITÀ DIFFICILE',

        // Menu items
        menuProPlayers: '👨 ProPlayers',
        menuChampions: '⚔️ Campioni',
        menuClassic: '🎯 Classico',
        menuAbility: '⚡ Abilità',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Citazione',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Audio',
        menuGuessTeam: '🏆 Indovina la Squadra',
        menuGuessName: '👤 Indovina il Nome',
        menuGuessIcon: '🎯 Indovina l\'Icona',
        menuHardMode: '🔥 Trivia Estremo',
        menuEsportsTrivia: '🏆 Trivia Esports',
        menuDailyRun: '🎮 Sfida Giornaliera',
        menuRanking: '🏅 Classifica',

        // Daily Challenge
        dailyChallenge: 'SFIDA GIORNALIERA',
        dailyRunTitle: '🎮 SFIDA GIORNALIERA',
        dailyRunSubtitle: 'Completa tutte le sfide e scala la classifica!',
        rankingTitle: '🏅 CLASSIFICA',
        rankingSubtitle: 'Migliori giocatori del giorno',
        todayScore: 'Punteggio di oggi:',
        enterUsername: 'Inserisci il tuo nome utente',
        submitScore: 'Invia Punteggio',
        playDailyRun: 'INIZIA SFIDA',
        alreadyPlayed: 'Hai già giocato oggi! Torna domani.',
        comeBackTomorrow: 'Torna domani per una nuova sfida!',
        challengeComplete: 'Sfida Completata!',
        finalScore: 'Punteggio Finale:',
        rank: 'Posizione',
        username: 'Utente',
        points: 'Punti',
        noScoresToday: 'Ancora nessun punteggio oggi. Sii il primo!',
        challenge: 'Sfida',

        // Game cards
        proPlayers: 'ProPlayers',
        proPlayersDesc: 'Scegli i tuoi pro player preferiti',
        champions: 'Campioni',
        championsDesc: 'Smash or pass dei campioni di LoL',
        classic: 'Classico',
        classicDesc: 'Indovina con indizi sugli attributi',
        ability: 'Abilità',
        abilityDesc: 'Indovina dall\'icona dell\'abilità',
        splashArt: 'Splash Art',
        splashArtDesc: 'Indovina il campione con lo zoom',
        quote: 'Citazione',
        quoteDesc: 'Indovina dalle citazioni iconiche',
        audio: 'Audio',
        audioDesc: 'Indovina dalla voce del campione',
        emoji: 'Emoji',
        emojiDesc: 'Indovina dagli emoji',
        emojiGameTitle: '😊 Indovina il Campione dall\'Emoji',
        emojiGameSubtitle: 'Decifra gli emoji!',
        guessTeam: 'Indovina la Squadra',
        guessTeamDesc: 'In quale squadra ha giocato?',
        guessName: 'Indovina il Nome',
        guessNameDesc: 'Chi è questo giocatore?',
        guessIcon: 'Indovina l\'Icona',
        guessIconDesc: 'Di quale squadra è questo logo?',
        hardModeGame: 'Modalità Difficile',
        hardModeDesc: 'Statistiche e curiosità difficili',
        esportsTrivia: 'Trivia Esports',
        esportsTriviaDesc: 'Domande sui tornei professionali',

        // Buttons
        startGame: 'INIZIA GIOCO',
        playAgain: 'Gioca Ancora',
        nextQuestion: 'Prossima Domanda',
        restart: 'Ricomincia',
        guess: 'Indovina',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Seleziona la tua regione',
        allRegions: '🌍 Tutte le regioni',
        lck: 'LCK (Corea)',
        lpl: 'LPL (Cina)',
        lec: 'LEC (Europa)',
        lcs: 'LCS (NA)',
        cblol: 'CBLOL (Brasile)',
        ljl: 'LJL (Giappone)',
        lco: 'LCO (Oceania)',
        lcl: 'LCL (CIS)',

        // Gender selector
        selectGender: 'Seleziona il genere',
        allChampions: '⚔️ Tutti i campioni',
        male: '👨 Maschile',
        female: '👩 Femminile',

        // Results
        yourResults: 'I tuoi risultati',
        yourSmash: 'I tuoi SMASH ❤️',
        score: 'Punteggio:',
        attempts: 'Tentativi:',
        correct: 'Corretto!',
        incorrect: 'Errato',
        gameOver: 'Game Over!',

        // Stats
        totalVotes: 'Voti totali:',
        globalStats: 'Statistiche globali',

        // Quiz questions
        whichTeamQuestion: 'In quale squadra ha giocato questo giocatore?',
        whoIsPlayerQuestion: 'Chi è questo giocatore?',
        whichTeamLogoQuestion: 'Di quale squadra è questo logo?',

        // Game titles
        abilityGameTitle: '⚡ Indovina il Campione dall\'Abilità',
        abilityGameSubtitle: 'Quale campione ha questa abilità?',
        splashGameTitle: '🖼️ Indovina il Campione dallo Splash Art',
        splashGameSubtitle: 'Lo zoom aumenta ad ogni tentativo fallito',
        quoteGameTitle: '💬 Indovina il Campione dalla Citazione',
        quoteGameSubtitle: 'Quale campione dice questa frase?',
        classicGameTitle: '🎯 Classico',
        classicGameSubtitle: 'Indovina con indizi sugli attributi',
        audioGameTitle: '🔊 Indovina il Campione dalla Voce',
        audioGameSubtitle: 'Ascolta la voce del campione',
        playAudio: 'Riproduci Audio',
        replay: 'Riproduci',

        // Input placeholders
        typeChampionName: 'Digita il nome del campione...',

        // Classic mode attributes
        gender: 'Genere',
        position: 'Posizione',
        species: 'Specie',
        resource: 'Risorsa',
        range: 'Portata',
        region: 'Regione',

        // Hard Mode & Esports
        hardModeTitle: '🔥 MODALITÀ DIFFICILE - Trivia Estremo',
        hardModeSubtitle: 'Domande difficili su statistiche e curiosità di LoL',
        esportsTriviaTitle: '🏆 TRIVIA ESPORTS',
        esportsTriviaSubtitle: 'Domande su tornei, squadre e giocatori',

        // Counter
        player: 'Giocatore',
        champion: 'Campione',
        of: 'di'
    },

    pl: {
        // Header
        gameTitle: 'LEAGUE OF LEGENDS GAMES',
        subtitle: 'Wybierz tryb gry',
        gameModes: 'Tryby Gry',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'GRY ZGADYWANKI',
        quizGames: 'GRY QUIZOWE',
        trivia: 'TRIVIA',
        esports: 'ESPORTS',
        hardMode: 'TRYB TRUDNY',

        // Menu items
        menuProPlayers: '👨 ProPlayers',
        menuChampions: '⚔️ Bohaterowie',
        menuClassic: '🎯 Klasyczny',
        menuAbility: '⚡ Umiejętność',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Cytat',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Audio',
        menuGuessTeam: '🏆 Zgadnij Drużynę',
        menuGuessName: '👤 Zgadnij Imię',
        menuGuessIcon: '🎯 Zgadnij Ikonę',
        menuHardMode: '🔥 Ekstremalna Trivia',
        menuEsportsTrivia: '🏆 Esports Trivia',
        menuDailyRun: '🎮 Codzienny Wyzwanie',
        menuRanking: '🏅 Ranking',

        // Daily Challenge
        dailyChallenge: 'CODZIENNY WYZWANIE',
        dailyRunTitle: '🎮 CODZIENNY WYZWANIE',
        dailyRunSubtitle: 'Ukończ wszystkie wyzwania i wspinaj się w rankingu!',
        rankingTitle: '🏅 RANKING',
        rankingSubtitle: 'Najlepsi gracze dnia',
        todayScore: 'Dzisiejszy wynik:',
        enterUsername: 'Wpisz swoją nazwę użytkownika',
        submitScore: 'Wyślij Wynik',
        playDailyRun: 'ROZPOCZNIJ WYZWANIE',
        alreadyPlayed: 'Już grałeś dzisiaj! Wróć jutro.',
        comeBackTomorrow: 'Wróć jutro po nowe wyzwanie!',
        challengeComplete: 'Wyzwanie Ukończone!',
        finalScore: 'Końcowy Wynik:',
        rank: 'Ranga',
        username: 'Użytkownik',
        points: 'Punkty',
        noScoresToday: 'Brak wyników dzisiaj. Bądź pierwszy!',
        challenge: 'Wyzwanie',

        // Game cards
        proPlayers: 'ProPlayers',
        proPlayersDesc: 'Wybierz swoich ulubionych pro playerów',
        champions: 'Bohaterowie',
        championsDesc: 'Smash or pass bohaterów LoL',
        classic: 'Klasyczny',
        classicDesc: 'Zgadnij z podpowiedziami atrybutów',
        ability: 'Umiejętność',
        abilityDesc: 'Zgadnij po ikonie umiejętności',
        splashArt: 'Splash Art',
        splashArtDesc: 'Zgadnij bohatera z zoomem',
        quote: 'Cytat',
        quoteDesc: 'Zgadnij po kultowych cytatach',
        audio: 'Audio',
        audioDesc: 'Zgadnij po głosie bohatera',
        emoji: 'Emoji',
        emojiDesc: 'Zgadnij po emoji',
        emojiGameTitle: '😊 Zgadnij Bohatera po Emoji',
        emojiGameSubtitle: 'Rozszyfruj emoji!',
        guessTeam: 'Zgadnij Drużynę',
        guessTeamDesc: 'W jakiej drużynie grał?',
        guessName: 'Zgadnij Imię',
        guessNameDesc: 'Kim jest ten gracz?',
        guessIcon: 'Zgadnij Ikonę',
        guessIconDesc: 'Z jakiej drużyny jest to logo?',
        hardModeGame: 'Tryb Trudny',
        hardModeDesc: 'Trudne statystyki i ciekawostki',
        esportsTrivia: 'Esports Trivia',
        esportsTriviaDesc: 'Pytania o profesjonalne turnieje',

        // Buttons
        startGame: 'ROZPOCZNIJ GRĘ',
        playAgain: 'Zagraj Ponownie',
        nextQuestion: 'Następne Pytanie',
        restart: 'Restart',
        guess: 'Zgadnij',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Wybierz swój region',
        allRegions: '🌍 Wszystkie regiony',
        lck: 'LCK (Korea)',
        lpl: 'LPL (Chiny)',
        lec: 'LEC (Europa)',
        lcs: 'LCS (NA)',
        cblol: 'CBLOL (Brazylia)',
        ljl: 'LJL (Japonia)',
        lco: 'LCO (Oceania)',
        lcl: 'LCL (CIS)',

        // Gender selector
        selectGender: 'Wybierz płeć',
        allChampions: '⚔️ Wszyscy bohaterowie',
        male: '👨 Męski',
        female: '👩 Żeński',

        // Results
        yourResults: 'Twoje wyniki',
        yourSmash: 'Twoje SMASH ❤️',
        score: 'Wynik:',
        attempts: 'Próby:',
        correct: 'Poprawnie!',
        incorrect: 'Niepoprawnie',
        gameOver: 'Game Over!',

        // Stats
        totalVotes: 'Łącznie głosów:',
        globalStats: 'Globalne statystyki',

        // Quiz questions
        whichTeamQuestion: 'W jakiej drużynie grał ten gracz?',
        whoIsPlayerQuestion: 'Kim jest ten gracz?',
        whichTeamLogoQuestion: 'Z jakiej drużyny jest to logo?',

        // Game titles
        abilityGameTitle: '⚡ Zgadnij Bohatera po Umiejętności',
        abilityGameSubtitle: 'Który bohater ma tę umiejętność?',
        splashGameTitle: '🖼️ Zgadnij Bohatera po Splash Art',
        splashGameSubtitle: 'Zoom zwiększa się z każdą nieudaną próbą',
        quoteGameTitle: '💬 Zgadnij Bohatera po Cytatem',
        quoteGameSubtitle: 'Który bohater mówi tę kwestię?',
        classicGameTitle: '🎯 Klasyczny',
        classicGameSubtitle: 'Zgadnij z podpowiedziami atrybutów',
        audioGameTitle: '🔊 Zgadnij Bohatera po Głosie',
        audioGameSubtitle: 'Posłuchaj głosu bohatera',
        playAudio: 'Odtwórz Audio',
        replay: 'Powtórz',

        // Input placeholders
        typeChampionName: 'Wpisz imię bohatera...',

        // Classic mode attributes
        gender: 'Płeć',
        position: 'Pozycja',
        species: 'Gatunek',
        resource: 'Zasób',
        range: 'Zasięg',
        region: 'Region',

        // Hard Mode & Esports
        hardModeTitle: '🔥 TRYB TRUDNY - Ekstremalna Trivia',
        hardModeSubtitle: 'Trudne pytania o statystyki i ciekawostki LoL',
        esportsTriviaTitle: '🏆 ESPORTS TRIVIA',
        esportsTriviaSubtitle: 'Pytania o turnieje, drużyny i graczy',

        // Counter
        player: 'Gracz',
        champion: 'Bohater',
        of: 'z'
    },

    ru: {
        // Header
        gameTitle: 'LEAGUE OF LEGENDS ИГРЫ',
        subtitle: 'Выберите режим игры',
        gameModes: 'Режимы Игры',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'ИГРЫ НА УГАДЫВАНИЕ',
        quizGames: 'ВИКТОРИНЫ',
        trivia: 'ТРИVIA',
        esports: 'КИБЕРСПОРТ',
        hardMode: 'СЛОЖНЫЙ РЕЖИМ',

        // Menu items
        menuProPlayers: '👨 ПроИгроки',
        menuChampions: '⚔️ Чемпионы',
        menuClassic: '🎯 Классика',
        menuAbility: '⚡ Способность',
        menuSplashArt: '🖼️ Арт',
        menuQuote: '💬 Цитата',
        menuEmoji: '😊 Эмодзи',
        menuAudio: '🔊 Аудио',
        menuGuessTeam: '🏆 Угадай Команду',
        menuGuessName: '👤 Угадай Имя',
        menuGuessIcon: '🎯 Угадай Значок',
        menuHardMode: '🔥 Экстремальная Викторина',
        menuEsportsTrivia: '🏆 Киберспорт Викторина',
        menuDailyRun: '🎮 Ежедневный Вызов',
        menuRanking: '🏅 Рейтинг',

        // Daily Challenge
        dailyChallenge: 'ЕЖЕДНЕВНЫЙ ВЫЗОВ',
        dailyRunTitle: '🎮 ЕЖЕДНЕВНЫЙ ВЫЗОВ',
        dailyRunSubtitle: 'Выполните все вызовы и поднимитесь в рейтинге!',
        rankingTitle: '🏅 РЕЙТИНГ',
        rankingSubtitle: 'Лучшие игроки дня',
        todayScore: 'Сегодняшний счет:',
        enterUsername: 'Введите свое имя пользователя',
        submitScore: 'Отправить Счет',
        playDailyRun: 'НАЧАТЬ ВЫЗОВ',
        alreadyPlayed: 'Вы уже играли сегодня! Возвращайтесь завтра.',
        comeBackTomorrow: 'Возвращайтесь завтра за новым вызовом!',
        challengeComplete: 'Вызов Завершен!',
        finalScore: 'Финальный Счет:',
        rank: 'Ранг',
        username: 'Пользователь',
        points: 'Очки',
        noScoresToday: 'Пока нет счетов сегодня. Будьте первым!',
        challenge: 'Вызов',

        // Game cards
        proPlayers: 'ПроИгроки',
        proPlayersDesc: 'Выберите любимых про-игроков',
        champions: 'Чемпионы',
        championsDesc: 'Smash or pass чемпионов LoL',
        classic: 'Классика',
        classicDesc: 'Угадайте по подсказкам атрибутов',
        ability: 'Способность',
        abilityDesc: 'Угадайте по значку способности',
        splashArt: 'Арт',
        splashArtDesc: 'Угадайте чемпиона с зумом',
        quote: 'Цитата',
        quoteDesc: 'Угадайте по культовым цитатам',
        audio: 'Аудио',
        audioDesc: 'Угадайте по голосу чемпиона',
        emoji: 'Эмодзи',
        emojiDesc: 'Угадайте по эмодзи',
        emojiGameTitle: '😊 Угадайте Чемпиона по Эмодзи',
        emojiGameSubtitle: 'Расшифруйте эмодзи!',
        guessTeam: 'Угадай Команду',
        guessTeamDesc: 'В какой команде он играл?',
        guessName: 'Угадай Имя',
        guessNameDesc: 'Кто этот игрок?',
        guessIcon: 'Угадай Значок',
        guessIconDesc: 'Какой команде принадлежит этот логотип?',
        hardModeGame: 'Сложный Режим',
        hardModeDesc: 'Сложная статистика и мелочи',
        esportsTrivia: 'Киберспорт Викторина',
        esportsTriviaDesc: 'Вопросы о профессиональных турнирах',

        // Buttons
        startGame: 'НАЧАТЬ ИГРУ',
        playAgain: 'Играть Снова',
        nextQuestion: 'Следующий Вопрос',
        restart: 'Перезапуск',
        guess: 'Угадать',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Выберите свой регион',
        allRegions: '🌍 Все регионы',
        lck: 'LCK (Корея)',
        lpl: 'LPL (Китай)',
        lec: 'LEC (Европа)',
        lcs: 'LCS (NA)',
        cblol: 'CBLOL (Бразилия)',
        ljl: 'LJL (Япония)',
        lco: 'LCO (Океания)',
        lcl: 'LCL (СНГ)',

        // Gender selector
        selectGender: 'Выберите пол',
        allChampions: '⚔️ Все чемпионы',
        male: '👨 Мужской',
        female: '👩 Женский',

        // Results
        yourResults: 'Ваши результаты',
        yourSmash: 'Ваши SMASH ❤️',
        score: 'Счет:',
        attempts: 'Попытки:',
        correct: 'Правильно!',
        incorrect: 'Неправильно',
        gameOver: 'Игра Окончена!',

        // Stats
        totalVotes: 'Всего голосов:',
        globalStats: 'Глобальная статистика',

        // Quiz questions
        whichTeamQuestion: 'В какой команде играл этот игрок?',
        whoIsPlayerQuestion: 'Кто этот игрок?',
        whichTeamLogoQuestion: 'Какой команде принадлежит этот логотип?',

        // Game titles
        abilityGameTitle: '⚡ Угадайте Чемпиона по Способности',
        abilityGameSubtitle: 'У какого чемпиона эта способность?',
        splashGameTitle: '🖼️ Угадайте Чемпиона по Арту',
        splashGameSubtitle: 'Зум увеличивается с каждой неудачной попыткой',
        quoteGameTitle: '💬 Угадайте Чемпиона по Цитате',
        quoteGameSubtitle: 'Какой чемпион говорит эту фразу?',
        classicGameTitle: '🎯 Классика',
        classicGameSubtitle: 'Угадайте по подсказкам атрибутов',
        audioGameTitle: '🔊 Угадайте Чемпиона по Голосу',
        audioGameSubtitle: 'Послушайте голос чемпиона',
        playAudio: 'Воспроизвести Аудио',
        replay: 'Повторить',

        // Input placeholders
        typeChampionName: 'Введите имя чемпиона...',

        // Classic mode attributes
        gender: 'Пол',
        position: 'Позиция',
        species: 'Вид',
        resource: 'Ресурс',
        range: 'Дальность',
        region: 'Регион',

        // Hard Mode & Esports
        hardModeTitle: '🔥 СЛОЖНЫЙ РЕЖИМ - Экстремальная Викторина',
        hardModeSubtitle: 'Сложные вопросы о статистике и мелочах LoL',
        esportsTriviaTitle: '🏆 КИБЕРСПОРТ ВИКТОРИНА',
        esportsTriviaSubtitle: 'Вопросы о турнирах, командах и игроках',

        // Counter
        player: 'Игрок',
        champion: 'Чемпион',
        of: 'из'
    },

    tr: {
        // Header
        gameTitle: 'LEAGUE OF LEGENDS OYUNLARI',
        subtitle: 'Oyun modunuzu seçin',
        gameModes: 'Oyun Modları',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'TAHMİN OYUNLARI',
        quizGames: 'TEST OYUNLARI',
        trivia: 'TRIVIA',
        esports: 'ESPOR',
        hardMode: 'ZOR MOD',

        // Menu items
        menuProPlayers: '👨 ProPlayers',
        menuChampions: '⚔️ Şampiyonlar',
        menuClassic: '🎯 Klasik',
        menuAbility: '⚡ Yetenek',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Alıntı',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Ses',
        menuGuessTeam: '🏆 Takımı Tahmin Et',
        menuGuessName: '👤 İsmi Tahmin Et',
        menuGuessIcon: '🎯 İkonu Tahmin Et',
        menuHardMode: '🔥 Aşırı Trivia',
        menuEsportsTrivia: '🏆 Espor Trivia',
        menuDailyRun: '🎮 Günlük Meydan Okuma',
        menuRanking: '🏅 Sıralama',

        // Daily Challenge
        dailyChallenge: 'GÜNLÜK MEYDAN OKUMA',
        dailyRunTitle: '🎮 GÜNLÜK MEYDAN OKUMA',
        dailyRunSubtitle: 'Tüm zorlukları tamamla ve sıralamada yüksel!',
        rankingTitle: '🏅 SIRALAMA',
        rankingSubtitle: 'Günün en iyi oyuncuları',
        todayScore: 'Bugünün puanı:',
        enterUsername: 'Kullanıcı adınızı girin',
        submitScore: 'Puan Gönder',
        playDailyRun: 'MEYDAN OKUMAYA BAŞLA',
        alreadyPlayed: 'Bugün zaten oynadınız! Yarın tekrar gelin.',
        comeBackTomorrow: 'Yeni bir zorluk için yarın geri gel!',
        challengeComplete: 'Meydan Okuma Tamamlandı!',
        finalScore: 'Son Puan:',
        rank: 'Sıra',
        username: 'Kullanıcı',
        points: 'Puanlar',
        noScoresToday: 'Bugün henüz puan yok. İlk sen ol!',
        challenge: 'Meydan Okuma',

        // Game cards
        proPlayers: 'ProPlayers',
        proPlayersDesc: 'Favori pro oyuncularını seç',
        champions: 'Şampiyonlar',
        championsDesc: 'LoL şampiyonlarının smash or pass',
        classic: 'Klasik',
        classicDesc: 'Özellik ipuçlarıyla tahmin et',
        ability: 'Yetenek',
        abilityDesc: 'Yetenek simgesinden tahmin et',
        splashArt: 'Splash Art',
        splashArtDesc: 'Şampiyonu yakınlaştırma ile tahmin et',
        quote: 'Alıntı',
        quoteDesc: 'İkonik alıntılardan tahmin et',
        audio: 'Ses',
        audioDesc: 'Şampiyon sesinden tahmin et',
        emoji: 'Emoji',
        emojiDesc: 'Emojilerden tahmin et',
        emojiGameTitle: '😊 Emoji ile Şampiyonu Tahmin Et',
        emojiGameSubtitle: 'Emojileri çöz!',
        guessTeam: 'Takımı Tahmin Et',
        guessTeamDesc: 'Hangi takımda oynadı?',
        guessName: 'İsmi Tahmin Et',
        guessNameDesc: 'Bu oyuncu kim?',
        guessIcon: 'İkonu Tahmin Et',
        guessIconDesc: 'Bu logo hangi takıma ait?',
        hardModeGame: 'Zor Mod',
        hardModeDesc: 'Zor istatistikler ve bilgiler',
        esportsTrivia: 'Espor Trivia',
        esportsTriviaDesc: 'Profesyonel turnuvalar hakkında sorular',

        // Buttons
        startGame: 'OYUNA BAŞLA',
        playAgain: 'Tekrar Oyna',
        nextQuestion: 'Sonraki Soru',
        restart: 'Yeniden Başlat',
        guess: 'Tahmin Et',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Bölgenizi seçin',
        allRegions: '🌍 Tüm bölgeler',
        lck: 'LCK (Kore)',
        lpl: 'LPL (Çin)',
        lec: 'LEC (Avrupa)',
        lcs: 'LCS (NA)',
        cblol: 'CBLOL (Brezilya)',
        ljl: 'LJL (Japonya)',
        lco: 'LCO (Okyanusya)',
        lcl: 'LCL (CIS)',

        // Gender selector
        selectGender: 'Cinsiyet seçin',
        allChampions: '⚔️ Tüm şampiyonlar',
        male: '👨 Erkek',
        female: '👩 Kadın',

        // Results
        yourResults: 'Sonuçlarınız',
        yourSmash: 'SMASH\'leriniz ❤️',
        score: 'Puan:',
        attempts: 'Denemeler:',
        correct: 'Doğru!',
        incorrect: 'Yanlış',
        gameOver: 'Oyun Bitti!',

        // Stats
        totalVotes: 'Toplam oy:',
        globalStats: 'Global istatistikler',

        // Quiz questions
        whichTeamQuestion: 'Bu oyuncu hangi takımda oynadı?',
        whoIsPlayerQuestion: 'Bu oyuncu kim?',
        whichTeamLogoQuestion: 'Bu logo hangi takıma ait?',

        // Game titles
        abilityGameTitle: '⚡ Yetenek ile Şampiyonu Tahmin Et',
        abilityGameSubtitle: 'Bu yeteneğe hangi şampiyon sahip?',
        splashGameTitle: '🖼️ Splash Art ile Şampiyonu Tahmin Et',
        splashGameSubtitle: 'Yakınlaştırma her başarısız denemede artar',
        quoteGameTitle: '💬 Alıntı ile Şampiyonu Tahmin Et',
        quoteGameSubtitle: 'Bu satırı hangi şampiyon söylüyor?',
        classicGameTitle: '🎯 Klasik',
        classicGameSubtitle: 'Özellik ipuçlarıyla tahmin et',
        audioGameTitle: '🔊 Ses ile Şampiyonu Tahmin Et',
        audioGameSubtitle: 'Şampiyon sesini dinle',
        playAudio: 'Sesi Çal',
        replay: 'Tekrar Oynat',

        // Input placeholders
        typeChampionName: 'Şampiyon adını yaz...',

        // Classic mode attributes
        gender: 'Cinsiyet',
        position: 'Pozisyon',
        species: 'Tür',
        resource: 'Kaynak',
        range: 'Menzil',
        region: 'Bölge',

        // Hard Mode & Esports
        hardModeTitle: '🔥 ZOR MOD - Aşırı Trivia',
        hardModeSubtitle: 'İstatistikler ve LoL bilgileri hakkında zor sorular',
        esportsTriviaTitle: '🏆 ESPOR TRIVIA',
        esportsTriviaSubtitle: 'Turnuvalar, takımlar ve oyuncular hakkında sorular',

        // Counter
        player: 'Oyuncu',
        champion: 'Şampiyon',
        of: 'of'
    },

    cs: {
        // Header
        gameTitle: 'LEAGUE OF LEGENDS HRY',
        subtitle: 'Vyberte herní mód',
        gameModes: 'Herní Módy',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'HÁDACÍ HRY',
        quizGames: 'KVÍZOVÉ HRY',
        trivia: 'TRIVIA',
        esports: 'ESPORTY',
        hardMode: 'TĚŽKÝ REŽIM',

        // Menu items
        menuProPlayers: '👨 ProPlayers',
        menuChampions: '⚔️ Šampioni',
        menuClassic: '🎯 Klasika',
        menuAbility: '⚡ Schopnost',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Citát',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Audio',
        menuGuessTeam: '🏆 Hádej Tým',
        menuGuessName: '👤 Hádej Jméno',
        menuGuessIcon: '🎯 Hádej Ikonu',
        menuHardMode: '🔥 Extrémní Trivia',
        menuEsportsTrivia: '🏆 Esports Trivia',
        menuDailyRun: '🎮 Denní Výzva',
        menuRanking: '🏅 Žebříček',

        // Daily Challenge
        dailyChallenge: 'DENNÍ VÝZVA',
        dailyRunTitle: '🎮 DENNÍ VÝZVA',
        dailyRunSubtitle: 'Dokonči všechny výzvy a vyšplhej se v žebříčku!',
        rankingTitle: '🏅 ŽEBŘÍČEK',
        rankingSubtitle: 'Nejlepší hráči dne',
        todayScore: 'Dnešní skóre:',
        enterUsername: 'Zadejte své uživatelské jméno',
        submitScore: 'Odeslat Skóre',
        playDailyRun: 'ZAČÍT VÝZVU',
        alreadyPlayed: 'Dnes jsi už hrál! Vrať se zítra.',
        comeBackTomorrow: 'Vrať se zítra pro novou výzvu!',
        challengeComplete: 'Výzva Dokončena!',
        finalScore: 'Konečné Skóre:',
        rank: 'Pořadí',
        username: 'Uživatel',
        points: 'Body',
        noScoresToday: 'Dnes zatím žádná skóre. Buď první!',
        challenge: 'Výzva',

        // Game cards
        proPlayers: 'ProPlayers',
        proPlayersDesc: 'Vyber své oblíbené pro hráče',
        champions: 'Šampioni',
        championsDesc: 'Smash or pass šampionů LoL',
        classic: 'Klasika',
        classicDesc: 'Hádej s nápovědami atributů',
        ability: 'Schopnost',
        abilityDesc: 'Hádej podle ikony schopnosti',
        splashArt: 'Splash Art',
        splashArtDesc: 'Hádej šampiona se zoomem',
        quote: 'Citát',
        quoteDesc: 'Hádej podle ikonických citátů',
        audio: 'Audio',
        audioDesc: 'Hádej podle hlasu šampiona',
        emoji: 'Emoji',
        emojiDesc: 'Hádej podle emoji',
        emojiGameTitle: '😊 Hádej Šampiona podle Emoji',
        emojiGameSubtitle: 'Rozluštit emoji!',
        guessTeam: 'Hádej Tým',
        guessTeamDesc: 'Ve kterém týmu hrál?',
        guessName: 'Hádej Jméno',
        guessNameDesc: 'Kdo je tento hráč?',
        guessIcon: 'Hádej Ikonu',
        guessIconDesc: 'Kterému týmu patří toto logo?',
        hardModeGame: 'Těžký Režim',
        hardModeDesc: 'Obtížné statistiky a zajímavosti',
        esportsTrivia: 'Esports Trivia',
        esportsTriviaDesc: 'Otázky o profesionálních turnajích',

        // Buttons
        startGame: 'ZAČÍT HRU',
        playAgain: 'Hrát Znovu',
        nextQuestion: 'Další Otázka',
        restart: 'Restartovat',
        guess: 'Hádat',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Vyberte svůj region',
        allRegions: '🌍 Všechny regiony',
        lck: 'LCK (Korea)',
        lpl: 'LPL (Čína)',
        lec: 'LEC (Evropa)',
        lcs: 'LCS (NA)',
        cblol: 'CBLOL (Brazílie)',
        ljl: 'LJL (Japonsko)',
        lco: 'LCO (Oceánie)',
        lcl: 'LCL (CIS)',

        // Gender selector
        selectGender: 'Vyberte pohlaví',
        allChampions: '⚔️ Všichni šampioni',
        male: '👨 Muž',
        female: '👩 Žena',

        // Results
        yourResults: 'Tvoje výsledky',
        yourSmash: 'Tvoje SMASH ❤️',
        score: 'Skóre:',
        attempts: 'Pokusy:',
        correct: 'Správně!',
        incorrect: 'Nesprávně',
        gameOver: 'Konec Hry!',

        // Stats
        totalVotes: 'Celkem hlasů:',
        globalStats: 'Globální statistiky',

        // Quiz questions
        whichTeamQuestion: 'Ve kterém týmu hrál tento hráč?',
        whoIsPlayerQuestion: 'Kdo je tento hráč?',
        whichTeamLogoQuestion: 'Kterému týmu patří toto logo?',

        // Game titles
        abilityGameTitle: '⚡ Hádej Šampiona podle Schopnosti',
        abilityGameSubtitle: 'Který šampion má tuto schopnost?',
        splashGameTitle: '🖼️ Hádej Šampiona podle Splash Art',
        splashGameSubtitle: 'Zoom se zvětšuje s každým neúspěšným pokusem',
        quoteGameTitle: '💬 Hádej Šampiona podle Citátu',
        quoteGameSubtitle: 'Který šampion říká tuto větu?',
        classicGameTitle: '🎯 Klasika',
        classicGameSubtitle: 'Hádej s nápovědami atributů',
        audioGameTitle: '🔊 Hádej Šampiona podle Hlasu',
        audioGameSubtitle: 'Poslechni si hlas šampiona',
        playAudio: 'Přehrát Audio',
        replay: 'Opakovat',

        // Input placeholders
        typeChampionName: 'Zadej jméno šampiona...',

        // Classic mode attributes
        gender: 'Pohlaví',
        position: 'Pozice',
        species: 'Druh',
        resource: 'Zdroj',
        range: 'Dosah',
        region: 'Region',

        // Hard Mode & Esports
        hardModeTitle: '🔥 TĚŽKÝ REŽIM - Extrémní Trivia',
        hardModeSubtitle: 'Obtížné otázky o statistikách a zajímavostech LoL',
        esportsTriviaTitle: '🏆 ESPORTS TRIVIA',
        esportsTriviaSubtitle: 'Otázky o turnajích, týmech a hráčích',

        // Counter
        player: 'Hráč',
        champion: 'Šampion',
        of: 'z'
    },

    ja: {
        // Header
        gameTitle: 'リーグ・オブ・レジェンド ゲーム',
        subtitle: 'ゲームモードを選択',
        gameModes: 'ゲームモード',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: '推測ゲーム',
        quizGames: 'クイズゲーム',
        trivia: 'トリビア',
        esports: 'eスポーツ',
        hardMode: 'ハードモード',

        // Menu items
        menuProPlayers: '👨 プロプレイヤー',
        menuChampions: '⚔️ チャンピオン',
        menuClassic: '🎯 クラシック',
        menuAbility: '⚡ アビリティ',
        menuSplashArt: '🖼️ スプラッシュアート',
        menuQuote: '💬 セリフ',
        menuEmoji: '😊 絵文字',
        menuAudio: '🔊 オーディオ',
        menuGuessTeam: '🏆 チームを当てる',
        menuGuessName: '👤 名前を当てる',
        menuGuessIcon: '🎯 アイコンを当てる',
        menuHardMode: '🔥 エクストリームトリビア',
        menuEsportsTrivia: '🏆 eスポーツトリビア',
        menuDailyRun: '🎮 デイリーチャレンジ',
        menuRanking: '🏅 ランキング',

        // Daily Challenge
        dailyChallenge: 'デイリーチャレンジ',
        dailyRunTitle: '🎮 デイリーチャレンジ',
        dailyRunSubtitle: 'すべてのチャレンジをクリアしてランキングを上げよう！',
        rankingTitle: '🏅 ランキング',
        rankingSubtitle: '今日のトッププレイヤー',
        todayScore: '今日のスコア:',
        enterUsername: 'ユーザー名を入力',
        submitScore: 'スコアを送信',
        playDailyRun: 'チャレンジを開始',
        alreadyPlayed: '今日はすでにプレイしました！明日またお越しください。',
        comeBackTomorrow: '明日新しいチャレンジに戻ってきてください！',
        challengeComplete: 'チャレンジ完了！',
        finalScore: '最終スコア:',
        rank: 'ランク',
        username: 'ユーザー名',
        points: 'ポイント',
        noScoresToday: 'まだ今日のスコアはありません。最初になろう！',
        challenge: 'チャレンジ',

        // Game cards
        proPlayers: 'プロプレイヤー',
        proPlayersDesc: 'お気に入りのプロプレイヤーを選ぶ',
        champions: 'チャンピオン',
        championsDesc: 'LoLチャンピオンのスマッシュオアパス',
        classic: 'クラシック',
        classicDesc: '属性のヒントで推測',
        ability: 'アビリティ',
        abilityDesc: 'アビリティアイコンで推測',
        splashArt: 'スプラッシュアート',
        splashArtDesc: 'ズームでチャンピオンを推測',
        quote: 'セリフ',
        quoteDesc: '象徴的なセリフで推測',
        audio: 'オーディオ',
        audioDesc: 'チャンピオンの声で推測',
        emoji: '絵文字',
        emojiDesc: '絵文字で推測',
        emojiGameTitle: '😊 絵文字でチャンピオンを当てる',
        emojiGameSubtitle: '絵文字を解読しよう！',
        guessTeam: 'チームを当てる',
        guessTeamDesc: 'どのチームでプレイした？',
        guessName: '名前を当てる',
        guessNameDesc: 'このプレイヤーは誰？',
        guessIcon: 'アイコンを当てる',
        guessIconDesc: 'このロゴはどのチーム？',
        hardModeGame: 'ハードモード',
        hardModeDesc: '難しい統計とトリビア',
        esportsTrivia: 'eスポーツトリビア',
        esportsTriviaDesc: 'プロトーナメントに関する質問',

        // Buttons
        startGame: 'ゲームを開始',
        playAgain: 'もう一度プレイ',
        nextQuestion: '次の質問',
        restart: '再起動',
        guess: '推測',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: '地域を選択',
        allRegions: '🌍 すべての地域',
        lck: 'LCK (韓国)',
        lpl: 'LPL (中国)',
        lec: 'LEC (ヨーロッパ)',
        lcs: 'LCS (北米)',
        cblol: 'CBLOL (ブラジル)',
        ljl: 'LJL (日本)',
        lco: 'LCO (オセアニア)',
        lcl: 'LCL (CIS)',

        // Gender selector
        selectGender: '性別を選択',
        allChampions: '⚔️ すべてのチャンピオン',
        male: '👨 男性',
        female: '👩 女性',

        // Results
        yourResults: 'あなたの結果',
        yourSmash: 'あなたのSMASH ❤️',
        score: 'スコア:',
        attempts: '試行回数:',
        correct: '正解！',
        incorrect: '不正解',
        gameOver: 'ゲームオーバー！',

        // Stats
        totalVotes: '総投票数:',
        globalStats: 'グローバル統計',

        // Quiz questions
        whichTeamQuestion: 'このプレイヤーはどのチームでプレイしましたか？',
        whoIsPlayerQuestion: 'このプレイヤーは誰ですか？',
        whichTeamLogoQuestion: 'このロゴはどのチームのものですか？',

        // Game titles
        abilityGameTitle: '⚡ アビリティでチャンピオンを当てる',
        abilityGameSubtitle: 'このアビリティを持つチャンピオンは？',
        splashGameTitle: '🖼️ スプラッシュアートでチャンピオンを当てる',
        splashGameSubtitle: 'ズームは失敗するたびに増加します',
        quoteGameTitle: '💬 セリフでチャンピオンを当てる',
        quoteGameSubtitle: 'このセリフを言うチャンピオンは？',
        classicGameTitle: '🎯 クラシック',
        classicGameSubtitle: '属性のヒントで推測',
        audioGameTitle: '🔊 声でチャンピオンを当てる',
        audioGameSubtitle: 'チャンピオンの声を聞く',
        playAudio: 'オーディオを再生',
        replay: 'リプレイ',

        // Input placeholders
        typeChampionName: 'チャンピオン名を入力...',

        // Classic mode attributes
        gender: '性別',
        position: 'ポジション',
        species: '種族',
        resource: 'リソース',
        range: '射程',
        region: '地域',

        // Hard Mode & Esports
        hardModeTitle: '🔥 ハードモード - エクストリームトリビア',
        hardModeSubtitle: '統計とLoLトリビアに関する難しい質問',
        esportsTriviaTitle: '🏆 eスポーツトリビア',
        esportsTriviaSubtitle: 'トーナメント、チーム、プレイヤーに関する質問',

        // Counter
        player: 'プレイヤー',
        champion: 'チャンピオン',
        of: 'の'
    },

    ko: {
        // Header
        gameTitle: '리그 오브 레전드 게임',
        subtitle: '게임 모드를 선택하세요',
        gameModes: '게임 모드',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: '추측 게임',
        quizGames: '퀴즈 게임',
        trivia: '트리비아',
        esports: 'e스포츠',
        hardMode: '하드 모드',

        // Menu items
        menuProPlayers: '👨 프로 선수',
        menuChampions: '⚔️ 챔피언',
        menuClassic: '🎯 클래식',
        menuAbility: '⚡ 스킬',
        menuSplashArt: '🖼️ 일러스트',
        menuQuote: '💬 대사',
        menuEmoji: '😊 이모지',
        menuAudio: '🔊 오디오',
        menuGuessTeam: '🏆 팀 맞히기',
        menuGuessName: '👤 이름 맞히기',
        menuGuessIcon: '🎯 아이콘 맞히기',
        menuHardMode: '🔥 익스트림 트리비아',
        menuEsportsTrivia: '🏆 e스포츠 트리비아',
        menuDailyRun: '🎮 일일 도전',
        menuRanking: '🏅 랭킹',

        // Daily Challenge
        dailyChallenge: '일일 도전',
        dailyRunTitle: '🎮 일일 도전',
        dailyRunSubtitle: '모든 도전을 완료하고 순위를 올리세요!',
        rankingTitle: '🏅 랭킹',
        rankingSubtitle: '오늘의 최고 플레이어',
        todayScore: '오늘의 점수:',
        enterUsername: '사용자 이름을 입력하세요',
        submitScore: '점수 제출',
        playDailyRun: '도전 시작',
        alreadyPlayed: '오늘은 이미 플레이했습니다! 내일 다시 오세요.',
        comeBackTomorrow: '내일 새로운 도전을 위해 돌아오세요!',
        challengeComplete: '도전 완료!',
        finalScore: '최종 점수:',
        rank: '순위',
        username: '사용자 이름',
        points: '포인트',
        noScoresToday: '아직 오늘의 점수가 없습니다. 첫 번째가 되세요!',
        challenge: '도전',

        // Game cards
        proPlayers: '프로 선수',
        proPlayersDesc: '좋아하는 프로 선수를 선택하세요',
        champions: '챔피언',
        championsDesc: 'LoL 챔피언 스매시 오어 패스',
        classic: '클래식',
        classicDesc: '속성 힌트로 추측',
        ability: '스킬',
        abilityDesc: '스킬 아이콘으로 추측',
        splashArt: '일러스트',
        splashArtDesc: '줌으로 챔피언 추측',
        quote: '대사',
        quoteDesc: '상징적인 대사로 추측',
        audio: '오디오',
        audioDesc: '챔피언 음성으로 추측',
        emoji: '이모지',
        emojiDesc: '이모지로 추측',
        emojiGameTitle: '😊 이모지로 챔피언 맞히기',
        emojiGameSubtitle: '이모지를 해독하세요!',
        guessTeam: '팀 맞히기',
        guessTeamDesc: '어느 팀에서 플레이했나요?',
        guessName: '이름 맞히기',
        guessNameDesc: '이 선수는 누구인가요?',
        guessIcon: '아이콘 맞히기',
        guessIconDesc: '이 로고는 어느 팀인가요?',
        hardModeGame: '하드 모드',
        hardModeDesc: '어려운 통계와 트리비아',
        esportsTrivia: 'e스포츠 트리비아',
        esportsTriviaDesc: '프로 토너먼트에 관한 질문',

        // Buttons
        startGame: '게임 시작',
        playAgain: '다시 플레이',
        nextQuestion: '다음 질문',
        restart: '재시작',
        guess: '추측',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: '지역을 선택하세요',
        allRegions: '🌍 모든 지역',
        lck: 'LCK (한국)',
        lpl: 'LPL (중국)',
        lec: 'LEC (유럽)',
        lcs: 'LCS (북미)',
        cblol: 'CBLOL (브라질)',
        ljl: 'LJL (일본)',
        lco: 'LCO (오세아니아)',
        lcl: 'LCL (CIS)',

        // Gender selector
        selectGender: '성별을 선택하세요',
        allChampions: '⚔️ 모든 챔피언',
        male: '👨 남성',
        female: '👩 여성',

        // Results
        yourResults: '결과',
        yourSmash: '나의 SMASH ❤️',
        score: '점수:',
        attempts: '시도:',
        correct: '정답!',
        incorrect: '오답',
        gameOver: '게임 오버!',

        // Stats
        totalVotes: '총 투표:',
        globalStats: '글로벌 통계',

        // Quiz questions
        whichTeamQuestion: '이 선수는 어느 팀에서 플레이했나요?',
        whoIsPlayerQuestion: '이 선수는 누구인가요?',
        whichTeamLogoQuestion: '이 로고는 어느 팀인가요?',

        // Game titles
        abilityGameTitle: '⚡ 스킬로 챔피언 맞히기',
        abilityGameSubtitle: '이 스킬을 가진 챔피언은?',
        splashGameTitle: '🖼️ 일러스트로 챔피언 맞히기',
        splashGameSubtitle: '실패할 때마다 줌이 증가합니다',
        quoteGameTitle: '💬 대사로 챔피언 맞히기',
        quoteGameSubtitle: '이 대사를 말하는 챔피언은?',
        classicGameTitle: '🎯 클래식',
        classicGameSubtitle: '속성 힌트로 추측',
        audioGameTitle: '🔊 음성으로 챔피언 맞히기',
        audioGameSubtitle: '챔피언의 음성을 들어보세요',
        playAudio: '오디오 재생',
        replay: '다시 재생',

        // Input placeholders
        typeChampionName: '챔피언 이름을 입력하세요...',

        // Classic mode attributes
        gender: '성별',
        position: '포지션',
        species: '종족',
        resource: '자원',
        range: '사거리',
        region: '지역',

        // Hard Mode & Esports
        hardModeTitle: '🔥 하드 모드 - 익스트림 트리비아',
        hardModeSubtitle: '통계와 LoL 트리비아에 관한 어려운 질문',
        esportsTriviaTitle: '🏆 e스포츠 트리비아',
        esportsTriviaSubtitle: '토너먼트, 팀, 선수에 관한 질문',

        // Counter
        player: '선수',
        champion: '챔피언',
        of: '의'
    },

    zh: {
        // Header
        gameTitle: '英雄联盟游戏',
        subtitle: '选择您的游戏模式',
        gameModes: '游戏模式',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: '猜测游戏',
        quizGames: '问答游戏',
        trivia: '冷知识',
        esports: '电子竞技',
        hardMode: '困难模式',

        // Menu items
        menuProPlayers: '👨 职业选手',
        menuChampions: '⚔️ 英雄',
        menuClassic: '🎯 经典',
        menuAbility: '⚡ 技能',
        menuSplashArt: '🖼️ 原画',
        menuQuote: '💬 台词',
        menuEmoji: '😊 表情',
        menuAudio: '🔊 音频',
        menuGuessTeam: '🏆 猜队伍',
        menuGuessName: '👤 猜名字',
        menuGuessIcon: '🎯 猜图标',
        menuHardMode: '🔥 极限冷知识',
        menuEsportsTrivia: '🏆 电竞冷知识',
        menuDailyRun: '🎮 每日挑战',
        menuRanking: '🏅 排行榜',

        // Daily Challenge
        dailyChallenge: '每日挑战',
        dailyRunTitle: '🎮 每日挑战',
        dailyRunSubtitle: '完成所有挑战并登上排行榜！',
        rankingTitle: '🏅 排行榜',
        rankingSubtitle: '今日顶尖玩家',
        todayScore: '今日分数:',
        enterUsername: '输入您的用户名',
        submitScore: '提交分数',
        playDailyRun: '开始挑战',
        alreadyPlayed: '您今天已经玩过了！明天再来。',
        comeBackTomorrow: '明天回来迎接新挑战！',
        challengeComplete: '挑战完成！',
        finalScore: '最终分数:',
        rank: '排名',
        username: '用户名',
        points: '积分',
        noScoresToday: '今天还没有分数。成为第一个！',
        challenge: '挑战',

        // Game cards
        proPlayers: '职业选手',
        proPlayersDesc: '选择您喜欢的职业选手',
        champions: '英雄',
        championsDesc: '英雄联盟英雄的Smash or Pass',
        classic: '经典',
        classicDesc: '通过属性提示猜测',
        ability: '技能',
        abilityDesc: '通过技能图标猜测',
        splashArt: '原画',
        splashArtDesc: '通过缩放猜测英雄',
        quote: '台词',
        quoteDesc: '通过标志性台词猜测',
        audio: '音频',
        audioDesc: '通过英雄语音猜测',
        emoji: '表情',
        emojiDesc: '通过表情符号猜测',
        emojiGameTitle: '😊 通过表情猜英雄',
        emojiGameSubtitle: '解码表情符号！',
        guessTeam: '猜队伍',
        guessTeamDesc: '他在哪个队伍效力？',
        guessName: '猜名字',
        guessNameDesc: '这个选手是谁？',
        guessIcon: '猜图标',
        guessIconDesc: '这个标志是哪个队伍的？',
        hardModeGame: '困难模式',
        hardModeDesc: '困难的统计和冷知识',
        esportsTrivia: '电竞冷知识',
        esportsTriviaDesc: '关于职业赛事的问题',

        // Buttons
        startGame: '开始游戏',
        playAgain: '再玩一次',
        nextQuestion: '下一个问题',
        restart: '重新开始',
        guess: '猜测',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: '选择您的地区',
        allRegions: '🌍 所有地区',
        lck: 'LCK (韩国)',
        lpl: 'LPL (中国)',
        lec: 'LEC (欧洲)',
        lcs: 'LCS (北美)',
        cblol: 'CBLOL (巴西)',
        ljl: 'LJL (日本)',
        lco: 'LCO (大洋洲)',
        lcl: 'LCL (独联体)',

        // Gender selector
        selectGender: '选择性别',
        allChampions: '⚔️ 所有英雄',
        male: '👨 男性',
        female: '👩 女性',

        // Results
        yourResults: '您的结果',
        yourSmash: '您的SMASH ❤️',
        score: '分数:',
        attempts: '尝试次数:',
        correct: '正确！',
        incorrect: '错误',
        gameOver: '游戏结束！',

        // Stats
        totalVotes: '总投票数:',
        globalStats: '全球统计',

        // Quiz questions
        whichTeamQuestion: '这位选手在哪个队伍效力？',
        whoIsPlayerQuestion: '这位选手是谁？',
        whichTeamLogoQuestion: '这个标志是哪个队伍的？',

        // Game titles
        abilityGameTitle: '⚡ 通过技能猜英雄',
        abilityGameSubtitle: '哪个英雄有这个技能？',
        splashGameTitle: '🖼️ 通过原画猜英雄',
        splashGameSubtitle: '每次失败后缩放会增加',
        quoteGameTitle: '💬 通过台词猜英雄',
        quoteGameSubtitle: '哪个英雄说这句话？',
        classicGameTitle: '🎯 经典',
        classicGameSubtitle: '通过属性提示猜测',
        audioGameTitle: '🔊 通过语音猜英雄',
        audioGameSubtitle: '听英雄的语音',
        playAudio: '播放音频',
        replay: '重播',

        // Input placeholders
        typeChampionName: '输入英雄名字...',

        // Classic mode attributes
        gender: '性别',
        position: '位置',
        species: '种族',
        resource: '资源',
        range: '射程',
        region: '地区',

        // Hard Mode & Esports
        hardModeTitle: '🔥 困难模式 - 极限冷知识',
        hardModeSubtitle: '关于统计数据和英雄联盟冷知识的困难问题',
        esportsTriviaTitle: '🏆 电竞冷知识',
        esportsTriviaSubtitle: '关于赛事、队伍和选手的问题',

        // Counter
        player: '选手',
        champion: '英雄',
        of: '的'
    },

    el: {
        // Header
        gameTitle: 'Παιχνίδια League of Legends',
        subtitle: 'Επιλέξτε τη λειτουργία παιχνιδιού σας',
        gameModes: 'Λειτουργίες Παιχνιδιού',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'Παιχνίδια Μαντέματος',
        quizGames: 'Παιχνίδια Κουίζ',
        trivia: 'Τρίβια',
        esports: 'Esports',
        hardMode: 'Δύσκολη Λειτουργία',

        // Menu items
        menuProPlayers: '👨 Επαγγελματίες Παίκτες',
        menuChampions: '⚔️ Πρωταθλητές',
        menuClassic: '🎯 Κλασικό',
        menuAbility: '⚡ Ικανότητα',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Ατάκα',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Ήχος',
        menuGuessTeam: '🏆 Μάντεψε την Ομάδα',
        menuGuessName: '👤 Μάντεψε το Όνομα',
        menuGuessIcon: '🎯 Μάντεψε το Εικονίδιο',
        menuHardMode: '🔥 Extreme Trivia',
        menuEsportsTrivia: '🏆 Esports Trivia',
        menuDailyRun: '🎮 Καθημερινή Πρόκληση',
        menuRanking: '🏅 Κατάταξη',

        // Daily Challenge
        dailyChallenge: 'Καθημερινή Πρόκληση',
        dailyRunTitle: '🎮 Καθημερινή Πρόκληση',
        dailyRunSubtitle: 'Ολοκληρώστε όλες τις προκλήσεις και ανεβείτε στην κατάταξη!',
        rankingTitle: '🏅 Κατάταξη',
        rankingSubtitle: 'Κορυφαίοι Παίκτες Σήμερα',
        todayScore: 'Σημερινή Βαθμολογία:',
        enterUsername: 'Εισάγετε όνομα χρήστη',
        submitScore: 'Υποβολή Βαθμολογίας',
        playDailyRun: 'Ξεκινήστε την Πρόκληση',
        alreadyPlayed: 'Έχετε ήδη παίξει σήμερα! Επιστρέψτε αύριο.',
        comeBackTomorrow: 'Επιστρέψτε αύριο για νέα πρόκληση!',
        challengeComplete: 'Πρόκληση Ολοκληρώθηκε!',
        finalScore: 'Τελική Βαθμολογία:',
        rank: 'Κατάταξη',
        username: 'Όνομα Χρήστη',
        points: 'Πόντοι',
        noScoresToday: 'Καμία βαθμολογία σήμερα ακόμα. Γίνετε ο πρώτος!',
        challenge: 'Πρόκληση',

        // Game cards
        proPlayers: 'Επαγγελματίες Παίκτες',
        proPlayersDesc: 'Επιλέξτε τους αγαπημένους σας επαγγελματίες',
        champions: 'Πρωταθλητές',
        championsDesc: 'Smash or Pass πρωταθλητών LoL',
        classic: 'Κλασικό',
        classicDesc: 'Μαντέψτε με υποδείξεις χαρακτηριστικών',
        ability: 'Ικανότητα',
        abilityDesc: 'Μαντέψτε από εικονίδιο ικανότητας',
        splashArt: 'Splash Art',
        splashArtDesc: 'Μαντέψτε τον πρωταθλητή με ζουμ',
        quote: 'Ατάκα',
        quoteDesc: 'Μαντέψτε από εμβληματική ατάκα',
        audio: 'Ήχος',
        audioDesc: 'Μαντέψτε από φωνή πρωταθλητή',
        emoji: 'Emoji',
        emojiDesc: 'Μαντέψτε από emoji',
        emojiGameTitle: '😊 Μάντεψε τον Πρωταθλητή από Emoji',
        emojiGameSubtitle: 'Αποκωδικοποιήστε τα emoji!',
        guessTeam: 'Μάντεψε την Ομάδα',
        guessTeamDesc: 'Σε ποια ομάδα έπαιξε;',
        guessName: 'Μάντεψε το Όνομα',
        guessNameDesc: 'Ποιος είναι αυτός ο παίκτης;',
        guessIcon: 'Μάντεψε το Εικονίδιο',
        guessIconDesc: 'Ποιας ομάδας είναι αυτό το λογότυπο;',
        hardModeGame: 'Δύσκολη Λειτουργία',
        hardModeDesc: 'Δύσκολα στατιστικά και τρίβια',
        esportsTrivia: 'Esports Trivia',
        esportsTriviaDesc: 'Ερωτήσεις για επαγγελματικά τουρνουά',

        // Buttons
        startGame: 'Ξεκινήστε το Παιχνίδι',
        playAgain: 'Παίξτε Ξανά',
        nextQuestion: 'Επόμενη Ερώτηση',
        restart: 'Επανεκκίνηση',
        guess: 'Μάντεψε',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Επιλέξτε Περιοχή',
        allRegions: '🌍 Όλες οι Περιοχές',
        lck: 'LCK (Κορέα)',
        lpl: 'LPL (Κίνα)',
        lec: 'LEC (Ευρώπη)',
        lcs: 'LCS (Βόρεια Αμερική)',
        cblol: 'CBLOL (Βραζιλία)',
        pcs: 'PCS (Ειρηνικός)',
        vcs: 'VCS (Βιετνάμ)',
        lla: 'LLA (Λατινική Αμερική)',
        ljl: 'LJL (Ιαπωνία)',

        // Gender selector
        selectGender: 'Επιλέξτε Φύλο',
        allGenders: '👥 Όλα',
        male: '👨 Άνδρας',
        female: '👩 Γυναίκα',

        // Results and stats
        yourResult: 'Το Αποτέλεσμά Σας',
        correct: 'Σωστά',
        incorrect: 'Λάθος',
        score: 'Βαθμολογία',
        youGuessed: 'Μαντέψατε',
        correctAnswer: 'Σωστή Απάντηση',
        tryAgain: 'Δοκιμάστε Ξανά',
        wellDone: 'Μπράβο!',
        guessSomething: 'Μαντέψτε κάτι...',

        // Quiz questions
        whichChampionHasThisAbility: 'Ποιος πρωταθλητής έχει αυτήν την ικανότητα;',
        whichChampionIsThis: 'Ποιος πρωταθλητής είναι αυτός;',
        whoSaidThisQuote: 'Ποιος είπε αυτήν την ατάκα;',

        // Game titles
        classicGameTitle: '🎯 Κλασικό - Μάντεψε τον Πρωταθλητή',
        classicGameSubtitle: 'Χρησιμοποιήστε υποδείξεις χαρακτηριστικών για να μαντέψετε',
        abilityGameTitle: '⚡ Μάντεψε από Ικανότητα',
        abilityGameSubtitle: 'Ποιος πρωταθλητής έχει αυτήν την ικανότητα;',
        splashGameTitle: '🖼️ Μάντεψε από Splash Art',
        splashGameSubtitle: 'Μαντέψτε τον πρωταθλητή από την εικόνα',
        quoteGameTitle: '💬 Μάντεψε από Ατάκα',
        quoteGameSubtitle: 'Ποιος πρωταθλητής λέει αυτήν την ατάκα;',

        // Input placeholders
        enterChampionName: 'Εισάγετε όνομα πρωταθλητή...',
        enterPlayerName: 'Εισάγετε όνομα παίκτη...',
        enterTeamName: 'Εισάγετε όνομα ομάδας...',

        // Classic mode attributes
        gender: 'Φύλο',
        position: 'Θέση',
        species: 'Είδος',
        resource: 'Πόρος',
        rangeType: 'Τύπος Εμβέλειας',
        region: 'Περιοχή',

        // Hard Mode & Esports titles
        hardModeTitle: '🔥 Δύσκολη Λειτουργία - Extreme Trivia',
        hardModeSubtitle: 'Δύσκολες ερωτήσεις για στατιστικά και τρίβια LoL',
        esportsTriviaTitle: '🏆 Esports Trivia',
        esportsTriviaSubtitle: 'Ερωτήσεις για τουρνουά, ομάδες και παίκτες',

        // Counter
        player: 'Παίκτης',
        champion: 'Πρωταθλητής',
        of: 'από'
    },

    hu: {
        // Header
        gameTitle: 'League of Legends Játékok',
        subtitle: 'Válassza ki a játékmódot',
        gameModes: 'Játékmódok',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'Találós Játékok',
        quizGames: 'Kvíz Játékok',
        trivia: 'Trivia',
        esports: 'Esports',
        hardMode: 'Nehéz Mód',

        // Menu items
        menuProPlayers: '👨 Profi Játékosok',
        menuChampions: '⚔️ Bajnokok',
        menuClassic: '🎯 Klasszikus',
        menuAbility: '⚡ Képesség',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Idézet',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Hang',
        menuGuessTeam: '🏆 Csapat Találgatás',
        menuGuessName: '👤 Név Találgatás',
        menuGuessIcon: '🎯 Ikon Találgatás',
        menuHardMode: '🔥 Extrém Trivia',
        menuEsportsTrivia: '🏆 Esports Trivia',
        menuDailyRun: '🎮 Napi Kihívás',
        menuRanking: '🏅 Rangsor',

        // Daily Challenge
        dailyChallenge: 'Napi Kihívás',
        dailyRunTitle: '🎮 Napi Kihívás',
        dailyRunSubtitle: 'Teljesítse az összes kihívást és másszon fel a ranglista élére!',
        rankingTitle: '🏅 Rangsor',
        rankingSubtitle: 'Mai Legjobb Játékosok',
        todayScore: 'Mai Pontszám:',
        enterUsername: 'Adja meg a felhasználónevet',
        submitScore: 'Pontszám Beküldése',
        playDailyRun: 'Kihívás Indítása',
        alreadyPlayed: 'Ma már játszott! Gyere vissza holnap.',
        comeBackTomorrow: 'Gyere vissza holnap új kihívásért!',
        challengeComplete: 'Kihívás Teljesítve!',
        finalScore: 'Végső Pontszám:',
        rank: 'Rang',
        username: 'Felhasználónév',
        points: 'Pontok',
        noScoresToday: 'Még nincs pontszám ma. Légy az első!',
        challenge: 'Kihívás',

        // Game cards
        proPlayers: 'Profi Játékosok',
        proPlayersDesc: 'Válassza ki kedvenc profijait',
        champions: 'Bajnokok',
        championsDesc: 'LoL bajnokok Smash or Pass',
        classic: 'Klasszikus',
        classicDesc: 'Találd ki tulajdonság tippekből',
        ability: 'Képesség',
        abilityDesc: 'Találd ki képesség ikonból',
        splashArt: 'Splash Art',
        splashArtDesc: 'Találd ki a bajnokot nagyításból',
        quote: 'Idézet',
        quoteDesc: 'Találd ki ikonikus idézetből',
        audio: 'Hang',
        audioDesc: 'Találd ki bajnok hangjából',
        emoji: 'Emoji',
        emojiDesc: 'Találd ki emojiból',
        emojiGameTitle: '😊 Találd ki a Bajnokot Emojiból',
        emojiGameSubtitle: 'Fejd meg az emojit!',
        guessTeam: 'Csapat Találgatás',
        guessTeamDesc: 'Melyik csapatban játszott?',
        guessName: 'Név Találgatás',
        guessNameDesc: 'Ki ez a játékos?',
        guessIcon: 'Ikon Találgatás',
        guessIconDesc: 'Melyik csapat logója ez?',
        hardModeGame: 'Nehéz Mód',
        hardModeDesc: 'Nehéz statisztikák és trivia',
        esportsTrivia: 'Esports Trivia',
        esportsTriviaDesc: 'Kérdések profi versenyekről',

        // Buttons
        startGame: 'Játék Indítása',
        playAgain: 'Játssz Újra',
        nextQuestion: 'Következő Kérdés',
        restart: 'Újraindítás',
        guess: 'Találgatás',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Válassz Régiót',
        allRegions: '🌍 Minden Régió',
        lck: 'LCK (Korea)',
        lpl: 'LPL (Kína)',
        lec: 'LEC (Európa)',
        lcs: 'LCS (Észak-Amerika)',
        cblol: 'CBLOL (Brazília)',
        pcs: 'PCS (Csendes-óceán)',
        vcs: 'VCS (Vietnam)',
        lla: 'LLA (Latin-Amerika)',
        ljl: 'LJL (Japán)',

        // Gender selector
        selectGender: 'Válassz Nemet',
        allGenders: '👥 Összes',
        male: '👨 Férfi',
        female: '👩 Nő',

        // Results and stats
        yourResult: 'Az Eredményed',
        correct: 'Helyes',
        incorrect: 'Helytelen',
        score: 'Pontszám',
        youGuessed: 'Tipped',
        correctAnswer: 'Helyes Válasz',
        tryAgain: 'Próbáld Újra',
        wellDone: 'Szép Munka!',
        guessSomething: 'Találj ki valamit...',

        // Quiz questions
        whichChampionHasThisAbility: 'Melyik bajnoknak van ez a képessége?',
        whichChampionIsThis: 'Melyik bajnok ez?',
        whoSaidThisQuote: 'Ki mondta ezt az idézetet?',

        // Game titles
        classicGameTitle: '🎯 Klasszikus - Találd ki a Bajnokot',
        classicGameSubtitle: 'Használd a tulajdonság tippeket',
        abilityGameTitle: '⚡ Találd ki Képességből',
        abilityGameSubtitle: 'Melyik bajnoknak van ez a képessége?',
        splashGameTitle: '🖼️ Találd ki Splash Artból',
        splashGameSubtitle: 'Találd ki a bajnokot a képből',
        quoteGameTitle: '💬 Találd ki Idézetből',
        quoteGameSubtitle: 'Melyik bajnok mondja ezt az idézetet?',

        // Input placeholders
        enterChampionName: 'Add meg a bajnok nevét...',
        enterPlayerName: 'Add meg a játékos nevét...',
        enterTeamName: 'Add meg a csapat nevét...',

        // Classic mode attributes
        gender: 'Nem',
        position: 'Pozíció',
        species: 'Faj',
        resource: 'Erőforrás',
        rangeType: 'Hatótáv Típus',
        region: 'Régió',

        // Hard Mode & Esports titles
        hardModeTitle: '🔥 Nehéz Mód - Extrém Trivia',
        hardModeSubtitle: 'Nehéz kérdések statisztikákról és LoL triviáról',
        esportsTriviaTitle: '🏆 Esports Trivia',
        esportsTriviaSubtitle: 'Kérdések versenyekről, csapatokról és játékosokról',

        // Counter
        player: 'Játékos',
        champion: 'Bajnok',
        of: '-ból/-ből'
    },

    ro: {
        // Header
        gameTitle: 'Jocuri League of Legends',
        subtitle: 'Alegeți modul de joc',
        gameModes: 'Moduri de Joc',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'Jocuri de Ghicit',
        quizGames: 'Jocuri Quiz',
        trivia: 'Trivia',
        esports: 'Esports',
        hardMode: 'Mod Dificil',

        // Menu items
        menuProPlayers: '👨 Jucători Pro',
        menuChampions: '⚔️ Campioni',
        menuClassic: '🎯 Clasic',
        menuAbility: '⚡ Abilitate',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Citat',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Audio',
        menuGuessTeam: '🏆 Ghicește Echipa',
        menuGuessName: '👤 Ghicește Numele',
        menuGuessIcon: '🎯 Ghicește Iconul',
        menuHardMode: '🔥 Trivia Extremă',
        menuEsportsTrivia: '🏆 Trivia Esports',
        menuDailyRun: '🎮 Provocare Zilnică',
        menuRanking: '🏅 Clasament',

        // Daily Challenge
        dailyChallenge: 'Provocare Zilnică',
        dailyRunTitle: '🎮 Provocare Zilnică',
        dailyRunSubtitle: 'Completează toate provocările și urcă în clasament!',
        rankingTitle: '🏅 Clasament',
        rankingSubtitle: 'Cei Mai Buni Jucători Astăzi',
        todayScore: 'Scor Astăzi:',
        enterUsername: 'Introduceți numele de utilizator',
        submitScore: 'Trimite Scorul',
        playDailyRun: 'Începe Provocarea',
        alreadyPlayed: 'Ai jucat deja astăzi! Revino mâine.',
        comeBackTomorrow: 'Revino mâine pentru o nouă provocare!',
        challengeComplete: 'Provocare Completată!',
        finalScore: 'Scor Final:',
        rank: 'Rang',
        username: 'Nume Utilizator',
        points: 'Puncte',
        noScoresToday: 'Încă nu sunt scoruri astăzi. Fii primul!',
        challenge: 'Provocare',

        // Game cards
        proPlayers: 'Jucători Pro',
        proPlayersDesc: 'Alege jucătorii tăi pro favoriți',
        champions: 'Campioni',
        championsDesc: 'Smash or Pass campioni LoL',
        classic: 'Clasic',
        classicDesc: 'Ghicește cu indicii de atribute',
        ability: 'Abilitate',
        abilityDesc: 'Ghicește din iconița abilității',
        splashArt: 'Splash Art',
        splashArtDesc: 'Ghicește campionul din zoom',
        quote: 'Citat',
        quoteDesc: 'Ghicește din citat iconic',
        audio: 'Audio',
        audioDesc: 'Ghicește din vocea campionului',
        emoji: 'Emoji',
        emojiDesc: 'Ghicește din emoji',
        emojiGameTitle: '😊 Ghicește Campionul din Emoji',
        emojiGameSubtitle: 'Decodifică emoji-ul!',
        guessTeam: 'Ghicește Echipa',
        guessTeamDesc: 'La ce echipă a jucat?',
        guessName: 'Ghicește Numele',
        guessNameDesc: 'Cine este acest jucător?',
        guessIcon: 'Ghicește Iconul',
        guessIconDesc: 'Al cărei echipe este acest logo?',
        hardModeGame: 'Mod Dificil',
        hardModeDesc: 'Statistici dificile și trivia',
        esportsTrivia: 'Trivia Esports',
        esportsTriviaDesc: 'Întrebări despre turnee profesioniste',

        // Buttons
        startGame: 'Începe Jocul',
        playAgain: 'Joacă Din Nou',
        nextQuestion: 'Următoarea Întrebare',
        restart: 'Restart',
        guess: 'Ghicește',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Selectează Regiunea',
        allRegions: '🌍 Toate Regiunile',
        lck: 'LCK (Coreea)',
        lpl: 'LPL (China)',
        lec: 'LEC (Europa)',
        lcs: 'LCS (America de Nord)',
        cblol: 'CBLOL (Brazilia)',
        pcs: 'PCS (Pacific)',
        vcs: 'VCS (Vietnam)',
        lla: 'LLA (America Latină)',
        ljl: 'LJL (Japonia)',

        // Gender selector
        selectGender: 'Selectează Sexul',
        allGenders: '👥 Toți',
        male: '👨 Bărbat',
        female: '👩 Femeie',

        // Results and stats
        yourResult: 'Rezultatul Tău',
        correct: 'Corect',
        incorrect: 'Incorect',
        score: 'Scor',
        youGuessed: 'Ai Ghicit',
        correctAnswer: 'Răspuns Corect',
        tryAgain: 'Încearcă Din Nou',
        wellDone: 'Bravo!',
        guessSomething: 'Ghicește ceva...',

        // Quiz questions
        whichChampionHasThisAbility: 'Care campion are această abilitate?',
        whichChampionIsThis: 'Care campion este acesta?',
        whoSaidThisQuote: 'Cine a spus acest citat?',

        // Game titles
        classicGameTitle: '🎯 Clasic - Ghicește Campionul',
        classicGameSubtitle: 'Folosește indiciile de atribute',
        abilityGameTitle: '⚡ Ghicește din Abilitate',
        abilityGameSubtitle: 'Care campion are această abilitate?',
        splashGameTitle: '🖼️ Ghicește din Splash Art',
        splashGameSubtitle: 'Ghicește campionul din imagine',
        quoteGameTitle: '💬 Ghicește din Citat',
        quoteGameSubtitle: 'Care campion spune acest citat?',

        // Input placeholders
        enterChampionName: 'Introduceți numele campionului...',
        enterPlayerName: 'Introduceți numele jucătorului...',
        enterTeamName: 'Introduceți numele echipei...',

        // Classic mode attributes
        gender: 'Sex',
        position: 'Poziție',
        species: 'Specie',
        resource: 'Resursă',
        rangeType: 'Tip Rază',
        region: 'Regiune',

        // Hard Mode & Esports titles
        hardModeTitle: '🔥 Mod Dificil - Trivia Extremă',
        hardModeSubtitle: 'Întrebări dificile despre statistici și trivia LoL',
        esportsTriviaTitle: '🏆 Trivia Esports',
        esportsTriviaSubtitle: 'Întrebări despre turnee, echipe și jucători',

        // Counter
        player: 'Jucător',
        champion: 'Campion',
        of: 'din'
    },

    th: {
        // Header
        gameTitle: 'เกม League of Legends',
        subtitle: 'เลือกโหมดเกมของคุณ',
        gameModes: 'โหมดเกม',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'เกมทาย',
        quizGames: 'เกมควิซ',
        trivia: 'ทริเวีย',
        esports: 'อีสปอร์ต',
        hardMode: 'โหมดยาก',

        // Menu items
        menuProPlayers: '👨 ผู้เล่นมืออาชีพ',
        menuChampions: '⚔️ แชมเปี้ยน',
        menuClassic: '🎯 คลาสสิก',
        menuAbility: '⚡ ความสามารถ',
        menuSplashArt: '🖼️ สแปลชอาร์ต',
        menuQuote: '💬 คำพูด',
        menuEmoji: '😊 อีโมจิ',
        menuAudio: '🔊 เสียง',
        menuGuessTeam: '🏆 ทายทีม',
        menuGuessName: '👤 ทายชื่อ',
        menuGuessIcon: '🎯 ทายไอคอน',
        menuHardMode: '🔥 ทริเวียสุดโหด',
        menuEsportsTrivia: '🏆 ทริเวียอีสปอร์ต',
        menuDailyRun: '🎮 ความท้าทายรายวัน',
        menuRanking: '🏅 อันดับ',

        // Daily Challenge
        dailyChallenge: 'ความท้าทายรายวัน',
        dailyRunTitle: '🎮 ความท้าทายรายวัน',
        dailyRunSubtitle: 'ทำความท้าทายทั้งหมดให้เสร็จและขึ้นอันดับ!',
        rankingTitle: '🏅 อันดับ',
        rankingSubtitle: 'ผู้เล่นอันดับต้นของวันนี้',
        todayScore: 'คะแนนวันนี้:',
        enterUsername: 'ใส่ชื่อผู้ใช้',
        submitScore: 'ส่งคะแนน',
        playDailyRun: 'เริ่มความท้าทาย',
        alreadyPlayed: 'คุณเล่นไปแล้ววันนี้! กลับมาใหม่พรุ่งนี้',
        comeBackTomorrow: 'กลับมาพรุ่งนี้เพื่อความท้าทายใหม่!',
        challengeComplete: 'ความท้าทายสำเร็จ!',
        finalScore: 'คะแนนสุดท้าย:',
        rank: 'อันดับ',
        username: 'ชื่อผู้ใช้',
        points: 'แต้ม',
        noScoresToday: 'ยังไม่มีคะแนนวันนี้ เป็นคนแรก!',
        challenge: 'ความท้าทาย',

        // Game cards
        proPlayers: 'ผู้เล่นมืออาชีพ',
        proPlayersDesc: 'เลือกโปรที่คุณชื่นชอบ',
        champions: 'แชมเปี้ยน',
        championsDesc: 'Smash or Pass แชมเปี้ยน LoL',
        classic: 'คลาสสิก',
        classicDesc: 'ทายจากคำใบ้คุณสมบัติ',
        ability: 'ความสามารถ',
        abilityDesc: 'ทายจากไอคอนสกิล',
        splashArt: 'สแปลชอาร์ต',
        splashArtDesc: 'ทายแชมเปี้ยนจากภาพซูม',
        quote: 'คำพูด',
        quoteDesc: 'ทายจากคำพูดสุดเจ๋ง',
        audio: 'เสียง',
        audioDesc: 'ทายจากเสียงแชมเปี้ยน',
        emoji: 'อีโมจิ',
        emojiDesc: 'ทายจากอีโมจิ',
        emojiGameTitle: '😊 ทายแชมเปี้ยนจากอีโมจิ',
        emojiGameSubtitle: 'ถอดรหัสอีโมจิ!',
        guessTeam: 'ทายทีม',
        guessTeamDesc: 'เขาเล่นให้ทีมไหน?',
        guessName: 'ทายชื่อ',
        guessNameDesc: 'ผู้เล่นคนนี้คือใคร?',
        guessIcon: 'ทายไอคอน',
        guessIconDesc: 'โลโก้นี้ของทีมไหน?',
        hardModeGame: 'โหมดยาก',
        hardModeDesc: 'สถิติและทริเวียที่ยาก',
        esportsTrivia: 'ทริเวียอีสปอร์ต',
        esportsTriviaDesc: 'คำถามเกี่ยวกับทัวร์นาเมนต์มืออาชีพ',

        // Buttons
        startGame: 'เริ่มเกม',
        playAgain: 'เล่นอีกครั้ง',
        nextQuestion: 'คำถามถัดไป',
        restart: 'เริ่มใหม่',
        guess: 'ทาย',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'เลือกภูมิภาค',
        allRegions: '🌍 ทุกภูมิภาค',
        lck: 'LCK (เกาหลี)',
        lpl: 'LPL (จีน)',
        lec: 'LEC (ยุโรป)',
        lcs: 'LCS (อเมริกาเหนือ)',
        cblol: 'CBLOL (บราซิล)',
        pcs: 'PCS (แปซิฟิก)',
        vcs: 'VCS (เวียดนาม)',
        lla: 'LLA (ละตินอเมริกา)',
        ljl: 'LJL (ญี่ปุ่น)',

        // Gender selector
        selectGender: 'เลือกเพศ',
        allGenders: '👥 ทั้งหมด',
        male: '👨 ชาย',
        female: '👩 หญิง',

        // Results and stats
        yourResult: 'ผลลัพธ์ของคุณ',
        correct: 'ถูกต้อง',
        incorrect: 'ผิด',
        score: 'คะแนน',
        youGuessed: 'คุณทาย',
        correctAnswer: 'คำตอบที่ถูกต้อง',
        tryAgain: 'ลองอีกครั้ง',
        wellDone: 'เยี่ยมมาก!',
        guessSomething: 'ทายอะไรสักอย่าง...',

        // Quiz questions
        whichChampionHasThisAbility: 'แชมเปี้ยนไหนมีสกิลนี้?',
        whichChampionIsThis: 'นี่คือแชมเปี้ยนไหน?',
        whoSaidThisQuote: 'ใครพูดคำนี้?',

        // Game titles
        classicGameTitle: '🎯 คลาสสิก - ทายแชมเปี้ยน',
        classicGameSubtitle: 'ใช้คำใบ้คุณสมบัติ',
        abilityGameTitle: '⚡ ทายจากสกิล',
        abilityGameSubtitle: 'แชมเปี้ยนไหนมีสกิลนี้?',
        splashGameTitle: '🖼️ ทายจากสแปลชอาร์ต',
        splashGameSubtitle: 'ทายแชมเปี้ยนจากภาพ',
        quoteGameTitle: '💬 ทายจากคำพูด',
        quoteGameSubtitle: 'แชมเปี้ยนไหนพูดคำนี้?',

        // Input placeholders
        enterChampionName: 'ใส่ชื่อแชมเปี้ยน...',
        enterPlayerName: 'ใส่ชื่อผู้เล่น...',
        enterTeamName: 'ใส่ชื่อทีม...',

        // Classic mode attributes
        gender: 'เพศ',
        position: 'ตำแหน่ง',
        species: 'สายพันธุ์',
        resource: 'ทรัพยากร',
        rangeType: 'ประเภทระยะ',
        region: 'ภูมิภาค',

        // Hard Mode & Esports titles
        hardModeTitle: '🔥 โหมดยาก - ทริเวียสุดโหด',
        hardModeSubtitle: 'คำถามยากเกี่ยวกับสถิติและทริเวีย LoL',
        esportsTriviaTitle: '🏆 ทริเวียอีสปอร์ต',
        esportsTriviaSubtitle: 'คำถามเกี่ยวกับทัวร์นาเมนต์ ทีม และผู้เล่น',

        // Counter
        player: 'ผู้เล่น',
        champion: 'แชมเปี้ยน',
        of: 'จาก'
    },

    vi: {
        // Header
        gameTitle: 'Trò Chơi League of Legends',
        subtitle: 'Chọn chế độ chơi của bạn',
        gameModes: 'Chế Độ Chơi',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'Trò Chơi Đoán',
        quizGames: 'Trò Chơi Đố',
        trivia: 'Trivia',
        esports: 'Esports',
        hardMode: 'Chế Độ Khó',

        // Menu items
        menuProPlayers: '👨 Tuyển Thủ Chuyên Nghiệp',
        menuChampions: '⚔️ Tướng',
        menuClassic: '🎯 Cổ Điển',
        menuAbility: '⚡ Kỹ Năng',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Câu Nói',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Âm Thanh',
        menuGuessTeam: '🏆 Đoán Đội',
        menuGuessName: '👤 Đoán Tên',
        menuGuessIcon: '🎯 Đoán Icon',
        menuHardMode: '🔥 Trivia Cực Khó',
        menuEsportsTrivia: '🏆 Trivia Esports',
        menuDailyRun: '🎮 Thử Thách Hàng Ngày',
        menuRanking: '🏅 Xếp Hạng',

        // Daily Challenge
        dailyChallenge: 'Thử Thách Hàng Ngày',
        dailyRunTitle: '🎮 Thử Thách Hàng Ngày',
        dailyRunSubtitle: 'Hoàn thành tất cả thử thách và leo bảng xếp hạng!',
        rankingTitle: '🏅 Xếp Hạng',
        rankingSubtitle: 'Người Chơi Xuất Sắc Hôm Nay',
        todayScore: 'Điểm Hôm Nay:',
        enterUsername: 'Nhập tên người dùng',
        submitScore: 'Gửi Điểm',
        playDailyRun: 'Bắt Đầu Thử Thách',
        alreadyPlayed: 'Bạn đã chơi hôm nay rồi! Quay lại vào ngày mai.',
        comeBackTomorrow: 'Quay lại vào ngày mai để có thử thách mới!',
        challengeComplete: 'Hoàn Thành Thử Thách!',
        finalScore: 'Điểm Cuối Cùng:',
        rank: 'Hạng',
        username: 'Tên Người Dùng',
        points: 'Điểm',
        noScoresToday: 'Chưa có điểm nào hôm nay. Hãy là người đầu tiên!',
        challenge: 'Thử Thách',

        // Game cards
        proPlayers: 'Tuyển Thủ Chuyên Nghiệp',
        proPlayersDesc: 'Chọn tuyển thủ yêu thích của bạn',
        champions: 'Tướng',
        championsDesc: 'Smash or Pass tướng LoL',
        classic: 'Cổ Điển',
        classicDesc: 'Đoán từ gợi ý thuộc tính',
        ability: 'Kỹ Năng',
        abilityDesc: 'Đoán từ icon kỹ năng',
        splashArt: 'Splash Art',
        splashArtDesc: 'Đoán tướng từ ảnh phóng to',
        quote: 'Câu Nói',
        quoteDesc: 'Đoán từ câu nói nổi tiếng',
        audio: 'Âm Thanh',
        audioDesc: 'Đoán từ giọng nói tướng',
        emoji: 'Emoji',
        emojiDesc: 'Đoán từ emoji',
        emojiGameTitle: '😊 Đoán Tướng Từ Emoji',
        emojiGameSubtitle: 'Giải mã emoji!',
        guessTeam: 'Đoán Đội',
        guessTeamDesc: 'Anh ấy chơi cho đội nào?',
        guessName: 'Đoán Tên',
        guessNameDesc: 'Người chơi này là ai?',
        guessIcon: 'Đoán Icon',
        guessIconDesc: 'Logo này của đội nào?',
        hardModeGame: 'Chế Độ Khó',
        hardModeDesc: 'Thống kê khó và trivia',
        esportsTrivia: 'Trivia Esports',
        esportsTriviaDesc: 'Câu hỏi về giải đấu chuyên nghiệp',

        // Buttons
        startGame: 'Bắt Đầu Chơi',
        playAgain: 'Chơi Lại',
        nextQuestion: 'Câu Hỏi Tiếp Theo',
        restart: 'Khởi Động Lại',
        guess: 'Đoán',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Chọn Khu Vực',
        allRegions: '🌍 Tất Cả Khu Vực',
        lck: 'LCK (Hàn Quốc)',
        lpl: 'LPL (Trung Quốc)',
        lec: 'LEC (Châu Âu)',
        lcs: 'LCS (Bắc Mỹ)',
        cblol: 'CBLOL (Brazil)',
        pcs: 'PCS (Thái Bình Dương)',
        vcs: 'VCS (Việt Nam)',
        lla: 'LLA (Mỹ Latin)',
        ljl: 'LJL (Nhật Bản)',

        // Gender selector
        selectGender: 'Chọn Giới Tính',
        allGenders: '👥 Tất Cả',
        male: '👨 Nam',
        female: '👩 Nữ',

        // Results and stats
        yourResult: 'Kết Quả Của Bạn',
        correct: 'Đúng',
        incorrect: 'Sai',
        score: 'Điểm',
        youGuessed: 'Bạn Đoán',
        correctAnswer: 'Đáp Án Đúng',
        tryAgain: 'Thử Lại',
        wellDone: 'Tốt Lắm!',
        guessSomething: 'Đoán gì đó...',

        // Quiz questions
        whichChampionHasThisAbility: 'Tướng nào có kỹ năng này?',
        whichChampionIsThis: 'Đây là tướng nào?',
        whoSaidThisQuote: 'Ai đã nói câu này?',

        // Game titles
        classicGameTitle: '🎯 Cổ Điển - Đoán Tướng',
        classicGameSubtitle: 'Sử dụng gợi ý thuộc tính',
        abilityGameTitle: '⚡ Đoán Từ Kỹ Năng',
        abilityGameSubtitle: 'Tướng nào có kỹ năng này?',
        splashGameTitle: '🖼️ Đoán Từ Splash Art',
        splashGameSubtitle: 'Đoán tướng từ hình ảnh',
        quoteGameTitle: '💬 Đoán Từ Câu Nói',
        quoteGameSubtitle: 'Tướng nào nói câu này?',

        // Input placeholders
        enterChampionName: 'Nhập tên tướng...',
        enterPlayerName: 'Nhập tên người chơi...',
        enterTeamName: 'Nhập tên đội...',

        // Classic mode attributes
        gender: 'Giới Tính',
        position: 'Vị Trí',
        species: 'Chủng Loại',
        resource: 'Tài Nguyên',
        rangeType: 'Loại Tầm',
        region: 'Khu Vực',

        // Hard Mode & Esports titles
        hardModeTitle: '🔥 Chế Độ Khó - Trivia Cực Khó',
        hardModeSubtitle: 'Câu hỏi khó về thống kê và trivia LoL',
        esportsTriviaTitle: '🏆 Trivia Esports',
        esportsTriviaSubtitle: 'Câu hỏi về giải đấu, đội và tuyển thủ',

        // Counter
        player: 'Tuyển Thủ',
        champion: 'Tướng',
        of: 'của'
    },

    id: {
        // Header
        gameTitle: 'Game League of Legends',
        subtitle: 'Pilih mode game Anda',
        gameModes: 'Mode Game',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'Game Tebak',
        quizGames: 'Game Kuis',
        trivia: 'Trivia',
        esports: 'Esports',
        hardMode: 'Mode Sulit',

        // Menu items
        menuProPlayers: '👨 Pemain Pro',
        menuChampions: '⚔️ Champion',
        menuClassic: '🎯 Klasik',
        menuAbility: '⚡ Kemampuan',
        menuSplashArt: '🖼️ Splash Art',
        menuQuote: '💬 Kutipan',
        menuEmoji: '😊 Emoji',
        menuAudio: '🔊 Audio',
        menuGuessTeam: '🏆 Tebak Tim',
        menuGuessName: '👤 Tebak Nama',
        menuGuessIcon: '🎯 Tebak Ikon',
        menuHardMode: '🔥 Trivia Ekstrem',
        menuEsportsTrivia: '🏆 Trivia Esports',
        menuDailyRun: '🎮 Tantangan Harian',
        menuRanking: '🏅 Peringkat',

        // Daily Challenge
        dailyChallenge: 'Tantangan Harian',
        dailyRunTitle: '🎮 Tantangan Harian',
        dailyRunSubtitle: 'Selesaikan semua tantangan dan naik peringkat!',
        rankingTitle: '🏅 Peringkat',
        rankingSubtitle: 'Pemain Terbaik Hari Ini',
        todayScore: 'Skor Hari Ini:',
        enterUsername: 'Masukkan nama pengguna',
        submitScore: 'Kirim Skor',
        playDailyRun: 'Mulai Tantangan',
        alreadyPlayed: 'Anda sudah bermain hari ini! Kembali lagi besok.',
        comeBackTomorrow: 'Kembali besok untuk tantangan baru!',
        challengeComplete: 'Tantangan Selesai!',
        finalScore: 'Skor Akhir:',
        rank: 'Peringkat',
        username: 'Nama Pengguna',
        points: 'Poin',
        noScoresToday: 'Belum ada skor hari ini. Jadilah yang pertama!',
        challenge: 'Tantangan',

        // Game cards
        proPlayers: 'Pemain Pro',
        proPlayersDesc: 'Pilih pemain pro favorit Anda',
        champions: 'Champion',
        championsDesc: 'Smash or Pass champion LoL',
        classic: 'Klasik',
        classicDesc: 'Tebak dari petunjuk atribut',
        ability: 'Kemampuan',
        abilityDesc: 'Tebak dari ikon kemampuan',
        splashArt: 'Splash Art',
        splashArtDesc: 'Tebak champion dari zoom',
        quote: 'Kutipan',
        quoteDesc: 'Tebak dari kutipan ikonik',
        audio: 'Audio',
        audioDesc: 'Tebak dari suara champion',
        emoji: 'Emoji',
        emojiDesc: 'Tebak dari emoji',
        emojiGameTitle: '😊 Tebak Champion dari Emoji',
        emojiGameSubtitle: 'Pecahkan kode emoji!',
        guessTeam: 'Tebak Tim',
        guessTeamDesc: 'Di tim mana dia bermain?',
        guessName: 'Tebak Nama',
        guessNameDesc: 'Siapa pemain ini?',
        guessIcon: 'Tebak Ikon',
        guessIconDesc: 'Logo tim mana ini?',
        hardModeGame: 'Mode Sulit',
        hardModeDesc: 'Statistik sulit dan trivia',
        esportsTrivia: 'Trivia Esports',
        esportsTriviaDesc: 'Pertanyaan tentang turnamen profesional',

        // Buttons
        startGame: 'Mulai Game',
        playAgain: 'Main Lagi',
        nextQuestion: 'Pertanyaan Berikutnya',
        restart: 'Mulai Ulang',
        guess: 'Tebak',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'Pilih Wilayah',
        allRegions: '🌍 Semua Wilayah',
        lck: 'LCK (Korea)',
        lpl: 'LPL (China)',
        lec: 'LEC (Eropa)',
        lcs: 'LCS (Amerika Utara)',
        cblol: 'CBLOL (Brasil)',
        pcs: 'PCS (Pasifik)',
        vcs: 'VCS (Vietnam)',
        lla: 'LLA (Amerika Latin)',
        ljl: 'LJL (Jepang)',

        // Gender selector
        selectGender: 'Pilih Jenis Kelamin',
        allGenders: '👥 Semua',
        male: '👨 Laki-laki',
        female: '👩 Perempuan',

        // Results and stats
        yourResult: 'Hasil Anda',
        correct: 'Benar',
        incorrect: 'Salah',
        score: 'Skor',
        youGuessed: 'Tebakan Anda',
        correctAnswer: 'Jawaban Benar',
        tryAgain: 'Coba Lagi',
        wellDone: 'Bagus Sekali!',
        guessSomething: 'Tebak sesuatu...',

        // Quiz questions
        whichChampionHasThisAbility: 'Champion mana yang punya kemampuan ini?',
        whichChampionIsThis: 'Ini champion apa?',
        whoSaidThisQuote: 'Siapa yang bilang kutipan ini?',

        // Game titles
        classicGameTitle: '🎯 Klasik - Tebak Champion',
        classicGameSubtitle: 'Gunakan petunjuk atribut',
        abilityGameTitle: '⚡ Tebak dari Kemampuan',
        abilityGameSubtitle: 'Champion mana yang punya kemampuan ini?',
        splashGameTitle: '🖼️ Tebak dari Splash Art',
        splashGameSubtitle: 'Tebak champion dari gambar',
        quoteGameTitle: '💬 Tebak dari Kutipan',
        quoteGameSubtitle: 'Champion mana yang bilang kutipan ini?',

        // Input placeholders
        enterChampionName: 'Masukkan nama champion...',
        enterPlayerName: 'Masukkan nama pemain...',
        enterTeamName: 'Masukkan nama tim...',

        // Classic mode attributes
        gender: 'Jenis Kelamin',
        position: 'Posisi',
        species: 'Spesies',
        resource: 'Sumber Daya',
        rangeType: 'Tipe Jangkauan',
        region: 'Wilayah',

        // Hard Mode & Esports titles
        hardModeTitle: '🔥 Mode Sulit - Trivia Ekstrem',
        hardModeSubtitle: 'Pertanyaan sulit tentang statistik dan trivia LoL',
        esportsTriviaTitle: '🏆 Trivia Esports',
        esportsTriviaSubtitle: 'Pertanyaan tentang turnamen, tim, dan pemain',

        // Counter
        player: 'Pemain',
        champion: 'Champion',
        of: 'dari'
    },

    ar: {
        // Header
        gameTitle: 'ألعاب League of Legends',
        subtitle: 'اختر وضع اللعبة',
        gameModes: 'أوضاع اللعبة',

        // Categories
        smashOrPass: 'SMASH OR PASS',
        loldleGames: 'ألعاب التخمين',
        quizGames: 'ألعاب الاختبار',
        trivia: 'أسئلة عامة',
        esports: 'الرياضات الإلكترونية',
        hardMode: 'الوضع الصعب',

        // Menu items
        menuProPlayers: '👨 لاعبون محترفون',
        menuChampions: '⚔️ الأبطال',
        menuClassic: '🎯 كلاسيكي',
        menuAbility: '⚡ القدرة',
        menuSplashArt: '🖼️ صورة البطل',
        menuQuote: '💬 الاقتباس',
        menuEmoji: '😊 إيموجي',
        menuAudio: '🔊 صوت',
        menuGuessTeam: '🏆 خمن الفريق',
        menuGuessName: '👤 خمن الاسم',
        menuGuessIcon: '🎯 خمن الأيقونة',
        menuHardMode: '🔥 أسئلة صعبة',
        menuEsportsTrivia: '🏆 أسئلة الرياضات الإلكترونية',
        menuDailyRun: '🎮 التحدي اليومي',
        menuRanking: '🏅 الترتيب',

        // Daily Challenge
        dailyChallenge: 'التحدي اليومي',
        dailyRunTitle: '🎮 التحدي اليومي',
        dailyRunSubtitle: 'أكمل جميع التحديات واصعد في الترتيب!',
        rankingTitle: '🏅 الترتيب',
        rankingSubtitle: 'أفضل اللاعبين اليوم',
        todayScore: 'النقاط اليوم:',
        enterUsername: 'أدخل اسم المستخدم',
        submitScore: 'إرسال النقاط',
        playDailyRun: 'ابدأ التحدي',
        alreadyPlayed: 'لقد لعبت اليوم بالفعل! عد غداً.',
        comeBackTomorrow: 'عد غداً لتحدي جديد!',
        challengeComplete: 'اكتمل التحدي!',
        finalScore: 'النقاط النهائية:',
        rank: 'الترتيب',
        username: 'اسم المستخدم',
        points: 'النقاط',
        noScoresToday: 'لا توجد نقاط اليوم بعد. كن الأول!',
        challenge: 'التحدي',

        // Game cards
        proPlayers: 'لاعبون محترفون',
        proPlayersDesc: 'اختر المحترفين المفضلين لديك',
        champions: 'الأبطال',
        championsDesc: 'Smash or Pass أبطال LoL',
        classic: 'كلاسيكي',
        classicDesc: 'خمن من تلميحات الخصائص',
        ability: 'القدرة',
        abilityDesc: 'خمن من أيقونة القدرة',
        splashArt: 'صورة البطل',
        splashArtDesc: 'خمن البطل من التكبير',
        quote: 'الاقتباس',
        quoteDesc: 'خمن من الاقتباس الشهير',
        audio: 'صوت',
        audioDesc: 'خمن من صوت البطل',
        emoji: 'إيموجي',
        emojiDesc: 'خمن من الإيموجي',
        emojiGameTitle: '😊 خمن البطل من الإيموجي',
        emojiGameSubtitle: 'فك شفرة الإيموجي!',
        guessTeam: 'خمن الفريق',
        guessTeamDesc: 'في أي فريق لعب؟',
        guessName: 'خمن الاسم',
        guessNameDesc: 'من هذا اللاعب؟',
        guessIcon: 'خمن الأيقونة',
        guessIconDesc: 'شعار أي فريق هذا؟',
        hardModeGame: 'الوضع الصعب',
        hardModeDesc: 'إحصائيات صعبة وأسئلة',
        esportsTrivia: 'أسئلة الرياضات الإلكترونية',
        esportsTriviaDesc: 'أسئلة حول البطولات الاحترافية',

        // Buttons
        startGame: 'ابدأ اللعبة',
        playAgain: 'العب مرة أخرى',
        nextQuestion: 'السؤال التالي',
        restart: 'إعادة التشغيل',
        guess: 'خمن',
        smash: 'SMASH',
        pass: 'PASS',

        // Region selector
        selectRegion: 'اختر المنطقة',
        allRegions: '🌍 جميع المناطق',
        lck: 'LCK (كوريا)',
        lpl: 'LPL (الصين)',
        lec: 'LEC (أوروبا)',
        lcs: 'LCS (أمريكا الشمالية)',
        cblol: 'CBLOL (البرازيل)',
        pcs: 'PCS (المحيط الهادئ)',
        vcs: 'VCS (فيتنام)',
        lla: 'LLA (أمريكا اللاتينية)',
        ljl: 'LJL (اليابان)',

        // Gender selector
        selectGender: 'اختر الجنس',
        allGenders: '👥 الكل',
        male: '👨 ذكر',
        female: '👩 أنثى',

        // Results and stats
        yourResult: 'نتيجتك',
        correct: 'صحيح',
        incorrect: 'خطأ',
        score: 'النقاط',
        youGuessed: 'خمنت',
        correctAnswer: 'الإجابة الصحيحة',
        tryAgain: 'حاول مرة أخرى',
        wellDone: 'أحسنت!',
        guessSomething: 'خمن شيئاً...',

        // Quiz questions
        whichChampionHasThisAbility: 'أي بطل لديه هذه القدرة؟',
        whichChampionIsThis: 'من هذا البطل؟',
        whoSaidThisQuote: 'من قال هذا الاقتباس؟',

        // Game titles
        classicGameTitle: '🎯 كلاسيكي - خمن البطل',
        classicGameSubtitle: 'استخدم تلميحات الخصائص',
        abilityGameTitle: '⚡ خمن من القدرة',
        abilityGameSubtitle: 'أي بطل لديه هذه القدرة؟',
        splashGameTitle: '🖼️ خمن من صورة البطل',
        splashGameSubtitle: 'خمن البطل من الصورة',
        quoteGameTitle: '💬 خمن من الاقتباس',
        quoteGameSubtitle: 'أي بطل يقول هذا الاقتباس؟',

        // Input placeholders
        enterChampionName: 'أدخل اسم البطل...',
        enterPlayerName: 'أدخل اسم اللاعب...',
        enterTeamName: 'أدخل اسم الفريق...',

        // Classic mode attributes
        gender: 'الجنس',
        position: 'الموقع',
        species: 'النوع',
        resource: 'المورد',
        rangeType: 'نوع المدى',
        region: 'المنطقة',

        // Hard Mode & Esports titles
        hardModeTitle: '🔥 الوضع الصعب - أسئلة صعبة',
        hardModeSubtitle: 'أسئلة صعبة حول الإحصائيات وأسئلة LoL',
        esportsTriviaTitle: '🏆 أسئلة الرياضات الإلكترونية',
        esportsTriviaSubtitle: 'أسئلة حول البطولات والفرق واللاعبين',

        // Counter
        player: 'لاعب',
        champion: 'بطل',
        of: 'من'
    }
};

// Language management
let currentLang = 'en'; // Idioma de la interfaz (solo EN/ES)
let currentVoiceLang = 'default'; // Idioma de las voces (25 idiomas)
let currentLangDisplay = '🇺🇸 English (US)';

// Mapa de idiomas a nombre completo
const languageNames = {
    'en_us': '🇺🇸 English (US)',
    'en_gb': '🇬🇧 English (UK)',
    'en_au': '🇦🇺 English (AU)',
    'es_mx': '🇲🇽 Español (MX)',
    'es_es': '🇪🇸 Español (ES)',
    'es_ar': '🇦🇷 Español (AR)',
    'pt_br': '🇧🇷 Português (BR)',
    'fr_fr': '🇫🇷 Français',
    'de_de': '🇩🇪 Deutsch',
    'it_it': '🇮🇹 Italiano',
    'pl_pl': '🇵🇱 Polski',
    'ru_ru': '🇷🇺 Русский',
    'tr_tr': '🇹🇷 Türkçe',
    'cs_cz': '🇨🇿 Čeština',
    'el_gr': '🇬🇷 Ελληνικά',
    'hu_hu': '🇭🇺 Magyar',
    'ro_ro': '🇷🇴 Română',
    'ja_jp': '🇯🇵 日本語',
    'ko_kr': '🇰🇷 한국어',
    'zh_cn': '🇨🇳 简体中文',
    'zh_tw': '🇹🇼 繁體中文',
    'th_th': '🇹🇭 ไทย',
    'vi_vn': '🇻🇳 Tiếng Việt',
    'id_id': '🇮🇩 Bahasa Indonesia',
    'ar_ae': '🇦🇪 العربية'
};

// Detect browser language
function detectLanguage() {
    const browserLang = (navigator.language || navigator.userLanguage).toLowerCase();

    // Mapeo de idiomas de navegador a códigos de voz
    const voiceLangMap = {
        'es-mx': 'es_mx', 'es-ar': 'es_ar', 'es-es': 'es_es',
        'pt-br': 'pt_br', 'pt': 'pt_br',
        'fr': 'fr_fr', 'fr-fr': 'fr_fr',
        'de': 'de_de', 'de-de': 'de_de',
        'it': 'it_it', 'it-it': 'it_it',
        'pl': 'pl_pl', 'pl-pl': 'pl_pl',
        'ru': 'ru_ru', 'ru-ru': 'ru_ru',
        'tr': 'tr_tr', 'tr-tr': 'tr_tr',
        'cs': 'cs_cz', 'cs-cz': 'cs_cz',
        'el': 'el_gr', 'el-gr': 'el_gr',
        'hu': 'hu_hu', 'hu-hu': 'hu_hu',
        'ro': 'ro_ro', 'ro-ro': 'ro_ro',
        'ja': 'ja_jp', 'ja-jp': 'ja_jp',
        'ko': 'ko_kr', 'ko-kr': 'ko_kr',
        'zh-cn': 'zh_cn', 'zh-hans': 'zh_cn',
        'zh-tw': 'zh_tw', 'zh-hant': 'zh_tw',
        'th': 'th_th', 'th-th': 'th_th',
        'vi': 'vi_vn', 'vi-vn': 'vi_vn',
        'id': 'id_id', 'id-id': 'id_id',
        'ar': 'ar_ae', 'ar-ae': 'ar_ae',
        'en-gb': 'en_gb', 'en-au': 'en_au'
    };

    // Mapeo de idiomas de navegador a idiomas de interfaz
    const uiLangMap = {
        'es': 'es',
        'pt': 'pt',
        'fr': 'fr',
        'de': 'de',
        'it': 'it',
        'pl': 'pl',
        'ru': 'ru',
        'tr': 'tr',
        'cs': 'cs',
        'ja': 'ja',
        'ko': 'ko',
        'zh': 'zh',
        'el': 'el',
        'hu': 'hu',
        'ro': 'ro',
        'th': 'th',
        'vi': 'vi',
        'id': 'id',
        'ar': 'ar'
    };

    // Detectar idioma de voz específico
    let voiceLangDetected = false;
    for (const [key, value] of Object.entries(voiceLangMap)) {
        if (browserLang.startsWith(key)) {
            currentVoiceLang = value;
            currentLangDisplay = languageNames[value];
            voiceLangDetected = true;
            break;
        }
    }

    // Si no se detectó idioma de voz, usar inglés US por defecto
    if (!voiceLangDetected) {
        currentVoiceLang = 'default';
        currentLangDisplay = languageNames['en_us'];
    }

    // Detectar idioma de interfaz
    let uiLangDetected = false;
    for (const [key, value] of Object.entries(uiLangMap)) {
        if (browserLang.startsWith(key)) {
            currentLang = value;
            uiLangDetected = true;
            break;
        }
    }

    // Si no se detectó idioma de interfaz, usar inglés por defecto
    if (!uiLangDetected) {
        currentLang = 'en';
    }
}

// Get translation
function t(key) {
    return translations[currentLang][key] || key;
}

// Initialize language
function initLanguage() {
    const savedLang = localStorage.getItem('gameLanguage');
    const savedVoiceLang = localStorage.getItem('gameVoiceLanguage');

    if (savedLang) {
        currentLang = savedLang;
    }
    if (savedVoiceLang) {
        currentVoiceLang = savedVoiceLang;
        const langCode = savedVoiceLang === 'default' ? 'en_us' : savedVoiceLang;
        currentLangDisplay = languageNames[langCode] || languageNames['en_us'];
    }

    if (!savedLang || !savedVoiceLang) {
        detectLanguage();
        localStorage.setItem('gameLanguage', currentLang);
        localStorage.setItem('gameVoiceLanguage', currentVoiceLang);
    }

    updateLanguageDisplay();
    updatePageText();
}

// Update language display
function updateLanguageDisplay() {
    const currentLangEl = document.getElementById('currentLangDisplay');
    if (currentLangEl) {
        currentLangEl.textContent = currentLangDisplay;
    }

    document.documentElement.lang = currentLang;

    // Marcar idioma activo en el dropdown
    document.querySelectorAll('.lang-option').forEach(option => {
        const voiceLang = option.dataset.voice;
        option.classList.toggle('active', voiceLang === currentVoiceLang);
    });
}

// Update all page text
function updatePageText() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
}

// Switch language (dropdown handler)
function switchLanguage(uiLang, voiceLang, displayName) {
    // Mapeo de códigos de idioma a idiomas de interfaz
    const langMap = {
        'en_us': 'en', 'en_gb': 'en', 'en_au': 'en',
        'es_mx': 'es', 'es_es': 'es', 'es_ar': 'es',
        'pt_br': 'pt',
        'fr_fr': 'fr',
        'de_de': 'de',
        'it_it': 'it',
        'pl_pl': 'pl',
        'ru_ru': 'ru',
        'tr_tr': 'tr',
        'cs_cz': 'cs',
        'el_gr': 'el', // Griego
        'hu_hu': 'hu', // Húngaro
        'ro_ro': 'ro', // Rumano
        'ja_jp': 'ja', // Japonés
        'ko_kr': 'ko', // Coreano
        'zh_cn': 'zh', // Chino Simplificado
        'zh_tw': 'zh', // Chino Tradicional
        'th_th': 'th', // Tailandés
        'vi_vn': 'vi', // Vietnamita
        'id_id': 'id', // Indonesio
        'ar_ae': 'ar'  // Árabe
    };

    // Actualizar idioma de interfaz
    currentLang = langMap[voiceLang] || 'en';

    // Actualizar idioma de voz
    currentVoiceLang = voiceLang;
    currentLangDisplay = displayName;

    // Guardar preferencias
    localStorage.setItem('gameLanguage', currentLang);
    localStorage.setItem('gameVoiceLanguage', currentVoiceLang);

    // Actualizar UI
    updateLanguageDisplay();
    updatePageText();

    // Si estamos en modo audio, recargar los audios con el nuevo idioma
    const audioContainer = document.getElementById('loldleAudioContainer');
    if (audioContainer && audioContainer.style.display !== 'none' && currentAudioChampion) {
        console.log('🔄 Recargando audios con nuevo idioma:', currentVoiceLang);
        reloadAudioWithNewLanguage();
    }
}

// Dropdown functionality (will be initialized in main DOMContentLoaded)

// ========== END OF INTERNATIONALIZATION ==========

// BASE DE DATOS EXPANDIDA: ~124 JUGADORES PROFESIONALES
// Las imágenes se cargan desde ./images/players/ con fallback a avatares generados

// Función helper para obtener URL del logo del equipo con múltiples fallbacks
function getTeamLogoUrl(teamName, teamCode) {
    // Mapeo de nombres de equipos a códigos/slugs conocidos
    const teamMapping = {
        'Gen.G Esports': 'GEN',
        'Hanwha Life Esports': 'HLE',
        'Dplus KIA': 'DK',
        'T1': 'T1',
        'KT Rolster': 'KT',
        'NONGSHIM RED FORCE': 'NS',
        'Kwangdong Freecs': 'KDF',
        'OKSavingsBank BRION': 'BRO',
        'DRX': 'DRX',
        'Liiv SANDBOX': 'LSB',
        'Team Liquid': 'TL',
        'Cloud9': 'C9',
        'FlyQuest': 'FLY',
        'G2 Esports': 'G2',
        'Fnatic': 'FNC',
        'MAD Lions': 'MAD',
        'Rogue': 'RGE',
        'Team Vitality': 'VIT',
        'SK Gaming': 'SK',
        'Team BDS': 'BDS',
        'GIANTX': 'GX',
        'Karmine Corp': 'KC',
        'PENTAGRAM': 'PGM',
        'EVOS Esports': 'EVOS',
        'Ascension Gaming': 'ASG',
        'DetonatioN FocusMe': 'DFM',
        'V3 Esports': 'V3',
        'Sengoku Gaming': 'SG',
        'Fukuoka SoftBank HAWKS gaming': 'SBHG',
        'FURIA': 'FUR',
        'Flamengo': 'FLA',
        'LOUD': 'LOUD',
        'paiN Gaming': 'PNG',
        'RED Canids': 'RED',
        'Vivo Keyd': 'KBM',
        'BNK FEARX': 'FRX',
        'PSG Talon': 'PSG',
        'JD Gaming': 'JDG',
        'Bilibili Gaming': 'BLG',
        'Top Esports': 'TES',
        'LNG Esports': 'LNG',
        'Weibo Gaming': 'WBG',
        'FunPlus Phoenix': 'FPX',
        'Invictus Gaming': 'IG',
        'Royal Never Give Up': 'RNG',
        'EDward Gaming': 'EDG',
        'Oh My God': 'OMG',
        '100 Thieves': '100T',
        'Dignitas': 'DIG',
        'Golden Guardians': 'GG',
        'Immortals': 'IMT',
        'NRG': 'NRG',
        'CLG': 'CLG',
        'Rare Atom': 'RA',
        'Team WE': 'WE',
        'LGD Gaming': 'LGD',
        'Ultra Prime': 'UP',
        'GAM Esports': 'GC',
        'ThunderTalk Gaming': 'TT',
        'Team Secret': 'TS'
    };

    // Intentar obtener código del mapeo
    const code = teamMapping[teamName] || teamCode;

    // Lista de URLs para intentar en orden
    const urls = [
        // 1. Logo local si existe (ruta sin ./)
        `images/teams/${code}.png`,
        // 2. Fallback: Logo desde subdirectorio alternativo
        `./images/teams/${code}.png`,
        // 3. Fallback final: generar logo con iniciales más visible
        `https://ui-avatars.com/api/?name=${encodeURIComponent(code)}&size=300&background=0a1428&color=C8AA6E&bold=true&font-size=0.4&rounded=false&format=svg`
    ];

    return urls;
}

// Función para cargar imagen con múltiples fallbacks
function loadImageWithFallbacks(imgElement, urls, finalFallback = null, currentIndex = 0) {
    if (currentIndex >= urls.length) {
        if (finalFallback) {
            console.log('Usando fallback final para la imagen');
            imgElement.src = finalFallback;
            imgElement.onerror = null;
            return;
        }
        console.error('No se pudo cargar ninguna URL para la imagen');
        return;
    }

    imgElement.src = urls[currentIndex];

    imgElement.onerror = function() {
        console.log(`Falló carga de: ${urls[currentIndex]}, intentando siguiente...`);
        loadImageWithFallbacks(imgElement, urls, finalFallback, currentIndex + 1);
    };

    imgElement.onload = function() {
        console.log(`Imagen cargada exitosamente desde: ${urls[currentIndex]}`);
        this.onerror = null;
        this.onload = null;
    };
}

const players = [
    { name: "Moyashi", realName: "Moyashi", role: "bottom", team: "PENTAGRAM", teamCode: "PRO", region: "LJL" },
    { name: "N0way", realName: "N0way", role: "bottom", team: "EVOS Esports", teamCode: "PRO", region: "LJL" },
    { name: "Rich", realName: "Rich", role: "support", team: "Ascension Gaming", teamCode: "PRO", region: "LJL" },
    { name: "hAFu", realName: "hAFu", role: "mid", team: "PENTAGRAM", teamCode: "PRO", region: "LJL" },
    { name: "Once", realName: "Once", role: "jungle", team: "PENTAGRAM", teamCode: "PRO", region: "LJL" },
    { name: "Paz", realName: "Paz", role: "top", team: "PENTAGRAM", teamCode: "PRO", region: "LJL" },
    { name: "Gaeng", realName: "Gaeng", role: "support", team: "PENTAGRAM", teamCode: "PRO", region: "LJL" },
    { name: "Ramune", realName: "Ramune", role: "mid", team: "PENTAGRAM", teamCode: "PRO", region: "LJL" },
    { name: "Chovy", realName: "Chovy", role: "mid", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "Kiin", realName: "Kiin", role: "top", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "Toye", realName: "Toye", role: "jungle", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "Canyon", realName: "Canyon", role: "jungle", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "SIRIUSS", realName: "SIRIUSS", role: "support", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "About", realName: "About", role: "bottom", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "Kemish", realName: "Kemish", role: "mid", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "Namgung", realName: "Namgung", role: "support", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "Ruler", realName: "Ruler", role: "bottom", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "HorangE", realName: "HorangE", role: "top", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "Dahlia", realName: "Dahlia", role: "support", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "SunSunSun", realName: "SunSunSun", role: "mid", team: "Ascension Gaming", teamCode: "PRO", region: "LJL" },
    { name: "Winner", realName: "Winner", role: "jungle", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "Duro", realName: "Duro", role: "support", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "Niksar", realName: "Niksar", role: "bottom", team: "Ascension Gaming", teamCode: "PRO", region: "LJL" },
    { name: "Zeka", realName: "Zeka", role: "mid", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Lure", realName: "Lure", role: "none", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Hanbyeol", realName: "Hanbyeol", role: "top", team: "Gen.G Esports", teamCode: "PRO", region: "LCK" },
    { name: "Bluffing", realName: "Bluffing", role: "none", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Viper", realName: "Viper", role: "bottom", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Rooster", realName: "Rooster", role: "none", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Zeus", realName: "Zeus", role: "top", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Pyeonsik", realName: "Pyeonsik", role: "none", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Baut", realName: "Baut", role: "none", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Tempester", realName: "Tempester", role: "none", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Jackal", realName: "Jackal", role: "none", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Grizzly", realName: "Grizzly", role: "none", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Kangin", realName: "Kangin", role: "top", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Peanut", realName: "Peanut", role: "jungle", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Delight", realName: "Delight", role: "support", team: "Hanwha Life Esports", teamCode: "PRO", region: "LCK" },
    { name: "Tutsz", realName: "Tutsz", role: "mid", team: "FURIA", teamCode: "PRO", region: "CBLOL" },
    { name: "Guigo", realName: "Guigo", role: "top", team: "FURIA", teamCode: "PRO", region: "CBLOL" },
    { name: "Ayu", realName: "Ayu", role: "bottom", team: "FURIA", teamCode: "PRO", region: "CBLOL" },
    { name: "Tatu", realName: "Tatu", role: "jungle", team: "FURIA", teamCode: "PRO", region: "CBLOL" },
    { name: "JoJo", realName: "JoJo", role: "support", team: "FURIA", teamCode: "PRO", region: "CBLOL" },
    { name: "Geum go", realName: "Geum go", role: "none", team: "Flamengo ", teamCode: "PRO", region: "CBLOL" },
    { name: "Mito", realName: "Mito", role: "top", team: "Flamengo ", teamCode: "PRO", region: "CBLOL" },
    { name: "Taikki", realName: "Taikki", role: "jungle", team: "Bursaspor Esports", teamCode: "PRO", region: "LEC" },
    { name: "Ray Lefty", realName: "Ray Lefty", role: "jungle", team: "Bursaspor Esports", teamCode: "PRO", region: "LEC" },
    { name: "Jjun", realName: "Jjun", role: "jungle", team: "Team Mineski", teamCode: "PRO", region: "LJL" },
    { name: "RayFarky", realName: "RayFarky", role: "top", team: "DetonatioN FocusMe", teamCode: "PRO", region: "LJL" },
    { name: "Citrus", realName: "Citrus", role: "jungle", team: "DetonatioN FocusMe", teamCode: "PRO", region: "LJL" },
    { name: "Arumik", realName: "Arumik", role: "top", team: "Unsold Stuff Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Kakkun", realName: "Kakkun", role: "bottom", team: "DetonatioN FocusMe", teamCode: "PRO", region: "LJL" },
    { name: "QaspieL", realName: "QaspieL", role: "jungle", team: "Kuala Lumpur Hunters", teamCode: "PRO", region: "LEC" },
    { name: "Momo", realName: "Momo", role: "top", team: "DetonatioN FocusMe", teamCode: "PRO", region: "LJL" },
    { name: "Harp", realName: "Harp", role: "support", team: "DetonatioN FocusMe", teamCode: "PRO", region: "LJL" },
    { name: "Aria", realName: "Aria", role: "mid", team: "DetonatioN FocusMe", teamCode: "PRO", region: "LJL" },
    { name: "Keymaker", realName: "Keymaker", role: "bottom", team: "Unsold Stuff Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Exosen", realName: "Exosen", role: "mid", team: "Team Mineski", teamCode: "PRO", region: "LJL" },
    { name: "Diamondprox", realName: "Diamondprox", role: "jungle", team: "Team Spirit", teamCode: "PRO", region: "LCL" },
    { name: "Yang0", realName: "Yang0", role: "top", team: "CBLoL", teamCode: "PRO", region: "CBLOL" },
    { name: "Revolta", realName: "Revolta", role: "jungle", team: "CBLoL", teamCode: "PRO", region: "CBLOL" },
    { name: "Atom", realName: "Atom", role: "top", team: "Team Just", teamCode: "PRO", region: "LEC" },
    { name: "Zantins", realName: "Zantins", role: "top", team: "CBLoL", teamCode: "PRO", region: "CBLOL" },
    { name: "Edward", realName: "Edward", role: "support", team: "Team Spirit", teamCode: "PRO", region: "LCL" },
    { name: "Paranoia", realName: "Paranoia", role: "mid", team: "Team Just", teamCode: "PRO", region: "LEC" },
    { name: "Fix", realName: "Fix", role: "bottom", team: "CLS", teamCode: "PRO", region: "LEC" },
    { name: "Tierwulf", realName: "Tierwulf", role: "jungle", team: "CLS", teamCode: "PRO", region: "LEC" },
    { name: "TitaN", realName: "TitaN", role: "bottom", team: "CBLoL", teamCode: "PRO", region: "CBLOL" },
    { name: "dyNquedo", realName: "dyNquedo", role: "mid", team: "CBLoL", teamCode: "PRO", region: "CBLOL" },
    { name: "Slow", realName: "Slow", role: "support", team: "CLS", teamCode: "PRO", region: "LEC" },
    { name: "WARANGELUS", realName: "WARANGELUS", role: "bottom", team: "CLS", teamCode: "PRO", region: "LEC" },
    { name: "Plugo", realName: "Plugo", role: "mid", team: "CLS", teamCode: "PRO", region: "LEC" },
    { name: "Ranger", realName: "Ranger", role: "jungle", team: "CBLoL", teamCode: "PRO", region: "CBLOL" },
    { name: "micaO", realName: "micaO", role: "bottom", team: "CBLoL", teamCode: "PRO", region: "CBLOL" },
    { name: "tockerssss", realName: "tockerssss", role: "mid", team: "CBLoL", teamCode: "PRO", region: "CBLOL" },
    { name: "Rakyz", realName: "Rakyz", role: "mid", team: "CLS", teamCode: "PRO", region: "LEC" },
    { name: "Rod", realName: "Rod", role: "jungle", team: "CLS", teamCode: "PRO", region: "LEC" },
    { name: "Riyev", realName: "Riyev", role: "support", team: "CBLoL", teamCode: "PRO", region: "CBLOL" },
    { name: " lukasnegro", realName: " lukasnegro", role: "top", team: "CLS", teamCode: "PRO", region: "LEC" },
    { name: "Lucid", realName: "Lucid", role: "jungle", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "Alive", realName: "Alive", role: "bottom", team: "Pars eSpor Kulübü", teamCode: "PRO", region: "LEC" },
    { name: "Shadow", realName: "Shadow", role: "support", team: "CLS", teamCode: "PRO", region: "LEC" },
    { name: "Siwoo", realName: "Siwoo", role: "top", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "Sharvel", realName: "Sharvel", role: "jungle", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "Nate", realName: "Nate", role: "top", team: "CLS", teamCode: "PRO", region: "LEC" },
    { name: "Bible", realName: "Bible", role: "support", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "Wayne", realName: "Wayne", role: "bottom", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "ShowMaker", realName: "ShowMaker", role: "mid", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "Aiming", realName: "Aiming", role: "bottom", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "Jaehyuk", realName: "Jaehyuk", role: "top", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "BeryL", realName: "BeryL", role: "support", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "Thumb", realName: "Thumb", role: "support", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "Crystal", realName: "Crystal", role: "jungle", team: "Pars eSpor Kulübü", teamCode: "PRO", region: "LEC" },
    { name: "Lethenor", realName: "Lethenor", role: "jungle", team: "Pars eSpor Kulübü", teamCode: "PRO", region: "LEC" },
    { name: "Diable", realName: "Diable", role: "bottom", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Wonjin", realName: "Wonjin", role: "jungle", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "VicLa", realName: "VicLa", role: "mid", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Envyy", realName: "Envyy", role: "bottom", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Berr", realName: "Berr", role: "support", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "Garden", realName: "Garden", role: "mid", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "Daystar", realName: "Daystar", role: "mid", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Nevid", realName: "Nevid", role: "top", team: "Dplus KIA", teamCode: "PRO", region: "LCK" },
    { name: "Kellin", realName: "Kellin", role: "support", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Willer", realName: "Willer", role: "jungle", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Career", realName: "Career", role: "none", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Soboro", realName: "Soboro", role: "none", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Enosh", realName: "Enosh", role: "bottom", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Seobi", realName: "Seobi", role: "jungle", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Clear", realName: "Clear", role: "top", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Rookie", realName: "Rookie", role: "mid", team: "RookXi Luo", teamCode: "PRO", region: "LEC" },
    { name: "Licorice", realName: "Licorice", role: "top", team: "Shiporice", teamCode: "PRO", region: "LEC" },
    { name: "Evi", realName: "Evi", role: "top", team: "East 1", teamCode: "PRO", region: "LEC" },
    { name: "Faker", realName: "Faker", role: "mid", team: "T1", teamCode: "PRO", region: "LCK" },
    { name: "Ceros", realName: "Ceros", role: "mid", team: "CeroStanmi", teamCode: "PRO", region: "LEC" },
    { name: "Raptor", realName: "Raptor", role: "jungle", team: "BNK FEARX", teamCode: "PRO", region: "LJL" },
    { name: "Doublelift", realName: "Doublelift", role: "bottom", team: "Doubleboy", teamCode: "PRO", region: "LEC" },
    { name: "Zeros", realName: "Zeros", role: "top", team: "QTZ", teamCode: "PRO", region: "LEC" },
    { name: "QTV", realName: "QTV", role: "top", team: "QTZ", teamCode: "PRO", region: "LEC" },
    { name: "Voyboy", realName: "Voyboy", role: "mid", team: "Doubleboy", teamCode: "PRO", region: "LEC" },
    { name: "Shiphtur", realName: "Shiphtur", role: "support", team: "Shiporice", teamCode: "PRO", region: "LEC" },
    { name: "Dumbledoge", realName: "Dumbledoge", role: "support", team: "dumbletoru", teamCode: "PRO", region: "LEC" },
    { name: "FlashInTheNight", realName: "FlashInTheNight", role: "top", team: "Diamondflash", teamCode: "PRO", region: "LEC" },
    { name: "Uzi", realName: "Uzi", role: "bottom", team: "Guanzi", teamCode: "PRO", region: "LPL" },
    { name: "Immortoru", realName: "Immortoru", role: "mid", team: "dumbletoru", teamCode: "PRO", region: "LEC" },
    { name: "Doinb", realName: "Doinb", role: "mid", team: "CN with Influencers", teamCode: "PRO", region: "LPL" },
    { name: "Tian", realName: "Tian", role: "jungle", team: "CN with Influencers", teamCode: "PRO", region: "LPL" },
    { name: "Caps", realName: "Caps", role: "bottom", team: "Caps", teamCode: "PRO", region: "LEC" },
    { name: "Clid", realName: "Clid", role: "jungle", team: "KR with Influencers", teamCode: "PRO", region: "LEC" },
    { name: "Jiizuke", realName: "Jiizuke", role: "mid", team: "West 3", teamCode: "PRO", region: "LEC" },
    { name: "brTT", realName: "brTT", role: "bottom", team: "West 2", teamCode: "PRO", region: "LEC" },
    { name: "Broxah", realName: "Broxah", role: "jungle", team: "West 1", teamCode: "PRO", region: "LEC" },
    { name: "G4", realName: "G4", role: "mid", team: "G4", teamCode: "PRO", region: "LEC" },
    { name: "Mlxg", realName: "Mlxg", role: "jungle", team: "East 3", teamCode: "PRO", region: "LEC" },
    { name: "Sneaky", realName: "Sneaky", role: "bottom", team: "West 2", teamCode: "PRO", region: "LEC" },
    { name: "Kiraxx", realName: "Kiraxx", role: "mid", team: "West 1", teamCode: "PRO", region: "LEC" },
    { name: "Fireloli", realName: "Fireloli", role: "jungle", team: "CN with Influencers", teamCode: "PRO", region: "LPL" },
    { name: "cat", realName: "cat", role: "support", team: "CN with Influencers", teamCode: "PRO", region: "LPL" },
    { name: "Jankos", realName: "Jankos", role: "jungle", team: "EU with Influencers", teamCode: "PRO", region: "LEC" },
    { name: "CoreJJ", realName: "CoreJJ", role: "support", team: "NA with Influencers", teamCode: "PRO", region: "LCS" },
    { name: "Bwipo", realName: "Bwipo", role: "top", team: "EU with Influencers", teamCode: "PRO", region: "LEC" },
    { name: "Yassuo", realName: "Yassuo", role: "mid", team: "NA with Influencers", teamCode: "PRO", region: "LCS" },
    { name: "Noway", realName: "Noway", role: "support", team: "EU with Influencers", teamCode: "PRO", region: "LEC" },
    { name: "Westdoor", realName: "Westdoor", role: "jungle", team: "Nexus Blitz Influencers A", teamCode: "PRO", region: "LEC" },
    { name: "Kane", realName: "Kane", role: "top", team: "Tandem Mode A", teamCode: "PRO", region: "LEC" },
    { name: "Duende", realName: "Duende", role: "top", team: "Tandem Mode A", teamCode: "PRO", region: "LEC" },
    { name: "Tyler1", realName: "Tyler1", role: "bottom", team: "NA with Influencers", teamCode: "PRO", region: "LCS" },
    { name: "C7N", realName: "C7N", role: "mid", team: "Tandem Mode A", teamCode: "PRO", region: "LEC" },
    { name: "MMD", realName: "MMD", role: "top", team: "Tandem Mode A", teamCode: "PRO", region: "LEC" },
    { name: "Nervarien", realName: "Nervarien", role: "top", team: "EU with Influencers", teamCode: "PRO", region: "LEC" },
    { name: "Ziv", realName: "Ziv", role: "top", team: "Tandem Mode B", teamCode: "PRO", region: "LEC" },
    { name: "Shrimp", realName: "Shrimp", role: "jungle", team: "Tandem Mode D", teamCode: "PRO", region: "LEC" },
    { name: "Nomanz", realName: "Nomanz", role: "mid", team: "Tandem Mode B", teamCode: "PRO", region: "LEC" },
    { name: "Bolulu", realName: "Bolulu", role: "mid", team: "Team URF A", teamCode: "PRO", region: "LEC" },
    { name: "Goku", realName: "Goku", role: "mid", team: "Team URF B", teamCode: "PRO", region: "LEC" },
    { name: "Ambition", realName: "Ambition", role: "jungle", team: "Team URF B", teamCode: "PRO", region: "LEC" },
    { name: "Misaya", realName: "Misaya", role: "top", team: "Tandem Mode D", teamCode: "PRO", region: "LEC" },
    { name: "Stanley", realName: "Stanley", role: "top", team: "Tandem Mode D", teamCode: "PRO", region: "LEC" },
    { name: "shuyi", realName: "shuyi", role: "mid", team: "Tandem Mode B", teamCode: "PRO", region: "LEC" },
    { name: "Annchirisu", realName: "Annchirisu", role: "top", team: "Tandem Mode B", teamCode: "PRO", region: "LEC" },
    { name: "Jovi", realName: "Jovi", role: "top", team: "Team URF A", teamCode: "PRO", region: "LEC" },
    { name: "Qingwa", realName: "Qingwa", role: "top", team: "Team URF A", teamCode: "PRO", region: "LEC" },
    { name: "JustJohnny", realName: "JustJohnny", role: "top", team: "Team URF B", teamCode: "PRO", region: "LEC" },
    { name: "NLLL", realName: "NLLL", role: "bottom", team: "NapLe", teamCode: "PRO", region: "LEC" },
    { name: "Praedyth", realName: "Praedyth", role: "mid", team: "MAMMOTH", teamCode: "PRO", region: "LCO" },
    { name: "AHaHaCiK", realName: "AHaHaCiK", role: "jungle", team: "Team URF B", teamCode: "PRO", region: "LEC" },
    { name: "Captain Jack", realName: "Captain Jack", role: "bottom", team: "Captain Faker", teamCode: "PRO", region: "LEC" },
    { name: "Yoda", realName: "Yoda", role: "mid", team: "RX O TRAB", teamCode: "PRO", region: "LPL" },
    { name: "Midbeast", realName: "Midbeast", role: "mid", team: "Triplebeast", teamCode: "PRO", region: "LEC" },
    { name: "gunkrab", realName: "gunkrab", role: "bottom", team: "MAMMOTH", teamCode: "PRO", region: "LCO" },
    { name: "Keduii", realName: "Keduii", role: "bottom", team: "SK Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Abbedagge", realName: "Abbedagge", role: "mid", team: "SK Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Skeanz", realName: "Skeanz", role: "jungle", team: "SK Gaming", teamCode: "PRO", region: "LEC" },
    { name: "N0body", realName: "N0body", role: "top", team: "Gravitas", teamCode: "PRO", region: "LCO" },
    { name: "DnDn", realName: "DnDn", role: "top", team: "SK Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Trick", realName: "Trick", role: "jungle", team: "Rogue", teamCode: "PRO", region: "LEC" },
    { name: "Jun", realName: "Jun", role: "support", team: "GIANTX", teamCode: "PRO", region: "LEC" },
    { name: "Malrang", realName: "Malrang", role: "jungle", team: "Rogue", teamCode: "PRO", region: "LEC" },
    { name: "Lot", realName: "Lot", role: "top", team: "GIANTX", teamCode: "PRO", region: "LEC" },
    { name: "Noah", realName: "Noah", role: "bottom", team: "GIANTX", teamCode: "PRO", region: "LEC" },
    { name: "RKR", realName: "RKR", role: "mid", team: "SK Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Jackies", realName: "Jackies", role: "mid", team: "GIANTX", teamCode: "PRO", region: "LEC" },
    { name: "Patrik", realName: "Patrik", role: "bottom", team: "Rogue", teamCode: "PRO", region: "LEC" },
    { name: "Adam", realName: "Adam", role: "top", team: "Rogue", teamCode: "PRO", region: "LEC" },
    { name: "Lospa", realName: "Lospa", role: "support", team: "GIANTX", teamCode: "PRO", region: "LEC" },
    { name: "Execute", realName: "Execute", role: "support", team: "Rogue", teamCode: "PRO", region: "LEC" },
    { name: "Loopy", realName: "Loopy", role: "support", team: "SK Gaming", teamCode: "PRO", region: "LEC" },
    { name: "ISMA", realName: "ISMA", role: "jungle", team: "GIANTX", teamCode: "PRO", region: "LEC" },
    { name: "SeTab", realName: "SeTab", role: "mid", team: "THUNDERTALKGAMING", teamCode: "PRO", region: "LPL" },
    { name: "Larssen", realName: "Larssen", role: "mid", team: "Rogue", teamCode: "PRO", region: "LEC" },
    { name: "Niket", realName: "Niket", role: "support", team: "SHENZHEN NINJAS IN PYJAMAS", teamCode: "PRO", region: "LPL" },
    { name: "xiaohuangre", realName: "xiaohuangre", role: "jungle", team: "THUNDERTALKGAMING", teamCode: "PRO", region: "LPL" },
    { name: "Feather", realName: "Feather", role: "support", team: "THUNDERTALKGAMING", teamCode: "PRO", region: "LPL" },
    { name: "naiyou", realName: "naiyou", role: "jungle", team: "SHENZHEN NINJAS IN PYJAMAS", teamCode: "PRO", region: "LPL" },
    { name: "Hoya", realName: "Hoya", role: "top", team: "THUNDERTALKGAMING", teamCode: "PRO", region: "LPL" },
    { name: "Aki", realName: "Aki", role: "jungle", team: "THUNDERTALKGAMING", teamCode: "PRO", region: "LPL" },
    { name: "1xn", realName: "1xn", role: "bottom", team: "THUNDERTALKGAMING", teamCode: "PRO", region: "LPL" },
    { name: "Leave", realName: "Leave", role: "bottom", team: "SHENZHEN NINJAS IN PYJAMAS", teamCode: "PRO", region: "LPL" },
    { name: "Solokill", realName: "Solokill", role: "top", team: "SHENZHEN NINJAS IN PYJAMAS", teamCode: "PRO", region: "LPL" },
    { name: "Crazy", realName: "Crazy", role: "mid", team: "Galatasaray Espor", teamCode: "PRO", region: "LEC" },
    { name: "Cassin", realName: "Cassin", role: "jungle", team: "Crest Gaming Act", teamCode: "PRO", region: "LJL" },
    { name: "Acee", realName: "Acee", role: "none", team: "V3 Esports", teamCode: "PRO", region: "LJL" },
    { name: "R1ngoKun", realName: "R1ngoKun", role: "top", team: "Rascal Jester", teamCode: "PRO", region: "LJL" },
    { name: "Primo", realName: "Primo", role: "support", team: "Crest Gaming Act", teamCode: "PRO", region: "LJL" },
    { name: "Nap", realName: "Nap", role: "top", team: "Crest Gaming Act", teamCode: "PRO", region: "LJL" },
    { name: "tol2", realName: "tol2", role: "top", team: "Burning Core Toyama", teamCode: "PRO", region: "LJL" },
    { name: "Motive", realName: "Motive", role: "none", team: "QT DIG", teamCode: "PRO", region: "LCS" },
    { name: "Ssol", realName: "Ssol", role: "bottom", team: "Axiz Crest", teamCode: "PRO", region: "LJL" },
    { name: "Ino", realName: "Ino", role: "support", team: "Axiz Crest", teamCode: "PRO", region: "LJL" },
    { name: "Eugeo", realName: "Eugeo", role: "mid", team: "Crest Gaming Act", teamCode: "PRO", region: "LJL" },
    { name: "hetel", realName: "hetel", role: "support", team: "QT DIG", teamCode: "PRO", region: "LCS" },
    { name: "Yuhi", realName: "Yuhi", role: "bottom", team: "QT DIG", teamCode: "PRO", region: "LCS" },
    { name: "Washidai", realName: "Washidai", role: "top", team: "QT DIG", teamCode: "PRO", region: "LCS" },
    { name: "DICE", realName: "DICE", role: "mid", team: "QT DIG", teamCode: "PRO", region: "LCS" },
    { name: "Honey", realName: "Honey", role: "bottom", team: "Crest Gaming Act", teamCode: "PRO", region: "LJL" },
    { name: "Annnnn", realName: "Annnnn", role: "bottom", team: "Alpha Esports", teamCode: "PRO", region: "LJL" },
    { name: "Apex", realName: "Apex", role: "mid", team: "SuperEsports", teamCode: "PRO", region: "LEC" },
    { name: "Nexus", realName: "Nexus", role: "top", team: "SuperEsports", teamCode: "PRO", region: "LEC" },
    { name: "PaSa", realName: "PaSa", role: "bottom", team: "Dragon Gate Team", teamCode: "PRO", region: "LEC" },
    { name: "Zest2 XXD", realName: "Zest2 XXD", role: "support", team: "SuperEsports", teamCode: "PRO", region: "LEC" },
    { name: "3z", realName: "3z", role: "top", team: "Alpha Esports", teamCode: "PRO", region: "LJL" },
    { name: "Lloyd", realName: "Lloyd", role: "jungle", team: "MEGA Esports", teamCode: "PRO", region: "LCS" },
    { name: "JunJia", realName: "JunJia", role: "jungle", team: "SuperEsports", teamCode: "PRO", region: "LEC" },
    { name: "Pop", realName: "Pop", role: "support", team: "MEGA Esports", teamCode: "PRO", region: "LCS" },
    { name: "DeuL", realName: "DeuL", role: "bottom", team: "MEGA Esports", teamCode: "PRO", region: "LCS" },
    { name: "Rockky", realName: "Rockky", role: "top", team: "MEGA Esports", teamCode: "PRO", region: "LCS" },
    { name: "Hammock", realName: "Hammock", role: "top", team: "MEGA Esports", teamCode: "PRO", region: "LCS" },
    { name: "GORICA", realName: "GORICA", role: "none", team: "University of Western Ontario", teamCode: "PRO", region: "LEC" },
    { name: "winston", realName: "winston", role: "none", team: "University of Western Ontario", teamCode: "PRO", region: "LEC" },
    { name: "OddEye", realName: "OddEye", role: "bottom", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Carim", realName: "Carim", role: "jungle", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Kingen", realName: "Kingen", role: "top", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Secondate", realName: "Secondate", role: "none", team: "DenizBank İstanbul Wildcats", teamCode: "PRO", region: "LEC" },
    { name: "Sylvie", realName: "Sylvie", role: "none", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Calix", realName: "Calix", role: "mid", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Fisher", realName: "Fisher", role: "none", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Crack", realName: "Crack", role: "support", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Lehends", realName: "Lehends", role: "none", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "vital", realName: "vital", role: "support", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Trigger", realName: "Trigger", role: "bottom", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "GIDEON", realName: "GIDEON", role: "jungle", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Lucy", realName: "Lucy", role: "bottom", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Ady", realName: "Ady", role: "top", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Burdol", realName: "Burdol", role: "top", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Vaunted", realName: "Vaunted", role: "support", team: "MOUZ NXT", teamCode: "PRO", region: "LEC" },
    { name: "Jiwoo", realName: "Jiwoo", role: "none", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "GuGer", realName: "GuGer", role: "support", team: "NONGSHIM RED FORCE", teamCode: "PRO", region: "LCK" },
    { name: "Kio", realName: "Kio", role: "top", team: "eSuba", teamCode: "PRO", region: "LEC" },
    { name: "Seal", realName: "Seal", role: "support", team: "Crvena zvezda Esports", teamCode: "PRO", region: "LEC" },
    { name: "Joao", realName: "Joao", role: "mid", team: "For the Win Esports Club", teamCode: "PRO", region: "LEC" },
    { name: "Dajor", realName: "Dajor", role: "mid", team: "HMA Fnatic Rising", teamCode: "PRO", region: "LEC" },
    { name: "FEBIVEN", realName: "FEBIVEN", role: "mid", team: "HMA Fnatic Rising", teamCode: "PRO", region: "LEC" },
    { name: "MAXI", realName: "MAXI", role: "jungle", team: "HMA Fnatic Rising", teamCode: "PRO", region: "LEC" },
    { name: "Pride", realName: "Pride", role: "top", team: "HMA Fnatic Rising", teamCode: "PRO", region: "LEC" },
    { name: "Rhuckz", realName: "Rhuckz", role: "support", team: "HMA Fnatic Rising", teamCode: "PRO", region: "LEC" },
    { name: "Bean", realName: "Bean", role: "bottom", team: "HMA Fnatic Rising", teamCode: "PRO", region: "LEC" },
    { name: "Blueknight", realName: "Blueknight", role: "mid", team: "Rogue Esports Club", teamCode: "PRO", region: "LEC" },
    { name: "LIMIT", realName: "LIMIT", role: "support", team: "Berlin International Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Selfie", realName: "Selfie", role: "mid", team: "Rogue Esports Club", teamCode: "PRO", region: "LEC" },
    { name: "Raxxo", realName: "Raxxo", role: "support", team: "Rogue Esports Club", teamCode: "PRO", region: "LEC" },
    { name: "LINDGARDE", realName: "LINDGARDE", role: "bottom", team: "HMA Fnatic Rising", teamCode: "PRO", region: "LEC" },
    { name: "HeaQ", realName: "HeaQ", role: "bottom", team: "Rogue Esports Club", teamCode: "PRO", region: "LEC" },
    { name: "Rawbin IV", realName: "Rawbin IV", role: "jungle", team: "Campus Party Sparks", teamCode: "PRO", region: "LEC" },
    { name: "behave", realName: "behave", role: "jungle", team: "Rogue Esports Club", teamCode: "PRO", region: "LEC" },
    { name: "JNX", realName: "JNX", role: "top", team: "Vitality.Bee", teamCode: "PRO", region: "LEC" },
    { name: "Fleshy", realName: "Fleshy", role: "support", team: "Vitality.Bee", teamCode: "PRO", region: "LEC" },
    { name: "Vetheo", realName: "Vetheo", role: "mid", team: "Vitality.Bee", teamCode: "PRO", region: "LEC" },
    { name: "Lurox", realName: "Lurox", role: "jungle", team: "Vitality.Bee", teamCode: "PRO", region: "LEC" },
    { name: "Jeyrus", realName: "Jeyrus", role: "bottom", team: "WeLoveGaming", teamCode: "PRO", region: "LEC" },
    { name: "Dekap", realName: "Dekap", role: "support", team: "Vitality.Bee", teamCode: "PRO", region: "LEC" },
    { name: "Xypherz", realName: "Xypherz", role: "jungle", team: "Azules Esports", teamCode: "PRO", region: "LEC" },
    { name: "KDV", realName: "KDV", role: "bottom", team: "Azules Esports", teamCode: "PRO", region: "LEC" },
    { name: "Kryze", realName: "Kryze", role: "top", team: "FALKN", teamCode: "PRO", region: "LPL" },
    { name: "N N", realName: "N N", role: "mid", team: "Azules Esports", teamCode: "PRO", region: "LEC" },
    { name: "Suppa", realName: "Suppa", role: "support", team: "MAD Lions E.C. Colombia", teamCode: "PRO", region: "LEC" },
    { name: "Grisen", realName: "Grisen", role: "support", team: "FALKN", teamCode: "PRO", region: "LPL" },
    { name: "Julaxe", realName: "Julaxe", role: "jungle", team: "MAD Lions E.C. Colombia", teamCode: "PRO", region: "LEC" },
    { name: "TheShy", realName: "TheShy", role: "top", team: "TheShy", teamCode: "PRO", region: "LEC" },
    { name: "Elyoya", realName: "Elyoya", role: "jungle", team: "Movistar KOI", teamCode: "PRO", region: "LEC" },
    { name: "Jojopyun", realName: "Jojopyun", role: "mid", team: "Movistar KOI", teamCode: "PRO", region: "LEC" },
    { name: "Myrwn", realName: "Myrwn", role: "top", team: "Movistar KOI", teamCode: "PRO", region: "LEC" },
    { name: "Levi", realName: "Levi", role: "jungle", team: "Levi", teamCode: "PRO", region: "LEC" },
    { name: "Mikyx", realName: "Mikyx", role: "support", team: "Team Urf D", teamCode: "PRO", region: "LEC" },
    { name: "Hobbler", realName: "Hobbler", role: "mid", team: "MAD Lions E.C. Colombia", teamCode: "PRO", region: "LEC" },
    { name: "Chomi", realName: "Chomi", role: "bottom", team: "MAD Lions E.C. Colombia", teamCode: "PRO", region: "LEC" },
    { name: "Sander", realName: "Sander", role: "top", team: "MAD Lions E.C. Colombia", teamCode: "PRO", region: "LEC" },
    { name: "Kindle", realName: "Kindle", role: "bottom", team: "MAD Lions E.C. Colombia", teamCode: "PRO", region: "LEC" },
    { name: "JustLikeThat", realName: "JustLikeThat", role: "top", team: "Team URF C", teamCode: "PRO", region: "LEC" },
    { name: "Alvaro", realName: "Alvaro", role: "support", team: "Movistar KOI", teamCode: "PRO", region: "LEC" },
    { name: "Baiye", realName: "Baiye", role: "bottom", team: "Ultra Prime", teamCode: "PRO", region: "LEC" },
    { name: "Supa", realName: "Supa", role: "bottom", team: "Movistar KOI", teamCode: "PRO", region: "LEC" },
    { name: "Xiaoxia", realName: "Xiaoxia", role: "support", team: "Ultra Prime", teamCode: "PRO", region: "LEC" },
    { name: "Junhao", realName: "Junhao", role: "jungle", team: "Ultra Prime", teamCode: "PRO", region: "LEC" },
    { name: "1Jiang", realName: "1Jiang", role: "top", team: "Ultra Prime", teamCode: "PRO", region: "LEC" },
    { name: "Saber", realName: "Saber", role: "mid", team: "Ultra Prime", teamCode: "PRO", region: "LEC" },
    { name: "SSADY", realName: "SSADY", role: "top", team: "5 Ronin", teamCode: "PRO", region: "LJL" },
    { name: "midali", realName: "midali", role: "mid", team: "5 Ronin", teamCode: "PRO", region: "LJL" },
    { name: "RUEP", realName: "RUEP", role: "bottom", team: "Beşiktaş Esports", teamCode: "PRO", region: "LEC" },
    { name: "CHEF", realName: "CHEF", role: "jungle", team: "Beşiktaş Esports", teamCode: "PRO", region: "LEC" },
    { name: "Wind", realName: "Wind", role: "bottom", team: "5 Ronin", teamCode: "PRO", region: "LJL" },
    { name: "Vertigo", realName: "Vertigo", role: "top", team: "Beşiktaş Esports", teamCode: "PRO", region: "LEC" },
    { name: "YellowYoshi", realName: "YellowYoshi", role: "top", team: "Fukuoka SoftBank HAWKS gaming", teamCode: "PRO", region: "LJL" },
    { name: "Marble", realName: "Marble", role: "bottom", team: "Fukuoka SoftBank HAWKS gaming", teamCode: "PRO", region: "LJL" },
    { name: "Patch", realName: "Patch", role: "support", team: "Beşiktaş Esports", teamCode: "PRO", region: "LEC" },
    { name: "Courage", realName: "Courage", role: "jungle", team: "Fukuoka SoftBank HAWKS gaming", teamCode: "PRO", region: "LJL" },
    { name: "Fade", realName: "Fade", role: "mid", team: "Beşiktaş Esports", teamCode: "PRO", region: "LEC" },
    { name: "Yohan", realName: "Yohan", role: "none", team: "Fukuoka SoftBank HAWKS gaming", teamCode: "PRO", region: "LJL" },
    { name: "FATE", realName: "FATE", role: "mid", team: "Fukuoka SoftBank HAWKS gaming", teamCode: "PRO", region: "LJL" },
    { name: "Hypnos", realName: "Hypnos", role: "none", team: "5 Ronin Akademi", teamCode: "PRO", region: "LJL" },
    { name: "SeongHwan", realName: "SeongHwan", role: "none", team: "Fenerbahçe Espor Akademi", teamCode: "PRO", region: "LEC" },
    { name: "Meshade", realName: "Meshade", role: "none", team: "Papara SuperMassive Blaze Akademi", teamCode: "PRO", region: "LEC" },
    { name: "Shernfire", realName: "Shernfire", role: "jungle", team: "Pentanet.GG", teamCode: "PRO", region: "LCO" },
    { name: "Violet", realName: "Violet", role: "bottom", team: "Pentanet.GG", teamCode: "PRO", region: "LCO" },
    { name: "361efe", realName: "361efe", role: "none", team: "Fenerbahçe Espor Akademi", teamCode: "PRO", region: "LEC" },
    { name: "Robin", realName: "Robin", role: "none", team: "Beşiktaş Akademi", teamCode: "PRO", region: "LEC" },
    { name: "Merciless", realName: "Merciless", role: "none", team: "Beşiktaş Akademi", teamCode: "PRO", region: "LEC" },
    { name: "Chippys", realName: "Chippys", role: "top", team: "Pentanet.GG", teamCode: "PRO", region: "LCO" },
    { name: "Pat", realName: "Pat", role: "none", team: "Info Yatırım Aurora Akademi", teamCode: "PRO", region: "LEC" },
    { name: "BroCColi", realName: "BroCColi", role: "none", team: "GALAKTICOS Akademi", teamCode: "PRO", region: "LCK" },
    { name: "Pbd", realName: "Pbd", role: "none", team: "Dark Passage Akademi", teamCode: "PRO", region: "LEC" },
    { name: "yzn", realName: "yzn", role: "none", team: "GALAKTICOS Akademi", teamCode: "PRO", region: "LCK" },
    { name: "Kunduz", realName: "Kunduz", role: "none", team: "Info Yatırım Aurora Akademi", teamCode: "PRO", region: "LEC" },
    { name: "Zzk", realName: "Zzk", role: "none", team: "GALAKTICOS Akademi", teamCode: "PRO", region: "LCK" },
    { name: "Akabane", realName: "Akabane", role: "jungle", team: "GamerLegion", teamCode: "PRO", region: "LEC" },
    { name: "Kynetic", realName: "Kynetic", role: "bottom", team: "Schalke 04 Evolution", teamCode: "PRO", region: "LEC" },
    { name: "Obsess", realName: "Obsess", role: "jungle", team: "Schalke 04 Evolution", teamCode: "PRO", region: "LEC" },
    { name: "Tolerant", realName: "Tolerant", role: "support", team: "Schalke 04 Evolution", teamCode: "PRO", region: "LEC" },
    { name: "Eradan", realName: "Eradan", role: "top", team: "Intergalaxy Tigers", teamCode: "PRO", region: "LEC" },
    { name: "Zwyroo", realName: "Zwyroo", role: "mid", team: "Schalke 04 Evolution", teamCode: "PRO", region: "LEC" },
    { name: "Winter 7", realName: "Winter 7", role: "jungle", team: "GamerLegion", teamCode: "PRO", region: "LEC" },
    { name: "Darlik", realName: "Darlik", role: "top", team: "SAIM SE", teamCode: "PRO", region: "LEC" },
    { name: "Visdom", realName: "Visdom", role: "support", team: "GamerLegion", teamCode: "PRO", region: "LEC" },
    { name: "Fresskowy", realName: "Fresskowy", role: "mid", team: "Racoon", teamCode: "PRO", region: "LEC" },
    { name: "Jeskla", realName: "Jeskla", role: "bottom", team: "LDLC OL", teamCode: "PRO", region: "LEC" },
    { name: "Backlund", realName: "Backlund", role: "mid", team: "LDLC OL", teamCode: "PRO", region: "LEC" },
    { name: "Tracyn", realName: "Tracyn", role: "top", team: "GamerLegion", teamCode: "PRO", region: "LEC" },
    { name: "Proker", realName: "Proker", role: "mid", team: "Cyber Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Nite", realName: "Nite", role: "mid", team: "AGO Rogue", teamCode: "PRO", region: "LEC" },
    { name: "SeRiN", realName: "SeRiN", role: "mid", team: "Galions", teamCode: "PRO", region: "LEC" },
    { name: "Jezu", realName: "Jezu", role: "bottom", team: "Galions", teamCode: "PRO", region: "LEC" },
    { name: "Xerxe", realName: "Xerxe", role: "jungle", team: "Galions", teamCode: "PRO", region: "LEC" },
    { name: "promisq", realName: "promisq", role: "support", team: "AGO Rogue", teamCode: "PRO", region: "LEC" },
    { name: "Puki Style", realName: "Puki Style", role: "bottom", team: "K1CK Neosurf", teamCode: "PRO", region: "LEC" },
    { name: "Zoelys", realName: "Zoelys", role: "support", team: "Galions", teamCode: "PRO", region: "LEC" },
    { name: "HARPOON", realName: "HARPOON", role: "bottom", team: "Galions", teamCode: "PRO", region: "LEC" },
    { name: "Ragner", realName: "Ragner", role: "top", team: "Galions", teamCode: "PRO", region: "LEC" },
    { name: "Punisher88", realName: "Punisher88", role: "jungle", team: "Dragon Army", teamCode: "PRO", region: "LEC" },
    { name: "Dimonko", realName: "Dimonko", role: "support", team: "Dragon Army", teamCode: "PRO", region: "LEC" },
    { name: "Miracle", realName: "Miracle", role: "support", team: "M19", teamCode: "PRO", region: "LCL" },
    { name: "Silk", realName: "Silk", role: "mid", team: "Dragon Army", teamCode: "PRO", region: "LEC" },
    { name: "Imperial", realName: "Imperial", role: "bottom", team: "Dragon Army", teamCode: "PRO", region: "LEC" },
    { name: "Balkane", realName: "Balkane", role: "jungle", team: "Dragon Army", teamCode: "PRO", region: "LEC" },
    { name: "kPr", realName: "kPr", role: "top", team: "Dragon Army", teamCode: "PRO", region: "LEC" },
    { name: "Kreox", realName: "Kreox", role: "jungle", team: "Elements Pro Gaming", teamCode: "PRO", region: "LCL" },
    { name: "Flakked", realName: "Flakked", role: "bottom", team: "Altokekw Españita", teamCode: "PRO", region: "LEC" },
    { name: "Razork", realName: "Razork", role: "jungle", team: "Altokekw Españita", teamCode: "PRO", region: "LEC" },
    { name: "Jestkui Max", realName: "Jestkui Max", role: "support", team: "Elements Pro Gaming", teamCode: "PRO", region: "LCL" },
    { name: "Vedius", realName: "Vedius", role: "mid", team: "LEC Kings", teamCode: "PRO", region: "LEC" },
    { name: "Champi", realName: "Champi", role: "support", team: "Altokekw Españita", teamCode: "PRO", region: "LEC" },
    { name: "Upset", realName: "Upset", role: "bottom", team: "LEC Kings", teamCode: "PRO", region: "LEC" },
    { name: "xPeke", realName: "xPeke", role: "mid", team: "Altokekw Españita", teamCode: "PRO", region: "LEC" },
    { name: "MedicCasts", realName: "MedicCasts", role: "support", team: "LEC Kings", teamCode: "PRO", region: "LEC" },
    { name: "Ender", realName: "Ender", role: "jungle", team: "LEC Kings", teamCode: "PRO", region: "LEC" },
    { name: "Wickd", realName: "Wickd", role: "top", team: "LEC Kings", teamCode: "PRO", region: "LEC" },
    { name: "Noi", realName: "Noi", role: "top", team: "The French Zoo", teamCode: "PRO", region: "LEC" },
    { name: "Tweekzz", realName: "Tweekzz", role: "jungle", team: "The French Zoo", teamCode: "PRO", region: "LEC" },
    { name: "Myha", realName: "Myha", role: "top", team: "POLSKA GUROM", teamCode: "PRO", region: "LEC" },
    { name: "Extorsus", realName: "Extorsus", role: "support", team: "Altokekw Españita", teamCode: "PRO", region: "LEC" },
    { name: "Future", realName: "Future", role: "support", team: "Altokekw Españita", teamCode: "PRO", region: "LEC" },
    { name: "kev1n", realName: "kev1n", role: "top", team: "German Pingus", teamCode: "PRO", region: "LEC" },
    { name: "Jandro", realName: "Jandro", role: "support", team: "Altokekw Españita", teamCode: "PRO", region: "LEC" },
    { name: "Chips", realName: "Chips", role: "top", team: "The French Zoo", teamCode: "PRO", region: "LEC" },
    { name: "TraYtoN", realName: "TraYtoN", role: "support", team: "The French Zoo", teamCode: "PRO", region: "LEC" },
    { name: "Don NoWay", realName: "Don NoWay", role: "mid", team: "German Pingus", teamCode: "PRO", region: "LEC" },
    { name: "Chap", realName: "Chap", role: "mid", team: "The French Zoo", teamCode: "PRO", region: "LEC" },
    { name: "Magvayer", realName: "Magvayer", role: "support", team: "POLSKA GUROM", teamCode: "PRO", region: "LEC" },
    { name: "TheFakeOne", realName: "TheFakeOne", role: "jungle", team: "POLSKA GUROM", teamCode: "PRO", region: "LEC" },
    { name: "Keres", realName: "Keres", role: "none", team: "Berjaya Dragons", teamCode: "PRO", region: "LJL" },
    { name: "Azhi", realName: "Azhi", role: "top", team: "PSG Talon", teamCode: "PRO", region: "LJL" },
    { name: "Woody", realName: "Woody", role: "support", team: "PSG Talon", teamCode: "PRO", region: "LJL" },
    { name: "Betty", realName: "Betty", role: "bottom", team: "PSG Talon", teamCode: "PRO", region: "LJL" },
    { name: "Maple", realName: "Maple", role: "mid", team: "PSG Talon", teamCode: "PRO", region: "LJL" },
    { name: "Sola", realName: "Sola", role: "bottom", team: "German Pingus", teamCode: "PRO", region: "LEC" },
    { name: "Karsa", realName: "Karsa", role: "jungle", team: "PSG Talon", teamCode: "PRO", region: "LJL" },
    { name: "Eis", realName: "Eis", role: "support", team: "German Pingus", teamCode: "PRO", region: "LEC" },
    { name: "J0HNNY", realName: "J0HNNY", role: "jungle", team: "German Pingus", teamCode: "PRO", region: "LEC" },
    { name: "Maynter", realName: "Maynter", role: "top", team: "One Breath Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Madrid1st", realName: "Madrid1st", role: "mid", team: "One Breath Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Mercenary", realName: "Mercenary", role: "support", team: "One Breath Gaming", teamCode: "PRO", region: "LEC" },
    { name: "cyraXx", realName: "cyraXx", role: "bottom", team: "One Breath Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Ryan", realName: "Ryan", role: "jungle", team: "Nova Esports", teamCode: "PRO", region: "LJL" },
    { name: "Yusa", realName: "Yusa", role: "bottom", team: "Samsung Morning Stars", teamCode: "PRO", region: "LEC" },
    { name: "Alexx", realName: "Alexx", role: "jungle", team: "G2 Arctic", teamCode: "PRO", region: "LEC" },
    { name: "tibor", realName: "tibor", role: "mid", team: "Five Kings", teamCode: "PRO", region: "LEC" },
    { name: "Shintalx", realName: "Shintalx", role: "mid", team: "Estral Esports", teamCode: "PRO", region: "LCS" },
    { name: "Winsome", realName: "Winsome", role: "support", team: "Estral Esports", teamCode: "PRO", region: "LCS" },
    { name: "Ghost", realName: "Ghost", role: "bottom", team: "Estral Esports", teamCode: "PRO", region: "LCS" },
    { name: "Summit", realName: "Summit", role: "top", team: "Estral Esports", teamCode: "PRO", region: "LCS" },
    { name: "Snok", realName: "Snok", role: "none", team: "Estral Esports", teamCode: "PRO", region: "LCS" },
    { name: "SolidSnake", realName: "SolidSnake", role: "jungle", team: "Estral Esports", teamCode: "PRO", region: "LCS" },
    { name: "cody", realName: "cody", role: "mid", team: "Estral Esports", teamCode: "PRO", region: "LCS" },
    { name: "Yutapon", realName: "Yutapon", role: "bottom", team: "LJL All-Stars", teamCode: "PRO", region: "LJL" },
    { name: "Gadget", realName: "Gadget", role: "bottom", team: "LCL-All-Stars", teamCode: "PRO", region: "LCL" },
    { name: "Blank", realName: "Blank", role: "jungle", team: "LJL All-Stars", teamCode: "PRO", region: "LJL" },
    { name: "JeIIy", realName: "JeIIy", role: "support", team: "LCK Queue Kings", teamCode: "PRO", region: "LCK" },
    { name: "Peng", realName: "Peng", role: "mid", team: "OPL All-Stars", teamCode: "PRO", region: "LCO" },
    { name: "Acce", realName: "Acce", role: "top", team: "Undead BK", teamCode: "PRO", region: "LEC" },
    { name: "Absolute", realName: "Absolute", role: "support", team: "OPL All-Stars", teamCode: "PRO", region: "LCO" },
    { name: "BOSS", realName: "BOSS", role: "top", team: "LCL-All-Stars", teamCode: "PRO", region: "LCL" },
    { name: "Tiger", realName: "Tiger", role: "bottom", team: "OPL All-Stars", teamCode: "PRO", region: "LCO" },
    { name: "Mata", realName: "Mata", role: "support", team: "LCK Legends", teamCode: "PRO", region: "LCK" },
    { name: "Vizicsacsi", realName: "Vizicsacsi", role: "top", team: "LEC Legends", teamCode: "PRO", region: "LEC" },
    { name: "Mithy", realName: "Mithy", role: "support", team: "LEC Legends", teamCode: "PRO", region: "LEC" },
    { name: "Amazing", realName: "Amazing", role: "jungle", team: "LEC Legends", teamCode: "PRO", region: "LEC" },
    { name: "Elwind", realName: "Elwind", role: "support", team: "LEC Queue Kings", teamCode: "PRO", region: "LEC" },
    { name: "Samux", realName: "Samux", role: "bottom", team: "LEC Legends", teamCode: "PRO", region: "LEC" },
    { name: "Pawn", realName: "Pawn", role: "mid", team: "LCK Legends", teamCode: "PRO", region: "LCK" },
    { name: "kRYST4L", realName: "kRYST4L", role: "bottom", team: "LPL Queue Kings", teamCode: "PRO", region: "LPL" },
    { name: "Exile", realName: "Exile", role: "mid", team: "LEC Legends", teamCode: "PRO", region: "LEC" },
    { name: "PraY", realName: "PraY", role: "bottom", team: "LCK Legends", teamCode: "PRO", region: "LCK" },
    { name: "Pyl", realName: "Pyl", role: "support", team: "LPL Legends", teamCode: "PRO", region: "LPL" },
    { name: "Gryffinn", realName: "Gryffinn", role: "jungle", team: "LOUD", teamCode: "PRO", region: "CBLOL" },
    { name: "Robo", realName: "Robo", role: "top", team: "LOUD", teamCode: "PRO", region: "CBLOL" },
    { name: "Hans Sama", realName: "Hans Sama", role: "bottom", team: "CoreJJ Dream Team", teamCode: "PRO", region: "LEC" },
    { name: "Route", realName: "Route", role: "bottom", team: "LOUD", teamCode: "PRO", region: "CBLOL" },
    { name: "Humanoid", realName: "Humanoid", role: "jungle", team: "CoreJJ Dream Team", teamCode: "PRO", region: "LEC" },
    { name: "Jensen", realName: "Jensen", role: "mid", team: "CoreJJ Dream Team", teamCode: "PRO", region: "LEC" },
    { name: "xiyang", realName: "xiyang", role: "support", team: "LPL Queue Kings", teamCode: "PRO", region: "LPL" },
    { name: "Zz1tai", realName: "Zz1tai", role: "mid", team: "LPL Legends", teamCode: "PRO", region: "LPL" },
    { name: "Meteos XXD", realName: "Meteos XXD", role: "jungle", team: "LCS Legends", teamCode: "PRO", region: "LCS" },
    { name: "Jool", realName: "Jool", role: "mid", team: "LOUD", teamCode: "PRO", region: "CBLOL" },
    { name: "Ventair", realName: "Ventair", role: "top", team: "EURONICS Gaming", teamCode: "PRO", region: "LEC" },
    { name: "RedBert", realName: "RedBert", role: "support", team: "LOUD", teamCode: "PRO", region: "CBLOL" },
    { name: "Lamabear", realName: "Lamabear", role: "jungle", team: "EURONICS Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Tazaku", realName: "Tazaku", role: "bottom", team: "EURONICS Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Afroboi", realName: "Afroboi", role: "jungle", team: "E Wie Einfach E-Sports", teamCode: "PRO", region: "LEC" },
    { name: "Matislaw", realName: "Matislaw", role: "mid", team: "EURONICS Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Rulfchen", realName: "Rulfchen", role: "jungle", team: "PENTA 1860", teamCode: "PRO", region: "LEC" },
    { name: "Fun K3y", realName: "Fun K3y", role: "bottom", team: "PENTA 1860", teamCode: "PRO", region: "LEC" },
    { name: "Nukes", realName: "Nukes", role: "support", team: "EURONICS Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Sleeping", realName: "Sleeping", role: "top", team: "PENTA 1860", teamCode: "PRO", region: "LEC" },
    { name: "Levy", realName: "Levy", role: "bottom", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "Effort", realName: "Effort", role: "support", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "Kice", realName: "Kice", role: "support", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "HamBak", realName: "HamBak", role: "none", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "Clozer", realName: "Clozer", role: "none", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "Bull", realName: "Bull", role: "none", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "Ellim", realName: "Ellim", role: "jungle", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "Lonely", realName: "Lonely", role: "top", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "Simpli", realName: "Simpli", role: "mid", team: "Unicorns of Love Sexy Edition", teamCode: "PRO", region: "LCL" },
    { name: "DenVoksne", realName: "DenVoksne", role: "bottom", team: "Unicorns of Love Sexy Edition", teamCode: "PRO", region: "LCL" },
    { name: "Starlit", realName: "Starlit", role: "mid", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "White", realName: "White", role: "jungle", team: "Unicorns of Love Sexy Edition", teamCode: "PRO", region: "LCL" },
    { name: "Morgan", realName: "Morgan", role: "top", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "Papiteero", realName: "Papiteero", role: "top", team: "Team BDS Academy", teamCode: "PRO", region: "LEC" },
    { name: "Pollu", realName: "Pollu", role: "support", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "Pullbae", realName: "Pullbae", role: "mid", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "Croco", realName: "Croco", role: "jungle", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "DDahyuk", realName: "DDahyuk", role: "top", team: "OKSavingsBank BRION", teamCode: "PRO", region: "LCK" },
    { name: "Shlatan", realName: "Shlatan", role: "jungle", team: "Team BDS Academy", teamCode: "PRO", region: "LEC" },
    { name: "Mishi", realName: "Mishi", role: "bottom", team: "Team BDS Academy", teamCode: "PRO", region: "LEC" },
    { name: "Nsurr", realName: "Nsurr", role: "support", team: "Karmine Corp Blue", teamCode: "PRO", region: "LEC" },
    { name: "SlowQ", realName: "SlowQ", role: "mid", team: "Karmine Corp Blue", teamCode: "PRO", region: "LEC" },
    { name: "Yukino", realName: "Yukino", role: "jungle", team: "Karmine Corp Blue", teamCode: "PRO", region: "LEC" },
    { name: "Markoon", realName: "Markoon", role: "jungle", team: "Solary", teamCode: "PRO", region: "LEC" },
    { name: "TakeSet", realName: "TakeSet", role: "bottom", team: "Solary", teamCode: "PRO", region: "LEC" },
    { name: "Mersa", realName: "Mersa", role: "support", team: "Solary", teamCode: "PRO", region: "LEC" },
    { name: "Stookbeer", realName: "Stookbeer", role: "support", team: "Dynasty esports", teamCode: "PRO", region: "LEC" },
    { name: "Slyv3r", realName: "Slyv3r", role: "bottom", team: "Dynasty esports", teamCode: "PRO", region: "LEC" },
    { name: "Mikkel", realName: "Mikkel", role: "mid", team: "mCon Esports", teamCode: "PRO", region: "LEC" },
    { name: "Guertas", realName: "Guertas", role: "jungle", team: "mCon Esports", teamCode: "PRO", region: "LEC" },
    { name: "MaiYuk", realName: "MaiYuk", role: "top", team: "Dynasty esports", teamCode: "PRO", region: "LEC" },
    { name: "Kruimel", realName: "Kruimel", role: "mid", team: "mCon Esports", teamCode: "PRO", region: "LEC" },
    { name: "Flaxxish", realName: "Flaxxish", role: "top", team: "PSV Esports", teamCode: "PRO", region: "LEC" },
    { name: "Heroic", realName: "Heroic", role: "mid", team: "Hell ZeroLag", teamCode: "PRO", region: "LEC" },
    { name: "Kituruken", realName: "Kituruken", role: "jungle", team: "Hell ZeroLag", teamCode: "PRO", region: "LEC" },
    { name: "Nawa", realName: "Nawa", role: "bottom", team: "Gamespace MC", teamCode: "PRO", region: "LEC" },
    { name: "Furuy", realName: "Furuy", role: "mid", team: "Anorthosis Esports", teamCode: "PRO", region: "LEC" },
    { name: "Aytekn", realName: "Aytekn", role: "top", team: "Gamespace MC", teamCode: "PRO", region: "LEC" },
    { name: "ANDARIEL", realName: "ANDARIEL", role: "bottom", team: "UCAM Esports", teamCode: "PRO", region: "LEC" },
    { name: "ESCIK", realName: "ESCIK", role: "mid", team: "UCAM Esports", teamCode: "PRO", region: "LEC" },
    { name: "Ryuzaki", realName: "Ryuzaki", role: "jungle", team: "Anorthosis Esports", teamCode: "PRO", region: "LEC" },
    { name: "Gakgos", realName: "Gakgos", role: "top", team: "NASR Esports", teamCode: "PRO", region: "LEC" },
    { name: "Berkan", realName: "Berkan", role: "mid", team: "NASR Esports", teamCode: "PRO", region: "LEC" },
    { name: "Whistle", realName: "Whistle", role: "mid", team: "NASR Esports", teamCode: "PRO", region: "LEC" },
    { name: "MGX", realName: "MGX", role: "mid", team: "Cyberground Gaming", teamCode: "PRO", region: "LEC" },
    { name: "Prosfair", realName: "Prosfair", role: "support", team: "S2V Esports", teamCode: "PRO", region: "LEC" },
    { name: "dispel", realName: "dispel", role: "support", team: "NASR Esports", teamCode: "PRO", region: "LEC" },
    { name: "Zergsting", realName: "Zergsting", role: "support", team: "Cyberground Gaming", teamCode: "PRO", region: "LEC" },
    { name: "FlickeR", realName: "FlickeR", role: "bottom", team: "Macko Esports", teamCode: "PRO", region: "LEC" },
    { name: "Paulcannon", realName: "Paulcannon", role: "support", team: "aNc Legends", teamCode: "PRO", region: "LEC" }
];

// Elementos del DOM
const playerImg = document.getElementById('playerImg');
const playerName = document.getElementById('playerName');
const playerRole = document.getElementById('playerRole');
const playerTeam = document.getElementById('playerTeam');
const playerRegion = document.getElementById('playerRegion');
const teamLogo = document.getElementById('teamLogo');
// smashBtn y passBtn se declaran dentro de DOMContentLoaded
const currentCount = document.getElementById('currentCount');
const totalCount = document.getElementById('totalCount');
const gameContainer = document.querySelector('.game-container');
const statsContainer = document.getElementById('statsContainer');
const smashCount = document.getElementById('smashCount');
const passCount = document.getElementById('passCount');
const smashList = document.getElementById('smashList');
const restartBtn = document.getElementById('restartBtn');
const backBtn = document.getElementById('backBtn');
const regionButtons = document.querySelectorAll('.region-btn');
const startBtn = document.getElementById('startBtn');
const filterContainer = document.getElementById('filterContainer');

// Elementos DOM para estadísticas globales de Firebase
const globalStats = document.getElementById('globalStats');
const smashVotesEl = document.getElementById('smashVotes');
const passVotesEl = document.getElementById('passVotes');
const totalVotesEl = document.getElementById('totalVotes');
const barSmash = document.getElementById('barSmash');
const barPass = document.getElementById('barPass');

// Variables del juego
let currentPlayerIndex = 0;
let shuffledPlayers = [];
let smashChoices = [];
let passChoices = [];

// Flags para prevenir race conditions
let isProcessingChoice = false;

// Variables de filtro
let selectedRegion = 'all';

// Debug: Mostrar estado inicial
console.log('🎮 Script cargado - Estado inicial de contenedores:');
console.log('  - filterContainer:', filterContainer);
console.log('  - gameContainer:', gameContainer);
console.log('  - statsContainer:', statsContainer);

// Firebase ya está inicializado en firebase-config.js
// Las variables database y votesRef están disponibles globalmente
console.log('🔍 Verificando Firebase:', typeof database !== 'undefined' ? 'Disponible' : 'No disponible');

// Manejar selección de región - MOVIDO A DOMContentLoaded
// console.log('🔍 Configurando botones de región:', regionButtons.length, 'botones encontrados');
// regionButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('✅ Click en región:', btn.dataset.region);
//         regionButtons.forEach(b => b.classList.remove('active'));
//         btn.classList.add('active');
//         selectedRegion = btn.dataset.region;
//     });
// });

// Iniciar juego con filtro de región - MOVIDO A DOMContentLoaded
// console.log('🔍 Botón de inicio encontrado:', startBtn ? 'SI' : 'NO');
// startBtn.addEventListener('click', () => {
//     console.log('✅ Click en EMPEZAR JUEGO - Región seleccionada:', selectedRegion);
//     filterContainer.style.display = 'none';
//     gameContainer.style.display = 'block';
//     initGame();
// });

// Función para mezclar array (Fisher-Yates shuffle)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ========== FUNCIONES DE FIREBASE ==========

// Cargar estadísticas de un jugador desde Firebase
async function loadPlayerStats(playerName) {
    if (!votesRef) return { smash: 0, pass: 0 };

    try {
        const snapshot = await votesRef.child(playerName).once('value');
        const data = snapshot.val();

        if (data) {
            return {
                smash: data.smash || 0,
                pass: data.pass || 0
            };
        }
        return { smash: 0, pass: 0 };
    } catch (error) {
        console.error('Error cargando estadísticas:', error);
        return { smash: 0, pass: 0 };
    }
}

// Actualizar voto en Firebase
async function updatePlayerVote(playerName, voteType) {
    if (!votesRef) return;

    try {
        const playerVoteRef = votesRef.child(playerName).child(voteType);

        // Incrementar contador usando transaction (evita race conditions)
        await playerVoteRef.transaction((currentValue) => {
            return (currentValue || 0) + 1;
        });

        console.log(`✅ Voto registrado: ${playerName} - ${voteType}`);
    } catch (error) {
        console.error('❌ Error guardando voto:', error);
    }
}

// Mostrar estadísticas globales en la UI
function displayGlobalStats(stats, animate = false) {
    const total = stats.smash + stats.pass;

    // Mostrar estadísticas siempre
    globalStats.style.display = 'block';

    // Calcular porcentajes
    let smashPercent, passPercent;

    if (total === 0) {
        // Si no hay votos, empezar en 50% para ambos
        smashPercent = 50;
        passPercent = 50;
    } else {
        // Calcular porcentajes reales basados en los votos
        smashPercent = (stats.smash / total) * 100;
        passPercent = (stats.pass / total) * 100;
    }

    // Actualizar valores con votos y porcentajes
    smashVotesEl.textContent = `${stats.smash} (${smashPercent.toFixed(1)}%)`;
    passVotesEl.textContent = `${stats.pass} (${passPercent.toFixed(1)}%)`;
    totalVotesEl.textContent = total;

    // Actualizar barras de progreso con animación
    if (animate) {
        // Empezar en 50% y animar hacia el valor real
        barSmash.style.width = '50%';
        barPass.style.width = '50%';

        // Agregar transición CSS
        barSmash.style.transition = 'width 0.8s ease-out';
        barPass.style.transition = 'width 0.8s ease-out';

        // Animar después de un pequeño delay para que se vea la transición
        setTimeout(() => {
            barSmash.style.width = smashPercent + '%';
            barPass.style.width = passPercent + '%';
        }, 50);
    } else {
        // Sin animación (cuando se carga la primera vez)
        barSmash.style.transition = 'none';
        barPass.style.transition = 'none';
        barSmash.style.width = smashPercent + '%';
        barPass.style.width = passPercent + '%';
    }
}

// ========== FIN FUNCIONES DE FIREBASE ==========

// ========== FUNCIONES DE ESTADÍSTICAS PARA CAMPEONES (Firebase) ==========

// Cargar estadísticas de un campeón desde Firebase
async function loadChampionStats(championName) {
    if (!championsVotesRef) return { smash: 0, pass: 0 };

    try {
        const snapshot = await championsVotesRef.child(championName).once('value');
        const data = snapshot.val();

        if (data) {
            return {
                smash: data.smash || 0,
                pass: data.pass || 0
            };
        }
        return { smash: 0, pass: 0 };
    } catch (error) {
        console.error('Error cargando estadísticas de campeón:', error);
        return { smash: 0, pass: 0 };
    }
}

// Actualizar voto de campeón en Firebase
async function updateChampionVote(championName, voteType) {
    if (!championsVotesRef) return;

    try {
        const championVoteRef = championsVotesRef.child(championName).child(voteType);

        // Incrementar contador usando transaction (evita race conditions)
        await championVoteRef.transaction((currentValue) => {
            return (currentValue || 0) + 1;
        });

        console.log(`✅ Voto de campeón registrado: ${championName} - ${voteType}`);
    } catch (error) {
        console.error('❌ Error guardando voto de campeón:', error);
    }
}

// Mostrar estadísticas globales para campeones
function displayGlobalStatsChampions(stats, animate = false) {
    const total = stats.smash + stats.pass;

    // Mostrar estadísticas siempre
    globalStatsChampions.style.display = 'block';

    // Calcular porcentajes
    let smashPercent, passPercent;

    if (total === 0) {
        // Si no hay votos, empezar en 50% para ambos
        smashPercent = 50;
        passPercent = 50;
    } else {
        // Calcular porcentajes reales basados en los votos
        smashPercent = (stats.smash / total) * 100;
        passPercent = (stats.pass / total) * 100;
    }

    // Actualizar valores con votos y porcentajes
    smashVotesChampion.textContent = `${stats.smash} (${smashPercent.toFixed(1)}%)`;
    passVotesChampion.textContent = `${stats.pass} (${passPercent.toFixed(1)}%)`;
    totalVotesChampion.textContent = total;

    // Actualizar barras de progreso con animación
    if (animate) {
        // Empezar en 50% y animar hacia el valor real
        barSmashChampion.style.width = '50%';
        barPassChampion.style.width = '50%';

        // Agregar transición CSS
        barSmashChampion.style.transition = 'width 0.8s ease-out';
        barPassChampion.style.transition = 'width 0.8s ease-out';

        // Animar después de un pequeño delay para que se vea la transición
        setTimeout(() => {
            barSmashChampion.style.width = smashPercent + '%';
            barPassChampion.style.width = passPercent + '%';
        }, 50);
    } else {
        // Sin animación (cuando se carga la primera vez)
        barSmashChampion.style.transition = 'none';
        barPassChampion.style.transition = 'none';
        barSmashChampion.style.width = smashPercent + '%';
        barPassChampion.style.width = passPercent + '%';
    }
}

// ========== FIN FUNCIONES DE ESTADÍSTICAS PARA CAMPEONES ==========

// Inicializar juego
function initGame() {
    console.log('🎲 Iniciando juego con región:', selectedRegion);

    // Filtrar jugadores por región seleccionada
    const filteredPlayers = selectedRegion === 'all'
        ? players
        : players.filter(p => p.region === selectedRegion);

    console.log('📊 Jugadores filtrados:', filteredPlayers.length, 'de', players.length, 'totales');

    if (filteredPlayers.length === 0) {
        console.error('❌ ERROR: No hay jugadores para la región:', selectedRegion);
        alert('No hay jugadores disponibles para esta región. Por favor selecciona otra región.');
        return;
    }

    shuffledPlayers = shuffleArray(filteredPlayers);
    currentPlayerIndex = 0;
    smashChoices = [];
    passChoices = [];
    totalCount.textContent = shuffledPlayers.length;
    showPlayer();
}

// Mostrar jugador actual
function showPlayer() {
    if (currentPlayerIndex >= shuffledPlayers.length) {
        showResults();
        return;
    }

    const player = shuffledPlayers[currentPlayerIndex];

    // Intentar cargar imagen con múltiples variantes del nombre
    const playerImagePaths = [
        `./images/players/${player.name}.jpg`,
        `./images/players/${player.name}.png`,
        `./images/players/${player.name.replace(/ /g, '_')}.jpg`,
        `./images/players/${player.name.replace(/ /g, '_')}.png`,
        `./images/players/${player.name.replace(/_/g, ' ')}.jpg`,
        `./images/players/${player.name.replace(/_/g, ' ')}.png`
    ];

    playerImg.alt = player.name;
    loadImageWithFallbacks(playerImg, playerImagePaths,
        `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&size=400&background=C8AA6E&color=010A13&bold=true&font-size=0.4`
    );

    // Cargar logo del equipo con múltiples fallbacks
    const teamLogoUrls = getTeamLogoUrl(player.team, player.teamCode);
    teamLogo.alt = player.team + ' logo';
    loadImageWithFallbacks(teamLogo, teamLogoUrls);
    teamLogo.style.display = 'block';

    // Actualizar información del jugador
    playerName.textContent = player.name;
    playerRole.textContent = `${player.role}`;
    playerTeam.textContent = `Equipo: ${player.team}`;
    playerRegion.textContent = `Región: ${player.region}`;
    currentCount.textContent = currentPlayerIndex + 1;

    // Ocultar estadísticas globales al inicio (se mostrarán después de votar)
    globalStats.style.display = 'none';
}

// Manejar elección
async function handleChoice(choice) {
    // Evitar race conditions
    if (isProcessingChoice) {
        console.warn('⚠️ Ya hay un voto en proceso, ignorando click');
        return;
    }

    const player = shuffledPlayers[currentPlayerIndex];

    // Validar que los botones existan
    const smashBtn = document.getElementById('smashBtn');
    const passBtn = document.getElementById('passBtn');

    if (!smashBtn || !passBtn) {
        console.error('❌ ERROR: Botones no encontrados en handleChoice', { smashBtn, passBtn });
        return;
    }

    isProcessingChoice = true;

    try {
        // Deshabilitar botones para evitar clicks múltiples
        smashBtn.disabled = true;
        passBtn.disabled = true;

        if (choice === 'smash') {
            smashChoices.push(player);
            // Guardar voto en Firebase
            await updatePlayerVote(player.name, 'smash');
        } else {
            passChoices.push(player);
            // Guardar voto en Firebase
            await updatePlayerVote(player.name, 'pass');
        }

        // Cargar y mostrar estadísticas actualizadas después de votar con animación
        if (votesRef) {
            const stats = await loadPlayerStats(player.name);
            displayGlobalStats(stats, true); // true = animar desde 50%
        }

        // Esperar 2.5 segundos para que el usuario vea las estadísticas
        await new Promise(resolve => setTimeout(resolve, 2500));

        // Avanzar al siguiente jugador
        currentPlayerIndex++;
    } finally {
        isProcessingChoice = false;

        // Rehabilitar botones solo si existen
        if (smashBtn && passBtn) {
            smashBtn.disabled = false;
            passBtn.disabled = false;
        }

        showPlayer();
    }
}

// Mostrar resultados
function showResults() {
    gameContainer.style.display = 'none';
    statsContainer.style.display = 'block';

    smashCount.textContent = smashChoices.length;
    passCount.textContent = passChoices.length;

    // Mostrar lista de SMASH
    smashList.innerHTML = '';
    smashChoices.forEach(player => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${player.name}</strong><br>
                <small>${player.team} - ${player.role}</small>
            </div>
        `;
        smashList.appendChild(li);
    });

    if (smashChoices.length === 0) {
        smashList.innerHTML = '<li style="text-align: center; color: #999;">No elegiste a nadie 😢</li>';
    }
}

// Reiniciar juego
function restartGame() {
    gameContainer.style.display = 'block';
    statsContainer.style.display = 'none';
    initGame();
}

// Volver al selector de región
function backToRegionSelector() {
    gameContainer.style.display = 'none';
    statsContainer.style.display = 'none';
    filterContainer.style.display = 'block';
}

// Event Listeners - MOVIDO A DOMContentLoaded
// Los listeners de teclado ahora están dentro de DOMContentLoaded

// ========== MENÚ HAMBURGUESA Y NAVEGACIÓN ==========
// Declare variables (will be initialized in DOMContentLoaded)
let hamburgerMenu;
let sidebar;
let closeMenu;
let menuOptions;
let gameTitle;

// Elementos de los nuevos modos de juego
let guessTeamContainer;
let guessNameContainer;
let guessIconContainer;

// Declare homeContainer and game cards (will be initialized in DOMContentLoaded)
let homeContainer;
let gameCards;

// Declarar contenedores de Daily Run y Ranking (will be initialized in DOMContentLoaded)
let dailyRunContainer;
let rankingContainer;

// Función para cambiar de modo
function switchGameMode(mode) {
    console.log('🔄 switchGameMode called with mode:', mode);

    // Si no es Daily Run, resetear el flag
    if (mode !== 'daily-run') {
        isDailyRunMode = false;
    }

    // Ocultar todos los contenedores - usando document.getElementById para evitar TDZ
    const hide = (id) => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    };

    hide('modeSelectionScreen');
    hide('dailyRotationScreen');
    hide('homeContainer');
    hide('filterContainer');
    hide('gameContainer');
    hide('statsContainer');
    hide('guessTeamContainer');
    hide('guessNameContainer');
    hide('guessIconContainer');
    hide('championsContainer');
    hide('championsGameContainer');
    hide('championsStatsContainer');
    hide('loldleAbilityContainer');
    hide('loldleSplashContainer');
    hide('loldleQuoteContainer');
    hide('loldleClassicContainer');
    hide('loldleAudioContainer');
    hide('loldleEmojiContainer');
    hide('hardmodeContainer');
    hide('esportsTriviaContainer');
    hide('dailyRunContainer');
    hide('rankingContainer');

    // Helper function to show element
    const show = (id) => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'block';
    };

    // Get gameTitle element
    const gameTitleEl = document.getElementById('gameTitle');
    const gameSubtitleEl = document.getElementById('gameSubtitle');

    // Ocultar título y subtítulo cuando se selecciona un modo de juego
    if (gameTitleEl) gameTitleEl.style.display = 'none';
    if (gameSubtitleEl) gameSubtitleEl.style.display = 'none';

    // Mostrar el modo seleccionado
    try {
        switch(mode) {
            case 'smash-or-pass-players':
                if (gameTitleEl) gameTitleEl.textContent = 'SMASH OR PASS - PROPLAYERS';
                show('filterContainer');
                break;
            case 'smash-or-pass-champions':
                if (gameTitleEl) gameTitleEl.textContent = 'SMASH OR PASS - CAMPEONES';
                show('championsContainer');
                break;
            case 'loldle-ability':
                if (gameTitleEl) gameTitleEl.textContent = 'ABILITY';
                show('loldleAbilityContainer');
                initLoldleAbility();
                break;
            case 'loldle-splash':
                if (gameTitleEl) gameTitleEl.textContent = 'SPLASH ART';
                show('loldleSplashContainer');
                initLoldleSplash();
                break;
            case 'loldle-quote':
                if (gameTitleEl) gameTitleEl.textContent = 'QUOTE';
                show('loldleQuoteContainer');
                initLoldleQuote();
                break;
            case 'loldle-audio':
                if (gameTitleEl) gameTitleEl.textContent = 'AUDIO';
                show('loldleAudioContainer');
                initLoldleAudio();
                break;
            case 'loldle-emoji':
                if (gameTitleEl) gameTitleEl.textContent = 'EMOJI';
                show('loldleEmojiContainer');
                initLoldleEmoji();
                break;
            case 'loldle-classic':
                if (gameTitleEl) gameTitleEl.textContent = 'CLASSIC';
                show('loldleClassicContainer');
                initLoldleClassic();
                break;
            case 'hardmode':
                if (gameTitleEl) gameTitleEl.textContent = 'HARD MODE - TRIVIA EXTREMA';
                show('hardmodeContainer');
                initHardmode();
                break;
            case 'esports-trivia':
                if (gameTitleEl) gameTitleEl.textContent = 'ESPORTS TRIVIA';
                show('esportsTriviaContainer');
                initEsportsTrivia();
                break;
            case 'guess-team':
                if (gameTitleEl) gameTitleEl.textContent = 'ADIVINA EL EQUIPO';
                show('guessTeamContainer');
                initGuessTeamGame();
                break;
            case 'guess-name':
                if (gameTitleEl) gameTitleEl.textContent = 'ADIVINA EL NOMBRE';
                show('guessNameContainer');
                initGuessNameGame();
                break;
            case 'guess-icon':
                if (gameTitleEl) gameTitleEl.textContent = 'ADIVINA EL ICONO';
                show('guessIconContainer');
                initGuessIconGame();
                break;
            case 'daily-run':
                showDailyRotation();
                break;
            case 'ranking':
                if (gameTitleEl) gameTitleEl.textContent = 'RANKING';
                show('rankingContainer');
                loadTodayRanking();
                break;
            default:
                console.error('❌ Unknown game mode:', mode);
        }
        console.log('✅ switchGameMode completed for mode:', mode);
    } catch(error) {
        console.error('❌ ERROR in switchGameMode:', error);
        console.error('Stack:', error.stack);
    }

    // Cerrar sidebar
    const sidebarEl = document.getElementById('sidebar');
    if (sidebarEl) sidebarEl.classList.remove('active');
}

// Event listeners para el menú hamburguesa (moved to DOMContentLoaded)

// Event listeners para las tarjetas de juego en home (moved to DOMContentLoaded)

// Función para volver al home
function backToHome() {
    // Ocultar todos los contenedores
    const modeScreen = document.getElementById('modeSelectionScreen');
    const dailyScreen = document.getElementById('dailyRotationScreen');
    if (modeScreen) modeScreen.style.display = 'none';
    if (dailyScreen) dailyScreen.style.display = 'none';

    filterContainer.style.display = 'none';
    gameContainer.style.display = 'none';
    statsContainer.style.display = 'none';
    guessTeamContainer.style.display = 'none';
    guessNameContainer.style.display = 'none';
    guessIconContainer.style.display = 'none';
    championsContainer.style.display = 'none';
    championsGameContainer.style.display = 'none';
    championsStatsContainer.style.display = 'none';
    loldleAbilityContainer.style.display = 'none';
    loldleSplashContainer.style.display = 'none';
    loldleQuoteContainer.style.display = 'none';
    loldleClassicContainer.style.display = 'none';
    hardmodeContainer.style.display = 'none';
    esportsTriviaContainer.style.display = 'none';

    // Mostrar home
    homeContainer.style.display = 'block';
    gameTitle.textContent = 'LEAGUE OF LEGENDS GAMES';

    // Mostrar título y subtítulo en el home
    const gameTitleEl = document.getElementById('gameTitle');
    const gameSubtitleEl = document.getElementById('gameSubtitle');
    if (gameTitleEl) gameTitleEl.style.display = 'block';
    if (gameSubtitleEl) gameSubtitleEl.style.display = 'block';
}

// Botones de volver en cada juego
// MOVIDO A DOMContentLoaded - No ejecutar aquí porque el DOM no existe todavía
// backBtn.addEventListener('click', backToHome);
// document.getElementById('backBtnTeam').addEventListener('click', backToHome);
// document.getElementById('backBtnName').addEventListener('click', backToHome);
// document.getElementById('backBtnIcon').addEventListener('click', backToHome);

// ========== MODO: ADIVINA EL EQUIPO ==========
let teamQuizPlayers = [];
let currentTeamQuestion = 0;
let teamScore = 0;

let currentGuessTeamSeed = null;

function initGuessTeamGame(seed = null) {
    currentGuessTeamSeed = seed;
    if (seed !== null) {
        // Selección determinística cuando hay seed
        const shuffled = [...players];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(seed + i) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        teamQuizPlayers = shuffled.slice(0, 3); // Cambiado a 3 preguntas
    } else {
        teamQuizPlayers = [...players].sort(() => Math.random() - 0.5).slice(0, 3); // Cambiado a 3 preguntas
    }
    currentTeamQuestion = 0;
    teamScore = 0;
    document.getElementById('teamScore').textContent = teamScore;
    document.getElementById('teamTotal').textContent = teamQuizPlayers.length;
    showTeamQuestion();
}

function showTeamQuestion() {
    if (currentTeamQuestion >= teamQuizPlayers.length) {
        showTeamResults();
        return;
    }

    const player = teamQuizPlayers[currentTeamQuestion];
    const guessTeamImg = document.getElementById('guessTeamImg');
    const guessTeamPlayerName = document.getElementById('guessTeamPlayerName');
    const teamOptionsGrid = document.getElementById('teamOptionsGrid');
    const teamResultMessage = document.getElementById('teamResultMessage');

    // Cargar imagen
    guessTeamImg.src = `./images/players/${player.name}.jpg`;
    guessTeamImg.onerror = function() {
        this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&size=400&background=C8AA6E&color=010A13&bold=true&font-size=0.4`;
    };

    guessTeamPlayerName.textContent = player.name;
    teamResultMessage.textContent = '';
    teamResultMessage.className = 'result-message';

    // Crear opciones (equipo correcto + 3 aleatorios)
    const correctTeam = player.team;
    const allTeams = [...new Set(players.map(p => p.team))];
    let wrongTeams, options;
    if (currentGuessTeamSeed !== null) {
        // Selección determinística
        const filtered = allTeams.filter(t => t !== correctTeam);
        const shuffled = [...filtered];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(currentGuessTeamSeed + 1000 + currentTeamQuestion * 10 + i) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        wrongTeams = shuffled.slice(0, 3);
        const allOptions = [correctTeam, ...wrongTeams];
        options = [...allOptions];
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(currentGuessTeamSeed + 2000 + currentTeamQuestion * 10 + i) * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
    } else {
        wrongTeams = allTeams.filter(t => t !== correctTeam).sort(() => Math.random() - 0.5).slice(0, 3);
        options = [correctTeam, ...wrongTeams].sort(() => Math.random() - 0.5);
    }

    teamOptionsGrid.innerHTML = '';
    options.forEach(team => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = team;
        btn.addEventListener('click', () => checkTeamAnswer(team, correctTeam, btn));
        teamOptionsGrid.appendChild(btn);
    });
}

function checkTeamAnswer(selected, correct, btn) {
    const teamOptionsGrid = document.getElementById('teamOptionsGrid');
    const teamResultMessage = document.getElementById('teamResultMessage');
    const buttons = teamOptionsGrid.querySelectorAll('.option-btn');

    buttons.forEach(button => button.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        teamResultMessage.textContent = '¡Correcto! ✓';
        teamResultMessage.className = 'result-message correct';
        teamScore++;
        document.getElementById('teamScore').textContent = teamScore;
    } else {
        btn.classList.add('incorrect');
        buttons.forEach(button => {
            if (button.textContent === correct) {
                button.classList.add('correct');
            }
        });
        teamResultMessage.textContent = '¡Incorrecto! ✗';
        teamResultMessage.className = 'result-message incorrect';
    }

    setTimeout(() => {
        currentTeamQuestion++;
        showTeamQuestion();
    }, 2000);
}

function showTeamResults() {
    const teamOptionsGrid = document.getElementById('teamOptionsGrid');
    const teamResultMessage = document.getElementById('teamResultMessage');

    teamOptionsGrid.innerHTML = '';
    teamResultMessage.textContent = `¡Juego terminado! Puntuación: ${teamScore}/${teamQuizPlayers.length}`;
    teamResultMessage.className = 'result-message';
    teamResultMessage.style.color = '#C8AA6E';
    teamResultMessage.style.fontSize = '1.5rem';

    // Daily Run hook - Convertir score a attempts (3/3 = 1 intento, 0/3 = 99 intentos)
    if (isDailyRunMode) {
        let attempts;
        if (teamScore === 3) {
            attempts = 1; // Perfecto
        } else if (teamScore === 2) {
            attempts = 2;
        } else if (teamScore === 1) {
            attempts = 3;
        } else {
            attempts = 99; // 0 puntos
        }
        setTimeout(() => completeChallenge(attempts), 2000);
    }
}

// ========== MODO: ADIVINA EL NOMBRE ==========
let nameQuizPlayers = [];
let currentNameQuestion = 0;
let nameScore = 0;
let currentGuessNameSeed = null;

function initGuessNameGame(seed = null) {
    currentGuessNameSeed = seed;
    if (seed !== null) {
        // Selección determinística cuando hay seed
        const shuffled = [...players];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(seed + i) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        nameQuizPlayers = shuffled.slice(0, 3); // Cambiado a 3 preguntas
    } else {
        nameQuizPlayers = [...players].sort(() => Math.random() - 0.5).slice(0, 3); // Cambiado a 3 preguntas
    }
    currentNameQuestion = 0;
    nameScore = 0;
    document.getElementById('nameScore').textContent = nameScore;
    document.getElementById('nameTotal').textContent = nameQuizPlayers.length;
    showNameQuestion();
}

function showNameQuestion() {
    if (currentNameQuestion >= nameQuizPlayers.length) {
        showNameResults();
        return;
    }

    const player = nameQuizPlayers[currentNameQuestion];
    const guessNameImg = document.getElementById('guessNameImg');
    const nameOptionsGrid = document.getElementById('nameOptionsGrid');
    const nameResultMessage = document.getElementById('nameResultMessage');

    // Cargar imagen
    guessNameImg.src = `./images/players/${player.name}.jpg`;
    guessNameImg.onerror = function() {
        this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&size=400&background=C8AA6E&color=010A13&bold=true&font-size=0.4`;
    };

    nameResultMessage.textContent = '';
    nameResultMessage.className = 'result-message';

    // Crear opciones (nombre correcto + 3 aleatorios)
    const correctName = player.name;
    const allNames = players.map(p => p.name);
    let wrongNames, options;
    if (currentGuessNameSeed !== null) {
        // Selección determinística
        const filtered = allNames.filter(n => n !== correctName);
        const shuffled = [...filtered];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(currentGuessNameSeed + 1000 + currentNameQuestion * 10 + i) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        wrongNames = shuffled.slice(0, 3);
        const allOptions = [correctName, ...wrongNames];
        options = [...allOptions];
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(currentGuessNameSeed + 2000 + currentNameQuestion * 10 + i) * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
    } else {
        wrongNames = allNames.filter(n => n !== correctName).sort(() => Math.random() - 0.5).slice(0, 3);
        options = [correctName, ...wrongNames].sort(() => Math.random() - 0.5);
    }

    nameOptionsGrid.innerHTML = '';
    options.forEach(name => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = name;
        btn.addEventListener('click', () => checkNameAnswer(name, correctName, btn));
        nameOptionsGrid.appendChild(btn);
    });
}

function checkNameAnswer(selected, correct, btn) {
    const nameOptionsGrid = document.getElementById('nameOptionsGrid');
    const nameResultMessage = document.getElementById('nameResultMessage');
    const buttons = nameOptionsGrid.querySelectorAll('.option-btn');

    buttons.forEach(button => button.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        nameResultMessage.textContent = '¡Correcto! ✓';
        nameResultMessage.className = 'result-message correct';
        nameScore++;
        document.getElementById('nameScore').textContent = nameScore;
    } else {
        btn.classList.add('incorrect');
        buttons.forEach(button => {
            if (button.textContent === correct) {
                button.classList.add('correct');
            }
        });
        nameResultMessage.textContent = '¡Incorrecto! ✗';
        nameResultMessage.className = 'result-message incorrect';
    }

    setTimeout(() => {
        currentNameQuestion++;
        showNameQuestion();
    }, 2000);
}

function showNameResults() {
    const nameOptionsGrid = document.getElementById('nameOptionsGrid');
    const nameResultMessage = document.getElementById('nameResultMessage');

    nameOptionsGrid.innerHTML = '';
    nameResultMessage.textContent = `¡Juego terminado! Puntuación: ${nameScore}/${nameQuizPlayers.length}`;
    nameResultMessage.className = 'result-message';
    nameResultMessage.style.color = '#C8AA6E';
    nameResultMessage.style.fontSize = '1.5rem';

    // Daily Run hook - Convertir score a attempts (3/3 = 1 intento, 0/3 = 99 intentos)
    if (isDailyRunMode) {
        let attempts;
        if (nameScore === 3) {
            attempts = 1; // Perfecto
        } else if (nameScore === 2) {
            attempts = 2;
        } else if (nameScore === 1) {
            attempts = 3;
        } else {
            attempts = 99; // 0 puntos
        }
        setTimeout(() => completeChallenge(attempts), 2000);
    }
}

// ========== MODO: ADIVINA EL ICONO ==========
let iconQuizTeams = [];
let currentIconQuestion = 0;
let iconScore = 0;
let currentGuessIconSeed = null;

function initGuessIconGame(seed = null) {
    currentGuessIconSeed = seed;
    // Obtener equipos únicos con sus códigos
    const uniqueTeams = [...new Map(players.map(p => [p.team, p])).values()];
    if (seed !== null) {
        // Selección determinística cuando hay seed
        const shuffled = [...uniqueTeams];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(seed + i) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        iconQuizTeams = shuffled.slice(0, 3); // Cambiado a 3 preguntas
    } else {
        iconQuizTeams = uniqueTeams.sort(() => Math.random() - 0.5).slice(0, 3); // Cambiado a 3 preguntas
    }
    currentIconQuestion = 0;
    iconScore = 0;
    document.getElementById('iconScore').textContent = iconScore;
    document.getElementById('iconTotal').textContent = iconQuizTeams.length;
    showIconQuestion();
}

function showIconQuestion() {
    if (currentIconQuestion >= iconQuizTeams.length) {
        showIconResults();
        return;
    }

    const player = iconQuizTeams[currentIconQuestion];
    const guessIconImg = document.getElementById('guessIconImg');
    const iconOptionsGrid = document.getElementById('iconOptionsGrid');
    const iconResultMessage = document.getElementById('iconResultMessage');

    // Cargar logo del equipo con múltiples fallbacks
    const teamIconUrls = getTeamLogoUrl(player.team, player.teamCode);
    loadImageWithFallbacks(guessIconImg, teamIconUrls);

    iconResultMessage.textContent = '';
    iconResultMessage.className = 'result-message';

    // Crear opciones (equipo correcto + 3 aleatorios)
    const correctTeam = player.team;
    const allTeams = [...new Set(players.map(p => p.team))];
    let wrongTeams, options;
    if (currentGuessIconSeed !== null) {
        // Selección determinística
        const filtered = allTeams.filter(t => t !== correctTeam);
        const shuffled = [...filtered];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(currentGuessIconSeed + 1000 + currentIconQuestion * 10 + i) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        wrongTeams = shuffled.slice(0, 3);
        const allOptions = [correctTeam, ...wrongTeams];
        options = [...allOptions];
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(currentGuessIconSeed + 2000 + currentIconQuestion * 10 + i) * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
    } else {
        wrongTeams = allTeams.filter(t => t !== correctTeam).sort(() => Math.random() - 0.5).slice(0, 3);
        options = [correctTeam, ...wrongTeams].sort(() => Math.random() - 0.5);
    }

    iconOptionsGrid.innerHTML = '';
    options.forEach(team => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = team;
        btn.addEventListener('click', () => checkIconAnswer(team, correctTeam, btn));
        iconOptionsGrid.appendChild(btn);
    });
}

function checkIconAnswer(selected, correct, btn) {
    const iconOptionsGrid = document.getElementById('iconOptionsGrid');
    const iconResultMessage = document.getElementById('iconResultMessage');
    const buttons = iconOptionsGrid.querySelectorAll('.option-btn');

    buttons.forEach(button => button.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        iconResultMessage.textContent = '¡Correcto! ✓';
        iconResultMessage.className = 'result-message correct';
        iconScore++;
        document.getElementById('iconScore').textContent = iconScore;
    } else {
        btn.classList.add('incorrect');
        buttons.forEach(button => {
            if (button.textContent === correct) {
                button.classList.add('correct');
            }
        });
        iconResultMessage.textContent = '¡Incorrecto! ✗';
        iconResultMessage.className = 'result-message incorrect';
    }

    setTimeout(() => {
        currentIconQuestion++;
        showIconQuestion();
    }, 2000);
}

function showIconResults() {
    const iconOptionsGrid = document.getElementById('iconOptionsGrid');
    const iconResultMessage = document.getElementById('iconResultMessage');

    iconOptionsGrid.innerHTML = '';
    iconResultMessage.textContent = `¡Juego terminado! Puntuación: ${iconScore}/${iconQuizTeams.length}`;
    iconResultMessage.className = 'result-message';
    iconResultMessage.style.color = '#C8AA6E';
    iconResultMessage.style.fontSize = '1.5rem';

    // Daily Run hook - Convertir score a attempts (3/3 = 1 intento, 0/3 = 99 intentos)
    if (isDailyRunMode) {
        let attempts;
        if (iconScore === 3) {
            attempts = 1; // Perfecto
        } else if (iconScore === 2) {
            attempts = 2;
        } else if (iconScore === 1) {
            attempts = 3;
        } else {
            attempts = 99; // 0 puntos
        }
        setTimeout(() => completeChallenge(attempts), 2000);
    }
}

// ========== MODO: SMASH OR PASS CAMPEONES ==========
const DDRAGON_VERSION = '14.23.1'; // Versión actual de DataDragon
const champions = [
    // Masculino
    { id: 'Aatrox', name: 'Aatrox', title: 'La Espada de los Oscuros', gender: 'male' },
    { id: 'Alistar', name: 'Alistar', title: 'El Minotauro', gender: 'male' },
    { id: 'Amumu', name: 'Amumu', title: 'La Momia Triste', gender: 'male' },
    { id: 'Aphelios', name: 'Aphelios', title: 'El Arma de los Fieles', gender: 'male' },
    { id: 'AurelionSol', name: 'Aurelion Sol', title: 'El Forjador de Estrellas', gender: 'male' },
    { id: 'Azir', name: 'Azir', title: 'El Emperador de las Arenas', gender: 'male' },
    { id: 'Bard', name: 'Bard', title: 'El Guardián Errante', gender: 'male' },
    { id: 'Blitzcrank', name: 'Blitzcrank', title: 'El Gran Golem de Vapor', gender: 'male' },
    { id: 'Brand', name: 'Brand', title: 'La Venganza Ardiente', gender: 'male' },
    { id: 'Braum', name: 'Braum', title: 'El Corazón de Freljord', gender: 'male' },
    { id: 'Darius', name: 'Darius', title: 'La Mano de Noxus', gender: 'male' },
    { id: 'DrMundo', name: 'Dr. Mundo', title: 'El Loco de Zaun', gender: 'male' },
    { id: 'Draven', name: 'Draven', title: 'El Ejecutor Glorioso', gender: 'male' },
    { id: 'Ekko', name: 'Ekko', title: 'El Chico que Quebró el Tiempo', gender: 'male' },
    { id: 'Ezreal', name: 'Ezreal', title: 'El Explorador Pródigo', gender: 'male' },
    { id: 'Fiddlesticks', name: 'Fiddlesticks', title: 'El Espantapájaros Ancestral', gender: 'male' },
    { id: 'Galio', name: 'Galio', title: 'El Coloso', gender: 'male' },
    { id: 'Gangplank', name: 'Gangplank', title: 'El Azote de los Mares', gender: 'male' },
    { id: 'Garen', name: 'Garen', title: 'El Poder de Demacia', gender: 'male' },
    { id: 'Gragas', name: 'Gragas', title: 'El Saqueador Borracho', gender: 'male' },
    { id: 'Graves', name: 'Graves', title: 'El Fuera de la Ley', gender: 'male' },
    { id: 'Hecarim', name: 'Hecarim', title: 'La Sombra de la Guerra', gender: 'male' },
    { id: 'Heimerdinger', name: 'Heimerdinger', title: 'El Inventor Venerado', gender: 'male' },
    { id: 'Ivern', name: 'Ivern', title: 'El Padre de los Arboles', gender: 'male' },
    { id: 'JarvanIV', name: 'Jarvan IV', title: 'El Ejemplo de Demacia', gender: 'male' },
    { id: 'Jax', name: 'Jax', title: 'El Gran Maestro de Armas', gender: 'male' },
    { id: 'Jayce', name: 'Jayce', title: 'El Defensor del Mañana', gender: 'male' },
    { id: 'Jhin', name: 'Jhin', title: 'El Artista Virtuoso', gender: 'male' },
    { id: 'Kayn', name: 'Kayn', title: 'El Segador de Sombras', gender: 'male' },
    { id: 'Kassadin', name: 'Kassadin', title: 'El Caminante del Vacío', gender: 'male' },
    { id: 'Khazix', name: "Kha'Zix", title: 'El Saqueador del Vacío', gender: 'male' },
    { id: 'Kled', name: 'Kled', title: 'El Cantamañanas Reunificador', gender: 'male' },
    { id: 'KSante', name: "K'Sante", title: 'El Orgullo de Nazumah', gender: 'male' },
    { id: 'LeeSin', name: 'Lee Sin', title: 'El Monje Ciego', gender: 'male' },
    { id: 'Lucian', name: 'Lucian', title: 'El Purificador', gender: 'male' },
    { id: 'Malphite', name: 'Malphite', title: 'Fragmento del Monolito', gender: 'male' },
    { id: 'Malzahar', name: 'Malzahar', title: 'El Profeta del Vacío', gender: 'male' },
    { id: 'MasterYi', name: 'Master Yi', title: 'El Espadachín Wuju', gender: 'male' },
    { id: 'Milio', name: 'Milio', title: 'El Hombre Amable del Fuego', gender: 'male' },
    { id: 'Mordekaiser', name: 'Mordekaiser', title: 'El Emperador de Hierro', gender: 'male' },
    { id: 'Nasus', name: 'Nasus', title: 'El Guardián de las Arenas', gender: 'male' },
    { id: 'Nautilus', name: 'Nautilus', title: 'El Titán de las Profundidades', gender: 'male' },
    { id: 'Olaf', name: 'Olaf', title: 'El Berserker', gender: 'male' },
    { id: 'Ornn', name: 'Ornn', title: 'El Fuego bajo la Montaña', gender: 'male' },
    { id: 'Pantheon', name: 'Pantheon', title: 'El Aspecto Implacable de la Guerra', gender: 'male' },
    { id: 'Pyke', name: 'Pyke', title: 'El Destripador de Aguas Sangrientas', gender: 'male' },
    { id: 'Rakan', name: 'Rakan', title: 'El Encantador', gender: 'male' },
    { id: 'Rammus', name: 'Rammus', title: 'El Armadillo', gender: 'male' },
    { id: 'RekSai', name: "Rek'Sai", title: 'La Reina del Vacío', gender: 'female' },
    { id: 'Renekton', name: 'Renekton', title: 'El Carnicero de las Arenas', gender: 'male' },
    { id: 'Rengar', name: 'Rengar', title: 'El Acechador Orgulloso', gender: 'male' },
    { id: 'Ryze', name: 'Ryze', title: 'El Mago Rúnico', gender: 'male' },
    { id: 'Sett', name: 'Sett', title: 'El Jefe', gender: 'male' },
    { id: 'Shen', name: 'Shen', title: 'El Ojo del Crepúsculo', gender: 'male' },
    { id: 'Singed', name: 'Singed', title: 'El Quimico Loco', gender: 'male' },
    { id: 'Sion', name: 'Sion', title: 'La Máquina de Matar Indómita', gender: 'male' },
    { id: 'Swain', name: 'Swain', title: 'El Gran General Noxiano', gender: 'male' },
    { id: 'Sylas', name: 'Sylas', title: 'El Romecadenas', gender: 'male' },
    { id: 'Talon', name: 'Talon', title: 'La Sombra de la Cuchilla', gender: 'male' },
    { id: 'Taric', name: 'Taric', title: 'El Aspecto Escudo de Targón', gender: 'male' },
    { id: 'Thresh', name: 'Thresh', title: 'El Guardián de las Cadenas', gender: 'male' },
    { id: 'TwistedFate', name: 'Twisted Fate', title: 'El Maestro de las Cartas', gender: 'male' },
    { id: 'Trundle', name: 'Trundle', title: 'El Rey Trol', gender: 'male' },
    { id: 'Tryndamere', name: 'Tryndamere', title: 'El Rey Bárbaro', gender: 'male' },
    { id: 'Udyr', name: 'Udyr', title: 'El Caminante de los Espíritus', gender: 'male' },
    { id: 'Urgot', name: 'Urgot', title: 'La Fuerza de Zaun', gender: 'male' },
    { id: 'Varus', name: 'Varus', title: 'La Flecha del Castigo', gender: 'male' },
    { id: 'Viego', name: 'Viego', title: 'El Rey Arruinado', gender: 'male' },
    { id: 'Viktor', name: 'Viktor', title: 'El Heraldo de las Máquinas', gender: 'male' },
    { id: 'Vladimir', name: 'Vladimir', title: 'El Cosechador Carmesí', gender: 'male' },
    { id: 'Volibear', name: 'Volibear', title: 'La Tormenta Implacable', gender: 'male' },
    { id: 'Warwick', name: 'Warwick', title: 'La Furia Desatada de Zaun', gender: 'male' },
    { id: 'Wukong', name: 'Wukong', title: 'El Guerrero Simio', gender: 'male' },
    { id: 'Xerath', name: 'Xerath', title: 'El Mago Ascendido', gender: 'male' },
    { id: 'XinZhao', name: 'Xin Zhao', title: 'El Senescal de Demacia', gender: 'male' },
    { id: 'Yasuo', name: 'Yasuo', title: 'El Imperdonable', gender: 'male' },
    { id: 'Yone', name: 'Yone', title: 'El No Olvidado', gender: 'male' },
    { id: 'Yorick', name: 'Yorick', title: 'El Pastor de las Almas Perdidas', gender: 'male' },
    { id: 'Zac', name: 'Zac', title: 'El Arma Secreta', gender: 'male' },
    { id: 'Zed', name: 'Zed', title: 'El Maestro de las Sombras', gender: 'male' },
    { id: 'Ziggs', name: 'Ziggs', title: 'El Experto en Hexplosivos', gender: 'male' },
    { id: 'Zilean', name: 'Zilean', title: 'El Guardián del Tiempo', gender: 'male' },

    // Femenino
    { id: 'Ahri', name: 'Ahri', title: 'La Vastaya de Nueve Colas', gender: 'female' },
    { id: 'Akali', name: 'Akali', title: 'La Asesina Renegada', gender: 'female' },
    { id: 'Ambessa', name: 'Ambessa', title: 'La Matrona de la Guerra', gender: 'female' },
    { id: 'Anivia', name: 'Anivia', title: 'La Criofénix', gender: 'female' },
    { id: 'Annie', name: 'Annie', title: 'La Niña Oscura', gender: 'female' },
    { id: 'Ashe', name: 'Ashe', title: 'La Arquera de Hielo', gender: 'female' },
    { id: 'Belveth', name: "Bel'Veth", title: 'La Emperatriz del Vacío', gender: 'female' },
    { id: 'Briar', name: 'Briar', title: 'El Hambre Desatada', gender: 'female' },
    { id: 'Caitlyn', name: 'Caitlyn', title: 'La Alguacil de Piltover', gender: 'female' },
    { id: 'Camille', name: 'Camille', title: 'La Sombra de Acero', gender: 'female' },
    { id: 'Cassiopeia', name: 'Cassiopeia', title: 'El Abrazo de la Serpiente', gender: 'female' },
    { id: 'Diana', name: 'Diana', title: 'El Desprecio de la Luna', gender: 'female' },
    { id: 'Elise', name: 'Elise', title: 'La Reina de las Arañas', gender: 'female' },
    { id: 'Evelynn', name: 'Evelynn', title: 'El Abrazo de la Agonía', gender: 'female' },
    { id: 'Fiora', name: 'Fiora', title: 'La Gran Duelista', gender: 'female' },
    { id: 'Gwen', name: 'Gwen', title: 'La Costurera Consagrada', gender: 'female' },
    { id: 'Illaoi', name: 'Illaoi', title: 'La Sacerdotisa del Kraken', gender: 'female' },
    { id: 'Irelia', name: 'Irelia', title: 'La Bailarina de las Espadas', gender: 'female' },
    { id: 'Janna', name: 'Janna', title: 'La Furia de la Tormenta', gender: 'female' },
    { id: 'Jinx', name: 'Jinx', title: 'La Bala Perdida', gender: 'female' },
    { id: 'Kalista', name: 'Kalista', title: 'La Lanza de la Venganza', gender: 'female' },
    { id: 'Karma', name: 'Karma', title: 'La Iluminada', gender: 'female' },
    { id: 'Katarina', name: 'Katarina', title: 'La Daga Siniestra', gender: 'female' },
    { id: 'Kayle', name: 'Kayle', title: 'La Justiciera', gender: 'female' },
    { id: 'Kaisa', name: "Kai'Sa", title: 'Hija del Vacío', gender: 'female' },
    { id: 'Kindred', name: 'Kindred', title: 'Los Cazadores Eternos', gender: 'female' },
    { id: 'Leblanc', name: 'LeBlanc', title: 'La Hechicera Pálida', gender: 'female' },
    { id: 'Leona', name: 'Leona', title: 'El Resplandor del Amanecer', gender: 'female' },
    { id: 'Lillia', name: 'Lillia', title: 'La Florecilla Tímida', gender: 'female' },
    { id: 'Lissandra', name: 'Lissandra', title: 'La Bruja de Hielo', gender: 'female' },
    { id: 'Lux', name: 'Lux', title: 'La Dama de la Luz', gender: 'female' },
    { id: 'Mel', name: 'Mel', title: 'La Dama de las Llamas', gender: 'female' },
    { id: 'MissFortune', name: 'Miss Fortune', title: 'La Cazarrecompensas', gender: 'female' },
    { id: 'Morgana', name: 'Morgana', title: 'La Caída', gender: 'female' },
    { id: 'Nami', name: 'Nami', title: 'La Invocadora de Mareas', gender: 'female' },
    { id: 'Neeko', name: 'Neeko', title: 'La Camaleona Curiosa', gender: 'female' },
    { id: 'Nidalee', name: 'Nidalee', title: 'La Cazadora Bestial', gender: 'female' },
    { id: 'Nilah', name: 'Nilah', title: 'La Alegría Desatada', gender: 'female' },
    { id: 'Orianna', name: 'Orianna', title: 'La Dama Mecánica', gender: 'female' },
    { id: 'Poppy', name: 'Poppy', title: 'La Guardiana del Martillo', gender: 'female' },
    { id: 'Qiyana', name: 'Qiyana', title: 'La Emperatriz de los Elementos', gender: 'female' },
    { id: 'Quinn', name: 'Quinn', title: 'Las Alas de Demacia', gender: 'female' },
    { id: 'Riven', name: 'Riven', title: 'La Exiliada', gender: 'female' },
    { id: 'Samira', name: 'Samira', title: 'La Rosa del Desierto', gender: 'female' },
    { id: 'Sejuani', name: 'Sejuani', title: 'La Furia del Norte', gender: 'female' },
    { id: 'Senna', name: 'Senna', title: 'La Redentora', gender: 'female' },
    { id: 'Seraphine', name: 'Seraphine', title: 'La Soñadora', gender: 'female' },
    { id: 'Shyvana', name: 'Shyvana', title: 'La Hija del Dragón', gender: 'female' },
    { id: 'Sivir', name: 'Sivir', title: 'La Maestra de Batalla', gender: 'female' },
    { id: 'Sona', name: 'Sona', title: 'Virtuosa de las Cuerdas', gender: 'female' },
    { id: 'Soraka', name: 'Soraka', title: 'La Hija de las Estrellas', gender: 'female' },
    { id: 'Syndra', name: 'Syndra', title: 'La Soberana Oscura', gender: 'female' },
    { id: 'Taliyah', name: 'Taliyah', title: 'La Tejedora de Piedra', gender: 'female' },
    { id: 'Tristana', name: 'Tristana', title: 'La Artillera Yordle', gender: 'female' },
    { id: 'Vayne', name: 'Vayne', title: 'La Cazadora Nocturna', gender: 'female' },
    { id: 'Vex', name: 'Vex', title: 'La Tristeza Gloriosa', gender: 'female' },
    { id: 'Vi', name: 'Vi', title: 'La Ejecutora de Piltover', gender: 'female' },
    { id: 'Xayah', name: 'Xayah', title: 'La Rebelde', gender: 'female' },
    { id: 'Zeri', name: 'Zeri', title: 'La Chispa de Zaun', gender: 'female' },
    { id: 'Zoe', name: 'Zoe', title: 'El Aspecto del Crepúsculo', gender: 'female' },
    { id: 'Zyra', name: 'Zyra', title: 'El Despertar de las Espinas', gender: 'female' }
];

// Estado del juego de campeones
let selectedGender = 'all';
let shuffledChampions = [];
let currentChampionIndex = 0;
let smashChampions = [];
let passChampions = [];

// Flag para prevenir race conditions
let isProcessingChampionChoice = false;

// Elementos del DOM
const championsContainer = document.getElementById('championsContainer');
const championsGameContainer = document.getElementById('championsGameContainer');
const championsStatsContainer = document.getElementById('championsStatsContainer');
const genderBtns = document.querySelectorAll('.gender-btn');
const startChampionsBtn = document.getElementById('startChampionsBtn');
const backBtnChampions = document.getElementById('backBtnChampions');
const championImg = document.getElementById('championImg');
const championName = document.getElementById('championName');
const championTitle = document.getElementById('championTitle');
const currentChampionCount = document.getElementById('currentChampionCount');
const totalChampionCount = document.getElementById('totalChampionCount');
// smashChampionBtn y passChampionBtn se declaran dentro de DOMContentLoaded
const smashChampionCount = document.getElementById('smashChampionCount');
const passChampionCount = document.getElementById('passChampionCount');
const smashChampionList = document.getElementById('smashChampionList');
const restartChampionsBtn = document.getElementById('restartChampionsBtn');

// Elementos de estadísticas globales para campeones
const globalStatsChampions = document.getElementById('globalStatsChampions');
const barSmashChampion = document.getElementById('barSmashChampion');
const barPassChampion = document.getElementById('barPassChampion');
const smashVotesChampion = document.getElementById('smashVotesChampion');
const passVotesChampion = document.getElementById('passVotesChampion');
const totalVotesChampion = document.getElementById('totalVotesChampion');

// Seleccionar género
genderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        genderBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedGender = btn.dataset.gender;
    });
});

// Iniciar juego de campeones - MOVIDO A DOMContentLoaded
// startChampionsBtn.addEventListener('click', () => {
//     initChampionsGame();
// });

// Volver a selector de género - MOVIDO A DOMContentLoaded
// backBtnChampions.addEventListener('click', backToHome);

// Funciones del juego
function initChampionsGame() {
    // Filtrar campeones por género
    let filteredChampions = champions;
    if (selectedGender !== 'all') {
        filteredChampions = champions.filter(c => c.gender === selectedGender);
    }

    // Mezclar campeones
    shuffledChampions = [...filteredChampions].sort(() => Math.random() - 0.5);
    currentChampionIndex = 0;
    smashChampions = [];
    passChampions = [];

    totalChampionCount.textContent = shuffledChampions.length;

    championsContainer.style.display = 'none';
    championsGameContainer.style.display = 'block';
    championsStatsContainer.style.display = 'none';

    showChampion();
}

async function showChampion() {
    if (currentChampionIndex >= shuffledChampions.length) {
        showChampionsResults();
        return;
    }

    const champion = shuffledChampions[currentChampionIndex];

    // Intentar cargar imagen local primero, luego DataDragon como fallback
    const localImagePaths = [
        `./images/champions/${champion.id.toLowerCase()}.jpg`,
        `./images/champions/${champion.id.toLowerCase()}.png`,
        `./images/champions/${champion.id.toLowerCase()}.webp`,
        `./images/champions/${champion.id}.jpg`,
        `./images/champions/${champion.id}.png`,
        `./images/champions/${champion.id}.webp`
    ];

    const dataDragonUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;

    championImg.alt = champion.name;
    loadImageWithFallbacks(championImg, localImagePaths, dataDragonUrl);

    championName.textContent = champion.name;
    championTitle.textContent = champion.title;
    currentChampionCount.textContent = currentChampionIndex + 1;

    // Ocultar estadísticas globales al inicio (se mostrarán después de votar)
    const globalStatsChampions = document.getElementById('globalStatsChampions');
    if (globalStatsChampions) {
        globalStatsChampions.style.display = 'none';
    }
}

async function handleChampionChoice(choice) {
    // Evitar race conditions
    if (isProcessingChampionChoice) {
        console.warn('⚠️ Ya hay un voto en proceso, ignorando click');
        return;
    }

    const champion = shuffledChampions[currentChampionIndex];

    // Validar que los botones existan
    const smashChampionBtn = document.getElementById('smashChampionBtn');
    const passChampionBtn = document.getElementById('passChampionBtn');

    if (!smashChampionBtn || !passChampionBtn) {
        console.error('❌ ERROR: Champion buttons no encontrados', { smashChampionBtn, passChampionBtn });
        return;
    }

    isProcessingChampionChoice = true;

    try {
        // Deshabilitar botones para evitar clicks múltiples
        smashChampionBtn.disabled = true;
        passChampionBtn.disabled = true;

        if (choice === 'smash') {
            smashChampions.push(champion);
            // Guardar voto en Firebase
            await updateChampionVote(champion.name, 'smash');
        } else {
            passChampions.push(champion);
            // Guardar voto en Firebase
            await updateChampionVote(champion.name, 'pass');
        }

        // Cargar y mostrar estadísticas actualizadas después de votar con animación
        if (championsVotesRef) {
            const stats = await loadChampionStats(champion.name);
            displayGlobalStatsChampions(stats, true); // true = animar desde 50%
        }

        // Esperar 2.5 segundos para que el usuario vea las estadísticas
        await new Promise(resolve => setTimeout(resolve, 2500));

        // Avanzar al siguiente campeón
        currentChampionIndex++;
    } finally {
        isProcessingChampionChoice = false;

        // Rehabilitar botones solo si existen
        if (smashChampionBtn && passChampionBtn) {
            smashChampionBtn.disabled = false;
            passChampionBtn.disabled = false;
        }

        showChampion();
    }
}

function showChampionsResults() {
    championsGameContainer.style.display = 'none';
    championsStatsContainer.style.display = 'block';

    smashChampionCount.textContent = smashChampions.length;
    passChampionCount.textContent = passChampions.length;

    // Mostrar lista de SMASH
    smashChampionList.innerHTML = '';
    smashChampions.forEach(champion => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${champion.name}</strong><br>
                <small>${champion.title}</small>
            </div>
        `;
        smashChampionList.appendChild(li);
    });

    if (smashChampions.length === 0) {
        smashChampionList.innerHTML = '<li style="text-align: center; color: #999;">No elegiste a nadie 😢</li>';
    }
}

function restartChampionsGame() {
    championsGameContainer.style.display = 'block';
    championsStatsContainer.style.display = 'none';
    initChampionsGame();
}

// Event Listeners - MOVIDO A DOMContentLoaded

// ========== FUNCIÓN GENÉRICA DE AUTOCOMPLETADO ==========
function setupAutocomplete(inputElement, dropdownElement, guessedList, checkFunction) {
    let selectedIndex = -1;

    function showAutocomplete(searchTerm) {
        if (!searchTerm || searchTerm.length < 1) {
            dropdownElement.classList.remove('show');
            dropdownElement.innerHTML = '';
            return;
        }

        const filtered = champions.filter(champ =>
            champ.name.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
            !guessedList.includes(champ.id)
        ).slice(0, 8);

        if (filtered.length === 0) {
            dropdownElement.classList.remove('show');
            dropdownElement.innerHTML = '';
            return;
        }

        dropdownElement.innerHTML = filtered.map((champ, index) => `
            <div class="autocomplete-item ${index === selectedIndex ? 'selected' : ''}" data-champion-name="${champ.name}">
                <img src="https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/champion/${champ.id}.png" alt="${champ.name}">
                <span>${champ.name}</span>
            </div>
        `).join('');

        dropdownElement.classList.add('show');

        const items = dropdownElement.querySelectorAll('.autocomplete-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                inputElement.value = item.dataset.championName;
                dropdownElement.classList.remove('show');
                dropdownElement.innerHTML = '';
                selectedIndex = -1;
                checkFunction();
            });
        });
    }

    inputElement.addEventListener('input', (e) => {
        selectedIndex = -1;
        showAutocomplete(e.target.value);
    });

    inputElement.addEventListener('keydown', (e) => {
        const items = dropdownElement.querySelectorAll('.autocomplete-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (items.length > 0) {
                selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
                showAutocomplete(inputElement.value);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (items.length > 0) {
                selectedIndex = Math.max(selectedIndex - 1, 0);
                showAutocomplete(inputElement.value);
            }
        } else if (e.key === 'Enter') {
            if (selectedIndex >= 0 && items.length > 0) {
                e.preventDefault();
                const selectedItem = items[selectedIndex];
                inputElement.value = selectedItem.dataset.championName;
                dropdownElement.classList.remove('show');
                dropdownElement.innerHTML = '';
                selectedIndex = -1;
            }
        } else if (e.key === 'Escape') {
            dropdownElement.classList.remove('show');
            dropdownElement.innerHTML = '';
            selectedIndex = -1;
        }
    });

    document.addEventListener('click', (e) => {
        if (!inputElement.contains(e.target) && !dropdownElement.contains(e.target)) {
            dropdownElement.classList.remove('show');
            dropdownElement.innerHTML = '';
            selectedIndex = -1;
        }
    });

    return {
        close: () => {
            dropdownElement.classList.remove('show');
            dropdownElement.innerHTML = '';
            selectedIndex = -1;
        }
    };
}

// ========== MODO: LOLDLE ABILITY ==========
const loldleAbilityContainer = document.getElementById('loldleAbilityContainer');
const abilityIcon = document.getElementById('abilityIcon');
const abilityKey = document.getElementById('abilityKey');
const abilityName = document.getElementById('abilityName');
const abilityGuessInput = document.getElementById('abilityGuessInput');
const abilityGuessBtn = document.getElementById('abilityGuessBtn');
const abilityAttempts = document.getElementById('abilityAttempts');
const abilityAttemptsList = document.getElementById('abilityAttemptsList');
const abilityResult = document.getElementById('abilityResult');
const restartAbilityBtn = document.getElementById('restartAbilityBtn');
const abilityAutocomplete = document.getElementById('abilityAutocomplete');

let currentAbilityChampion = null;
let currentAbility = null;
let abilityAttemptsCount = 0;
const MAX_ABILITY_ATTEMPTS = 6;
let abilityGuessedChampions = [];
let allAbilities = []; // Todas las habilidades del campeón (P, Q, W, E, R)
let visibleAbilitiesIndices = []; // Índices de las habilidades visibles actualmente
let championAbilityData = null; // Datos completos de las habilidades del campeón

// Setup autocomplete for Ability mode
if (abilityGuessInput && abilityAutocomplete) {
    setupAutocomplete(abilityGuessInput, abilityAutocomplete, abilityGuessedChampions, checkAbilityGuess);
}

async function initLoldleAbility(seed = null) {
    const randomValue1 = seed !== null ? seededRandom(seed) : Math.random();
    const randomValue2 = seed !== null ? seededRandom(seed + 1) : Math.random();
    currentAbilityChampion = champions[Math.floor(randomValue1 * champions.length)];

    if (!currentAbilityChampion || !currentAbilityChampion.id) {
        console.error('Invalid champion selected:', currentAbilityChampion);
        return;
    }

    // Cargar datos del campeón para obtener TODAS las habilidades
    try {
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/data/en_US/champion/${currentAbilityChampion.id}.json`);
        const data = await response.json();
        championAbilityData = data.data[currentAbilityChampion.id];

        // Preparar todas las habilidades
        allAbilities = [
            {
                key: 'P',
                name: championAbilityData.passive.name,
                image: championAbilityData.passive.image.full,
                isPassive: true
            },
            {
                key: 'Q',
                name: championAbilityData.spells[0].name,
                image: championAbilityData.spells[0].image.full,
                isPassive: false
            },
            {
                key: 'W',
                name: championAbilityData.spells[1].name,
                image: championAbilityData.spells[1].image.full,
                isPassive: false
            },
            {
                key: 'E',
                name: championAbilityData.spells[2].name,
                image: championAbilityData.spells[2].image.full,
                isPassive: false
            },
            {
                key: 'R',
                name: championAbilityData.spells[3].name,
                image: championAbilityData.spells[3].image.full,
                isPassive: false
            }
        ];

        // Seleccionar una habilidad aleatoria para empezar
        const firstAbilityIndex = Math.floor(randomValue2 * allAbilities.length);
        visibleAbilitiesIndices = [firstAbilityIndex];

        // Actualizar la visualización
        updateAbilityDisplay();

    } catch (error) {
        console.error('Error cargando habilidades:', error);
    }

    abilityAttemptsCount = 0;
    abilityAttempts.textContent = abilityAttemptsCount;
    abilityAttemptsList.innerHTML = '';
    abilityResult.textContent = '';
    abilityResult.className = 'result-message';
    abilityGuessInput.value = '';
    abilityGuessInput.disabled = false;
    abilityGuessBtn.disabled = false;
    restartAbilityBtn.style.display = 'none';
}

// Función para actualizar la visualización de las habilidades
function updateAbilityDisplay() {
    const abilityDisplay = document.getElementById('abilityDisplay');
    abilityDisplay.innerHTML = '';
    abilityDisplay.style.display = 'flex';
    abilityDisplay.style.flexWrap = 'wrap';
    abilityDisplay.style.justifyContent = 'center';
    abilityDisplay.style.gap = '20px';
    abilityDisplay.style.marginBottom = '20px';

    visibleAbilitiesIndices.forEach(index => {
        const ability = allAbilities[index];

        const abilityContainer = document.createElement('div');
        abilityContainer.className = 'ability-item';
        abilityContainer.style.textAlign = 'center';

        const iconContainer = document.createElement('div');
        iconContainer.className = 'ability-icon-container';
        iconContainer.style.position = 'relative';
        iconContainer.style.display = 'inline-block';

        const icon = document.createElement('img');
        if (ability.isPassive) {
            icon.src = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/passive/${ability.image}`;
        } else {
            icon.src = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/spell/${ability.image}`;
        }
        icon.alt = ability.name;
        icon.style.width = '64px';
        icon.style.height = '64px';
        icon.style.borderRadius = '8px';
        icon.style.border = '2px solid rgba(200, 170, 110, 0.5)';

        const keySpan = document.createElement('span');
        keySpan.className = 'ability-key';
        keySpan.textContent = ability.key;
        keySpan.style.position = 'absolute';
        keySpan.style.bottom = '-5px';
        keySpan.style.right = '-5px';
        keySpan.style.background = 'rgba(200, 170, 110, 0.9)';
        keySpan.style.color = '#0a1428';
        keySpan.style.padding = '2px 6px';
        keySpan.style.borderRadius = '4px';
        keySpan.style.fontSize = '0.75rem';
        keySpan.style.fontWeight = '700';

        iconContainer.appendChild(icon);
        iconContainer.appendChild(keySpan);

        const nameDiv = document.createElement('div');
        nameDiv.style.marginTop = '8px';
        nameDiv.style.fontSize = '0.85rem';
        nameDiv.style.color = '#C8AA6E';
        nameDiv.style.fontWeight = '600';
        nameDiv.textContent = ability.name;

        abilityContainer.appendChild(iconContainer);
        abilityContainer.appendChild(nameDiv);

        abilityDisplay.appendChild(abilityContainer);
    });
}

function checkAbilityGuess() {
    const guess = abilityGuessInput.value.trim().toLowerCase();
    if (!guess) return;

    const correctName = currentAbilityChampion.name.toLowerCase();
    const isCorrect = guess === correctName;

    abilityAttemptsCount++;
    abilityAttempts.textContent = abilityAttemptsCount;

    const attemptItem = document.createElement('div');
    attemptItem.className = `attempt-item ${isCorrect ? 'correct' : 'incorrect'}`;
    attemptItem.textContent = abilityGuessInput.value;
    abilityAttemptsList.appendChild(attemptItem);

    if (isCorrect) {
        abilityResult.textContent = `¡Correcto! Era ${currentAbilityChampion.name}`;
        abilityResult.className = 'result-message correct';
        abilityGuessInput.disabled = true;
        abilityGuessBtn.disabled = true;

        // Actualizar botón según el modo (Daily Run o Normal)
        const updatedBtn = updateRestartButton(restartAbilityBtn, initLoldleAbility, abilityAttemptsCount);
        if (updatedBtn) {
            updatedBtn.style.display = 'block';
        }
    } else {
        // Desbloquear una nueva habilidad si hay disponibles y aún no ha perdido
        let unlockedNewAbility = false;
        if (visibleAbilitiesIndices.length < allAbilities.length && abilityAttemptsCount < MAX_ABILITY_ATTEMPTS) {
            // Encontrar una habilidad que aún no esté visible
            let newAbilityIndex;
            do {
                newAbilityIndex = Math.floor(Math.random() * allAbilities.length);
            } while (visibleAbilitiesIndices.includes(newAbilityIndex));

            visibleAbilitiesIndices.push(newAbilityIndex);
            updateAbilityDisplay();
            unlockedNewAbility = true;
        }

        if (abilityAttemptsCount >= MAX_ABILITY_ATTEMPTS) {
            abilityResult.textContent = `¡Game Over! Era ${currentAbilityChampion.name}`;
            abilityResult.className = 'result-message incorrect';
            abilityGuessInput.disabled = true;
            abilityGuessBtn.disabled = true;

            // Actualizar botón según el modo (Daily Run o Normal)
            const updatedBtn = updateRestartButton(restartAbilityBtn, initLoldleAbility, 99);
            if (updatedBtn) {
                updatedBtn.style.display = 'block';
            }
        } else {
            if (unlockedNewAbility) {
                abilityResult.textContent = `Incorrecto. Nueva habilidad desbloqueada! (${abilityAttemptsCount}/${MAX_ABILITY_ATTEMPTS})`;
            } else {
                abilityResult.textContent = `Incorrecto (${abilityAttemptsCount}/${MAX_ABILITY_ATTEMPTS})`;
            }
            abilityResult.className = 'result-message incorrect';
        }
    }

    abilityGuessInput.value = '';
}

abilityGuessBtn.addEventListener('click', checkAbilityGuess);
abilityGuessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAbilityGuess();
});
restartAbilityBtn.addEventListener('click', initLoldleAbility);

// ========== MODO: LOLDLE SPLASH ==========
const loldleSplashContainer = document.getElementById('loldleSplashContainer');
const splashZoomContainer = document.getElementById('splashZoomContainer');
const splashImage = document.getElementById('splashImage');
const splashGuessInput = document.getElementById('splashGuessInput');
const splashGuessBtn = document.getElementById('splashGuessBtn');
const splashAttempts = document.getElementById('splashAttempts');
const splashAttemptsList = document.getElementById('splashAttemptsList');
const splashResult = document.getElementById('splashResult');
const restartSplashBtn = document.getElementById('restartSplashBtn');
const splashAutocomplete = document.getElementById('splashAutocomplete');

let currentSplashChampion = null;
let splashAttemptsCount = 0;
const MAX_SPLASH_ATTEMPTS = 6;
const ZOOM_LEVELS = [600, 500, 400, 300, 200, 100];
let splashGuessedChampions = [];

// Setup autocomplete for Splash mode
if (splashGuessInput && splashAutocomplete) {
    setupAutocomplete(splashGuessInput, splashAutocomplete, splashGuessedChampions, checkSplashGuess);
}

function initLoldleSplash(seed = null) {
    const randomValue = seed !== null ? seededRandom(seed) : Math.random();
    currentSplashChampion = champions[Math.floor(randomValue * champions.length)];
    splashImage.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentSplashChampion.id}_0.jpg`;

    splashAttemptsCount = 0;
    splashAttempts.textContent = splashAttemptsCount;
    splashAttemptsList.innerHTML = '';
    splashResult.textContent = '';
    splashResult.className = 'result-message';
    splashGuessInput.value = '';
    splashGuessInput.disabled = false;
    splashGuessBtn.disabled = false;
    restartSplashBtn.style.display = 'none';
    updateSplashZoom();
}

function updateSplashZoom() {
    const zoomLevel = ZOOM_LEVELS[Math.min(splashAttemptsCount, ZOOM_LEVELS.length - 1)];
    splashImage.style.width = `${zoomLevel}%`;
    splashImage.style.height = `${zoomLevel}%`;
}

function checkSplashGuess() {
    const guess = splashGuessInput.value.trim().toLowerCase();
    if (!guess) return;

    const correctName = currentSplashChampion.name.toLowerCase();
    const isCorrect = guess === correctName;

    splashAttemptsCount++;
    splashAttempts.textContent = splashAttemptsCount;

    const attemptItem = document.createElement('div');
    attemptItem.className = `attempt-item ${isCorrect ? 'correct' : 'incorrect'}`;
    attemptItem.textContent = splashGuessInput.value;
    splashAttemptsList.appendChild(attemptItem);

    if (isCorrect) {
        splashResult.textContent = `¡Correcto! Era ${currentSplashChampion.name}`;
        splashResult.className = 'result-message correct';
        splashGuessInput.disabled = true;
        splashGuessBtn.disabled = true;
        splashImage.style.width = '100%';
        splashImage.style.height = '100%';

        // Actualizar botón según el modo (Daily Run o Normal)
        const updatedBtn = updateRestartButton(restartSplashBtn, initLoldleSplash, splashAttemptsCount);
        if (updatedBtn) {
            updatedBtn.style.display = 'block';
        }
    } else if (splashAttemptsCount >= MAX_SPLASH_ATTEMPTS) {
        splashResult.textContent = `¡Game Over! Era ${currentSplashChampion.name}`;
        splashResult.className = 'result-message incorrect';
        splashGuessInput.disabled = true;
        splashGuessBtn.disabled = true;
        splashImage.style.width = '100%';
        splashImage.style.height = '100%';

        // Actualizar botón según el modo (Daily Run o Normal)
        const updatedBtn = updateRestartButton(restartSplashBtn, initLoldleSplash, 99);
        if (updatedBtn) {
            updatedBtn.style.display = 'block';
        }
    } else {
        updateSplashZoom();
    }

    splashGuessInput.value = '';
}

splashGuessBtn.addEventListener('click', checkSplashGuess);
splashGuessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkSplashGuess();
});
restartSplashBtn.addEventListener('click', initLoldleSplash);

// ========== MODO: LOLDLE QUOTE ==========
const loldleQuoteContainer = document.getElementById('loldleQuoteContainer');
const quoteText = document.getElementById('quoteText');
const quoteGuessInput = document.getElementById('quoteGuessInput');
const quoteGuessBtn = document.getElementById('quoteGuessBtn');
const quoteAttempts = document.getElementById('quoteAttempts');
const quoteAttemptsList = document.getElementById('quoteAttemptsList');
const quoteResult = document.getElementById('quoteResult');
const restartQuoteBtn = document.getElementById('restartQuoteBtn');
const quoteAutocomplete = document.getElementById('quoteAutocomplete');

let currentQuoteChampion = null;
let quoteAttemptsCount = 0;
const MAX_QUOTE_ATTEMPTS = 6;
let quoteGuessedChampions = [];

// Setup autocomplete for Quote mode
if (quoteGuessInput && quoteAutocomplete) {
    setupAutocomplete(quoteGuessInput, quoteAutocomplete, quoteGuessedChampions, checkQuoteGuess);
}

// Base de datos de quotes famosos de campeones
const championQuotes = [
    { champion: 'Yasuo', quote: 'Death is like the wind; always by my side.' },
    { champion: 'Ahri', quote: 'The heart is the strongest muscle.' },
    { champion: 'Thresh', quote: 'The mind is a wondrous thing to tear apart.' },
    { champion: 'Jinx', quote: 'Rules are made to be broken... like buildings! Or people!' },
    { champion: 'Zed', quote: 'The unseen blade is the deadliest.' },
    { champion: 'Jhin', quote: 'I will make you famous.' },
    { champion: 'Draven', quote: 'Welcome to the League of Draven!' },
    { champion: 'Lux', quote: 'Double rainbow? What does it mean?' },
    { champion: 'Ezreal', quote: 'You belong in a museum!' },
    { champion: 'Vayne', quote: 'The dawn has arrived.' },
    { champion: 'Garen', quote: 'Demacia!' },
    { champion: 'Darius', quote: 'They will regret opposing me.' },
    { champion: 'Katarina', quote: 'Violence solves everything!' },
    { champion: 'Riven', quote: 'A sword mirrors its owner.' },
    { champion: 'LeeSin', quote: 'Your will, my hands.' },
    { champion: 'Teemo', quote: 'Never underestimate the power of the Scout\'s code!' },
    { champion: 'Blitzcrank', quote: 'Fired up and ready to serve!' },
    { champion: 'Nasus', quote: 'The cycle of life and death continues. We will live, they will die.' },
    { champion: 'Veigar', quote: 'Know that if the tables were turned, I would show you no mercy!' },
    { champion: 'Rammus', quote: 'Ok.' },
    { champion: 'MasterYi', quote: 'My blade is yours.' },
    { champion: 'Syndra', quote: 'So much untapped power!' },
    { champion: 'Zyra', quote: 'Our seasons are reversed: my spring, your fall.' },
    { champion: 'Vi', quote: 'Punch first. Ask questions while punching.' },
    { champion: 'Braum', quote: 'The darker the night, the brighter the stars!' },
    { champion: 'Ekko', quote: 'I\'d rather make mistakes than make nothing at all.' },
    { champion: 'Bard', quote: '~Ootay~' },
    { champion: 'Kindred', quote: 'Never one without the other.' },
    { champion: 'Tahm Kench', quote: 'Call me king. Call me demon. Water forgets the names of the drowned.' },
    { champion: 'Aurelion Sol', quote: 'Boop!' },
    { champion: 'Sona', quote: 'Only you can hear me, summoner.' },
    { champion: 'Aatrox', quote: 'I am not your enemy. I am THE enemy.' },
    { champion: 'Lux', quote: 'Stay positive!' },
    { champion: 'Ornn', quote: 'I work alone.' },
    { champion: 'Pyke', quote: 'I\'m not back from the dead. I never left!' },
    { champion: 'Shen', quote: 'Tradition is the corpse of wisdom.' },
    { champion: 'Viego', quote: 'No cost too great. No distance too far. I will find you, Isolde!' },
    { champion: 'Aphelios', quote: '...' },
    { champion: 'Ivern', quote: 'Daisy is going to be so happy!' },
    { champion: 'Kayn', quote: 'We are the weapon.' },
    { champion: 'Urgot', quote: 'Eternal life... endless torture.' },
    { champion: 'Warwick', quote: 'Let me at \'em!' },
    { champion: 'Camille', quote: 'Precision above all.' },
    { champion: 'Gangplank', quote: 'Another one to Davy Jones!' },
    { champion: 'Malphite', quote: 'Rock solid!' },
    { champion: 'Swain', quote: 'True power... is refined patience.' },
    { champion: 'Pantheon', quote: 'My will is iron! My resolve unbreakable!' },
    { champion: 'Varus', quote: 'There can be no hope.' },
    { champion: 'Viktor', quote: 'Join the glorious evolution!' },
    { champion: 'Vladimir', quote: 'The rivers will run red!' },
    { champion: 'Yone', quote: 'Death is not the end, brother. There is more.' },
    { champion: 'Twisted Fate', quote: 'Never lost a fair game... or played one.' },
    { champion: 'Xerath', quote: 'The sands claim us all in time.' },
    { champion: 'Mordekaiser', quote: 'I am iron, I am wrath, I am...death.' },
    { champion: 'Sett', quote: 'The boss is back!' },
    { champion: 'Sylas', quote: 'My chains are broken!' },
    { champion: 'Taliyah', quote: 'A rocky road beats a smooth one every time!' },
    { champion: 'Azir', quote: 'Shurima! Your emperor has returned!' },
    { champion: 'Illaoi', quote: 'Wisdom is life. Ignorance is death.' },
    { champion: 'Rengar', quote: 'Tonight we hunt!' },
    { champion: 'Skarner', quote: 'My purpose is clear!' },
    { champion: 'Nocturne', quote: 'Embrace the darkness!' },
    { champion: 'Volibear', quote: 'Rage is my weapon!' },
    { champion: 'Fiddlesticks', quote: 'F-f-fear... my true form.' },
    { champion: 'Lucian', quote: 'Everybody dies. Some just need a little help.' },
    { champion: 'Samira', quote: 'With style!' },
    { champion: 'Akshan', quote: 'Killing bad guys is my specialty!' },
    { champion: 'Vel\'Koz', quote: 'Knowledge through...disintegration!' },
    { champion: 'Gwen', quote: 'Where\'s my family?' },
    { champion: 'Seraphine', quote: 'The world needs more music!' },
    { champion: 'Gragas', quote: 'If you\'re buying, I\'m in!' },
    { champion: 'Hecarim', quote: 'Suffering... is magic.' },
    { champion: 'Lillia', quote: 'Have you seen my tree?' },
    { champion: 'Rell', quote: 'Break their ranks!' },
    { champion: 'Fiora', quote: 'I long for a worthy opponent!' },
    { champion: 'Kalista', quote: 'We shall avenge!' },
    { champion: 'Neeko', quote: 'Neeko is best decision!' },
    { champion: 'Renekton', quote: 'As I live, all will die!' },
    { champion: 'Rumble', quote: 'I got this!' },
    { champion: 'Shaco', quote: 'How about a magic trick?' },
    { champion: 'Singed', quote: 'To shake or not to shake!' },
    { champion: 'Zilean', quote: 'Time flies like an arrow; fruit flies like banana!' },
    { champion: 'Cho\'Gath', quote: 'Om nom nom nom!' },
    { champion: 'Kennen', quote: 'The heart is the strongest muscle!' }
];

// Quotes en Español Mexicano (Doblaje Latino Original)
const championQuotesES_MX = [
    { champion: 'Aatrox', quote: 'Esta batalla será mi obra maestra' },
    { champion: 'Ahri', quote: 'Hoy nos sentimos traviesos ¿eh?' },
    { champion: 'Akali', quote: 'Como lo dicta el equilibrio' },
    { champion: 'Alistar', quote: 'No hay nada que me detenga' },
    { champion: 'Amumu', quote: 'Pensé que nunca me escogerías' },
    { champion: 'Anivia', quote: 'Sobre mis alas' },
    { champion: 'Annie', quote: 'Tú también quieres jugar, será divertido' },
    { champion: 'Ashe', quote: 'Todo el mundo en una flecha' },
    { champion: 'Azir', quote: 'Shurima, tu emperador ha vuelto' },
    { champion: 'Blitzcrank', quote: 'Encendido y listo para el servicio' },
    { champion: 'Brand', quote: '¿Y si quemamos el mundo?' },
    { champion: 'Braum', quote: 'La noche más oscura, la estrella más brillante' },
    { champion: 'Caitlyn', quote: 'Este caso es para mí' },
    { champion: 'Cassiopeia', quote: 'No existe antídoto contra mí' },
    { champion: 'Cho\'Gath', quote: 'Quisieras ver el fin del mundo que conoces ¿sí?' },
    { champion: 'Corki', quote: 'Listo para destruir con mi máquina brutal' },
    { champion: 'Darius', quote: 'Solo yo lograré que lleguemos a la victoria' },
    { champion: 'Diana', quote: 'Una nueva luna se asoma' },
    { champion: 'Draven', quote: 'Bienvenidos a League of Draven' },
    { champion: 'Mundo', quote: 'Mundo' },
    { champion: 'Ekko', quote: 'No importa cuánto tiempo tengas, sino cómo lo usas' },
    { champion: 'Elise', quote: 'Solo la araña está a salvo en su tela' },
    { champion: 'Evelynn', quote: 'La noche vela mis actos' },
    { champion: 'Ezreal', quote: 'Es hora de dar una buena lección' },
    { champion: 'Fiddlesticks', quote: 'Como ordenes maestro' },
    { champion: 'Fiora', quote: 'Quiero encontrar un digno oponente' },
    { champion: 'Fizz', quote: 'Déjalos a mí' },
    { champion: 'Galio', quote: 'Un guardián siempre está preparado' },
    { champion: 'Gangplank', quote: 'Ni las llamas, ni las profundidades pudieron reclamarme' },
    { champion: 'Garen', quote: 'Mi corazón y mi espada, siempre, por Demacia' },
    { champion: 'Gnar', quote: 'Gnar gada' },
    { champion: 'Gragas', quote: 'Si me pagas otra ronda me apunto' },
    { champion: 'Graves', quote: 'Condenado a muerte' },
    { champion: 'Hecarim', quote: 'Contemplen el poder de las Islas de las Sombras' },
    { champion: 'Heimerdinger', quote: 'Una sabia decisión' }
];

function initLoldleQuote(seed = null) {
    const randomValue = seed !== null ? seededRandom(seed) : Math.random();

    // Seleccionar quotes según idioma
    const quotesArray = (currentVoiceLang === 'es_mx' || currentVoiceLang === 'es_es' || currentVoiceLang === 'es_ar')
        ? championQuotesES_MX
        : championQuotes;

    const randomQuote = quotesArray[Math.floor(randomValue * quotesArray.length)];
    currentQuoteChampion = champions.find(c => c.id === randomQuote.champion);

    quoteText.textContent = `"${randomQuote.quote}"`;
    quoteAttemptsCount = 0;
    quoteAttempts.textContent = quoteAttemptsCount;
    quoteAttemptsList.innerHTML = '';
    quoteResult.textContent = '';
    quoteResult.className = 'result-message';
    quoteGuessInput.value = '';
    quoteGuessInput.disabled = false;
    quoteGuessBtn.disabled = false;
    restartQuoteBtn.style.display = 'none';
}

function checkQuoteGuess() {
    const guess = quoteGuessInput.value.trim().toLowerCase();
    if (!guess) return;

    const correctName = currentQuoteChampion.name.toLowerCase();
    const isCorrect = guess === correctName;

    quoteAttemptsCount++;
    quoteAttempts.textContent = quoteAttemptsCount;

    const attemptItem = document.createElement('div');
    attemptItem.className = `attempt-item ${isCorrect ? 'correct' : 'incorrect'}`;
    attemptItem.textContent = quoteGuessInput.value;
    quoteAttemptsList.appendChild(attemptItem);

    if (isCorrect) {
        quoteResult.textContent = `¡Correcto! Era ${currentQuoteChampion.name}`;
        quoteResult.className = 'result-message correct';
        quoteGuessInput.disabled = true;
        quoteGuessBtn.disabled = true;

        // Actualizar botón según el modo (Daily Run o Normal)
        const updatedBtn = updateRestartButton(restartQuoteBtn, initLoldleQuote, quoteAttemptsCount);
        if (updatedBtn) {
            updatedBtn.style.display = 'block';
        }
    } else if (quoteAttemptsCount >= MAX_QUOTE_ATTEMPTS) {
        quoteResult.textContent = `¡Game Over! Era ${currentQuoteChampion.name}`;
        quoteResult.className = 'result-message incorrect';
        quoteGuessInput.disabled = true;
        quoteGuessBtn.disabled = true;

        // Actualizar botón según el modo (Daily Run o Normal)
        const updatedBtn = updateRestartButton(restartQuoteBtn, initLoldleQuote, 99);
        if (updatedBtn) {
            updatedBtn.style.display = 'block';
        }
    }

    quoteGuessInput.value = '';
}

quoteGuessBtn.addEventListener('click', checkQuoteGuess);
quoteGuessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkQuoteGuess();
});
restartQuoteBtn.addEventListener('click', initLoldleQuote);

// ========== MODO: LOLDLE AUDIO ==========
const loldleAudioContainer = document.getElementById('loldleAudioContainer');
const championAudio = document.getElementById('championAudio');
const playAudioBtn = document.getElementById('playAudioBtn');
const audioGuessInput = document.getElementById('audioGuessInput');
const audioGuessBtn = document.getElementById('audioGuessBtn');
const audioAttempts = document.getElementById('audioAttempts');
const audioAttemptsList = document.getElementById('audioAttemptsList');
const audioResult = document.getElementById('audioResult');
const restartAudioBtn = document.getElementById('restartAudioBtn');
const audioAutocomplete = document.getElementById('audioAutocomplete');

let currentAudioChampion = null;
let audioAttemptsCount = 0;
const MAX_AUDIO_ATTEMPTS = 6;
let audioGuessedChampions = [];

// Setup autocomplete for Audio mode
if (audioGuessInput && audioAutocomplete) {
    setupAutocomplete(audioGuessInput, audioAutocomplete, audioGuessedChampions, checkAudioGuess);
}

// Mapa de IDs de campeones para construir URLs de audio
const championIds = {
    'Aatrox': '266', 'Ahri': '103', 'Akali': '84', 'Akshan': '166', 'Alistar': '12',
    'Ambessa': '799', 'Amumu': '32', 'Anivia': '34', 'Annie': '1', 'Aphelios': '523',
    'Ashe': '22', 'AurelionSol': '136', 'Aurora': '893', 'Azir': '268', 'Bard': '432',
    'Belveth': '200', 'Blitzcrank': '53', 'Brand': '63', 'Braum': '201', 'Briar': '233',
    'Caitlyn': '51', 'Camille': '164', 'Cassiopeia': '69', 'Chogath': '31', 'Corki': '42',
    'Darius': '122', 'Diana': '131', 'Draven': '119', 'DrMundo': '36', 'Ekko': '245',
    'Elise': '60', 'Evelynn': '28', 'Ezreal': '81', 'Fiddlesticks': '9', 'Fiora': '114',
    'Fizz': '105', 'Galio': '3', 'Gangplank': '41', 'Garen': '86', 'Gnar': '150',
    'Gragas': '79', 'Graves': '104', 'Gwen': '887', 'Hecarim': '120', 'Heimerdinger': '74',
    'Hwei': '910', 'Illaoi': '420', 'Irelia': '39', 'Ivern': '427', 'Janna': '40',
    'JarvanIV': '59', 'Jax': '24', 'Jayce': '126', 'Jhin': '202', 'Jinx': '222',
    'Kaisa': '145', 'Kalista': '429', 'Karma': '43', 'Karthus': '30', 'Kassadin': '38',
    'Katarina': '55', 'Kayle': '10', 'Kayn': '141', 'Kennen': '85', 'Khazix': '121',
    'Kindred': '203', 'Kled': '240', 'KogMaw': '96', 'KSante': '897', 'Leblanc': '7',
    'LeeSin': '64', 'Leona': '89', 'Lillia': '876', 'Lissandra': '127', 'Lucian': '236',
    'Lulu': '117', 'Lux': '99', 'Malphite': '54', 'Malzahar': '90', 'Maokai': '57',
    'MasterYi': '11', 'Milio': '902', 'MissFortune': '21', 'MonkeyKing': '62', 'Wukong': '62',
    'Mordekaiser': '82', 'Morgana': '25', 'Naafiri': '950', 'Nami': '267', 'Nasus': '75',
    'Nautilus': '111', 'Neeko': '518', 'Nidalee': '76', 'Nilah': '895', 'Nocturne': '56',
    'Nunu': '20', 'Olaf': '2', 'Orianna': '61', 'Ornn': '516', 'Pantheon': '80',
    'Poppy': '78', 'Pyke': '555', 'Qiyana': '246', 'Quinn': '133', 'Rakan': '497',
    'Rammus': '33', 'RekSai': '421', 'Rell': '526', 'Renata': '888', 'Renekton': '58',
    'Rengar': '107', 'Riven': '92', 'Rumble': '68', 'Ryze': '13', 'Samira': '360',
    'Sejuani': '113', 'Senna': '235', 'Seraphine': '147', 'Sett': '875', 'Shaco': '35',
    'Shen': '98', 'Shyvana': '102', 'Singed': '27', 'Sion': '14', 'Sivir': '15',
    'Skarner': '72', 'Smolder': '901', 'Sona': '37', 'Soraka': '16', 'Swain': '50',
    'Sylas': '517', 'Syndra': '134', 'TahmKench': '223', 'Taliyah': '163', 'Talon': '91',
    'Taric': '44', 'Teemo': '17', 'Thresh': '412', 'Tristana': '18', 'Trundle': '48',
    'Tryndamere': '23', 'TwistedFate': '4', 'Twitch': '29', 'Udyr': '77', 'Urgot': '6',
    'Varus': '110', 'Vayne': '67', 'Veigar': '45', 'Velkoz': '161', 'Vex': '711',
    'Vi': '254', 'Viego': '234', 'Viktor': '112', 'Vladimir': '8', 'Volibear': '106',
    'Warwick': '19', 'Xayah': '498', 'Xerath': '101', 'XinZhao': '5', 'Yasuo': '157',
    'Yone': '777', 'Yorick': '83', 'Yuumi': '350', 'Zac': '154', 'Zed': '238',
    'Zeri': '221', 'Ziggs': '115', 'Zilean': '26', 'Zoe': '142', 'Zyra': '143'
};

// Generar URLs de audio dinámicamente para todos los campeones en todos los idiomas
const voiceLanguageCodes = [
    'default', 'en_gb', 'en_au',
    'es_mx', 'es_es', 'es_ar',
    'pt_br', 'fr_fr', 'de_de', 'it_it', 'pl_pl', 'ru_ru', 'tr_tr',
    'cs_cz', 'el_gr', 'hu_hu', 'ro_ro',
    'ja_jp', 'ko_kr', 'zh_cn', 'zh_tw',
    'th_th', 'vi_vn', 'id_id', 'ar_ae'
];

// Tipos de audio disponibles (solo los que existen en Community Dragon)
const audioTypes = ['select', 'ban'];

const championAudios = {
    select: {},
    ban: {}
};

// Construir las URLs para todos los campeones en todos los idiomas y tipos
voiceLanguageCodes.forEach(langCode => {
    championAudios.select[langCode] = {};
    championAudios.ban[langCode] = {};

    Object.keys(championIds).forEach(champId => {
        const id = championIds[champId];
        // Champion Select voice
        championAudios.select[langCode][champId] = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/${langCode}/v1/champion-choose-vo/${id}.ogg`;
        // Champion Ban voice
        championAudios.ban[langCode][champId] = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/${langCode}/v1/champion-ban-vo/${id}.ogg`;
    });
});

let currentAudioType = 'select'; // Tipo de audio actual
let audioLoadAttempts = 0; // Contador de intentos de carga
const MAX_AUDIO_LOAD_ATTEMPTS = 3; // Máximo de intentos

// Idiomas de fallback en orden de prioridad
const fallbackLanguages = ['default', 'en_gb', 'en_au'];

function initLoldleAudio(seed = null) {
    // Seleccionar tipo de audio aleatoriamente (o con seed para Daily Run)
    const randomTypeValue = seed !== null ? seededRandom(seed * 1000) : Math.random();
    currentAudioType = audioTypes[Math.floor(randomTypeValue * audioTypes.length)];

    // Obtener campeones disponibles según el tipo y idioma de voz actual
    const availableChampions = Object.keys(championAudios[currentAudioType][currentVoiceLang]);
    const randomValue = seed !== null ? seededRandom(seed) : Math.random();
    const randomChampId = availableChampions[Math.floor(randomValue * availableChampions.length)];
    currentAudioChampion = champions.find(c => c.id === randomChampId);

    audioAttemptsCount = 0;
    audioGuessedChampions = [];
    audioLoadAttempts = 0;
    audioAttempts.textContent = audioAttemptsCount;
    audioResult.textContent = '';
    audioResult.className = 'result-message';
    audioGuessInput.value = '';
    audioGuessInput.disabled = false;
    audioGuessBtn.disabled = false;
    restartAudioBtn.style.display = 'none';
    audioAttemptsList.innerHTML = '';

    // Cargar audio según el tipo y idioma de voz seleccionado
    loadAudioWithFallback(randomChampId, currentAudioType, currentVoiceLang);

    // Actualizar indicador de tipo de audio
    const audioTypeIndicator = document.getElementById('audioTypeIndicator');
    if (audioTypeIndicator) {
        const typeNames = {
            select: { en: '🎤 Champion Select', es: '🎤 Selección de Campeón' },
            ban: { en: '🚫 Champion Ban', es: '🚫 Prohibición de Campeón' }
        };
        audioTypeIndicator.textContent = typeNames[currentAudioType][currentLang] || typeNames[currentAudioType].en;
    }

    console.log('Audio mode initialized:', currentAudioChampion.name, 'Type:', currentAudioType, 'Voice lang:', currentVoiceLang);

    // Ocultar segundo botón al inicio
    const playAudioBtn2 = document.getElementById('playAudioBtn2');
    if (playAudioBtn2) {
        playAudioBtn2.style.display = 'none';
    }
}

// Función para recargar audios con nuevo idioma
function reloadAudioWithNewLanguage() {
    if (!currentAudioChampion) return;

    const champId = currentAudioChampion.id;

    // Recargar el audio principal (el tipo actual)
    loadAudioWithFallback(champId, currentAudioType, currentVoiceLang);

    // Si ya se mostró el segundo audio, recargarlo también
    const playAudioBtn2 = document.getElementById('playAudioBtn2');
    const championAudio2 = document.getElementById('championAudio2');
    if (playAudioBtn2 && playAudioBtn2.style.display !== 'none' && championAudio2) {
        const secondAudioType = currentAudioType === 'select' ? 'ban' : 'select';
        const secondAudioUrl = championAudios[secondAudioType][currentVoiceLang][champId];
        if (secondAudioUrl) {
            championAudio2.src = secondAudioUrl;
            championAudio2.load();
        }
    }

    console.log('✅ Audios recargados con idioma:', currentVoiceLang);
}

// Función para cargar audio con sistema de fallback
function loadAudioWithFallback(champId, audioType, voiceLang) {
    const audioUrl = championAudios[audioType][voiceLang][champId];

    if (!audioUrl) {
        console.error('Audio URL not found for:', champId, audioType, voiceLang);
        tryFallbackLanguage(champId, audioType);
        return;
    }

    championAudio.src = audioUrl;
    championAudio.load();

    // Event listener para manejar errores de carga
    championAudio.onerror = function(e) {
        console.warn(`Error loading audio for ${champId} (${audioType}, ${voiceLang}):`, e);
        audioLoadAttempts++;

        if (audioLoadAttempts < MAX_AUDIO_LOAD_ATTEMPTS) {
            // Intentar con idioma de fallback
            tryFallbackLanguage(champId, audioType);
        } else {
            // Si todos los fallbacks fallan, mostrar mensaje al usuario
            showAudioError();
        }
    };

    // Event listener para confirmar que el audio se cargó correctamente
    championAudio.onloadeddata = function() {
        console.log('Audio loaded successfully:', champId, audioType, voiceLang);
        audioLoadAttempts = 0; // Resetear contador
    };
}

// Intentar cargar con idioma de fallback
function tryFallbackLanguage(champId, audioType) {
    const currentFallbackIndex = audioLoadAttempts - 1;

    if (currentFallbackIndex < fallbackLanguages.length) {
        const fallbackLang = fallbackLanguages[currentFallbackIndex];
        console.log(`Trying fallback language: ${fallbackLang}`);

        const fallbackUrl = championAudios[audioType][fallbackLang][champId];
        if (fallbackUrl) {
            championAudio.src = fallbackUrl;
            championAudio.load();
        } else {
            audioLoadAttempts++;
            tryFallbackLanguage(champId, audioType);
        }
    } else {
        showAudioError();
    }
}

// Mostrar mensaje de error al usuario
function showAudioError() {
    console.error('Failed to load audio after all attempts');
    audioResult.textContent = currentLang === 'en'
        ? '⚠️ Audio not available. Click restart to try another champion.'
        : '⚠️ Audio no disponible. Haz clic en reiniciar para probar otro campeón.';
    audioResult.className = 'result-message error';
    restartAudioBtn.style.display = 'block';
    playAudioBtn.disabled = true;
}

// Función para mostrar el segundo audio después del primer fallo
function showSecondAudio() {
    const playAudioBtn2 = document.getElementById('playAudioBtn2');
    const championAudio2 = document.getElementById('championAudio2');
    const playAudio2Label = document.getElementById('playAudio2Label');

    if (!playAudioBtn2 || !championAudio2 || !currentAudioChampion) return;

    // Determinar el segundo tipo de audio (el opuesto al actual)
    const secondAudioType = currentAudioType === 'select' ? 'ban' : 'select';

    // Cargar el segundo audio
    const champId = currentAudioChampion.id;
    const secondAudioUrl = championAudios[secondAudioType][currentVoiceLang][champId];

    if (secondAudioUrl) {
        championAudio2.src = secondAudioUrl;
        championAudio2.load();

        // Actualizar el label del segundo botón
        const typeNames = {
            select: { en: '🎤 Play Select', es: '🎤 Reproducir Select' },
            ban: { en: '🚫 Play Ban', es: '🚫 Reproducir Ban' }
        };
        playAudio2Label.textContent = typeNames[secondAudioType][currentLang] || typeNames[secondAudioType].en;

        // Mostrar el segundo botón
        playAudioBtn2.style.display = 'inline-block';

        console.log('✅ Segundo audio desbloqueado:', secondAudioType);
    }
}

function checkAudioGuess() {
    const guess = audioGuessInput.value.trim().toLowerCase();
    if (!guess || audioGuessInput.disabled) return;

    audioAttemptsCount++;
    audioAttempts.textContent = audioAttemptsCount;

    const matchedChampion = champions.find(c =>
        c.name.toLowerCase() === guess || c.id.toLowerCase() === guess
    );

    if (!matchedChampion) {
        audioResult.textContent = t('incorrect') + ' - ' + (currentLang === 'en' ? 'Champion not found' : 'Campeón no encontrado');
        audioResult.className = 'result-message error';
        audioGuessInput.value = '';
        return;
    }

    // Agregar a lista de intentos
    const attemptDiv = document.createElement('div');
    attemptDiv.className = 'attempt-item';
    attemptDiv.textContent = `${audioAttemptsCount}. ${matchedChampion.name}`;
    audioAttemptsList.appendChild(attemptDiv);

    if (matchedChampion.id === currentAudioChampion.id) {
        audioResult.textContent = `${t('correct')} ¡${currentAudioChampion.name}!`;
        audioResult.className = 'result-message success';
        audioGuessInput.disabled = true;
        audioGuessBtn.disabled = true;

        // Actualizar botón según el modo (Daily Run o Normal)
        const updatedBtn = updateRestartButton(restartAudioBtn, initLoldleAudio, audioAttemptsCount);
        if (updatedBtn) {
            updatedBtn.style.display = 'block';
        }
    } else {
        // Después del primer fallo, mostrar el segundo audio
        if (audioAttemptsCount === 1) {
            showSecondAudio();
        }

        if (audioAttemptsCount >= MAX_AUDIO_ATTEMPTS) {
            audioResult.textContent = `${t('gameOver')} ${(currentLang === 'en' ? 'It was' : 'Era')}: ${currentAudioChampion.name}`;
            audioResult.className = 'result-message error';
            audioGuessInput.disabled = true;
            audioGuessBtn.disabled = true;

            // Actualizar botón según el modo (Daily Run o Normal)
            const updatedBtn = updateRestartButton(restartAudioBtn, initLoldleAudio, 99);
            if (updatedBtn) {
                updatedBtn.style.display = 'block';
            }
        } else {
            audioResult.textContent = t('incorrect') + ` (${audioAttemptsCount}/${MAX_AUDIO_ATTEMPTS})`;
            audioResult.className = 'result-message error';
        }
    }

    audioGuessInput.value = '';
}

playAudioBtn.addEventListener('click', () => {
    if (!championAudio.src) {
        audioResult.textContent = currentLang === 'en'
            ? '⚠️ No audio loaded. Please restart the game.'
            : '⚠️ No hay audio cargado. Por favor reinicia el juego.';
        audioResult.className = 'result-message error';
        return;
    }

    championAudio.currentTime = 0;
    const playPromise = championAudio.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.error('Error playing audio:', error);
            audioResult.textContent = currentLang === 'en'
                ? '⚠️ Error playing audio. Try again or restart.'
                : '⚠️ Error reproduciendo audio. Intenta de nuevo o reinicia.';
            audioResult.className = 'result-message error';
        });
    }
});

// Event listener para el segundo botón de audio
const playAudioBtn2 = document.getElementById('playAudioBtn2');
const championAudio2 = document.getElementById('championAudio2');

if (playAudioBtn2 && championAudio2) {
    playAudioBtn2.addEventListener('click', () => {
        if (!championAudio2.src) {
            audioResult.textContent = currentLang === 'en'
                ? '⚠️ No audio loaded. Please restart the game.'
                : '⚠️ No hay audio cargado. Por favor reinicia el juego.';
            audioResult.className = 'result-message error';
            return;
        }

        championAudio2.currentTime = 0;
        const playPromise = championAudio2.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error('Error playing audio 2:', error);
                audioResult.textContent = currentLang === 'en'
                    ? '⚠️ Error playing audio. Try again or restart.'
                    : '⚠️ Error reproduciendo audio. Intenta de nuevo o reinicia.';
                audioResult.className = 'result-message error';
            });
        }
    });
}

audioGuessBtn.addEventListener('click', checkAudioGuess);
audioGuessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAudioGuess();
});
restartAudioBtn.addEventListener('click', initLoldleAudio);

// ========== MODO: LOLDLE EMOJI ==========
const loldleEmojiContainer = document.getElementById('loldleEmojiContainer');
const emojiSequence = document.getElementById('emojiSequence');
const emojiGuessInput = document.getElementById('emojiGuessInput');
const emojiGuessBtn = document.getElementById('emojiGuessBtn');
const emojiAttempts = document.getElementById('emojiAttempts');
const emojiAttemptsList = document.getElementById('emojiAttemptsList');
const emojiResult = document.getElementById('emojiResult');
const restartEmojiBtn = document.getElementById('restartEmojiBtn');
const emojiAutocomplete = document.getElementById('emojiAutocomplete');

let currentEmojiChampion = null;
let emojiAttemptsCount = 0;
const MAX_EMOJI_ATTEMPTS = 6;
let emojiGuessedChampions = [];
let currentEmojiSequence = ''; // Todos los emojis del campeón
let visibleEmojisCount = 1; // Cuántos emojis se muestran actualmente

// Setup autocomplete for Emoji mode
if (emojiGuessInput && emojiAutocomplete) {
    setupAutocomplete(emojiGuessInput, emojiAutocomplete, emojiGuessedChampions, checkEmojiGuess);
}

// Base de datos de emojis de campeones (60+ campeones)
const championEmojis = [
    { champion: 'Yasuo', emojis: '🌪️⚔️🍃' },
    { champion: 'Ahri', emojis: '🦊💕✨' },
    { champion: 'Thresh', emojis: '⛓️👻💀' },
    { champion: 'Jinx', emojis: '🔫😜💥' },
    { champion: 'Zed', emojis: '⚡🥷🌑' },
    { champion: 'Jhin', emojis: '🎭🔫4️⃣' },
    { champion: 'Draven', emojis: '🪓💪🎪' },
    { champion: 'Lux', emojis: '✨💫🌟' },
    { champion: 'Ezreal', emojis: '🏹✨📜' },
    { champion: 'Vayne', emojis: '🏹🌙🎯' },
    { champion: 'Garen', emojis: '⚔️🛡️💪' },
    { champion: 'Darius', emojis: '🪓🩸💀' },
    { champion: 'Katarina', emojis: '🗡️🌀💃' },
    { champion: 'Riven', emojis: '⚔️💔🦋' },
    { champion: 'LeeSin', emojis: '🥋👊🐉' },
    { champion: 'Teemo', emojis: '🍄😈🎯' },
    { champion: 'Blitzcrank', emojis: '🤖⚡👊' },
    { champion: 'Nasus', emojis: '🐕⏳💀' },
    { champion: 'Veigar', emojis: '🧙‍♂️😈✨' },
    { champion: 'Rammus', emojis: '🦔🛡️💨' },
    { champion: 'MasterYi', emojis: '⚔️👁️💨' },
    { champion: 'Syndra', emojis: '🔮⚫✨' },
    { champion: 'Zyra', emojis: '🌸🌿☘️' },
    { champion: 'Vi', emojis: '👊💥🔧' },
    { champion: 'Braum', emojis: '🛡️💪❄️' },
    { champion: 'Ekko', emojis: '⏰💚⚡' },
    { champion: 'Bard', emojis: '🎵✨🌟' },
    { champion: 'Kindred', emojis: '🐺🐑🏹' },
    { champion: 'TahmKench', emojis: '🐸👅💦' },
    { champion: 'AurelionSol', emojis: '🐉⭐🌌' },
    { champion: 'Sona', emojis: '🎹🎶✨' },
    { champion: 'Malphite', emojis: '🗿⛰️💥' },
    { champion: 'Amumu', emojis: '😢🧟💔' },
    { champion: 'Nautilus', emojis: '⚓🌊🛡️' },
    { champion: 'Leona', emojis: '☀️🛡️⚔️' },
    { champion: 'Diana', emojis: '🌙✨⚔️' },
    { champion: 'Annie', emojis: '🔥🧸👧' },
    { champion: 'Brand', emojis: '🔥🔥🔥' },
    { champion: 'Fizz', emojis: '🐟🌊🔱' },
    { champion: 'Nami', emojis: '🧜‍♀️🌊💧' },
    { champion: 'Pyke', emojis: '🗡️👻🌊' },
    { champion: 'Rengar', emojis: '🦁🗡️🌿' },
    { champion: 'Khazix', emojis: '🦗👾💜' },
    { champion: 'Alistar', emojis: '🐂💪💥' },
    { champion: 'Ornn', emojis: '🐏🔨🔥' },
    { champion: 'Volibear', emojis: '🐻⚡❄️' },
    { champion: 'Warwick', emojis: '🐺🩸🌙' },
    { champion: 'Nidalee', emojis: '🐆🌿💚' },
    { champion: 'Shaco', emojis: '🤡🗡️💀' },
    { champion: 'Fiddlesticks', emojis: '🦅😱🌾' },
    { champion: 'Morgana', emojis: '👼🔗💜' },
    { champion: 'Kayle', emojis: '👼⚔️✨' },
    { champion: 'Lulu', emojis: '🧚💜✨' },
    { champion: 'Veigar', emojis: '🧙‍♂️💜⚡' },
    { champion: 'Heimerdinger', emojis: '🔧🚀🧠' },
    { champion: 'Ziggs', emojis: '💣💥😜' },
    { champion: 'Xerath', emojis: '⚡🔷✨' },
    { champion: 'Azir', emojis: '🦅⌛👑' },
    { champion: 'Viktor', emojis: '🔧⚡🤖' },
    { champion: 'Orianna', emojis: '⚙️⚽🤖' },
    { champion: 'Aatrox', emojis: '⚔️😈🩸' },
    { champion: 'Irelia', emojis: '⚔️💃🦋' },
    { champion: 'Akali', emojis: '🥷💚🌸' },
    { champion: 'Shen', emojis: '🥷🛡️⚔️' },
    { champion: 'Kennen', emojis: '⚡🐭💨' },
    { champion: 'Jax', emojis: '🔦💜💪' },
    { champion: 'Fiora', emojis: '🤺⚔️💙' },
    { champion: 'Camille', emojis: '🦵⚙️💙' },
    { champion: 'Gwen', emojis: '✂️👻💙' },
    { champion: 'Viego', emojis: '👑💔👻' },
    { champion: 'Sett', emojis: '👊💪😤' },
    { champion: 'Yone', emojis: '⚔️👹🌸' },
    { champion: 'Sylas', emojis: '⛓️💪✨' },
    { champion: 'Qiyana', emojis: '💎🌿💧' }
];

function initLoldleEmoji(seed = null) {
    const randomValue = seed !== null ? seededRandom(seed) : Math.random();
    const randomEmoji = championEmojis[Math.floor(randomValue * championEmojis.length)];

    if (!randomEmoji || !randomEmoji.champion) {
        console.error('Invalid emoji data:', randomEmoji);
        return;
    }

    currentEmojiChampion = champions.find(c => c.id === randomEmoji.champion);

    if (!currentEmojiChampion) {
        console.error('Champion not found for emoji:', randomEmoji.champion);
        return;
    }

    // Guardar todos los emojis y mostrar solo el primero
    currentEmojiSequence = randomEmoji.emojis;
    visibleEmojisCount = 1;

    // Extraer emojis individuales (asumiendo que cada emoji es un carácter)
    const emojisArray = Array.from(currentEmojiSequence);
    emojiSequence.textContent = emojisArray.slice(0, visibleEmojisCount).join('');

    emojiAttemptsCount = 0;
    emojiGuessedChampions = [];
    emojiAttempts.textContent = emojiAttemptsCount;
    emojiAttemptsList.innerHTML = '';
    emojiResult.textContent = '';
    emojiResult.className = 'result-message';
    emojiGuessInput.value = '';
    emojiGuessInput.disabled = false;
    emojiGuessBtn.disabled = false;
    restartEmojiBtn.style.display = 'none';

    console.log('Emoji mode initialized:', currentEmojiChampion.name, 'Emojis:', currentEmojiSequence);
}

function checkEmojiGuess() {
    const guess = emojiGuessInput.value.trim().toLowerCase();
    if (!guess) return;

    const matchedChampion = champions.find(c =>
        c.id.toLowerCase() === guess ||
        c.name.toLowerCase() === guess
    );

    if (!matchedChampion) {
        emojiResult.textContent = t('invalidChampion');
        emojiResult.className = 'result-message error';
        return;
    }

    if (emojiGuessedChampions.includes(matchedChampion.id)) {
        emojiResult.textContent = t('alreadyGuessed');
        emojiResult.className = 'result-message error';
        return;
    }

    emojiAttemptsCount++;
    emojiAttempts.textContent = emojiAttemptsCount;
    emojiGuessedChampions.push(matchedChampion.id);

    const attemptDiv = document.createElement('div');
    attemptDiv.className = 'attempt-item';
    attemptDiv.textContent = `${emojiAttemptsCount}. ${matchedChampion.name}`;
    emojiAttemptsList.appendChild(attemptDiv);

    if (matchedChampion.id === currentEmojiChampion.id) {
        emojiResult.textContent = `${t('correct')} ¡${currentEmojiChampion.name}!`;
        emojiResult.className = 'result-message success';
        emojiGuessInput.disabled = true;
        emojiGuessBtn.disabled = true;

        // Actualizar botón según el modo (Daily Run o Normal)
        const updatedBtn = updateRestartButton(restartEmojiBtn, initLoldleEmoji, emojiAttemptsCount);
        if (updatedBtn) {
            updatedBtn.style.display = 'block';
        }
    } else {
        // Desbloquear un emoji más si hay disponibles
        const emojisArray = Array.from(currentEmojiSequence);
        if (visibleEmojisCount < emojisArray.length) {
            visibleEmojisCount++;
            emojiSequence.textContent = emojisArray.slice(0, visibleEmojisCount).join('');
        }

        if (emojiAttemptsCount >= MAX_EMOJI_ATTEMPTS) {
            emojiResult.textContent = `${t('gameOver')} ${(currentLang === 'en' ? 'It was' : 'Era')}: ${currentEmojiChampion.name}`;
            emojiResult.className = 'result-message error';
            emojiGuessInput.disabled = true;
            emojiGuessBtn.disabled = true;

            // Actualizar botón según el modo (Daily Run o Normal)
            const updatedBtn = updateRestartButton(restartEmojiBtn, initLoldleEmoji, 99);
            if (updatedBtn) {
                updatedBtn.style.display = 'block';
            }
        } else {
            emojiResult.textContent = t('incorrect') + ` (${emojiAttemptsCount}/${MAX_EMOJI_ATTEMPTS})`;
            emojiResult.className = 'result-message error';
        }
    }

    emojiGuessInput.value = '';
}

emojiGuessBtn.addEventListener('click', checkEmojiGuess);
emojiGuessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkEmojiGuess();
});
restartEmojiBtn.addEventListener('click', initLoldleEmoji);

// ========== MODO: LOLDLE CLASSIC ==========
const loldleClassicContainer = document.getElementById('loldleClassicContainer');
const classicGuessInput = document.getElementById('classicGuessInput');
const classicGuessBtn = document.getElementById('classicGuessBtn');
const classicGuessesList = document.getElementById('classicGuessesList');
const classicAttempts = document.getElementById('classicAttempts');
const classicResult = document.getElementById('classicResult');
const restartClassicBtn = document.getElementById('restartClassicBtn');
const classicAutocomplete = document.getElementById('classicAutocomplete');

let currentClassicChampion = null;
let classicAttemptsCount = 0;
const MAX_CLASSIC_ATTEMPTS = 8;
let classicGuessedChampions = [];
let selectedAutocompleteIndex = -1;

// Datos extendidos para Classic Mode - TODOS LOS CAMPEONES
const championsClassicData = {
    Aatrox: { gender: 'Masculino', position: 'Top', species: 'Darkin', resource: 'Sin recurso', range: '2013', region: 'Shurima' },
    Ahri: { gender: 'Femenino', position: 'Mid', species: 'Vastaya', resource: 'Maná', range: '2012', region: 'Ionia' },
    Akali: { gender: 'Femenino', position: 'Mid', species: 'Humano', resource: 'Energía', range: '2010', region: 'Ionia' },
    Akshan: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2021', region: 'Shurima' },
    Alistar: { gender: 'Masculino', position: 'Support', species: 'Minotauro', resource: 'Maná', range: '2009', region: 'Targón' },
    Amumu: { gender: 'Masculino', position: 'Jungla', species: 'No-muerto', resource: 'Maná', range: '2009', region: 'Shurima' },
    Anivia: { gender: 'Femenino', position: 'Mid', species: 'Espíritu', resource: 'Maná', range: '2009', region: 'Freljord' },
    Annie: { gender: 'Femenino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2009', region: 'Noxus' },
    Aphelios: { gender: 'Masculino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2019', region: 'Targón' },
    Ashe: { gender: 'Femenino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2009', region: 'Freljord' },
    AurelionSol: { gender: 'Masculino', position: 'Mid', species: 'Dragón', resource: 'Maná', range: '2016', region: 'Targón' },
    Azir: { gender: 'Masculino', position: 'Mid', species: 'Ascendido', resource: 'Maná', range: '2014', region: 'Shurima' },
    Bard: { gender: 'Masculino', position: 'Support', species: 'Celestial', resource: 'Maná', range: '2015', region: 'Targón' },
    Belveth: { gender: 'Femenino', position: 'Jungla', species: 'Vacío', resource: 'Sin recurso', range: '2022', region: 'Vacío' },
    Blitzcrank: { gender: 'Otro', position: 'Support', species: 'Golem', resource: 'Maná', range: '2009', region: 'Zaun' },
    Brand: { gender: 'Masculino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2011', region: 'Freljord' },
    Braum: { gender: 'Masculino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2014', region: 'Freljord' },
    Briar: { gender: 'Femenino', position: 'Jungla', species: 'Vampiro', resource: 'Furia', range: '2023', region: 'Noxus' },
    Caitlyn: { gender: 'Femenino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2011', region: 'Piltover' },
    Camille: { gender: 'Femenino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2016', region: 'Piltover' },
    Cassiopeia: { gender: 'Femenino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2010', region: 'Noxus' },
    ChoGath: { gender: 'Otro', position: 'Top', species: 'Vacío', resource: 'Maná', range: '2009', region: 'Vacío' },
    Corki: { gender: 'Masculino', position: 'ADC', species: 'Yordle', resource: 'Maná', range: '2009', region: 'Bandle' },
    Darius: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2012', region: 'Noxus' },
    Diana: { gender: 'Femenino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2012', region: 'Targón' },
    Draven: { gender: 'Masculino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2012', region: 'Noxus' },
    DrMundo: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Salud', range: '2009', region: 'Zaun' },
    Ekko: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2015', region: 'Zaun' },
    Elise: { gender: 'Femenino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2012', region: 'Islas de la Sombra' },
    Evelynn: { gender: 'Femenino', position: 'Jungla', species: 'Demonio', resource: 'Maná', range: '2009', region: 'Runeterra' },
    Ezreal: { gender: 'Masculino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2010', region: 'Piltover' },
    Fiddlesticks: { gender: 'Otro', position: 'Jungla', species: 'Demonio', resource: 'Maná', range: '2009', region: 'Runeterra' },
    Fiora: { gender: 'Femenino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2012', region: 'Demacia' },
    Fizz: { gender: 'Masculino', position: 'Mid', species: 'Yordle', resource: 'Maná', range: '2011', region: 'Aguas Estancadas' },
    Galio: { gender: 'Masculino', position: 'Mid', species: 'Golem', resource: 'Maná', range: '2010', region: 'Demacia' },
    Gangplank: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2009', region: 'Aguas Estancadas' },
    Garen: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Sin recurso', range: '2010', region: 'Demacia' },
    Gnar: { gender: 'Masculino', position: 'Top', species: 'Yordle', resource: 'Furia', range: '2014', region: 'Freljord' },
    Gragas: { gender: 'Masculino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2010', region: 'Freljord' },
    Graves: { gender: 'Masculino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2011', region: 'Aguas Estancadas' },
    Gwen: { gender: 'Femenino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2021', region: 'Islas de la Sombra' },
    Hecarim: { gender: 'Masculino', position: 'Jungla', species: 'No-muerto', resource: 'Maná', range: '2012', region: 'Islas de la Sombra' },
    Heimerdinger: { gender: 'Masculino', position: 'Mid', species: 'Yordle', resource: 'Maná', range: '2009', region: 'Piltover' },
    Hwei: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2023', region: 'Ionia' },
    Illaoi: { gender: 'Femenino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2015', region: 'Aguas Estancadas' },
    Irelia: { gender: 'Femenino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2010', region: 'Ionia' },
    Ivern: { gender: 'Masculino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2016', region: 'Ionia' },
    Janna: { gender: 'Femenino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2009', region: 'Zaun' },
    JarvanIV: { gender: 'Masculino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2011', region: 'Demacia' },
    Jax: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2009', region: 'Icathia' },
    Jayce: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2012', region: 'Piltover' },
    Jhin: { gender: 'Masculino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2016', region: 'Ionia' },
    Jinx: { gender: 'Femenino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2013', region: 'Zaun' },
    Kaisa: { gender: 'Femenino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2018', region: 'Vacío' },
    Kalista: { gender: 'Femenino', position: 'ADC', species: 'No-muerto', resource: 'Maná', range: '2014', region: 'Islas de la Sombra' },
    Karma: { gender: 'Femenino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2011', region: 'Ionia' },
    Karthus: { gender: 'Masculino', position: 'Jungla', species: 'No-muerto', resource: 'Maná', range: '2009', region: 'Islas de la Sombra' },
    Kassadin: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2009', region: 'Vacío' },
    Katarina: { gender: 'Femenino', position: 'Mid', species: 'Humano', resource: 'Sin recurso', range: '2009', region: 'Noxus' },
    Kayle: { gender: 'Femenino', position: 'Top', species: 'Celestial', resource: 'Maná', range: '2009', region: 'Demacia' },
    Kayn: { gender: 'Masculino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2017', region: 'Ionia' },
    Kennen: { gender: 'Masculino', position: 'Top', species: 'Yordle', resource: 'Energía', range: '2010', region: 'Ionia' },
    Khazix: { gender: 'Masculino', position: 'Jungla', species: 'Vacío', resource: 'Maná', range: '2012', region: 'Vacío' },
    Kindred: { gender: 'Otro', position: 'Jungla', species: 'Espíritu', resource: 'Maná', range: '2015', region: 'Runeterra' },
    Kled: { gender: 'Masculino', position: 'Top', species: 'Yordle', resource: 'Coraje', range: '2016', region: 'Noxus' },
    KogMaw: { gender: 'Masculino', position: 'ADC', species: 'Vacío', resource: 'Maná', range: '2010', region: 'Vacío' },
    KSante: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2022', region: 'Shurima' },
    Leblanc: { gender: 'Femenino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2010', region: 'Noxus' },
    LeeSin: { gender: 'Masculino', position: 'Jungla', species: 'Humano', resource: 'Energía', range: '2011', region: 'Ionia' },
    Leona: { gender: 'Femenino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2011', region: 'Targón' },
    Lillia: { gender: 'Femenino', position: 'Jungla', species: 'Espíritu', resource: 'Maná', range: '2020', region: 'Ionia' },
    Lissandra: { gender: 'Femenino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2013', region: 'Freljord' },
    Lucian: { gender: 'Masculino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2013', region: 'Demacia' },
    Lulu: { gender: 'Femenino', position: 'Support', species: 'Yordle', resource: 'Maná', range: '2012', region: 'Bandle' },
    Lux: { gender: 'Femenino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2010', region: 'Demacia' },
    Malphite: { gender: 'Masculino', position: 'Top', species: 'Golem', resource: 'Maná', range: '2009', region: 'Shurima' },
    Malzahar: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2010', region: 'Vacío' },
    Maokai: { gender: 'Masculino', position: 'Support', species: 'Espíritu', resource: 'Maná', range: '2011', region: 'Islas de la Sombra' },
    MasterYi: { gender: 'Masculino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2009', region: 'Ionia' },
    Milio: { gender: 'Masculino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2023', region: 'Ixtal' },
    MissFortune: { gender: 'Femenino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2010', region: 'Aguas Estancadas' },
    Mordekaiser: { gender: 'Masculino', position: 'Top', species: 'No-muerto', resource: 'Sin recurso', range: '2010', region: 'Noxus' },
    Morgana: { gender: 'Femenino', position: 'Support', species: 'Celestial', resource: 'Maná', range: '2009', region: 'Demacia' },
    Naafiri: { gender: 'Femenino', position: 'Mid', species: 'Darkin', resource: 'Sin recurso', range: '2023', region: 'Shurima' },
    Nami: { gender: 'Femenino', position: 'Support', species: 'Vastaya', resource: 'Maná', range: '2012', region: 'Aguas Estancadas' },
    Nasus: { gender: 'Masculino', position: 'Top', species: 'Ascendido', resource: 'Maná', range: '2009', region: 'Shurima' },
    Nautilus: { gender: 'Masculino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2012', region: 'Aguas Estancadas' },
    Neeko: { gender: 'Femenino', position: 'Mid', species: 'Vastaya', resource: 'Maná', range: '2018', region: 'Ixtal' },
    Nidalee: { gender: 'Femenino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2009', region: 'Ixtal' },
    Nilah: { gender: 'Femenino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2022', region: 'Aguas Estancadas' },
    Nocturne: { gender: 'Masculino', position: 'Jungla', species: 'Demonio', resource: 'Maná', range: '2011', region: 'Runeterra' },
    Nunu: { gender: 'Masculino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2009', region: 'Freljord' },
    Olaf: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2010', region: 'Freljord' },
    Orianna: { gender: 'Femenino', position: 'Mid', species: 'Golem', resource: 'Maná', range: '2011', region: 'Piltover' },
    Ornn: { gender: 'Masculino', position: 'Top', species: 'Espíritu', resource: 'Maná', range: '2017', region: 'Freljord' },
    Pantheon: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2010', region: 'Targón' },
    Poppy: { gender: 'Femenino', position: 'Top', species: 'Yordle', resource: 'Maná', range: '2010', region: 'Demacia' },
    Pyke: { gender: 'Masculino', position: 'Support', species: 'No-muerto', resource: 'Maná', range: '2018', region: 'Aguas Estancadas' },
    Qiyana: { gender: 'Femenino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2019', region: 'Ixtal' },
    Quinn: { gender: 'Femenino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2013', region: 'Demacia' },
    Rakan: { gender: 'Masculino', position: 'Support', species: 'Vastaya', resource: 'Maná', range: '2017', region: 'Ionia' },
    Rammus: { gender: 'Masculino', position: 'Jungla', species: 'Otro', resource: 'Maná', range: '2009', region: 'Shurima' },
    RekSai: { gender: 'Femenino', position: 'Jungla', species: 'Vacío', resource: 'Furia', range: '2014', region: 'Vacío' },
    Rell: { gender: 'Femenino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2020', region: 'Noxus' },
    Renata: { gender: 'Femenino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2022', region: 'Zaun' },
    Renekton: { gender: 'Masculino', position: 'Top', species: 'Ascendido', resource: 'Furia', range: '2011', region: 'Shurima' },
    Rengar: { gender: 'Masculino', position: 'Jungla', species: 'Vastaya', resource: 'Ferocidad', range: '2012', region: 'Ixtal' },
    Riven: { gender: 'Femenino', position: 'Top', species: 'Humano', resource: 'Sin recurso', range: '2011', region: 'Noxus' },
    Rumble: { gender: 'Masculino', position: 'Top', species: 'Yordle', resource: 'Calor', range: '2011', region: 'Bandle' },
    Ryze: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2009', region: 'Runeterra' },
    Samira: { gender: 'Femenino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2020', region: 'Noxus' },
    Sejuani: { gender: 'Femenino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2012', region: 'Freljord' },
    Senna: { gender: 'Femenino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2019', region: 'Demacia' },
    Seraphine: { gender: 'Femenino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2020', region: 'Piltover' },
    Sett: { gender: 'Masculino', position: 'Top', species: 'Vastaya', resource: 'Coraje', range: '2020', region: 'Ionia' },
    Shaco: { gender: 'Masculino', position: 'Jungla', species: 'Demonio', resource: 'Maná', range: '2009', region: 'Runeterra' },
    Shen: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Energía', range: '2010', region: 'Ionia' },
    Shyvana: { gender: 'Femenino', position: 'Jungla', species: 'Dragón', resource: 'Furia', range: '2011', region: 'Demacia' },
    Singed: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2009', region: 'Zaun' },
    Sion: { gender: 'Masculino', position: 'Top', species: 'No-muerto', resource: 'Maná', range: '2009', region: 'Noxus' },
    Sivir: { gender: 'Femenino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2009', region: 'Shurima' },
    Skarner: { gender: 'Masculino', position: 'Jungla', species: 'Otro', resource: 'Maná', range: '2011', region: 'Shurima' },
    Smolder: { gender: 'Masculino', position: 'ADC', species: 'Dragón', resource: 'Maná', range: '2024', region: 'Runeterra' },
    Sona: { gender: 'Femenino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2010', region: 'Demacia' },
    Soraka: { gender: 'Femenino', position: 'Support', species: 'Celestial', resource: 'Maná', range: '2009', region: 'Targón' },
    Swain: { gender: 'Masculino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2010', region: 'Noxus' },
    Sylas: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2019', region: 'Demacia' },
    Syndra: { gender: 'Femenino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2012', region: 'Ionia' },
    TahmKench: { gender: 'Masculino', position: 'Support', species: 'Demonio', resource: 'Maná', range: '2015', region: 'Runeterra' },
    Taliyah: { gender: 'Femenino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2016', region: 'Shurima' },
    Talon: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2011', region: 'Noxus' },
    Taric: { gender: 'Masculino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2009', region: 'Targón' },
    Teemo: { gender: 'Masculino', position: 'Top', species: 'Yordle', resource: 'Maná', range: '2009', region: 'Bandle' },
    Thresh: { gender: 'Masculino', position: 'Support', species: 'No-muerto', resource: 'Maná', range: '2013', region: 'Islas de la Sombra' },
    Tristana: { gender: 'Femenino', position: 'ADC', species: 'Yordle', resource: 'Maná', range: '2009', region: 'Bandle' },
    Trundle: { gender: 'Masculino', position: 'Top', species: 'Trol', resource: 'Maná', range: '2010', region: 'Freljord' },
    Tryndamere: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Furia', range: '2009', region: 'Freljord' },
    TwistedFate: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2009', region: 'Aguas Estancadas' },
    Twitch: { gender: 'Masculino', position: 'ADC', species: 'Otro', resource: 'Maná', range: '2009', region: 'Zaun' },
    Udyr: { gender: 'Masculino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2009', region: 'Freljord' },
    Urgot: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2010', region: 'Zaun' },
    Varus: { gender: 'Masculino', position: 'ADC', species: 'Darkin', resource: 'Maná', range: '2012', region: 'Ionia' },
    Vayne: { gender: 'Femenino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2011', region: 'Demacia' },
    Veigar: { gender: 'Masculino', position: 'Mid', species: 'Yordle', resource: 'Maná', range: '2009', region: 'Bandle' },
    Velkoz: { gender: 'Masculino', position: 'Support', species: 'Vacío', resource: 'Maná', range: '2014', region: 'Vacío' },
    Vex: { gender: 'Femenino', position: 'Mid', species: 'Yordle', resource: 'Maná', range: '2021', region: 'Islas de la Sombra' },
    Vi: { gender: 'Femenino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2012', region: 'Piltover' },
    Viego: { gender: 'Masculino', position: 'Jungla', species: 'No-muerto', resource: 'Sin recurso', range: '2021', region: 'Islas de la Sombra' },
    Viktor: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2011', region: 'Zaun' },
    Vladimir: { gender: 'Masculino', position: 'Mid', species: 'Vampiro', resource: 'Salud', range: '2010', region: 'Noxus' },
    Volibear: { gender: 'Masculino', position: 'Top', species: 'Espíritu', resource: 'Maná', range: '2011', region: 'Freljord' },
    Warwick: { gender: 'Masculino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2009', region: 'Zaun' },
    Wukong: { gender: 'Masculino', position: 'Top', species: 'Vastaya', resource: 'Maná', range: '2011', region: 'Ionia' },
    Xayah: { gender: 'Femenino', position: 'ADC', species: 'Vastaya', resource: 'Maná', range: '2017', region: 'Ionia' },
    Xerath: { gender: 'Masculino', position: 'Mid', species: 'Ascendido', resource: 'Maná', range: '2011', region: 'Shurima' },
    XinZhao: { gender: 'Masculino', position: 'Jungla', species: 'Humano', resource: 'Maná', range: '2010', region: 'Demacia' },
    Yasuo: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Flujo', range: '2013', region: 'Ionia' },
    Yone: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Sin recurso', range: '2020', region: 'Ionia' },
    Yorick: { gender: 'Masculino', position: 'Top', species: 'Humano', resource: 'Maná', range: '2011', region: 'Islas de la Sombra' },
    Yuumi: { gender: 'Femenino', position: 'Support', species: 'Otro', resource: 'Maná', range: '2019', region: 'Bandle' },
    Zac: { gender: 'Masculino', position: 'Jungla', species: 'Golem', resource: 'Salud', range: '2013', region: 'Zaun' },
    Zed: { gender: 'Masculino', position: 'Mid', species: 'Humano', resource: 'Energía', range: '2012', region: 'Ionia' },
    Zeri: { gender: 'Femenino', position: 'ADC', species: 'Humano', resource: 'Maná', range: '2022', region: 'Zaun' },
    Ziggs: { gender: 'Masculino', position: 'Mid', species: 'Yordle', resource: 'Maná', range: '2012', region: 'Zaun' },
    Zilean: { gender: 'Masculino', position: 'Support', species: 'Humano', resource: 'Maná', range: '2009', region: 'Shurima' },
    Zoe: { gender: 'Femenino', position: 'Mid', species: 'Humano', resource: 'Maná', range: '2017', region: 'Targón' },
    Zyra: { gender: 'Femenino', position: 'Support', species: 'Espíritu', resource: 'Maná', range: '2012', region: 'Ixtal' }
};

// Función para mostrar autocompletado
function showClassicAutocomplete(searchTerm) {
    if (!searchTerm || searchTerm.length < 1) {
        classicAutocomplete.classList.remove('show');
        classicAutocomplete.innerHTML = '';
        return;
    }

    const availableChampions = Object.keys(championsClassicData);
    const filtered = champions.filter(champ =>
        availableChampions.includes(champ.id) &&
        champ.name.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
        !classicGuessedChampions.includes(champ.id)
    ).slice(0, 8); // Mostrar máximo 8 sugerencias

    if (filtered.length === 0) {
        classicAutocomplete.classList.remove('show');
        classicAutocomplete.innerHTML = '';
        return;
    }

    classicAutocomplete.innerHTML = filtered.map((champ, index) => `
        <div class="autocomplete-item ${index === selectedAutocompleteIndex ? 'selected' : ''}" data-champion-name="${champ.name}">
            <img src="https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/champion/${champ.id}.png" alt="${champ.name}">
            <span>${champ.name}</span>
        </div>
    `).join('');

    classicAutocomplete.classList.add('show');

    // Agregar event listeners a los items
    const items = classicAutocomplete.querySelectorAll('.autocomplete-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            classicGuessInput.value = item.dataset.championName;
            classicAutocomplete.classList.remove('show');
            classicAutocomplete.innerHTML = '';
            selectedAutocompleteIndex = -1;
            checkClassicGuess();
        });
    });
}

// Event listeners para autocompletado
if (classicGuessInput) {
    classicGuessInput.addEventListener('input', (e) => {
        selectedAutocompleteIndex = -1;
        showClassicAutocomplete(e.target.value);
    });

    classicGuessInput.addEventListener('keydown', (e) => {
        const items = classicAutocomplete.querySelectorAll('.autocomplete-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (items.length > 0) {
                selectedAutocompleteIndex = Math.min(selectedAutocompleteIndex + 1, items.length - 1);
                showClassicAutocomplete(classicGuessInput.value);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (items.length > 0) {
                selectedAutocompleteIndex = Math.max(selectedAutocompleteIndex - 1, 0);
                showClassicAutocomplete(classicGuessInput.value);
            }
        } else if (e.key === 'Enter') {
            if (selectedAutocompleteIndex >= 0 && items.length > 0) {
                e.preventDefault();
                const selectedItem = items[selectedAutocompleteIndex];
                classicGuessInput.value = selectedItem.dataset.championName;
                classicAutocomplete.classList.remove('show');
                classicAutocomplete.innerHTML = '';
                selectedAutocompleteIndex = -1;
            }
            checkClassicGuess();
        } else if (e.key === 'Escape') {
            classicAutocomplete.classList.remove('show');
            classicAutocomplete.innerHTML = '';
            selectedAutocompleteIndex = -1;
        }
    });

    // Cerrar autocompletado al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!classicGuessInput.contains(e.target) && !classicAutocomplete.contains(e.target)) {
            classicAutocomplete.classList.remove('show');
            classicAutocomplete.innerHTML = '';
            selectedAutocompleteIndex = -1;
        }
    });
}

function initLoldleClassic(seed = null) {
    const availableChampions = Object.keys(championsClassicData);
    const randomValue = seed !== null ? seededRandom(seed) : Math.random();
    const randomChampId = availableChampions[Math.floor(randomValue * availableChampions.length)];
    currentClassicChampion = champions.find(c => c.id === randomChampId);

    classicAttemptsCount = 0;
    classicGuessedChampions = [];
    classicAttempts.textContent = classicAttemptsCount;
    classicResult.textContent = '';
    classicResult.className = 'result-message';
    classicGuessInput.value = '';
    classicGuessInput.disabled = false;
    classicGuessBtn.disabled = false;
    restartClassicBtn.style.display = 'none';
    selectedAutocompleteIndex = -1;

    // Limpiar guesses anteriores (mantener solo el header)
    const header = classicGuessesList.querySelector('.classic-header');
    classicGuessesList.innerHTML = '';
    classicGuessesList.appendChild(header);

    // Cerrar autocompletado
    classicAutocomplete.classList.remove('show');
    classicAutocomplete.innerHTML = '';
}

function compareClassicAttributes(guessedChamp, correctChamp) {
    const guessedData = championsClassicData[guessedChamp.id];
    const correctData = championsClassicData[correctChamp.id];

    const guessedYear = parseInt(guessedData.range);
    const correctYear = parseInt(correctData.range);
    const yearDiff = correctYear - guessedYear;

    return {
        gender: guessedData.gender === correctData.gender ? 'correct' : 'incorrect',
        position: guessedData.position === correctData.position ? 'correct' : 'incorrect',
        species: guessedData.species === correctData.species ? 'correct' : 'incorrect',
        resource: guessedData.resource === correctData.resource ? 'correct' : 'incorrect',
        range: guessedData.range === correctData.range ? 'correct' :
               (Math.abs(yearDiff) <= 2 ? 'partial' : 'incorrect'),
        region: guessedData.region === correctData.region ? 'correct' : 'incorrect',
        rangeDirection: yearDiff > 0 ? 'up' : (yearDiff < 0 ? 'down' : 'equal') // up = campeón correcto es más nuevo, down = más viejo
    };
}

function checkClassicGuess() {
    const guess = classicGuessInput.value.trim();
    if (!guess) return;

    const guessedChamp = champions.find(c =>
        c.name.toLowerCase() === guess.toLowerCase() && championsClassicData[c.id]
    );

    if (!guessedChamp) {
        classicResult.textContent = 'Campeón no válido. Usa la lista desplegable.';
        classicResult.className = 'result-message incorrect';
        setTimeout(() => {
            classicResult.textContent = '';
        }, 2000);
        return;
    }

    if (classicGuessedChampions.includes(guessedChamp.id)) {
        classicResult.textContent = 'Ya intentaste este campeón.';
        classicResult.className = 'result-message incorrect';
        setTimeout(() => {
            classicResult.textContent = '';
        }, 2000);
        return;
    }

    classicGuessedChampions.push(guessedChamp.id);
    classicAttemptsCount++;
    classicAttempts.textContent = classicAttemptsCount;

    const comparison = compareClassicAttributes(guessedChamp, currentClassicChampion);
    const guessedData = championsClassicData[guessedChamp.id];
    const isCorrect = guessedChamp.id === currentClassicChampion.id;

    // Crear fila de guess
    const row = document.createElement('div');
    row.className = 'classic-row';

    // Celda de campeón con imagen
    const champCell = document.createElement('div');
    champCell.className = `classic-cell ${isCorrect ? 'correct' : 'incorrect'}`;
    const champImg = document.createElement('img');
    champImg.src = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/champion/${guessedChamp.id}.png`;
    champImg.alt = guessedChamp.name;
    champCell.appendChild(champImg);
    row.appendChild(champCell);

    // Celdas de atributos
    const attributes = ['gender', 'position', 'species', 'resource', 'range', 'region'];
    attributes.forEach(attr => {
        const cell = document.createElement('div');
        cell.className = `classic-cell ${comparison[attr]}`;

        // Para el atributo "range" (año), agregar flecha si no es correcto
        if (attr === 'range' && comparison[attr] !== 'correct') {
            const arrow = comparison.rangeDirection === 'up' ? ' ↑' : ' ↓';
            cell.textContent = guessedData[attr] + arrow;
        } else {
            cell.textContent = guessedData[attr];
        }

        row.appendChild(cell);
    });

    // Insertar después del header
    const header = classicGuessesList.querySelector('.classic-header');
    if (header.nextSibling) {
        classicGuessesList.insertBefore(row, header.nextSibling);
    } else {
        classicGuessesList.appendChild(row);
    }

    if (isCorrect) {
        classicResult.textContent = `¡Correcto! Era ${currentClassicChampion.name}`;
        classicResult.className = 'result-message correct';
        classicGuessInput.disabled = true;
        classicGuessBtn.disabled = true;

        // Actualizar botón según el modo (Daily Run o Normal)
        const updatedBtn = updateRestartButton(restartClassicBtn, initLoldleClassic, classicAttemptsCount);
        if (updatedBtn) {
            updatedBtn.style.display = 'block';
        }
    } else if (classicAttemptsCount >= MAX_CLASSIC_ATTEMPTS) {
        classicResult.textContent = `¡Game Over! Era ${currentClassicChampion.name}`;
        classicResult.className = 'result-message incorrect';
        classicGuessInput.disabled = true;
        classicGuessBtn.disabled = true;

        // Actualizar botón según el modo (Daily Run o Normal)
        const updatedBtn = updateRestartButton(restartClassicBtn, initLoldleClassic, 99);
        if (updatedBtn) {
            updatedBtn.style.display = 'block';
        }
    }

    classicGuessInput.value = '';
}

classicGuessBtn.addEventListener('click', checkClassicGuess);
classicGuessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkClassicGuess();
});
restartClassicBtn.addEventListener('click', initLoldleClassic);

// ========== MODO: HARD MODE ==========
const hardmodeContainer = document.getElementById('hardmodeContainer');
const hardmodeQuestionText = document.getElementById('hardmodeQuestionText');
const hardmodeOptions = document.getElementById('hardmodeOptions');
const hardmodeResult = document.getElementById('hardmodeResult');
const hardmodeScore = document.getElementById('hardmodeScore');
const hardmodeTotal = document.getElementById('hardmodeTotal');
const nextHardmodeBtn = document.getElementById('nextHardmodeBtn');
const restartHardmodeBtn = document.getElementById('restartHardmodeBtn');

let currentHardmodeQuestion = null;
let hardmodeScoreCount = 0;
let hardmodeTotalCount = 0;
let usedQuestions = [];

// Base de datos de preguntas difíciles
const hardmodeQuestions = [
    {
        question: '¿Quién tiene más mana base a nivel 1?',
        options: ['Janna', 'Ezreal', 'Lux', 'Syndra'],
        correct: 'Syndra',
        explanation: 'Syndra tiene 480 de maná base a nivel 1'
    },
    {
        question: '¿Qué campeón tiene el rango de ataque base más alto del juego?',
        options: ['Caitlyn', 'Tristana', 'Twitch', 'Kindred'],
        correct: 'Caitlyn',
        explanation: 'Caitlyn tiene 650 de rango base, el más alto del juego'
    },
    {
        question: '¿Cuál es el cooldown de la ultimate de Karthus a nivel 1?',
        options: ['180 segundos', '200 segundos', 'Sin cooldown', '120 segundos'],
        correct: '200 segundos',
        explanation: 'Requiem tiene 200/180/160 segundos de cooldown por nivel'
    },
    {
        question: '¿Qué campeón fue el primero en tener 4 habilidades activas sin pasiva tradicional?',
        options: ['Lee Sin', 'Elise', 'Jayce', 'Nidalee'],
        correct: 'Lee Sin',
        explanation: 'Lee Sin fue lanzado en 2011 sin pasiva visible en el tooltip'
    },
    {
        question: '¿Quién tiene la velocidad de movimiento base más baja del juego?',
        options: ['Anivia', 'Kled desmontado', 'Nautilus', 'Mega Gnar'],
        correct: 'Kled desmontado',
        explanation: 'Kled sin Skaarl tiene 285 de velocidad de movimiento'
    },
    {
        question: '¿Cuántos campeones fueron lanzados en el año 2009?',
        options: ['40', '25', '30', '15'],
        correct: '40',
        explanation: 'En 2009 se lanzaron 40 campeones, el año con más lanzamientos'
    },
    {
        question: '¿Qué campeón tiene el costo de maná MÁS ALTO en una habilidad básica?',
        options: ['Blitzcrank Q', 'Kassadin R', 'Anivia R', 'Swain R'],
        correct: 'Blitzcrank Q',
        explanation: 'Rocket Grab cuesta 100 de maná en todos los niveles'
    },
    {
        question: '¿Cuál es la armadura base a nivel 1 más alta entre estos campeones?',
        options: ['Leona', 'Malphite', 'Rammus', 'Thresh'],
        correct: 'Malphite',
        explanation: 'Malphite tiene aproximadamente 37 de armadura base'
    },
    {
        question: '¿Qué campeón tiene el tiempo de respawn más largo a nivel 18?',
        options: ['Todos igual', 'El que más kills tenga', 'Depende del oro', 'No hay diferencia'],
        correct: 'Todos igual',
        explanation: 'El tiempo de muerte solo depende del nivel, no del campeón'
    },
    {
        question: '¿Cuánto dura el efecto de Marca del Asesino (Ignite) a nivel máximo?',
        options: ['5 segundos', '4 segundos', '6 segundos', '3 segundos'],
        correct: '5 segundos',
        explanation: 'Ignite dura 5 segundos en todos los niveles'
    },
    {
        question: '¿Qué campeón tiene el AD base más alto a nivel 1?',
        options: ['Darius', 'Draven', 'Tryndamere', 'Renekton'],
        correct: 'Tryndamere',
        explanation: 'Tryndamere tiene 72 de AD base, uno de los más altos'
    },
    {
        question: '¿Cuál fue el primer campeón Yordle agregado al juego?',
        options: ['Teemo', 'Tristana', 'Heimerdinger', 'Corki'],
        correct: 'Teemo',
        explanation: 'Teemo fue lanzado el 21 de febrero de 2009'
    },
    {
        question: '¿Qué campeón tiene el HP base más bajo a nivel 1?',
        options: ['Sona', 'Yuumi', 'Lulu', 'Anivia'],
        correct: 'Yuumi',
        explanation: 'Yuumi tiene aproximadamente 500 HP base, el más bajo'
    },
    {
        question: '¿Cuántas skins tiene Lux en total (aproximadamente)?',
        options: ['12', '15', '18', '20+'],
        correct: '18',
        explanation: 'Lux es uno de los campeones con más skins del juego'
    },
    {
        question: '¿Qué campeón puede alcanzar el mayor rango de ataque en el juego?',
        options: ['Tristana', 'Caitlyn', 'Jinx', 'Kindred'],
        correct: 'Tristana',
        explanation: 'Con su pasiva, Tristana puede llegar a más de 700 de rango'
    },
    {
        question: '¿Cuánto oro cuesta el objeto "Infinity Edge"?',
        options: ['3200', '3400', '3600', '3800'],
        correct: '3400',
        explanation: 'Infinity Edge cuesta 3400 de oro'
    },
    {
        question: '¿Qué campeón tiene la pasiva "Absolution"?',
        options: ['Senna', 'Lucian', 'Kalista', 'Aphelios'],
        correct: 'Senna',
        explanation: 'Absolution es la pasiva única de Senna'
    },
    {
        question: '¿Cuál es el nombre real de Jinx?',
        options: ['Powder', 'Vi', 'Caitlyn', 'No revelado'],
        correct: 'Powder',
        explanation: 'En Arcane se revela que Jinx era Powder antes de volverse loca'
    },
    {
        question: '¿Qué campeón fue redeseñado más veces?',
        options: ['Ryze', 'Mordekaiser', 'Sion', 'Karma'],
        correct: 'Ryze',
        explanation: 'Ryze ha sido redeseñado múltiples veces, siendo un meme en la comunidad'
    },
    {
        question: '¿Cuánto dura el efecto de "Nashor\'s Tooth" al atacar?',
        options: ['No tiene efecto temporal', '3 segundos', '5 segundos', '2 segundos'],
        correct: 'No tiene efecto temporal',
        explanation: 'Nashor\'s Tooth da stats permanentes, no tiene efecto temporal'
    },
    {
        question: '¿Qué campeón tiene 4 formas diferentes?',
        options: ['Kayn', 'Shyvana', 'Nidalee', 'Elise'],
        correct: 'Kayn',
        explanation: 'Kayn tiene su forma base, Rhaast y Shadow Assassin'
    },
    {
        question: '¿Cuántas habilidades tiene Aphelios en total?',
        options: ['5', '10', '15', '20+'],
        correct: '20+',
        explanation: 'Aphelios tiene combinaciones de 5 armas con múltiples habilidades cada una'
    },
    {
        question: '¿Qué campeón puede robar ultimates?',
        options: ['Sylas', 'Viego', 'Neeko', 'Zoe'],
        correct: 'Sylas',
        explanation: 'Sylas puede robar y usar las ultimates enemigas con su R'
    },
    {
        question: '¿Cuál es el nivel máximo en League of Legends?',
        options: ['18', '20', '25', 'Sin límite'],
        correct: '18',
        explanation: 'El nivel máximo de campeones es 18'
    },
    {
        question: '¿Qué campeón tiene más skins?',
        options: ['Miss Fortune', 'Lux', 'Ezreal', 'Ahri'],
        correct: 'Miss Fortune',
        explanation: 'Miss Fortune tiene más de 20 skins, siendo uno de los campeones con más'
    },
    {
        question: '¿Cuánto oro dan los cañones (cannon minions)?',
        options: ['45', '60', '75', '90'],
        correct: '60',
        explanation: 'Los cañones dan 60 de oro base'
    },
    {
        question: '¿Qué campeón tiene "Deceive" como habilidad?',
        options: ['Shaco', 'Leblanc', 'Neeko', 'Wukong'],
        correct: 'Shaco',
        explanation: 'Deceive (Q) es la habilidad de invisibilidad de Shaco'
    },
    {
        question: '¿Cuántos dragones diferentes existen?',
        options: ['4', '5', '6', '7'],
        correct: '6',
        explanation: 'Infernal, Ocean, Mountain, Cloud, Hextech y Chemtech (6 dragones)'
    },
    {
        question: '¿Qué campeón puede crear muros?',
        options: ['Anivia', 'Taliyah', 'Azir', 'Todas las anteriores'],
        correct: 'Todas las anteriores',
        explanation: 'Anivia, Taliyah, Azir y otros pueden crear muros'
    },
    {
        question: '¿Cuánto HP tiene el Baron Nashor inicialmente?',
        options: ['6000', '8000', '9000', '12000'],
        correct: '9000',
        explanation: 'Baron Nashor tiene aproximadamente 9000 HP al aparecer'
    },
    {
        question: '¿Qué campeón es hermano/a de Yasuo?',
        options: ['Yone', 'Ahri', 'Shen', 'Zed'],
        correct: 'Yone',
        explanation: 'Yone es el hermano mayor de Yasuo'
    },
    {
        question: '¿Cuál es el cooldown del Flash a nivel 1?',
        options: ['300 segundos', '360 segundos', '240 segundos', '180 segundos'],
        correct: '300 segundos',
        explanation: 'Flash tiene 300 segundos (5 minutos) de cooldown base'
    },
    {
        question: '¿Qué campeón puede poseer a enemigos muertos?',
        options: ['Viego', 'Mordekaiser', 'Yorick', 'Karthus'],
        correct: 'Viego',
        explanation: 'Viego puede poseer campeones enemigos caídos con su pasiva'
    },
    {
        question: '¿Cuántos campeones existen aproximadamente?',
        options: ['140', '160', '170', '180+'],
        correct: '170',
        explanation: 'Actualmente hay más de 170 campeones en League of Legends'
    },
    {
        question: '¿Qué campeón tiene "Conflagration" como habilidad?',
        options: ['Brand', 'Annie', 'Rumble', 'Shyvana'],
        correct: 'Brand',
        explanation: 'Conflagration (E) es una habilidad de Brand'
    },
    {
        question: '¿Cuánto cuesta un ward de control?',
        options: ['50', '75', '100', '125'],
        correct: '75',
        explanation: 'Los control wards cuestan 75 de oro'
    },
    {
        question: '¿Qué campeón es "The Darkin Blade"?',
        options: ['Aatrox', 'Rhaast', 'Varus', 'Kayn'],
        correct: 'Aatrox',
        explanation: 'Aatrox es conocido como "The Darkin Blade"'
    },
    {
        question: '¿Cuántas torres hay por equipo en el mapa?',
        options: ['9', '10', '11', '12'],
        correct: '11',
        explanation: 'Cada equipo tiene 11 torres: 3 por lane (9) + 2 nexus towers'
    },
    {
        question: '¿Qué campeón tiene la pasiva "Carnivore"?',
        options: ['Cho\'Gath', 'Rengar', 'Warwick', 'Skarner'],
        correct: 'Cho\'Gath',
        explanation: 'Carnivore es la pasiva de Cho\'Gath que le da sustain'
    },
    {
        question: '¿Cuánto tiempo tarda en aparecer el primer drake?',
        options: ['4 minutos', '5 minutos', '6 minutos', '7 minutos'],
        correct: '5 minutos',
        explanation: 'El primer dragón aparece a los 5 minutos de juego'
    },
    {
        question: '¿Qué campeón puede cambiar de forma entre rango y melee?',
        options: ['Jayce', 'Nidalee', 'Elise', 'Todas las anteriores'],
        correct: 'Todas las anteriores',
        explanation: 'Jayce, Nidalee y Elise pueden cambiar entre rango y melee'
    },
    {
        question: '¿Cuánto oro dan las kills en serie (killing sprees)?',
        options: ['150-600', '200-700', '300-1000', 'Depende del nivel'],
        correct: '300-1000',
        explanation: 'Las killing sprees dan entre 300 y 1000 de oro extra'
    },
    {
        question: '¿Qué campeón tiene "Pillar of Ice" como habilidad?',
        options: ['Trundle', 'Sejuani', 'Anivia', 'Lissandra'],
        correct: 'Trundle',
        explanation: 'Pillar of Ice (E) es la habilidad de control de Trundle'
    },
    {
        question: '¿Cuántos inhibidores hay en el mapa?',
        options: ['3', '4', '5', '6'],
        correct: '6',
        explanation: 'Hay 6 inhibidores en total: 3 por equipo'
    },
    {
        question: '¿Qué campeón es conocido como "The Saltwater Scourge"?',
        options: ['Gangplank', 'Pyke', 'Nautilus', 'Fizz'],
        correct: 'Gangplank',
        explanation: 'Gangplank es "The Saltwater Scourge"'
    },
    {
        question: '¿Cuánto dura el efecto de revivir de Guardian Angel?',
        options: ['3 segundos', '4 segundos', '5 segundos', '2 segundos'],
        correct: '4 segundos',
        explanation: 'Guardian Angel te revive después de 4 segundos'
    },
    {
        question: '¿Qué campeón puede teletransportarse globalmente sin ultimate?',
        options: ['Tahm Kench', 'Ryze', 'Twisted Fate', 'Ninguno'],
        correct: 'Ninguno',
        explanation: 'Todos los teletransportes globales requieren ultimate o hechizos de invocador'
    },
    {
        question: '¿Cuánto tiempo tarda Baron en reaparecer?',
        options: ['5 minutos', '6 minutos', '7 minutos', '8 minutos'],
        correct: '6 minutos',
        explanation: 'Baron Nashor reaparece cada 6 minutos después de ser derrotado'
    },
    {
        question: '¿Qué campeón tiene "Final Spark" como ultimate?',
        options: ['Lux', 'Xerath', 'Vel\'Koz', 'Ziggs'],
        correct: 'Lux',
        explanation: 'Final Spark (R) es el láser ultimate de Lux'
    }
];

function initHardmode() {
    usedQuestions = [];
    hardmodeScoreCount = 0;
    hardmodeTotalCount = 0;
    hardmodeScore.textContent = hardmodeScoreCount;
    hardmodeTotal.textContent = hardmodeTotalCount;
    nextQuestion();
}

function nextQuestion() {
    if (usedQuestions.length >= hardmodeQuestions.length) {
        hardmodeResult.textContent = `¡Completaste todas las preguntas! Puntuación final: ${hardmodeScoreCount}/${hardmodeTotalCount}`;
        hardmodeResult.className = 'result-message correct';
        nextHardmodeBtn.style.display = 'none';
        restartHardmodeBtn.style.display = 'block';
        return;
    }

    const availableQuestions = hardmodeQuestions.filter((q, index) => !usedQuestions.includes(index));
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    currentHardmodeQuestion = availableQuestions[randomIndex];
    const questionOriginalIndex = hardmodeQuestions.indexOf(currentHardmodeQuestion);
    usedQuestions.push(questionOriginalIndex);

    hardmodeQuestionText.textContent = currentHardmodeQuestion.question;
    hardmodeOptions.innerHTML = '';
    hardmodeResult.textContent = '';
    nextHardmodeBtn.style.display = 'none';

    // Crear opciones
    currentHardmodeQuestion.options.forEach(option => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'hardmode-option';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => checkHardmodeAnswer(option, optionBtn));
        hardmodeOptions.appendChild(optionBtn);
    });
}

function checkHardmodeAnswer(selectedOption, optionBtn) {
    hardmodeTotalCount++;
    hardmodeTotal.textContent = hardmodeTotalCount;

    const isCorrect = selectedOption === currentHardmodeQuestion.correct;

    if (isCorrect) {
        hardmodeScoreCount++;
        hardmodeScore.textContent = hardmodeScoreCount;
        optionBtn.classList.add('selected-correct');
        hardmodeResult.textContent = `¡Correcto! ${currentHardmodeQuestion.explanation}`;
        hardmodeResult.className = 'result-message correct';
    } else {
        optionBtn.classList.add('selected-incorrect');
        // Mostrar la opción correcta
        const allOptions = hardmodeOptions.querySelectorAll('.hardmode-option');
        allOptions.forEach(opt => {
            if (opt.textContent === currentHardmodeQuestion.correct) {
                opt.classList.add('show-correct');
            }
        });
        hardmodeResult.textContent = `Incorrecto. ${currentHardmodeQuestion.explanation}`;
        hardmodeResult.className = 'result-message incorrect';
    }

    // Deshabilitar todas las opciones
    const allOptions = hardmodeOptions.querySelectorAll('.hardmode-option');
    allOptions.forEach(opt => {
        opt.classList.add('disabled');
        opt.style.pointerEvents = 'none';
    });

    nextHardmodeBtn.style.display = 'block';
}

nextHardmodeBtn.addEventListener('click', nextQuestion);
restartHardmodeBtn.addEventListener('click', initHardmode);

// ========== MODO: ESPORTS TRIVIA ==========
const esportsTriviaContainer = document.getElementById('esportsTriviaContainer');
const esportsQuestionText = document.getElementById('esportsQuestionText');
const esportsOptions = document.getElementById('esportsOptions');
const esportsResult = document.getElementById('esportsResult');
const esportsScore = document.getElementById('esportsScore');
const esportsTotal = document.getElementById('esportsTotal');
const nextEsportsBtn = document.getElementById('nextEsportsBtn');
const restartEsportsBtn = document.getElementById('restartEsportsBtn');

let currentEsportsQuestion = null;
let esportsScoreCount = 0;
let esportsTotalCount = 0;
let usedEsportsQuestions = [];

// Base de datos de preguntas sobre esports de LoL
const esportsQuestions = [
    {
        question: '¿Qué equipo ganó el World Championship 2023?',
        options: ['T1', 'JDG', 'Weibo Gaming', 'Gen.G'],
        correct: 'Weibo Gaming',
        explanation: 'Weibo Gaming ganó Worlds 2023 derrotando a T1 3-0 en la final'
    },
    {
        question: '¿Qué jugador tiene más títulos de Worlds?',
        options: ['Faker', 'Uzi', 'Bengi', 'Impact'],
        correct: 'Faker',
        explanation: 'Faker tiene 4 títulos de Worlds (2013, 2015, 2016, 2023)'
    },
    {
        question: '¿Qué región ha ganado más World Championships?',
        options: ['Corea (LCK)', 'China (LPL)', 'Europa (LEC)', 'NA (LCS)'],
        correct: 'Corea (LCK)',
        explanation: 'Korea (LCK) ha ganado 7 Worlds, la región más exitosa'
    },
    {
        question: '¿En qué año se jugó el primer World Championship?',
        options: ['2009', '2010', '2011', '2012'],
        correct: '2011',
        explanation: 'El primer Worlds fue en 2011, ganado por Fnatic'
    },
    {
        question: '¿Qué equipo ganó Worlds 2013?',
        options: ['SKT T1', 'Samsung Galaxy', 'Royal Club', 'Fnatic'],
        correct: 'SKT T1',
        explanation: 'SKT T1 ganó Worlds 2013, el primer título de Faker'
    },
    {
        question: '¿Cuántos equipos clasifican de cada región mayor a Worlds?',
        options: ['2 equipos', '3 equipos', '4 equipos', '5 equipos'],
        correct: '4 equipos',
        explanation: 'Las regiones mayores (LCK, LPL, LEC, LCS) clasifican 4 equipos cada una'
    },
    {
        question: '¿Qué equipo tiene el récord de más títulos de LCK?',
        options: ['T1', 'Gen.G', 'DRX', 'DWG KIA'],
        correct: 'T1',
        explanation: 'T1 (ex-SKT) tiene el récord con 10 títulos de LCK'
    },
    {
        question: '¿Qué equipo europeo ganó MSI 2019?',
        options: ['G2 Esports', 'Fnatic', 'Origen', 'Rogue'],
        correct: 'G2 Esports',
        explanation: 'G2 Esports ganó MSI 2019 derrotando a TL en la final'
    },
    {
        question: '¿Qué jugador es conocido como "The Unkillable Demon King"?',
        options: ['Faker', 'Rookie', 'Chovy', 'ShowMaker'],
        correct: 'Faker',
        explanation: 'Faker tiene el apodo "The Unkillable Demon King" desde 2013'
    },
    {
        question: '¿Qué equipo hizo el "Golden Road" (ganar todo en un año)?',
        options: ['SKT T1 2015', 'FunPlus Phoenix 2019', 'G2 Esports 2019', 'Ninguno'],
        correct: 'Ninguno',
        explanation: 'Ningún equipo ha logrado el Golden Road completo hasta ahora'
    },
    {
        question: '¿Cuántos equipos participan en el Play-In de Worlds?',
        options: ['8 equipos', '10 equipos', '12 equipos', '16 equipos'],
        correct: '12 equipos',
        explanation: '12 equipos participan en el Play-In Stage de Worlds'
    },
    {
        question: '¿Qué equipo de NA llegó más lejos en Worlds?',
        options: ['Cloud9 (Semis)', 'TSM (Cuartos)', 'Team Liquid (Semis)', 'CLG (Cuartos)'],
        correct: 'Cloud9 (Semis)',
        explanation: 'Cloud9 llegó a semifinales en Worlds 2018'
    },
    {
        question: '¿En qué ciudad se jugó Worlds 2023?',
        options: ['Seúl', 'Shanghai', 'Los Ángeles', 'Londres'],
        correct: 'Seúl',
        explanation: 'Worlds 2023 se jugó en Corea del Sur, con la final en Seúl'
    },
    {
        question: '¿Qué torneo internacional se juega a mitad de año?',
        options: ['MSI', 'Rift Rivals', 'All-Stars', 'Demacia Cup'],
        correct: 'MSI',
        explanation: 'MSI (Mid-Season Invitational) se juega entre Spring y Summer Split'
    },
    {
        question: '¿Qué jugador ganó Worlds con 2 equipos diferentes?',
        options: ['Impact', 'CoreJJ', 'Bengi', 'Peanut'],
        correct: 'Impact',
        explanation: 'Impact ganó con SKT T1 (2013) y T1 (2023)'
    },
    {
        question: '¿Qué equipo chino ganó el primer Worlds de LPL?',
        options: ['Invictus Gaming', 'Royal Club', 'EDG', 'FunPlus Phoenix'],
        correct: 'Invictus Gaming',
        explanation: 'Invictus Gaming ganó Worlds 2018, el primer título de China'
    },
    {
        question: '¿Cuántos bans hay por equipo en partidas profesionales?',
        options: ['3 bans', '4 bans', '5 bans', '6 bans'],
        correct: '5 bans',
        explanation: 'Cada equipo tiene 5 bans en formato profesional'
    },
    {
        question: '¿Qué jugador tiene el apodo "The Shy"?',
        options: ['Toplaner de IG', 'Midlaner de T1', 'ADC de Gen.G', 'Support de JDG'],
        correct: 'Toplaner de IG',
        explanation: 'TheShy es el legendario toplaner de Invictus Gaming, campeón de Worlds 2018'
    },
    {
        question: '¿Qué premio en dólares tuvo Worlds 2023?',
        options: ['1 millón', '2.2 millones', '5 millones', '10 millones'],
        correct: '2.2 millones',
        explanation: 'El prize pool de Worlds 2023 fue de aproximadamente 2.2 millones de dólares'
    },
    {
        question: '¿Qué equipo eliminó a RNG en Worlds 2022?',
        options: ['JDG', 'T1', 'DRX', 'Gen.G'],
        correct: 'DRX',
        explanation: 'DRX eliminó a RNG en cuartos y eventualmente ganó Worlds 2022'
    },
    {
        question: '¿Qué jugador de ADC es conocido como "Uzi"?',
        options: ['Jian Zi-Hao', 'Park Jae-hyuk', 'Kim Hyuk-kyu', 'Bae Jun-sik'],
        correct: 'Jian Zi-Hao',
        explanation: 'Uzi es Jian Zi-Hao, legendario ADC de RNG'
    },
    {
        question: '¿Qué equipo ganó MSI 2021?',
        options: ['DWG KIA', 'RNG', 'MAD Lions', 'PSG Talon'],
        correct: 'RNG',
        explanation: 'RNG ganó MSI 2021 derrotando a DWG KIA en la final'
    },
    {
        question: '¿Quién es el jugador con más pentakills en Worlds?',
        options: ['Faker', 'Perkz', 'Rekkles', 'No hay récord oficial'],
        correct: 'No hay récord oficial',
        explanation: 'Los pentakills en Worlds son raros y no hay un récord oficial claro'
    },
    {
        question: '¿Qué región ganó Worlds 2019?',
        options: ['LPL', 'LCK', 'LEC', 'LCS'],
        correct: 'LPL',
        explanation: 'FunPlus Phoenix (LPL) ganó Worlds 2019'
    },
    {
        question: '¿Cuántos splits se juegan por año en las ligas principales?',
        options: ['1', '2', '3', '4'],
        correct: '2',
        explanation: 'Se juegan Spring Split y Summer Split cada año'
    },
    {
        question: '¿Qué jugador tiene el apodo "Caps"?',
        options: ['Rasmus Winther', 'Luka Perkovic', 'Martin Larsson', 'Gabriël Rau'],
        correct: 'Rasmus Winther',
        explanation: 'Caps es Rasmus Winther, midlaner estrella de G2 y Fnatic'
    },
    {
        question: '¿Qué equipo ganó el primer MSI en 2015?',
        options: ['EDG', 'SKT T1', 'Fnatic', 'AHQ'],
        correct: 'EDG',
        explanation: 'Edward Gaming ganó el primer MSI en 2015'
    },
    {
        question: '¿Qué jugador es conocido como "Rookie"?',
        options: ['Song Eui-jin', 'Lee Sang-hyeok', 'Kim Tae-sang', 'Jeong Ji-hoon'],
        correct: 'Song Eui-jin',
        explanation: 'Rookie es Song Eui-jin, midlaner campeón de Worlds 2018 con IG'
    },
    {
        question: '¿Qué equipo fue el primero en ganar Worlds dos veces consecutivas?',
        options: ['SKT T1', 'Samsung', 'Fnatic', 'Ninguno'],
        correct: 'SKT T1',
        explanation: 'SKT T1 ganó Worlds 2015 y 2016 consecutivamente'
    },
    {
        question: '¿Cuántos juegos se necesitan ganar en una serie Bo5?',
        options: ['2', '3', '4', '5'],
        correct: '3',
        explanation: 'En Best of 5, se necesitan ganar 3 juegos para la victoria'
    },
    {
        question: '¿Qué jugador es conocido como "Rekkles"?',
        options: ['Martin Larsson', 'Luka Perkovic', 'Rasmus Winther', 'Oskar Rodhe'],
        correct: 'Martin Larsson',
        explanation: 'Rekkles es Martin Larsson, legendario ADC europeo'
    },
    {
        question: '¿Qué región ganó Worlds 2020?',
        options: ['LPL', 'LCK', 'LEC', 'LCS'],
        correct: 'LCK',
        explanation: 'DAMWON Gaming (LCK) ganó Worlds 2020'
    },
    {
        question: '¿Qué equipo ganó Worlds 2014?',
        options: ['Samsung White', 'SK T1 K', 'Star Horn Royal Club', 'OMG'],
        correct: 'Samsung White',
        explanation: 'Samsung White dominó Worlds 2014 con un juego perfecto'
    },
    {
        question: '¿Qué jugador es conocido como "Chovy"?',
        options: ['Jeong Ji-hoon', 'Kim Tae-sang', 'Lee Sang-hyeok', 'Park Ji-hoon'],
        correct: 'Jeong Ji-hoon',
        explanation: 'Chovy es Jeong Ji-hoon, midlaner estrella de Gen.G'
    },
    {
        question: '¿Qué equipo de Europa llegó a la final de Worlds 2018?',
        options: ['Fnatic', 'G2 Esports', 'Origen', 'Misfits'],
        correct: 'Fnatic',
        explanation: 'Fnatic llegó a la final de Worlds 2018 pero perdió contra IG'
    },
    {
        question: '¿Cuántas veces ha ganado Faker el título de LCK?',
        options: ['5+', '8+', '10+', '12+'],
        correct: '10+',
        explanation: 'Faker ha ganado más de 10 títulos de LCK con T1/SKT'
    },
    {
        question: '¿Qué jugador es conocido como "Deft"?',
        options: ['Kim Hyuk-kyu', 'Park Jae-hyuk', 'Bae Jun-sik', 'Kim Geon-bu'],
        correct: 'Kim Hyuk-kyu',
        explanation: 'Deft es Kim Hyuk-kyu, ADC campeón de Worlds 2022 con DRX'
    },
    {
        question: '¿Qué equipo ganó Worlds 2017?',
        options: ['Samsung Galaxy', 'SKT T1', 'RNG', 'Longzhu Gaming'],
        correct: 'Samsung Galaxy',
        explanation: 'Samsung Galaxy ganó Worlds 2017 derrotando a SKT T1 3-0'
    },
    {
        question: '¿Qué jugador tiene el apodo "ShowMaker"?',
        options: ['Heo Su', 'Lee Sang-hyeok', 'Kim Tae-sang', 'Jeong Ji-hoon'],
        correct: 'Heo Su',
        explanation: 'ShowMaker es Heo Su, midlaner campeón de Worlds 2020'
    },
    {
        question: '¿Qué equipo representó a Europa en Worlds 2011?',
        options: ['Fnatic', 'Against All Authority', 'Ambos', 'Moscow 5'],
        correct: 'Ambos',
        explanation: 'Fnatic y Against All Authority representaron a Europa en el primer Worlds'
    },
    {
        question: '¿Cuánto dura aproximadamente un split profesional?',
        options: ['2 meses', '3 meses', '4 meses', '6 meses'],
        correct: '3 meses',
        explanation: 'Un split profesional dura aproximadamente 3 meses'
    },
    {
        question: '¿Qué jugador es conocido como "Perkz"?',
        options: ['Luka Perkovic', 'Rasmus Winther', 'Martin Larsson', 'Marcin Jankowski'],
        correct: 'Luka Perkovic',
        explanation: 'Perkz es Luka Perkovic, jugador croata legendario de G2'
    },
    {
        question: '¿Qué equipo ganó Worlds 2016?',
        options: ['SKT T1', 'Samsung Galaxy', 'ROX Tigers', 'H2K'],
        correct: 'SKT T1',
        explanation: 'SKT T1 ganó Worlds 2016, el segundo título consecutivo de Faker'
    },
    {
        question: '¿Qué jugador tiene el apodo "Knight"?',
        options: ['Zhuo Ding', 'Song Eui-jin', 'Kim Tae-sang', 'Lee Sang-hyeok'],
        correct: 'Zhuo Ding',
        explanation: 'Knight es Zhuo Ding, midlaner estrella de la LPL'
    },
    {
        question: '¿Qué región ganó Worlds 2021?',
        options: ['LPL', 'LCK', 'LEC', 'LCS'],
        correct: 'LPL',
        explanation: 'Edward Gaming (LPL) ganó Worlds 2021'
    },
    {
        question: '¿Qué equipo hizo el reverse sweep en Worlds 2022 Grand Finals?',
        options: ['DRX', 'T1', 'Gen.G', 'JDG'],
        correct: 'DRX',
        explanation: 'DRX hizo reverse sweep 3-2 contra T1 en la final de Worlds 2022'
    },
    {
        question: '¿Qué jugador es conocido como "Zeus"?',
        options: ['Choi Woo-je', 'Kim Geon-bu', 'Park Jin-seong', 'Kang Seung-lok'],
        correct: 'Choi Woo-je',
        explanation: 'Zeus es Choi Woo-je, toplaner estrella de T1'
    },
    {
        question: '¿Qué equipo ganó Worlds 2012?',
        options: ['Taipei Assassins', 'Azubu Frost', 'Moscow 5', 'CLG.EU'],
        correct: 'Taipei Assassins',
        explanation: 'Taipei Assassins ganó Worlds 2012 en una histórica upset'
    },
    {
        question: '¿Qué jugador tiene más apariciones en Worlds?',
        options: ['Faker', 'Doublelift', 'Rekkles', 'Uzi'],
        correct: 'Faker',
        explanation: 'Faker ha participado en Worlds casi todos los años desde 2013'
    },
    {
        question: '¿Qué equipo ganó Worlds 2015?',
        options: ['SKT T1', 'KOO Tigers', 'Fnatic', 'Origen'],
        correct: 'SKT T1',
        explanation: 'SKT T1 ganó Worlds 2015, el segundo título de Faker'
    }
];

function initEsportsTrivia() {
    usedEsportsQuestions = [];
    esportsScoreCount = 0;
    esportsTotalCount = 0;
    esportsScore.textContent = esportsScoreCount;
    esportsTotal.textContent = esportsTotalCount;
    nextEsportsQuestion();
}

function nextEsportsQuestion() {
    if (usedEsportsQuestions.length >= esportsQuestions.length) {
        esportsResult.textContent = `¡Completaste todas las preguntas! Puntuación final: ${esportsScoreCount}/${esportsTotalCount}`;
        esportsResult.className = 'result-message correct';
        nextEsportsBtn.style.display = 'none';
        restartEsportsBtn.style.display = 'block';
        return;
    }

    const availableQuestions = esportsQuestions.filter((q, index) => !usedEsportsQuestions.includes(index));
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    currentEsportsQuestion = availableQuestions[randomIndex];
    const questionOriginalIndex = esportsQuestions.indexOf(currentEsportsQuestion);
    usedEsportsQuestions.push(questionOriginalIndex);

    esportsQuestionText.textContent = currentEsportsQuestion.question;
    esportsOptions.innerHTML = '';
    esportsResult.textContent = '';
    nextEsportsBtn.style.display = 'none';

    // Crear opciones
    currentEsportsQuestion.options.forEach(option => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'hardmode-option';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => checkEsportsAnswer(option, optionBtn));
        esportsOptions.appendChild(optionBtn);
    });
}

function checkEsportsAnswer(selectedOption, optionBtn) {
    esportsTotalCount++;
    esportsTotal.textContent = esportsTotalCount;

    const isCorrect = selectedOption === currentEsportsQuestion.correct;

    if (isCorrect) {
        esportsScoreCount++;
        esportsScore.textContent = esportsScoreCount;
        optionBtn.classList.add('selected-correct');
        esportsResult.textContent = `¡Correcto! ${currentEsportsQuestion.explanation}`;
        esportsResult.className = 'result-message correct';
    } else {
        optionBtn.classList.add('selected-incorrect');
        // Mostrar la opción correcta
        const allOptions = esportsOptions.querySelectorAll('.hardmode-option');
        allOptions.forEach(opt => {
            if (opt.textContent === currentEsportsQuestion.correct) {
                opt.classList.add('show-correct');
            }
        });
        esportsResult.textContent = `Incorrecto. ${currentEsportsQuestion.explanation}`;
        esportsResult.className = 'result-message incorrect';
    }

    // Deshabilitar todas las opciones
    const allOptions = esportsOptions.querySelectorAll('.hardmode-option');
    allOptions.forEach(opt => {
        opt.classList.add('disabled');
        opt.style.pointerEvents = 'none';
    });

    nextEsportsBtn.style.display = 'block';
}

nextEsportsBtn.addEventListener('click', nextEsportsQuestion);
restartEsportsBtn.addEventListener('click', initEsportsTrivia);

// ========== DAILY RUN SYSTEM ==========
// Elementos del Daily Run (will be initialized in DOMContentLoaded)
let dailyStart;
let dailyProgress;
let dailyComplete;
let dailyAlreadyPlayed;
let startDailyRunBtn;
let dailyCurrentScore;
let currentChallengeNumber;
let currentChallengeName;
let finalScoreDisplay;
let usernameInput;
let submitScoreBtn;
let viewRankingBtn;
let viewRankingFromCompleteBtn;
let todayScoreDisplay;

// Ranking elements (will be initialized in DOMContentLoaded)
let rankingList;
let rankingDateDisplay;

// Daily Run State
let dailyRunScore = 0;
let dailyRunStartTime = 0;
let dailyRunCompletionTime = 0;
let currentChallengeIndex = 0;
let currentChallengeTarget = null;
let currentChallengeAttempts = 0;
let isDailyRunMode = false; // Flag para saber si estamos en Daily Run
let isFreeRunMode = false; // Flag para saber si estamos en Free Run
let freeRunChallenges = []; // Todos los challenges para Free Run
let freeRunScore = 0;
let freeRunCurrentIndex = 0;

// Helper function para configurar botones de restart según el modo
function updateRestartButton(buttonElement, normalInitFunction, attempts = 0) {
    if (!buttonElement) return;

    // Limpiar listeners anteriores clonando el botón
    const newButton = buttonElement.cloneNode(true);
    buttonElement.parentNode.replaceChild(newButton, buttonElement);

    if (isDailyRunMode) {
        // En Daily Run: botón dice "Siguiente" y avanza al siguiente challenge
        newButton.setAttribute('data-i18n', 'nextQuestion');
        newButton.textContent = translations[currentLang]?.nextQuestion || 'Next';
        newButton.addEventListener('click', () => {
            completeChallenge(attempts);
        });
    } else if (isFreeRunMode) {
        // En Free Run: botón dice "Siguiente" y avanza al siguiente challenge
        newButton.setAttribute('data-i18n', 'nextQuestion');
        newButton.textContent = translations[currentLang]?.nextQuestion || 'Next';
        newButton.addEventListener('click', () => {
            completeFreeRunChallenge(attempts);
        });
    } else {
        // En modo normal: botón dice "Play Again" y reinicia el juego
        newButton.setAttribute('data-i18n', 'playAgain');
        newButton.textContent = translations[currentLang]?.playAgain || 'Play Again';
        newButton.addEventListener('click', () => {
            normalInitFunction();
        });
    }

    return newButton;
}

const allChallenges = [
    { name: '🎯 Classic', mode: 'loldle-classic', init: initLoldleClassic, container: 'loldleClassicContainer', maxPoints: 100 },
    { name: '⚡ Ability', mode: 'loldle-ability', init: initLoldleAbility, container: 'loldleAbilityContainer', maxPoints: 100 },
    { name: '🖼️ Splash Art', mode: 'loldle-splash', init: initLoldleSplash, container: 'loldleSplashContainer', maxPoints: 100 },
    { name: '💬 Quote', mode: 'loldle-quote', init: initLoldleQuote, container: 'loldleQuoteContainer', maxPoints: 100 },
    { name: '🔊 Audio', mode: 'loldle-audio', init: initLoldleAudio, container: 'loldleAudioContainer', maxPoints: 100 },
    { name: '😊 Emoji', mode: 'loldle-emoji', init: initLoldleEmoji, container: 'loldleEmojiContainer', maxPoints: 100 },
    { name: '🏆 Guess the Team', mode: 'guess-team', init: initGuessTeamGame, container: 'guessTeamContainer', maxPoints: 100 },
    { name: '👤 Guess the Name', mode: 'guess-name', init: initGuessNameGame, container: 'guessNameContainer', maxPoints: 100 }
];

// Obtener los 4 challenges aleatorios del día
// USAR VAR para evitar Temporal Dead Zone
var dailyChallenges = [];
window.dailyChallenges = dailyChallenges; // También en window para acceso global

function getTodayChallenges() {
    const seed = getDailySeed(0); // Seed base del día
    const shuffled = [...allChallenges];

    // Fisher-Yates shuffle con seed
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(seed + i) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Tomar los primeros 4 juegos
    return shuffled.slice(0, 4);
}

// NO inicializar aquí - se inicializa en DOMContentLoaded
// dailyChallenges = getTodayChallenges();
// window.dailyChallenges = dailyChallenges;

// Obtener fecha actual en formato YYYY-MM-DD
function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

// Formatear tiempo en mm:ss
function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Sistema de rangos del LoL basado en puntaje (ajustado para máximo 400 puntos)
function getRankFromScore(score) {
    const baseUrl = 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/';

    const ranks = [
        { name: 'Iron', min: 0, max: 79, icon: `${baseUrl}emblem-iron.png`, class: 'rank-iron' },
        { name: 'Bronze', min: 80, max: 159, icon: `${baseUrl}emblem-bronze.png`, class: 'rank-bronze' },
        { name: 'Silver', min: 160, max: 239, icon: `${baseUrl}emblem-silver.png`, class: 'rank-silver' },
        { name: 'Gold', min: 240, max: 279, icon: `${baseUrl}emblem-gold.png`, class: 'rank-gold' },
        { name: 'Platinum', min: 280, max: 319, icon: `${baseUrl}emblem-platinum.png`, class: 'rank-platinum' },
        { name: 'Emerald', min: 320, max: 349, icon: `${baseUrl}emblem-emerald.png`, class: 'rank-emerald' },
        { name: 'Diamond', min: 350, max: 369, icon: `${baseUrl}emblem-diamond.png`, class: 'rank-diamond' },
        { name: 'Master', min: 370, max: 389, icon: `${baseUrl}emblem-master.png`, class: 'rank-master' },
        { name: 'Grandmaster', min: 390, max: 399, icon: `${baseUrl}emblem-grandmaster.png`, class: 'rank-grandmaster' },
        { name: 'Challenger', min: 400, max: 400, icon: `${baseUrl}emblem-challenger.png`, class: 'rank-challenger' }
    ];

    for (let rank of ranks) {
        if (score >= rank.min && score <= rank.max) {
            return rank;
        }
    }

    return ranks[0]; // Default to Iron
}

// Verificar si ya jugó hoy
function hasPlayedToday() {
    const lastPlayedDate = localStorage.getItem('daily_run_last_played');
    const todayScore = localStorage.getItem('daily_run_today_score');
    return lastPlayedDate === getTodayDate() && todayScore !== null;
}

// Calcular puntos basados en intentos (máximo 8 intentos)
function calculatePoints(attempts, maxAttempts = 8, maxPoints = 100) {
    if (attempts === 1) return maxPoints; // Perfect score
    if (attempts > maxAttempts) return 0; // No points if failed

    // Degradación lineal: 100pts -> 20pts
    const minPoints = 20;
    const pointsPerAttempt = (maxPoints - minPoints) / (maxAttempts - 1);
    return Math.round(maxPoints - (pointsPerAttempt * (attempts - 1)));
}

// Inicializar Daily Run
function initDailyRun() {
    // Asegurar que los challenges estén generados (ya deberían estar por la inicialización global)
    if (!window.dailyChallenges || window.dailyChallenges.length === 0) {
        const newChallenges = getTodayChallenges();
        window.dailyChallenges = newChallenges;
    }
    console.log('Daily Run initialized - 2 challenges available for', getTodayDate(), window.dailyChallenges);

    if (hasPlayedToday()) {
        // Ya jugó hoy
        const todayScore = localStorage.getItem('daily_run_today_score');
        todayScoreDisplay.textContent = todayScore || '0';
        dailyStart.style.display = 'none';
        dailyProgress.style.display = 'none';
        dailyComplete.style.display = 'none';
        dailyAlreadyPlayed.style.display = 'block';
    } else {
        // Puede jugar
        dailyStart.style.display = 'block';
        dailyProgress.style.display = 'none';
        dailyComplete.style.display = 'none';
        dailyAlreadyPlayed.style.display = 'none';
    }
}

// Comenzar Daily Run
function startDailyRun() {
    console.log('🎯 startDailyRun() called');
    console.log('  - dailyChallenges:', window.dailyChallenges);

    dailyRunScore = 0;
    currentChallengeIndex = 0;
    dailyRunStartTime = Date.now();
    isDailyRunMode = true;
    dailyStart.style.display = 'none';
    dailyProgress.style.display = 'block';
    dailyComplete.style.display = 'none';

    updateDailyProgress();
    loadCurrentChallenge();

    console.log('✅ startDailyRun() completed');
}

// Actualizar progreso visual
function updateDailyProgress() {
    const challenges = window.dailyChallenges;
    const scoreEl = document.getElementById('dailyCurrentScore');
    const numberEl = document.getElementById('currentChallengeNumber');
    const nameEl = document.getElementById('currentChallengeName');

    if (scoreEl) scoreEl.textContent = dailyRunScore;
    if (numberEl) numberEl.textContent = currentChallengeIndex + 1;
    if (nameEl && challenges[currentChallengeIndex]) {
        nameEl.textContent = challenges[currentChallengeIndex].name;
    }
}

// Completar un desafío
function completeChallenge(attempts) {
    const challenges = window.dailyChallenges;
    const challenge = challenges[currentChallengeIndex];
    const points = calculatePoints(attempts, 8, challenge.maxPoints);
    dailyRunScore += points;

    currentChallengeIndex++;

    if (currentChallengeIndex >= challenges.length) {
        // Completó todos los desafíos
        dailyRunCompletionTime = Date.now() - dailyRunStartTime; // Calcular tiempo total
        finishDailyRun();
    } else {
        // Siguiente desafío
        updateDailyProgress();
        loadCurrentChallenge();
    }
}

// Finalizar Daily Run
function finishDailyRun() {
    isDailyRunMode = false; // Desactivar modo Daily Run
    dailyProgress.style.display = 'none';
    dailyComplete.style.display = 'block';
    finalScoreDisplay.textContent = dailyRunScore;

    // Guardar que ya jugó hoy
    localStorage.setItem('daily_run_last_played', getTodayDate());
    localStorage.setItem('daily_run_today_score', dailyRunScore);

    // Ocultar contenedor del juego, mostrar Daily Run
    hideAllContainers();
    dailyRunContainer.style.display = 'block';
}

// ========== FREE RUN MODE ==========
// Iniciar Free Run con todos los modos
function startFreeRun() {
    console.log('🚀 startFreeRun() called');

    // Configurar Free Run con todos los modos
    freeRunChallenges = [...allChallenges];
    freeRunScore = 0;
    freeRunCurrentIndex = 0;
    isFreeRunMode = true;
    isDailyRunMode = false;

    console.log('  - freeRunChallenges:', freeRunChallenges);

    // Cargar el primer desafío
    loadFreeRunChallenge();

    console.log('✅ startFreeRun() completed');
}

// Cargar el desafío actual de Free Run
function loadFreeRunChallenge() {
    const challenge = freeRunChallenges[freeRunCurrentIndex];
    if (!challenge) {
        console.error('❌ No challenge found at index:', freeRunCurrentIndex);
        return;
    }

    console.log('🎮 Loading Free Run challenge:', challenge.name);
    hideAllContainers();

    const container = document.getElementById(challenge.container);
    if (container) {
        container.style.display = 'block';
        if (challenge.init) {
            challenge.init();
        }
    } else {
        console.error('❌ Container not found:', challenge.container);
    }
}

// Completar un desafío de Free Run
function completeFreeRunChallenge(attempts) {
    const challenge = freeRunChallenges[freeRunCurrentIndex];
    const points = calculatePoints(attempts, 8, challenge.maxPoints);
    freeRunScore += points;

    freeRunCurrentIndex++;

    if (freeRunCurrentIndex >= freeRunChallenges.length) {
        // Completó todos los desafíos
        finishFreeRun();
    } else {
        // Siguiente desafío
        loadFreeRunChallenge();
    }
}

// Finalizar Free Run
function finishFreeRun() {
    isFreeRunMode = false;

    // Ocultar todos los contenedores
    hideAllContainers();

    // Mostrar pantalla de completado
    const freeRunCompleteContainer = document.getElementById('freeRunCompleteContainer');
    if (freeRunCompleteContainer) {
        freeRunCompleteContainer.style.display = 'block';

        // Actualizar puntuación final
        const freeRunFinalScore = document.getElementById('freeRunFinalScore');
        if (freeRunFinalScore) {
            freeRunFinalScore.textContent = freeRunScore;
        }

        // Actualizar estadísticas
        const freeRunChallengesCompleted = document.getElementById('freeRunChallengesCompleted');
        if (freeRunChallengesCompleted) {
            freeRunChallengesCompleted.textContent = freeRunChallenges.length;
        }

        const freeRunAverage = document.getElementById('freeRunAverage');
        if (freeRunAverage) {
            const maxPossibleScore = freeRunChallenges.reduce((sum, c) => sum + c.maxPoints, 0);
            const average = Math.round((freeRunScore / maxPossibleScore) * 100);
            freeRunAverage.textContent = `${average}%`;
        }

        // Cargar anuncio si está disponible
        if (typeof adsbygoogle !== 'undefined') {
            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.log('AdSense not loaded');
            }
        }
    }
}

// Enviar puntuación al ranking
async function submitScoreToRanking() {
    const username = usernameInput.value.trim();

    if (!username) {
        alert(currentLang === 'en' ? 'Please enter a username' : 'Por favor ingresa un nombre de usuario');
        return;
    }

    // Validar username (2-20 caracteres, solo alfanuméricos y guiones bajos)
    if (username.length < 2 || username.length > 20) {
        alert(currentLang === 'en' ? 'Username must be between 2 and 20 characters' : 'El nombre debe tener entre 2 y 20 caracteres');
        return;
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
        alert(currentLang === 'en' ? 'Username can only contain letters, numbers, hyphens and underscores' : 'El nombre solo puede contener letras, números, guiones y guiones bajos');
        return;
    }

    if (!dailyRankingRef) {
        alert('Firebase not available');
        return;
    }

    try {
        const today = getTodayDate();

        // Sanitizar username para usarlo como key (reemplazar caracteres especiales)
        const sanitizedUsername = username.replace(/[.#$\[\]]/g, '_');

        // Verificar si el usuario ya envió su score hoy
        const existingScore = await dailyRankingRef.child(today).child(sanitizedUsername).once('value');

        if (existingScore.exists()) {
            alert(currentLang === 'en' ? 'You already submitted a score today!' : '¡Ya enviaste tu puntuación hoy!');
            submitScoreBtn.disabled = true;
            return;
        }

        const scoreData = {
            username: username,
            score: dailyRunScore,
            completionTime: dailyRunCompletionTime,
            timestamp: Date.now()
        };

        // Guardar en Firebase usando el username como key (previene duplicados)
        await dailyRankingRef.child(today).child(sanitizedUsername).set(scoreData);

        // Guardar localmente que ya envió su score
        localStorage.setItem('daily_run_score_submitted', getTodayDate());

        alert(currentLang === 'en' ? 'Score submitted successfully!' : '¡Puntuación enviada exitosamente!');
        submitScoreBtn.disabled = true;

        // Ir al ranking
        switchToRanking();
    } catch (error) {
        console.error('Error submitting score:', error);
        alert('Error submitting score: ' + error.message);
    }
}

// Estado de navegación de fechas
let currentRankingDate = null;

// Función helper para formatear fecha legible
function formatDateReadable(dateStr) {
    const parts = dateStr.split('-');
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateObj = new Date(date);
    dateObj.setHours(0, 0, 0, 0);

    if (dateObj.getTime() === today.getTime()) {
        return '📅 TODAY';
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return `📅 ${date.toLocaleDateString('en-US', options)}`;
}

// Función para agregar/restar días a una fecha
function addDays(dateStr, days) {
    const parts = dateStr.split('-');
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    date.setDate(date.getDate() + days);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Cargar ranking del día
async function loadTodayRanking(dateStr = null) {
    if (!dailyRankingRef) {
        console.log('Firebase not available');
        return;
    }

    try {
        const targetDate = dateStr || getTodayDate();
        currentRankingDate = targetDate;
        const snapshot = await dailyRankingRef.child(targetDate).once('value');
        const data = snapshot.val();

        // Actualizar display de fecha
        rankingDateDisplay.textContent = formatDateReadable(targetDate);

        // Actualizar botones de navegación
        updateDateNavigationButtons();

        if (!data) {
            // No hay puntuaciones en esta fecha
            rankingList.innerHTML = `
                <div class="ranking-row">
                    <div class="ranking-cell ranking-rank">-</div>
                    <div class="ranking-cell ranking-username">No scores for this day</div>
                    <div class="ranking-cell ranking-points">-</div>
                    <div class="ranking-cell ranking-time">-</div>
                </div>
            `;
            return;
        }

        // Convertir a array y ordenar por puntuación (mayor a menor) y luego por tiempo (menor a mayor)
        const scores = Object.values(data).sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score; // Ordenar por puntos (mayor primero)
            }
            // Si tienen mismo score, ordenar por tiempo (menor primero)
            const timeA = a.completionTime || 999999999;
            const timeB = b.completionTime || 999999999;
            return timeA - timeB;
        });

        // Mostrar top 100
        const topScores = scores.slice(0, 100);

        rankingList.innerHTML = topScores.map((score, index) => {
            const rank = index + 1;
            const isTop3 = rank <= 3;
            const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '';
            const timeDisplay = score.completionTime ? formatTime(score.completionTime) : '-';
            const playerRank = getRankFromScore(score.score);

            return `
                <div class="ranking-row ${isTop3 ? 'top3' : ''}">
                    <div class="ranking-cell ranking-rank">${medal} ${rank}</div>
                    <div class="ranking-cell ranking-username">
                        <span class="player-rank ${playerRank.class}">
                            <img src="${playerRank.icon}" alt="${playerRank.name}" class="rank-icon" />
                        </span>
                        <span class="player-name">${score.username}</span>
                    </div>
                    <div class="ranking-cell ranking-points">${score.score} pts</div>
                    <div class="ranking-cell ranking-time">⏱️ ${timeDisplay}</div>
                </div>
            `;
        }).join('');

    } catch (error) {
        console.error('Error loading ranking:', error);
    }
}

// Función auxiliar para ocultar todos los contenedores
function hideAllContainers() {
    // Get elements directly to avoid Temporal Dead Zone issues
    const containers = [
        'homeContainer', 'filterContainer', 'gameContainer', 'statsContainer',
        'guessTeamContainer', 'guessNameContainer', 'guessIconContainer',
        'championsContainer', 'championsGameContainer', 'championsStatsContainer',
        'loldleAbilityContainer', 'loldleSplashContainer', 'loldleQuoteContainer',
        'loldleClassicContainer', 'loldleAudioContainer', 'hardmodeContainer',
        'esportsTriviaContainer', 'dailyRunContainer', 'rankingContainer',
        'modeSelectionScreen', 'dailyRotationScreen', 'loldleEmojiContainer'
    ];

    containers.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

// Función para generar número pseudoaleatorio determinístico basado en seed
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Obtener seed basado en fecha y número de desafío
function getDailySeed(challengeIndex) {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    // Crear un hash simple de la fecha + índice del desafío
    let hash = 0;
    const str = today + challengeIndex;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

// Cargar el desafío actual
async function loadCurrentChallenge() {
    // Validar que dailyChallenges esté inicializado
    const challenges = window.dailyChallenges;
    if (!challenges || challenges.length === 0) {
        console.error('dailyChallenges no está inicializado');
        return;
    }

    const challenge = challenges[currentChallengeIndex];
    if (!challenge) {
        console.error('Challenge no encontrado para índice:', currentChallengeIndex);
        return;
    }

    // Obtener seed del día para este desafío específico
    const seed = getDailySeed(currentChallengeIndex);

    // Ocultar Daily Run container y mostrar el contenedor del juego real
    dailyRunContainer.style.display = 'none';

    // Ocultar todos los contenedores primero
    hideAllContainers();

    // Mostrar el contenedor específico del juego
    const gameContainer = document.getElementById(challenge.container);
    if (gameContainer) {
        gameContainer.style.display = 'block';
    }

    // Cambiar título del juego
    gameTitle.textContent = `DAILY RUN - ${challenge.name}`;

    // Minimizar header durante Daily Run
    const mainHeader = document.getElementById('mainHeader');
    if (mainHeader) {
        mainHeader.classList.add('minimized');
    }

    // Llamar a la función init del juego con el seed
    await challenge.init(seed);

    console.log(`Daily Run Challenge ${currentChallengeIndex + 1}/${challenges.length}: ${challenge.name} loaded with seed ${seed}`);
}

// Cambiar a vista de ranking
function switchToRanking() {
    isDailyRunMode = false; // Resetear modo Daily Run
    hideAllContainers();
    rankingContainer.style.display = 'block';
    gameTitle.textContent = 'RANKING';
    loadTodayRanking(); // Cargar ranking de hoy por defecto

    // Minimizar header
    const mainHeader = document.getElementById('mainHeader');
    if (mainHeader) {
        mainHeader.classList.add('minimized');
    }
}

// ========== DATE NAVIGATION FOR RANKING ==========
const prevDateBtn = document.getElementById('prevDateBtn');
const nextDateBtn = document.getElementById('nextDateBtn');

// Navegar al día anterior
function goToPreviousDay() {
    if (!currentRankingDate) {
        currentRankingDate = getTodayDate();
    }
    const previousDate = addDays(currentRankingDate, -1);
    loadTodayRanking(previousDate);
}

// Navegar al día siguiente
function goToNextDay() {
    if (!currentRankingDate) {
        currentRankingDate = getTodayDate();
    }
    const nextDate = addDays(currentRankingDate, 1);
    const today = getTodayDate();

    // No permitir ver fechas futuras
    if (nextDate > today) {
        return;
    }

    loadTodayRanking(nextDate);
}

// Actualizar estado de los botones de navegación
function updateDateNavigationButtons() {
    const today = getTodayDate();

    if (nextDateBtn) {
        // Deshabilitar "Next Day" si estamos en hoy
        if (currentRankingDate >= today) {
            nextDateBtn.disabled = true;
        } else {
            nextDateBtn.disabled = false;
        }
    }

    // El botón de "Previous Day" siempre está habilitado
    if (prevDateBtn) {
        prevDateBtn.disabled = false;
    }
}

// Event Listeners para navegación de fechas
if (prevDateBtn) {
    prevDateBtn.addEventListener('click', goToPreviousDay);
}

if (nextDateBtn) {
    nextDateBtn.addEventListener('click', goToNextDay);
}

// ========== MODE SELECTION SYSTEM ==========
// Declare variables (will be initialized in DOMContentLoaded)
let modeSelectionScreen;
let dailyRotationScreen;
let dailyRankedCard;
let freeModeCard;
let freeRunCard;
let rotationDate;
let rotationChallenges;
let startRotationBtn;
let backToModeSelection;

// Show mode selection screen
function showModeSelection() {
    console.log('📱 showModeSelection() called');
    hideAllContainers();

    // Use window.variable to avoid Temporal Dead Zone
    const modeScreen = window.modeSelectionScreen || document.getElementById('modeSelectionScreen');
    const dailyScreen = window.dailyRotationScreen || document.getElementById('dailyRotationScreen');

    if (modeScreen) modeScreen.style.display = 'block';
    if (dailyScreen) dailyScreen.style.display = 'none';

    // Restaurar header completo
    const mainHeader = document.getElementById('mainHeader');
    if (mainHeader) {
        mainHeader.classList.remove('minimized');
    }
}

// Show daily rotation screen
function showDailyRotation() {
    console.log('🏆 showDailyRotation() called');

    // Ocultar todos los contenedores primero
    hideAllContainers();

    // Use window.variable to avoid Temporal Dead Zone
    const modeScreen = window.modeSelectionScreen || document.getElementById('modeSelectionScreen');
    const dailyScreen = window.dailyRotationScreen || document.getElementById('dailyRotationScreen');

    if (modeScreen) modeScreen.style.display = 'none';
    if (dailyScreen) dailyScreen.style.display = 'block';

    // Mostrar título y subtítulo en Daily Rotation screen
    const gameTitleEl = document.getElementById('gameTitle');
    const gameSubtitleEl = document.getElementById('gameSubtitle');
    if (gameTitleEl) gameTitleEl.style.display = 'block';
    if (gameSubtitleEl) gameSubtitleEl.style.display = 'block';

    // Display today's date
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const rotDate = window.rotationDate || document.getElementById('rotationDate');
    if (rotDate) rotDate.textContent = dateStr;

    // Display today's challenges
    displayTodayChallenges();
}

// Display today's challenges in rotation screen
function displayTodayChallenges() {
    console.log('📋 displayTodayChallenges() called');

    // Acceder a dailyChallenges SOLO desde window
    const challenges = window.dailyChallenges;
    console.log('  - dailyChallenges:', challenges);

    const rotChallenges = window.rotationChallenges || document.getElementById('rotationChallenges');
    console.log('  - rotationChallenges element:', rotChallenges);

    if (!rotChallenges) {
        console.error('❌ rotationChallenges element not found!');
        return;
    }

    rotChallenges.innerHTML = '';

    if (!challenges || challenges.length === 0) {
        console.error('❌ No dailyChallenges available!');
        rotChallenges.innerHTML = '<p style="color: #ff0000;">No challenges available</p>';
        return;
    }

    console.log(`  - Rendering ${challenges.length} challenges`);

    challenges.forEach((challenge, index) => {
        const card = document.createElement('div');
        card.className = 'rotation-challenge-card';

        // Extract emoji from challenge name
        const emoji = challenge.name.match(/[\u{1F300}-\u{1F9FF}]/u)?.[0] || '🎮';
        const name = challenge.name.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();

        card.innerHTML = `
            <div class="challenge-number">#${index + 1}</div>
            <div class="challenge-icon">${emoji}</div>
            <div class="challenge-info">
                <div class="challenge-name">${name}</div>
                <div class="challenge-description">Max Points: ${challenge.maxPoints}</div>
            </div>
        `;

        rotChallenges.appendChild(card);
    });
}

// Show free mode (home screen)
function showFreeMode() {
    console.log('🎮 showFreeMode() called');
    hideAllContainers();

    // Use window.variable to avoid Temporal Dead Zone
    const modeScreen = window.modeSelectionScreen || document.getElementById('modeSelectionScreen');
    const dailyScreen = window.dailyRotationScreen || document.getElementById('dailyRotationScreen');
    const homeC = window.homeContainer || document.getElementById('homeContainer');

    if (modeScreen) modeScreen.style.display = 'none';
    if (dailyScreen) dailyScreen.style.display = 'none';
    if (homeC) homeC.style.display = 'block';

    // Restaurar header completo
    const mainHeader = document.getElementById('mainHeader');
    if (mainHeader) {
        mainHeader.classList.remove('minimized');
    }

    // Mostrar título y subtítulo en el home
    const gameTitleEl = document.getElementById('gameTitle');
    const gameSubtitleEl = document.getElementById('gameSubtitle');
    if (gameTitleEl) gameTitleEl.style.display = 'block';
    if (gameSubtitleEl) gameSubtitleEl.style.display = 'block';
}

// ========== INITIALIZE APP ==========
// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOMContentLoaded fired');

    // Initialize basic DOM elements
    homeContainer = document.getElementById('homeContainer');
    gameCards = document.querySelectorAll('.game-card');

    // Initialize DOM elements for Mode Selection
    modeSelectionScreen = document.getElementById('modeSelectionScreen');
    dailyRotationScreen = document.getElementById('dailyRotationScreen');
    dailyRankedCard = document.getElementById('dailyRankedCard');
    freeModeCard = document.getElementById('freeModeCard');
    freeRunCard = document.getElementById('freeRunCard');
    rotationDate = document.getElementById('rotationDate');
    rotationChallenges = document.getElementById('rotationChallenges');
    startRotationBtn = document.getElementById('startRotationBtn');
    backToModeSelection = document.getElementById('backToModeSelection');

    console.log('📦 Elements initialized:');
    console.log('  - dailyRankedCard:', dailyRankedCard ? '✅' : '❌');
    console.log('  - freeRunCard:', freeRunCard ? '✅' : '❌');
    console.log('  - freeModeCard:', freeModeCard ? '✅' : '❌');
    console.log('  - modeSelectionScreen:', modeSelectionScreen ? '✅' : '❌');

    // Initialize hamburger menu elements
    hamburgerMenu = document.getElementById('hamburgerMenu');
    sidebar = document.getElementById('sidebar');
    closeMenu = document.getElementById('closeMenu');
    menuOptions = document.querySelectorAll('.menu-options a');
    gameTitle = document.getElementById('gameTitle');

    // Initialize game container elements
    guessTeamContainer = document.getElementById('guessTeamContainer');
    guessNameContainer = document.getElementById('guessNameContainer');
    guessIconContainer = document.getElementById('guessIconContainer');

    console.log('📦 Menu elements initialized:');
    console.log('  - hamburgerMenu:', hamburgerMenu ? '✅' : '❌');
    console.log('  - sidebar:', sidebar ? '✅' : '❌');
    console.log('  - closeMenu:', closeMenu ? '✅' : '❌');
    console.log('  - menuOptions:', menuOptions.length, 'items');

    // Initialize DOM elements for Daily Run
    dailyRunContainer = document.getElementById('dailyRunContainer');
    rankingContainer = document.getElementById('rankingContainer');
    dailyStart = document.getElementById('dailyStart');
    dailyProgress = document.getElementById('dailyProgress');
    dailyComplete = document.getElementById('dailyComplete');
    dailyAlreadyPlayed = document.getElementById('dailyAlreadyPlayed');
    startDailyRunBtn = document.getElementById('startDailyRunBtn');
    dailyCurrentScore = document.getElementById('dailyCurrentScore');
    currentChallengeNumber = document.getElementById('currentChallengeNumber');
    currentChallengeName = document.getElementById('currentChallengeName');
    finalScoreDisplay = document.getElementById('finalScoreDisplay');
    usernameInput = document.getElementById('usernameInput');
    submitScoreBtn = document.getElementById('submitScoreBtn');
    viewRankingBtn = document.getElementById('viewRankingBtn');
    viewRankingFromCompleteBtn = document.getElementById('viewRankingFromCompleteBtn');
    todayScoreDisplay = document.getElementById('todayScoreDisplay');
    rankingList = document.getElementById('rankingList');
    rankingDateDisplay = document.getElementById('rankingDateDisplay');

    // Initialize language dropdown
    const langSelector = document.querySelector('.language-selector');
    const dropdownBtn = document.getElementById('langDropdownBtn');
    const dropdownMenu = document.getElementById('langDropdownMenu');
    const langOptions = document.querySelectorAll('.lang-option');

    if (dropdownBtn && dropdownMenu) {
        // Toggle dropdown
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelector.classList.toggle('active');
            dropdownMenu.classList.toggle('show');
        });

        // Select language
        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const uiLang = option.dataset.lang;
                const voiceLang = option.dataset.voice;
                const displayName = option.textContent;

                switchLanguage(uiLang, voiceLang, displayName);

                // Close dropdown
                langSelector.classList.remove('active');
                dropdownMenu.classList.remove('show');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langSelector.classList.remove('active');
            dropdownMenu.classList.remove('show');
        });
    }

    // IMPORTANTE: Inicializar dailyChallenges AQUÍ, después de que todas las funciones estén definidas
    console.log('🎲 Inicializando dailyChallenges...');
    dailyChallenges = getTodayChallenges();
    window.dailyChallenges = dailyChallenges;
    console.log('✅ dailyChallenges inicializado:', dailyChallenges);

    initLanguage();
    // Show mode selection screen on page load
    showModeSelection();

    // ===== EVENT LISTENERS PARA SMASH OR PASS =====
    const smashBtn = document.getElementById('smashBtn');
    const passBtn = document.getElementById('passBtn');
    const restartBtn = document.getElementById('restartBtn');
    const regionButtons = document.querySelectorAll('.region-btn');
    const startBtn = document.getElementById('startBtn');

    if (regionButtons && regionButtons.length > 0) {
        console.log('✅ Adding click listeners to', regionButtons.length, 'region buttons');
        regionButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                console.log('✅ Click en región:', btn.dataset.region);
                regionButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedRegion = btn.dataset.region;
            });
        });
    }

    if (startBtn) {
        console.log('✅ Adding click listener to Start button');
        startBtn.addEventListener('click', () => {
            console.log('✅ Click en EMPEZAR JUEGO - Región seleccionada:', selectedRegion);
            const filterContainer = document.getElementById('filterContainer');
            const gameContainer = document.getElementById('gameContainer');
            if (filterContainer) filterContainer.style.display = 'none';
            if (gameContainer) gameContainer.style.display = 'block';
            initGame();
        });
    }

    if (smashBtn) {
        console.log('✅ Adding click listener to Smash button');
        smashBtn.addEventListener('click', () => handleChoice('smash'));
    }
    if (passBtn) {
        console.log('✅ Adding click listener to Pass button');
        passBtn.addEventListener('click', () => handleChoice('pass'));
    }
    if (restartBtn) {
        console.log('✅ Adding click listener to Restart button');
        restartBtn.addEventListener('click', restartGame);
    }

    // ===== EVENT LISTENERS PARA CHAMPIONS =====
    const genderButtons = document.querySelectorAll('.gender-btn');
    const startChampionsBtn = document.getElementById('startChampionsBtn');
    const backBtnChampions = document.getElementById('backBtnChampions');
    const smashChampionBtn = document.getElementById('smashChampionBtn');
    const passChampionBtn = document.getElementById('passChampionBtn');
    const restartChampionsBtn = document.getElementById('restartChampionsBtn');

    if (genderButtons && genderButtons.length > 0) {
        console.log('✅ Adding click listeners to', genderButtons.length, 'gender buttons');
        genderButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                genderButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedGender = btn.dataset.gender;
            });
        });
    }

    if (startChampionsBtn) {
        console.log('✅ Adding click listener to Start Champions button');
        startChampionsBtn.addEventListener('click', () => initChampionsGame());
    }
    if (backBtnChampions) {
        console.log('✅ Adding click listener to Back Champions button');
        backBtnChampions.addEventListener('click', backToHome);
    }
    if (smashChampionBtn) {
        console.log('✅ Adding click listener to Smash Champion button');
        smashChampionBtn.addEventListener('click', () => handleChampionChoice('smash'));
    }
    if (passChampionBtn) {
        console.log('✅ Adding click listener to Pass Champion button');
        passChampionBtn.addEventListener('click', () => handleChampionChoice('pass'));
    }
    if (restartChampionsBtn) {
        console.log('✅ Adding click listener to Restart Champions button');
        restartChampionsBtn.addEventListener('click', restartChampionsGame);
    }

    // Event listeners para las tarjetas de juego en home
    if (gameCards && gameCards.length > 0) {
        console.log('✅ Adding click listeners to', gameCards.length, 'game cards');
        gameCards.forEach((card, index) => {
            console.log(`  - Game card ${index}:`, card.dataset.mode);
            card.addEventListener('click', function() {
                const mode = card.dataset.mode;
                console.log('🎮 GAME CARD CLICKED!', mode);
                switchGameMode(mode);
            });
        });
    } else {
        console.error('❌ No game cards found!');
    }

    // Event Listeners for Hamburger Menu
    if (hamburgerMenu && sidebar) {
        console.log('✅ Adding click listener to Hamburger Menu');
        hamburgerMenu.addEventListener('click', () => {
            console.log('🍔 Hamburger Menu CLICKED!');
            sidebar.classList.add('active');
        });
    }

    if (closeMenu && sidebar) {
        console.log('✅ Adding click listener to Close Menu');
        closeMenu.addEventListener('click', () => {
            console.log('❌ Close Menu CLICKED!');
            sidebar.classList.remove('active');
        });
    }

    // Event listeners para el menú de opciones
    if (menuOptions && menuOptions.length > 0) {
        console.log('✅ Adding click listeners to', menuOptions.length, 'menu options');
        menuOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const mode = option.dataset.mode;
                console.log('📱 Menu option clicked:', mode);

                // Actualizar clase activa
                menuOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');

                // Cambiar al modo seleccionado
                switchGameMode(mode);
            });
        });
    }

    // Event Listeners for Mode Selection
    if (dailyRankedCard) {
        console.log('✅ Adding click listener to Daily Ranked Card');
        dailyRankedCard.addEventListener('click', function() {
            console.log('🎮 Daily Ranked Card CLICKED!');
            showDailyRotation();
        });
    } else {
        console.error('❌ dailyRankedCard not found!');
    }

    if (freeModeCard) {
        console.log('✅ Adding click listener to Free Mode Card');
        freeModeCard.addEventListener('click', function() {
            console.log('🎮 Free Mode Card CLICKED!');
            showFreeMode();
        });
    } else {
        console.error('❌ freeModeCard not found!');
    }

    if (freeRunCard) {
        console.log('✅ Adding click listener to Free Run Card');
        freeRunCard.addEventListener('click', function() {
            console.log('🚀 Free Run Card CLICKED!');
            startFreeRun();
        });
    } else {
        console.error('❌ freeRunCard not found!');
    }

    if (startRotationBtn) {
        console.log('✅ Adding click listener to Start Rotation button');
        startRotationBtn.addEventListener('click', function() {
            console.log('🎮 START DAILY RUN CLICKED!');
            startDailyRun();
        });
    } else {
        console.error('❌ startRotationBtn not found!');
    }

    if (backToModeSelection) {
        console.log('✅ Adding click listener to Back to Mode Selection button');
        backToModeSelection.addEventListener('click', function() {
            console.log('🔙 BACK TO MODE SELECTION CLICKED!');
            showModeSelection();
        });
    } else {
        console.error('❌ backToModeSelection not found!');
    }

    const backToModeFromFree = document.getElementById('backToModeFromFree');
    if (backToModeFromFree) {
        backToModeFromFree.addEventListener('click', showModeSelection);
    }

    const backToModeFromDaily = document.getElementById('backToModeFromDaily');
    if (backToModeFromDaily) {
        backToModeFromDaily.addEventListener('click', showModeSelection);
    }

    const backToModeFromRanking = document.getElementById('backToModeFromRanking');
    if (backToModeFromRanking) {
        backToModeFromRanking.addEventListener('click', showModeSelection);
    }

    // Event Listeners para Daily Run
    if (startDailyRunBtn) {
        startDailyRunBtn.addEventListener('click', startDailyRun);
    }
    if (submitScoreBtn) {
        submitScoreBtn.addEventListener('click', submitScoreToRanking);
    }
    if (viewRankingBtn) {
        viewRankingBtn.addEventListener('click', switchToRanking);
    }
    if (viewRankingFromCompleteBtn) {
        viewRankingFromCompleteBtn.addEventListener('click', switchToRanking);
    }

    // Event Listener para Free Run Complete
    const backToMenuFromFreeRun = document.getElementById('backToMenuFromFreeRun');
    if (backToMenuFromFreeRun) {
        backToMenuFromFreeRun.addEventListener('click', showModeSelection);
    }

    // Event Listeners para botones de volver en cada juego
    const backBtn = document.getElementById('backBtn');
    const backBtnTeam = document.getElementById('backBtnTeam');
    const backBtnName = document.getElementById('backBtnName');
    const backBtnIcon = document.getElementById('backBtnIcon');

    if (backBtn) {
        console.log('✅ Adding click listener to backBtn');
        backBtn.addEventListener('click', backToHome);
    }
    if (backBtnTeam) {
        console.log('✅ Adding click listener to backBtnTeam');
        backBtnTeam.addEventListener('click', backToHome);
    }
    if (backBtnName) {
        console.log('✅ Adding click listener to backBtnName');
        backBtnName.addEventListener('click', backToHome);
    }
    if (backBtnIcon) {
        console.log('✅ Adding click listener to backBtnIcon');
        backBtnIcon.addEventListener('click', backToHome);
    }

    // ===== KEYBOARD SUPPORT PARA JUGADORES =====
    console.log('⌨️ Adding keyboard support for players');
    document.addEventListener('keydown', (e) => {
        // Validación: Verificar que los elementos existen
        const statsContainer = document.getElementById('statsContainer');
        const gameContainer = document.getElementById('gameContainer');

        if (!statsContainer || !gameContainer) return;

        if (statsContainer.style.display === 'block') return;
        if (gameContainer.style.display === 'none') return;

        if (e.key === 'ArrowLeft') {
            handleChoice('pass');
        } else if (e.key === 'ArrowRight') {
            handleChoice('smash');
        }
    });

    // ===== KEYBOARD SUPPORT PARA CHAMPIONS =====
    console.log('⌨️ Adding keyboard support for champions');
    document.addEventListener('keydown', (e) => {
        // Validación: Verificar que los elementos existen
        const championsGameContainer = document.getElementById('championsGameContainer');
        const championsStatsContainer = document.getElementById('championsStatsContainer');

        if (!championsGameContainer || !championsStatsContainer) return;

        if (championsStatsContainer.style.display === 'block') return;
        if (championsGameContainer.style.display === 'none') return;

        if (e.key === 'ArrowLeft') {
            handleChampionChoice('pass');
        } else if (e.key === 'ArrowRight') {
            handleChampionChoice('smash');
        }
    });

    console.log('🎉 ALL EVENT LISTENERS INITIALIZED!');
});
