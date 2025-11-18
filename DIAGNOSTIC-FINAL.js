// ============================================
// DIAGNOSTIC FINAL - Pega esto en la consola
// ============================================

console.clear();
console.log('%c=== DIAGNOSTIC FINAL ===', 'color: #00ff00; font-size: 20px; font-weight: bold;');

console.log('\n%c1. VARIABLES GLOBALES:', 'color: #00aaff; font-size: 16px;');
console.log('- allChallenges:', typeof allChallenges, Array.isArray(allChallenges) ? allChallenges.length + ' items' : 'NO ES ARRAY');
console.log('- window.dailyChallenges:', typeof window.dailyChallenges, window.dailyChallenges ? window.dailyChallenges.length + ' items' : 'UNDEFINED');
if (window.dailyChallenges) {
    console.log('  Challenges:', window.dailyChallenges);
}

console.log('\n%c2. FUNCIONES CRITICAS:', 'color: #00aaff; font-size: 16px;');
console.log('- getTodayChallenges:', typeof getTodayChallenges);
console.log('- switchGameMode:', typeof switchGameMode);
console.log('- showDailyRotation:', typeof showDailyRotation);
console.log('- showFreeMode:', typeof showFreeMode);
console.log('- showModeSelection:', typeof showModeSelection);
console.log('- initLoldleClassic:', typeof initLoldleClassic);
console.log('- startDailyRun:', typeof startDailyRun);

console.log('\n%c3. ELEMENTOS DOM:', 'color: #00aaff; font-size: 16px;');
const elements = {
    'dailyRankedCard': document.getElementById('dailyRankedCard'),
    'freeModeCard': document.getElementById('freeModeCard'),
    'modeSelectionScreen': document.getElementById('modeSelectionScreen'),
    'dailyRotationScreen': document.getElementById('dailyRotationScreen'),
    'rotationChallenges': document.getElementById('rotationChallenges'),
    'startRotationBtn': document.getElementById('startRotationBtn'),
    'backToModeSelection': document.getElementById('backToModeSelection'),
    'homeContainer': document.getElementById('homeContainer'),
    'loldleClassicContainer': document.getElementById('loldleClassicContainer')
};

for (let [name, el] of Object.entries(elements)) {
    console.log(`- ${name}:`, el ? '✅ FOUND' : '❌ NOT FOUND');
}

console.log('\n%c4. GAME CARDS:', 'color: #00aaff; font-size: 16px;');
const cards = document.querySelectorAll('.game-card');
console.log('- Total game cards:', cards.length);
if (cards.length > 0) {
    console.log('- First 5 cards:');
    cards.forEach((card, i) => {
        if (i < 5) {
            console.log(`  [${i}] mode: ${card.dataset.mode}`);
        }
    });
} else {
    console.log('%c  ❌ NO GAME CARDS FOUND!', 'color: #ff0000;');
}

console.log('\n%c5. TEST AUTOMATICO - Click simulado en game card:', 'color: #00aaff; font-size: 16px;');
if (cards[0]) {
    console.log('Simulando click en primera card (Classic)...');
    try {
        const mode = cards[0].dataset.mode;
        console.log('Mode:', mode);
        switchGameMode(mode);
        setTimeout(function() {
            const container = document.getElementById('loldleClassicContainer');
            console.log('Container display:', container ? container.style.display : 'NOT FOUND');
        }, 500);
    } catch(e) {
        console.error('ERROR:', e.message);
        console.error('Stack:', e.stack);
    }
} else {
    console.log('%c  ❌ No hay game cards para testear', 'color: #ff0000;');
}

console.log('\n%c6. VERIFICAR INICIALIZACION:', 'color: #00aaff; font-size: 16px;');
console.log('- DOMContentLoaded ya disparo?', document.readyState);
console.log('- gameCards en memoria:', typeof gameCards !== 'undefined' ? gameCards.length + ' items' : 'NO DEFINIDO');

console.log('\n%c=== FIN DIAGNOSTIC ===', 'color: #00ff00; font-size: 20px; font-weight: bold;');
console.log('%cCOPIA TODA ESTA SALIDA Y ENVIALA', 'color: #ffff00; font-size: 14px; font-weight: bold;');
