# FIXES PROPUESTOS - Event Listeners y Button Logic

## FIX 1: MOVER LISTENERS DE TECLADO A DOMContentLoaded

### Ubicación actual (PROBLEMA):
Línea 4489-4498 (FUERA de DOMContentLoaded)

### Código ACTUAL (INCORRECTO):
```javascript
// ❌ FUERA DE DOMContentLoaded - Usa referencias NULL
document.addEventListener('keydown', (e) => {
    if (statsContainer.style.display === 'block') return;
    if (gameContainer.style.display === 'none') return;
    
    if (e.key === 'ArrowLeft') {
        handleChoice('pass');
    } else if (e.key === 'ArrowRight') {
        handleChoice('smash');
    }
});
```

### Código PROPUESTO (CORRECTO):
Dentro de DOMContentLoaded, después de línea 8607:

```javascript
// ===== KEYBOARD SUPPORT (DENTRO DE DOMContentLoaded) =====
document.addEventListener('keydown', (e) => {
    // Validación: Verificar que los elementos existen
    if (!statsContainer || !gameContainer) return;
    
    if (statsContainer.style.display === 'block') return;
    if (gameContainer.style.display === 'none') return;
    
    if (e.key === 'ArrowLeft') {
        handleChoice('pass');
    } else if (e.key === 'ArrowRight') {
        handleChoice('smash');
    }
});

// ===== KEYBOARD SUPPORT PARA CHAMPIONS (DENTRO DE DOMContentLoaded) =====
document.addEventListener('keydown', (e) => {
    // Validación: Verificar que los elementos existen
    if (!championsGameContainer || !championsStatsContainer) return;
    
    if (championsStatsContainer.style.display === 'block') return;
    if (championsGameContainer.style.display === 'none') return;
    
    if (e.key === 'ArrowLeft') {
        handleChampionChoice('pass');
    } else if (e.key === 'ArrowRight') {
        handleChampionChoice('smash');
    }
});
```

### Acción:
1. Eliminar el listener de keydown en línea 4489-4498
2. Agregar el código PROPUESTO dentro de DOMContentLoaded (línea 8609+)

---

## FIX 2: ELIMINAR DOBLE DECLARACIÓN DE VARIABLES

### Ubicación actual (PROBLEMA):

**Línea 4084-4085** (GLOBAL - Retorna NULL):
```javascript
const smashBtn = document.getElementById('smashBtn');
const passBtn = document.getElementById('passBtn');
```

**Línea 5287-5288** (GLOBAL - Retorna NULL):
```javascript
const smashChampionBtn = document.getElementById('smashChampionBtn');
const passChampionBtn = document.getElementById('passChampionBtn');
```

### Código PROPUESTO (CORRECTO):

Eliminar las líneas 4084-4085 y 5287-5288 completamente.

Las variables se declaran correctamente en DOMContentLoaded:
- Línea 8526-8527 (smashBtn, passBtn)
- Línea 8573-8574 (smashChampionBtn, passChampionBtn)

### Acción:
1. Eliminar líneas 4084-4085
2. Eliminar líneas 5287-5288
3. MANTENER las declaraciones en DOMContentLoaded (8526-8527, 8573-8574)

---

## FIX 3: AGREGAR VALIDACIÓN EN handleChoice

### Ubicación actual (PROBLEMA):
Línea 4411-4412 y 4437-4438

### Código ACTUAL (INCORRECTO):
```javascript
async function handleChoice(choice) {
    const player = shuffledPlayers[currentPlayerIndex];

    // ❌ Sin validación
    smashBtn.disabled = true;
    passBtn.disabled = true;

    // ... código ...

    // ❌ Sin validación
    smashBtn.disabled = false;
    passBtn.disabled = false;

    showPlayer();
}
```

### Código PROPUESTO (CORRECTO):
```javascript
async function handleChoice(choice) {
    const player = shuffledPlayers[currentPlayerIndex];

    // ✅ Con validación
    if (!smashBtn || !passBtn) {
        console.error('❌ ERROR: Botones no encontrados en handleChoice', { smashBtn, passBtn });
        return;
    }

    smashBtn.disabled = true;
    passBtn.disabled = true;

    if (choice === 'smash') {
        smashChoices.push(player);
        await updatePlayerVote(player.name, 'smash');
    } else {
        passChoices.push(player);
        await updatePlayerVote(player.name, 'pass');
    }

    if (votesRef) {
        const stats = await loadPlayerStats(player.name);
        displayGlobalStats(stats, true);
    }

    await new Promise(resolve => setTimeout(resolve, 2500));

    currentPlayerIndex++;

    // ✅ Con validación
    if (smashBtn && passBtn) {
        smashBtn.disabled = false;
        passBtn.disabled = false;
    }

    showPlayer();
}
```

### Acción:
1. Reemplazar línea 4411-4412 con validación
2. Reemplazar línea 4437-4438 con validación

---

## FIX 4: AGREGAR VALIDACIÓN EN handleChampionChoice

### Ubicación actual (PROBLEMA):
Línea 5380-5381 y 5406-5407

### Código PROPUESTO (CORRECTO):
```javascript
async function handleChampionChoice(choice) {
    const champion = shuffledChampions[currentChampionIndex];

    // ✅ Con validación
    if (!smashChampionBtn || !passChampionBtn) {
        console.error('❌ ERROR: Champion buttons no encontrados', { smashChampionBtn, passChampionBtn });
        return;
    }

    smashChampionBtn.disabled = true;
    passChampionBtn.disabled = true;

    if (choice === 'smash') {
        smashChampions.push(champion);
        await updateChampionVote(champion.name, 'smash');
    } else {
        passChampions.push(champion);
        await updateChampionVote(champion.name, 'pass');
    }

    if (championsVotesRef) {
        const stats = await loadChampionStats(champion.name);
        displayGlobalStatsChampions(stats, true);
    }

    await new Promise(resolve => setTimeout(resolve, 2500));

    currentChampionIndex++;

    // ✅ Con validación
    if (smashChampionBtn && passChampionBtn) {
        smashChampionBtn.disabled = false;
        passChampionBtn.disabled = false;
    }

    showChampion();
}
```

### Acción:
1. Reemplazar línea 5380-5381 con validación
2. Reemplazar línea 5406-5407 con validación

---

## FIX 5: ELIMINAR CÓDIGO COMENTADO OBSOLETO

### Ubicación: Líneas 4484-4486
```javascript
// ❌ ELIMINAR ESTO:
// smashBtn.addEventListener('click', () => handleChoice('smash'));
// passBtn.addEventListener('click', () => handleChoice('pass'));
// restartBtn.addEventListener('click', restartGame);
```

### Ubicación: Líneas 5444-5446
```javascript
// ❌ ELIMINAR ESTO:
// smashChampionBtn.addEventListener('click', () => handleChampionChoice('smash'));
// passChampionBtn.addEventListener('click', () => handleChampionChoice('pass'));
// restartChampionsBtn.addEventListener('click', restartChampionsGame);
```

### Acción:
1. Eliminar líneas 4484-4486
2. Eliminar líneas 5444-5446

---

## FIX 6: OPCIONAL - AGREGAR FLAG PARA EVITAR RACE CONDITIONS

### Ubicación: Antes de `async function handleChoice`

### Código PROPUESTO:
```javascript
// Flag para prevenir múltiples clics durante procesamiento
let isProcessingChoice = false;
let isProcessingChampionChoice = false;

async function handleChoice(choice) {
    // ✅ Evitar race conditions
    if (isProcessingChoice) {
        console.warn('⚠️ Ya hay un voto en proceso, ignorando click');
        return;
    }

    const player = shuffledPlayers[currentPlayerIndex];

    if (!smashBtn || !passBtn) {
        console.error('❌ ERROR: Botones no encontrados en handleChoice', { smashBtn, passBtn });
        return;
    }

    isProcessingChoice = true;
    smashBtn.disabled = true;
    passBtn.disabled = true;

    try {
        if (choice === 'smash') {
            smashChoices.push(player);
            await updatePlayerVote(player.name, 'smash');
        } else {
            passChoices.push(player);
            await updatePlayerVote(player.name, 'pass');
        }

        if (votesRef) {
            const stats = await loadPlayerStats(player.name);
            displayGlobalStats(stats, true);
        }

        await new Promise(resolve => setTimeout(resolve, 2500));

        currentPlayerIndex++;
    } finally {
        isProcessingChoice = false;
        if (smashBtn && passBtn) {
            smashBtn.disabled = false;
            passBtn.disabled = false;
        }
        showPlayer();
    }
}

async function handleChampionChoice(choice) {
    // ✅ Evitar race conditions
    if (isProcessingChampionChoice) {
        console.warn('⚠️ Ya hay un voto en proceso, ignorando click');
        return;
    }

    const champion = shuffledChampions[currentChampionIndex];

    if (!smashChampionBtn || !passChampionBtn) {
        console.error('❌ ERROR: Champion buttons no encontrados', { smashChampionBtn, passChampionBtn });
        return;
    }

    isProcessingChampionChoice = true;
    smashChampionBtn.disabled = true;
    passChampionBtn.disabled = true;

    try {
        if (choice === 'smash') {
            smashChampions.push(champion);
            await updateChampionVote(champion.name, 'smash');
        } else {
            passChampions.push(champion);
            await updateChampionVote(champion.name, 'pass');
        }

        if (championsVotesRef) {
            const stats = await loadChampionStats(champion.name);
            displayGlobalStatsChampions(stats, true);
        }

        await new Promise(resolve => setTimeout(resolve, 2500));

        currentChampionIndex++;
    } finally {
        isProcessingChampionChoice = false;
        if (smashChampionBtn && passChampionBtn) {
            smashChampionBtn.disabled = false;
            passChampionBtn.disabled = false;
        }
        showChampion();
    }
}
```

### Acción:
1. Agregar flags `isProcessingChoice` e `isProcessingChampionChoice`
2. Wrappear la lógica en try-finally para garantizar limpieza
3. Agregar validación al inicio

---

## RESUMEN DE CAMBIOS

### CRÍTICO (Hacer primero):
1. ✅ FIX 1: Mover listeners de teclado a DOMContentLoaded
2. ✅ FIX 2: Eliminar doble declaración de variables globales
3. ✅ FIX 3: Agregar validación en handleChoice
4. ✅ FIX 4: Agregar validación en handleChampionChoice
5. ✅ FIX 5: Eliminar código comentado obsoleto

### RECOMENDADO (Mejorar robustez):
6. ⭐ FIX 6: Agregar flag para evitar race conditions

---

## ORDEN DE IMPLEMENTACIÓN SUGERIDO

1. **Primero**: Crear backup de script.js
2. **Segundo**: FIX 2 (Eliminar declaraciones globales)
3. **Tercero**: FIX 5 (Eliminar código comentado)
4. **Cuarto**: FIX 3 (Validación en handleChoice)
5. **Quinto**: FIX 4 (Validación en handleChampionChoice)
6. **Sexto**: FIX 1 (Mover listeners de teclado)
7. **Séptimo**: FIX 6 (Agregar flags - OPCIONAL)
8. **Octavo**: Testear todas las funcionalidades

---

## TESTING CHECKLIST

Después de implementar los fixes, verificar:

- [ ] Botones PASS y SMASH responden a clicks
- [ ] Botones PASS y SMASH de Champions responden a clicks
- [ ] Teclas de flecha (← →) funcionan en modo jugadores
- [ ] Teclas de flecha (← →) funcionan en modo campeones
- [ ] Los botones se deshabilitan después de hacer click
- [ ] Los botones se habilitan después de 2.5 segundos
- [ ] No hay dobles votos con múltiples clicks rápidos
- [ ] No hay errores en la consola del navegador
- [ ] El reinicio del juego funciona correctamente
- [ ] Las estadísticas de Firebase se actualizan correctamente

