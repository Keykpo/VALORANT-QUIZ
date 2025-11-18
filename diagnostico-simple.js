// DIAGNOSTICO SIMPLE - SIN CARACTERES ESPECIALES
console.clear();
console.log('=== DIAGNOSTICO SIMPLE ===');

// Test 1: dailyChallenges
console.log('\n1. dailyChallenges:');
try {
    console.log(dailyChallenges);
} catch(e) {
    console.log('ERROR:', e.message);
}

// Test 2: Elementos existen?
console.log('\n2. Elementos:');
console.log('dailyRankedCard:', document.getElementById('dailyRankedCard') ? 'SI' : 'NO');
console.log('freeModeCard:', document.getElementById('freeModeCard') ? 'SI' : 'NO');
console.log('backToModeSelection:', document.getElementById('backToModeSelection') ? 'SI' : 'NO');
console.log('startRotationBtn:', document.getElementById('startRotationBtn') ? 'SI' : 'NO');

// Test 3: Game cards
console.log('\n3. Game Cards:');
var cards = document.querySelectorAll('.game-card');
console.log('Total game cards:', cards.length);

// Test 4: Click en PLAY RANKED
console.log('\n4. Test PLAY RANKED:');
var dailyCard = document.getElementById('dailyRankedCard');
if (dailyCard) {
    console.log('Haciendo click...');
    dailyCard.click();
    setTimeout(function() {
        var rotScreen = document.getElementById('dailyRotationScreen');
        console.log('dailyRotationScreen display:', rotScreen ? rotScreen.style.display : 'NO ENCONTRADO');
        console.log('dailyRotationScreen visible?', rotScreen ? rotScreen.offsetWidth : 0);
    }, 1000);
}

// Test 5: Botón BACK
setTimeout(function() {
    console.log('\n5. Test BACK:');
    var backBtn = document.getElementById('backToModeSelection');
    console.log('backToModeSelection existe?', backBtn ? 'SI' : 'NO');
    if (backBtn) {
        console.log('Visible?', backBtn.offsetWidth > 0 ? 'SI' : 'NO');
        console.log('Haciendo click...');
        backBtn.click();
    }
}, 2000);

// Test 6: FREE MODE
setTimeout(function() {
    console.log('\n6. Test FREE MODE:');
    var freeCard = document.getElementById('freeModeCard');
    if (freeCard) {
        console.log('Haciendo click...');
        freeCard.click();
        setTimeout(function() {
            var homeContainer = document.getElementById('homeContainer');
            console.log('homeContainer display:', homeContainer ? homeContainer.style.display : 'NO ENCONTRADO');
        }, 500);
    }
}, 3000);

// Test 7: Game Card click
setTimeout(function() {
    console.log('\n7. Test GAME CARD:');
    var cards = document.querySelectorAll('.game-card');
    if (cards.length > 0) {
        console.log('Click en primera card...');
        cards[0].click();
    }
}, 4000);

setTimeout(function() {
    console.log('\n=== FIN DIAGNOSTICO ===');
    console.log('COPIA TODA ESTA SALIDA');
}, 5000);
