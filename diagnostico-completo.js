// ========================================
// DIAGNÓSTICO AUTOMÁTICO COMPLETO
// ========================================
// Copia y pega este código completo en la consola (F12)

console.log('%c========================================', 'color: #C8AA6E; font-weight: bold; font-size: 16px;');
console.log('%c🔍 DIAGNÓSTICO COMPLETO DEL SITIO', 'color: #C8AA6E; font-weight: bold; font-size: 16px;');
console.log('%c========================================', 'color: #C8AA6E; font-weight: bold; font-size: 16px;');

// 1. Verificar elementos del DOM
console.log('\n%c1️⃣ ELEMENTOS DEL DOM:', 'color: #00aaff; font-weight: bold;');
const elementos = {
    'dailyRankedCard': document.getElementById('dailyRankedCard'),
    'freeModeCard': document.getElementById('freeModeCard'),
    'modeSelectionScreen': document.getElementById('modeSelectionScreen'),
    'hamburgerMenu': document.getElementById('hamburgerMenu'),
    'sidebar': document.getElementById('sidebar'),
    'closeMenu': document.getElementById('closeMenu')
};

for (const [nombre, elemento] of Object.entries(elementos)) {
    if (elemento) {
        console.log(`✅ ${nombre}: ENCONTRADO`, elemento);
    } else {
        console.error(`❌ ${nombre}: NO ENCONTRADO`);
    }
}

// 2. Verificar funciones
console.log('\n%c2️⃣ FUNCIONES DISPONIBLES:', 'color: #00aaff; font-weight: bold;');
const funciones = [
    'showDailyRotation',
    'showFreeMode',
    'showModeSelection',
    'switchGameMode',
    'initializeAllElements'
];

funciones.forEach(fn => {
    const existe = typeof window[fn] !== 'undefined';
    if (existe) {
        console.log(`✅ ${fn}: EXISTE (tipo: ${typeof window[fn]})`);
    } else {
        console.error(`❌ ${fn}: NO EXISTE`);
    }
});

// 3. Verificar event listeners
console.log('\n%c3️⃣ EVENT LISTENERS:', 'color: #00aaff; font-weight: bold;');
if (elementos.dailyRankedCard) {
    console.log('dailyRankedCard.onclick:', elementos.dailyRankedCard.onclick);
    console.log('dailyRankedCard tiene listeners:', getEventListeners ? getEventListeners(elementos.dailyRankedCard) : 'getEventListeners no disponible (prueba en Chrome)');
}

if (elementos.freeModeCard) {
    console.log('freeModeCard.onclick:', elementos.freeModeCard.onclick);
}

// 4. Verificar scripts cargados
console.log('\n%c4️⃣ SCRIPTS CARGADOS:', 'color: #00aaff; font-weight: bold;');
const scripts = document.querySelectorAll('script[src]');
scripts.forEach(script => {
    console.log(`📄 ${script.src}`);
});

// 5. Verificar CSS y visibilidad
console.log('\n%c5️⃣ VISIBILIDAD Y CSS:', 'color: #00aaff; font-weight: bold;');
if (elementos.dailyRankedCard) {
    const rect = elementos.dailyRankedCard.getBoundingClientRect();
    const styles = window.getComputedStyle(elementos.dailyRankedCard);
    console.log('dailyRankedCard posición:', {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        display: styles.display,
        visibility: styles.visibility,
        opacity: styles.opacity,
        pointerEvents: styles.pointerEvents,
        zIndex: styles.zIndex
    });
}

// 6. Test de click manual
console.log('\n%c6️⃣ TEST DE CLICK MANUAL:', 'color: #00aaff; font-weight: bold;');
if (elementos.dailyRankedCard) {
    console.log('Intentando click en dailyRankedCard...');
    try {
        elementos.dailyRankedCard.click();
        console.log('✅ Click ejecutado sin errores');
    } catch (e) {
        console.error('❌ Error al hacer click:', e);
    }
}

// 7. Verificar errores en consola
console.log('\n%c7️⃣ RESUMEN:', 'color: #00aaff; font-weight: bold;');
console.log('Si ves errores en ROJO arriba de este diagnóstico, cópialos todos y pégalos.');
console.log('Si NO ves "🎮 INIT-FIX: Daily Ranked clicked!" después del test de click, hay un problema.');

console.log('\n%c========================================', 'color: #C8AA6E; font-weight: bold;');
console.log('%c✅ DIAGNÓSTICO COMPLETADO', 'color: #00ff00; font-weight: bold; font-size: 16px;');
console.log('%cCopia TODA la salida de esta consola y pégala al chat.', 'color: #ffaa00; font-weight: bold;');
console.log('%c========================================', 'color: #C8AA6E; font-weight: bold;');
