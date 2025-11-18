// ==========================================
// INITIALIZATION FIX - Run this FIRST
// ==========================================
// This file ensures all DOM elements are initialized AFTER the DOM is ready

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 INIT-FIX: DOM Content Loaded');

    // Force re-initialization of all critical elements
    window.initializeAllElements = function() {
        console.log('🔧 INIT-FIX: Initializing all elements...');

        // Mode selection elements
        window.modeSelectionScreen = document.getElementById('modeSelectionScreen');
        window.dailyRotationScreen = document.getElementById('dailyRotationScreen');
        window.dailyRankedCard = document.getElementById('dailyRankedCard');
        window.freeModeCard = document.getElementById('freeModeCard');
        window.rotationDate = document.getElementById('rotationDate');
        window.rotationChallenges = document.getElementById('rotationChallenges');
        window.homeContainer = document.getElementById('homeContainer');

        console.log('Mode selection elements:', {
            modeSelectionScreen: !!window.modeSelectionScreen,
            dailyRankedCard: !!window.dailyRankedCard,
            freeModeCard: !!window.freeModeCard,
            rotationDate: !!window.rotationDate,
            rotationChallenges: !!window.rotationChallenges,
            homeContainer: !!window.homeContainer
        });

        // Attach click events to mode cards
        if (window.dailyRankedCard) {
            window.dailyRankedCard.onclick = function(e) {
                console.log('🎮 INIT-FIX: Daily Ranked clicked!', e);
                if (typeof showDailyRotation === 'function') {
                    showDailyRotation();
                } else {
                    console.error('❌ showDailyRotation function not found');
                }
            };
            console.log('✅ INIT-FIX: Daily Ranked card onclick attached');
        }

        if (window.freeModeCard) {
            window.freeModeCard.onclick = function(e) {
                console.log('🎮 INIT-FIX: Free Mode clicked!', e);
                if (typeof showFreeMode === 'function') {
                    showFreeMode();
                } else {
                    console.error('❌ showFreeMode function not found');
                }
            };
            console.log('✅ INIT-FIX: Free Mode card onclick attached');
        }

        // Hamburger menu
        const hamburger = document.getElementById('hamburgerMenu');
        const sidebar = document.getElementById('sidebar');
        const closeMenu = document.getElementById('closeMenu');

        if (hamburger && sidebar) {
            hamburger.onclick = function() {
                console.log('🍔 INIT-FIX: Hamburger clicked!');
                sidebar.classList.add('active');
            };
            console.log('✅ INIT-FIX: Hamburger onclick attached');
        }

        if (closeMenu && sidebar) {
            closeMenu.onclick = function() {
                console.log('❌ INIT-FIX: Close menu clicked!');
                sidebar.classList.remove('active');
            };
            console.log('✅ INIT-FIX: Close menu onclick attached');
        }

        return true;
    };

    // Run initialization
    setTimeout(function() {
        window.initializeAllElements();
        console.log('✅ INIT-FIX: All elements initialized');
    }, 100);
});
