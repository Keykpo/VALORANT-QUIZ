// ========================================
// DIAGNÓSTICO NUEVO - Después de cambios
// ========================================
// IMPORTANTE: Recarga la página con Ctrl+F5 ANTES de ejecutar esto

console.clear();
console.log('%c========================================', 'color: #C8AA6E; font-weight: bold; font-size: 16px;');
console.log('%c🔍 DIAGNÓSTICO NUEVO - POST CORRECCIONES', 'color: #C8AA6E; font-weight: bold; font-size: 16px;');
console.log('%c========================================', 'color: #C8AA6E; font-weight: bold; font-size: 16px;');

// 1. TEST: PLAY RANKED
console.log('\n%c1️⃣ TEST: PLAY RANKED', 'color: #00aaff; font-weight: bold;');
console.log('Haciendo click en PLAY RANKED...');
const dailyCard = document.getElementById('dailyRankedCard');
if (dailyCard) {
    dailyCard.click();
    setTimeout(() => {
        console.log('Después del click:');
        const modeScreen = document.getElementById('modeSelectionScreen');
        const dailyScreen = document.getElementById('dailyRotationScreen');
        console.log('- modeSelectionScreen display:', modeScreen ? modeScreen.style.display : 'NOT FOUND');
        console.log('- dailyRotationScreen display:', dailyScreen ? dailyScreen.style.display : 'NOT FOUND');
        console.log('- dailyRotationScreen visible?', dailyScreen ? (dailyScreen.offsetWidth > 0 && dailyScreen.offsetHeight > 0) : false);
    }, 500);
} else {
    console.error('❌ dailyRankedCard no encontrado');
}

// 2. TEST: dailyChallenges
setTimeout(() => {
    console.log('\n%c2️⃣ TEST: dailyChallenges', 'color: #00aaff; font-weight: bold;');
    console.log('dailyChallenges:', window.dailyChallenges || dailyChallenges);
    console.log('allChallenges:', window.allChallenges || allChallenges);

    const rotChallenges = document.getElementById('rotationChallenges');
    console.log('rotationChallenges element:', rotChallenges);
    console.log('rotationChallenges innerHTML:', rotChallenges ? rotChallenges.innerHTML : 'NOT FOUND');
}, 1000);

// 3. TEST: Botones en Daily Rotation
setTimeout(() => {
    console.log('\n%c3️⃣ TEST: Botones en Daily Rotation', 'color: #00aaff; font-weight: bold;');
    const startBtn = document.getElementById('startRotationBtn');
    const backBtn = document.getElementById('backToModeSelection');

    console.log('startRotationBtn:', startBtn);
    console.log('  - onclick:', startBtn ? startBtn.onclick : 'N/A');
    console.log('  - visible?', startBtn ? (startBtn.offsetWidth > 0) : false);

    console.log('backToModeSelection:', backBtn);
    console.log('  - onclick:', backBtn ? backBtn.onclick : 'N/A');
    console.log('  - visible?', backBtn ? (backBtn.offsetWidth > 0) : false);

    // Test manual de botón BACK
    if (backBtn) {
        console.log('Intentando click en BACK...');
        backBtn.click();
        setTimeout(() => {
            const modeScreen = document.getElementById('modeSelectionScreen');
            console.log('Después de click en BACK:');
            console.log('- modeSelectionScreen display:', modeScreen ? modeScreen.style.display : 'NOT FOUND');
        }, 500);
    }
}, 1500);

// 4. TEST: Game Cards
setTimeout(() => {
    console.log('\n%c4️⃣ TEST: Game Cards', 'color: #00aaff; font-weight: bold;');

    // Primero volver a FREE MODE
    const freeCard = document.getElementById('freeModeCard');
    if (freeCard) {
        console.log('Click en FREE MODE...');
        freeCard.click();

        setTimeout(() => {
            const gameCards = document.querySelectorAll('.game-card');
            console.log(`Game cards encontradas: ${gameCards.length}`);

            gameCards.forEach((card, index) => {
                const mode = card.dataset.mode;
                console.log(`Card ${index + 1}:`, mode, card);
                console.log('  - onclick:', card.onclick);
                console.log('  - visible?', card.offsetWidth > 0);
            });

            // Test click en primera card
            if (gameCards.length > 0) {
                console.log('Intentando click en primera game card...');
                gameCards[0].click();

                setTimeout(() => {
                    const mode = gameCards[0].dataset.mode;
                    const container = document.getElementById(`${mode.replace('-', '')}Container`);
                    console.log(`Después de click en ${mode}:`);
                    console.log('- Container display:', container ? container.style.display : 'NOT FOUND');
                }, 500);
            }
        }, 500);
    }
}, 3000);

console.log('\n%c⏳ Ejecutando tests... espera 5 segundos', 'color: #ffaa00; font-weight: bold;');
console.log('%c========================================', 'color: #C8AA6E; font-weight: bold;');

setTimeout(() => {
    console.log('\n%c========================================', 'color: #00ff00; font-weight: bold; font-size: 16px;');
    console.log('%c✅ TESTS COMPLETADOS', 'color: #00ff00; font-weight: bold; font-size: 16px;');
    console.log('%cCopia TODA esta salida y pégala', 'color: #ffaa00; font-weight: bold;');
    console.log('%c========================================', 'color: #00ff00; font-weight: bold;');
}, 5000);
