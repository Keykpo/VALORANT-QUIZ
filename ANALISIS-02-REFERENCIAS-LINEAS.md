# REFERENCIA DE LÍNEAS ESPECÍFICAS - Event Listeners Analysis

## 1. BOTONES GLOBALES (ANTES DE DOMContentLoaded)

**Archivo**: `/home/user/LOLPRO-smash-or-pass/script.js`

### Líneas 4080-4106: Declaración de variables globales
```
4080→const playerRole = document.getElementById('playerRole');
4081→const playerTeam = document.getElementById('playerTeam');
4082→const playerRegion = document.getElementById('playerRegion');
4083→const teamLogo = document.getElementById('teamLogo');
4084→const smashBtn = document.getElementById('smashBtn');          ❌ PROBLEMA: NULL si se ejecuta antes de DOMContentLoaded
4085→const passBtn = document.getElementById('passBtn');            ❌ PROBLEMA: NULL si se ejecuta antes de DOMContentLoaded
4086→const currentCount = document.getElementById('currentCount');
4087→const totalCount = document.getElementById('totalCount');
4088→const gameContainer = document.querySelector('.game-container'); ❌ PROBLEMA: Usado en línea 4491
4089→const statsContainer = document.getElementById('statsContainer'); ❌ PROBLEMA: Usado en línea 4490
```

### Líneas 5283-5301: Declaración de variables de Champions
```
5283→const championName = document.getElementById('championName');
5284→const championTitle = document.getElementById('championTitle');
5285→const currentChampionCount = document.getElementById('currentChampionCount');
5286→const totalChampionCount = document.getElementById('totalChampionCount');
5287→const smashChampionBtn = document.getElementById('smashChampionBtn');  ❌ PROBLEMA: NULL si se ejecuta antes de DOMContentLoaded
5288→const passChampionBtn = document.getElementById('passChampionBtn');    ❌ PROBLEMA: NULL si se ejecuta antes de DOMContentLoaded
```

---

## 2. LISTENERS DE TECLADO (FUERA DE DOMContentLoaded)

### Línea 4483-4498: Listener de keydown
```
4483→// Event Listeners - MOVIDO A DOMContentLoaded
4484→// smashBtn.addEventListener('click', () => handleChoice('smash'));   ❌ COMENTADO
4485→// passBtn.addEventListener('click', () => handleChoice('pass'));     ❌ COMENTADO
4486→// restartBtn.addEventListener('click', restartGame);                 ❌ COMENTADO
4487→
4488→// Soporte para teclas
4489→document.addEventListener('keydown', (e) => {                          ❌ FUERA DE DOMContentLoaded
4490→    if (statsContainer.style.display === 'block') return;             ❌ statsContainer podría ser NULL
4491→    if (gameContainer.style.display === 'none') return;               ❌ gameContainer podría ser NULL
4492→
4493→    if (e.key === 'ArrowLeft') {
4494→        handleChoice('pass');                                          ❌ Llamará con botones globales NULL
4495→    } else if (e.key === 'ArrowRight') {
4496→        handleChoice('smash');                                         ❌ Llamará con botones globales NULL
4497→    }
4498→});
```

---

## 3. FUNCIONES QUE USAN REFERENCIAS GLOBALES

### Línea 4407-4441: Función handleChoice
```
4407→async function handleChoice(choice) {
4408→    const player = shuffledPlayers[currentPlayerIndex];
4409→
4410→    // Deshabilitar botones para evitar clicks múltiples
4411→    smashBtn.disabled = true;        ❌ PROBLEMA: smashBtn podría ser NULL (referencia global)
4412→    passBtn.disabled = true;         ❌ PROBLEMA: passBtn podría ser NULL (referencia global)
4413→
4414→    if (choice === 'smash') {
4415→        smashChoices.push(player);
4416→        // Guardar voto en Firebase
4417→        await updatePlayerVote(player.name, 'smash');
4418→    } else {
4419→        passChoices.push(player);
4420→        // Guardar voto en Firebase
4421→        await updatePlayerVote(player.name, 'pass');
4422→    }
4423→
4424→    // Cargar y mostrar estadísticas actualizadas después de votar con animación
4425→    if (votesRef) {
4426→        const stats = await loadPlayerStats(player.name);
4427→        displayGlobalStats(stats, true); // true = animar desde 50%
4428→    }
4429→
4430→    // Esperar 2.5 segundos para que el usuario vea las estadísticas
4431→    await new Promise(resolve => setTimeout(resolve, 2500));  ⚠️ Race condition window
4432→
4433→    // Avanzar al siguiente jugador
4434→    currentPlayerIndex++;
4435→
4436→    // Rehabilitar botones
4437→    smashBtn.disabled = false;       ❌ PROBLEMA: smashBtn podría ser NULL
4438→    passBtn.disabled = false;        ❌ PROBLEMA: passBtn podría ser NULL
4439→
4440→    showPlayer();
4441→}
```

### Línea 5376-5410: Función handleChampionChoice
```
5376→async function handleChampionChoice(choice) {
5377→    const champion = shuffledChampions[currentChampionIndex];
5378→
5379→    // Deshabilitar botones para evitar clicks múltiples
5380→    smashChampionBtn.disabled = true;     ❌ PROBLEMA: smashChampionBtn podría ser NULL
5381→    passChampionBtn.disabled = true;      ❌ PROBLEMA: passChampionBtn podría ser NULL
5382→
5383→    if (choice === 'smash') {
5384→        smashChampions.push(champion);
5385→        // Guardar voto en Firebase
5386→        await updateChampionVote(champion.name, 'smash');
5387→    } else {
5388→        passChampions.push(champion);
5389→        // Guardar voto en Firebase
5390→        await updateChampionVote(champion.name, 'pass');
5391→    }
5392→
5393→    // Cargar y mostrar estadísticas actualizadas después de votar con animación
5394→    if (championsVotesRef) {
5395→        const stats = await loadChampionStats(champion.name);
5396→        displayGlobalStatsChampions(stats, true); // true = animar desde 50%
5397→    }
5398→
5399→    // Esperar 2.5 segundos para que el usuario vea las estadísticas
5400→    await new Promise(resolve => setTimeout(resolve, 2500));  ⚠️ Race condition window
5401→
5402→    // Avanzar al siguiente campeón
5403→    currentChampionIndex++;
5404→
5405→    // Rehabilitar botones
5406→    smashChampionBtn.disabled = false;    ❌ PROBLEMA: smashChampionBtn podría ser NULL
5407→    passChampionBtn.disabled = false;     ❌ PROBLEMA: passChampionBtn podría ser NULL
5408→
5409→    showChampion();
5410→}
```

---

## 4. LISTENERS CORRECTOS (DENTRO DE DOMContentLoaded)

### Línea 8419: Inicio de DOMContentLoaded
```
8419→document.addEventListener('DOMContentLoaded', () => {
8420→    console.log('🚀 DOMContentLoaded fired');
```

### Líneas 8526-8567: Listeners para SMASH OR PASS
```
8525→    // ===== EVENT LISTENERS PARA SMASH OR PASS =====
8526→    const smashBtn = document.getElementById('smashBtn');               ✅ CORRECTO: Dentro de DOMContentLoaded
8527→    const passBtn = document.getElementById('passBtn');                 ✅ CORRECTO: Dentro de DOMContentLoaded
8528→    const restartBtn = document.getElementById('restartBtn');           ✅ CORRECTO: Dentro de DOMContentLoaded
8529→    const regionButtons = document.querySelectorAll('.region-btn');     ✅ CORRECTO: Dentro de DOMContentLoaded
8530→    const startBtn = document.getElementById('startBtn');               ✅ CORRECTO: Dentro de DOMContentLoaded
8531→
8532→    if (regionButtons && regionButtons.length > 0) {
8533→        console.log('✅ Adding click listeners to', regionButtons.length, 'region buttons');
8534→        regionButtons.forEach(btn => {
8535→            btn.addEventListener('click', () => {
8536→                console.log('✅ Click en región:', btn.dataset.region);
8537→                regionButtons.forEach(b => b.classList.remove('active'));
8538→                btn.classList.add('active');
8539→                selectedRegion = btn.dataset.region;
8540→            });
8541→        });
8542→    }
8543→
8544→    if (startBtn) {
8545→        console.log('✅ Adding click listener to Start button');
8546→        startBtn.addEventListener('click', () => {
8547→            console.log('✅ Click en EMPEZAR JUEGO - Región seleccionada:', selectedRegion);
8548→            const filterContainer = document.getElementById('filterContainer');
8549→            const gameContainer = document.getElementById('gameContainer');
8550→            if (filterContainer) filterContainer.style.display = 'none';
8551→            if (gameContainer) gameContainer.style.display = 'block';
8552→            initGame();
8553→        });
8554→    }
8555→
8556→    if (smashBtn) {                                                      ✅ VALIDACIÓN
8557→        console.log('✅ Adding click listener to Smash button');
8558→        smashBtn.addEventListener('click', () => handleChoice('smash')); ✅ LISTENER CORRECTO
8559→    }
8560→    if (passBtn) {                                                       ✅ VALIDACIÓN
8561→        console.log('✅ Adding click listener to Pass button');
8562→        passBtn.addEventListener('click', () => handleChoice('pass'));   ✅ LISTENER CORRECTO
8563→    }
8564→    if (restartBtn) {
8565→        console.log('✅ Adding click listener to Restart button');
8566→        restartBtn.addEventListener('click', restartGame);
8567→    }
```

### Líneas 8569-8607: Listeners para CHAMPIONS
```
8569→    // ===== EVENT LISTENERS PARA CHAMPIONS =====
8570→    const genderButtons = document.querySelectorAll('.gender-btn');
8571→    const startChampionsBtn = document.getElementById('startChampionsBtn');
8572→    const backBtnChampions = document.getElementById('backBtnChampions');
8573→    const smashChampionBtn = document.getElementById('smashChampionBtn');  ✅ CORRECTO: Dentro de DOMContentLoaded
8574→    const passChampionBtn = document.getElementById('passChampionBtn');    ✅ CORRECTO: Dentro de DOMContentLoaded
8575→    const restartChampionsBtn = document.getElementById('restartChampionsBtn');
8576→
8577→    if (genderButtons && genderButtons.length > 0) {
8578→        console.log('✅ Adding click listeners to', genderButtons.length, 'gender buttons');
8579→        genderButtons.forEach(btn => {
8580→            btn.addEventListener('click', () => {
8581→                genderButtons.forEach(b => b.classList.remove('active'));
8582→                btn.classList.add('active');
8583→                selectedGender = btn.dataset.gender;
8584→            });
8585→        });
8586→    }
8587→
8588→    if (startChampionsBtn) {
8589→        console.log('✅ Adding click listener to Start Champions button');
8590→        startChampionsBtn.addEventListener('click', () => initChampionsGame());
8591→    }
8592→    if (backBtnChampions) {
8593→        console.log('✅ Adding click listener to Back Champions button');
8594→        backBtnChampions.addEventListener('click', backToHome);
8595→    }
8596→    if (smashChampionBtn) {                                               ✅ VALIDACIÓN
8597→        console.log('✅ Adding click listener to Smash Champion button');
8598→        smashChampionBtn.addEventListener('click', () => handleChampionChoice('smash')); ✅ LISTENER CORRECTO
8599→    }
8600→    if (passChampionBtn) {                                                ✅ VALIDACIÓN
8601→        console.log('✅ Adding click listener to Pass Champion button');
8602→        passChampionBtn.addEventListener('click', () => handleChampionChoice('pass'));   ✅ LISTENER CORRECTO
8603→    }
8604→    if (restartChampionsBtn) {
8605→        console.log('✅ Adding click listener to Restart Champions button');
8606→        restartChampionsBtn.addEventListener('click', restartChampionsGame);
8607→    }
8608→
8609→    // ... más listeners ...
8753→    console.log('🎉 ALL EVENT LISTENERS INITIALIZED!');
8754→});
```

---

## 5. CÓDIGO COMENTADO OBSOLETO

### Líneas 5443-5446: Listeners comentados para Champions
```
5443→// Event Listeners - MOVIDO A DOMContentLoaded
5444→// smashChampionBtn.addEventListener('click', () => handleChampionChoice('smash'));  ❌ COMENTADO
5445→// passChampionBtn.addEventListener('click', () => handleChampionChoice('pass'));    ❌ COMENTADO
5446→// restartChampionsBtn.addEventListener('click', restartChampionsGame);              ❌ COMENTADO
```

---

## 6. HTML - Elementos que corresponden

### index.html (Líneas aprox. 432-436 y 588-592)
```html
432:                <button class="btn btn-pass" id="passBtn">
436:                <button class="btn btn-smash" id="smashBtn">

588:                <button class="btn btn-pass" id="passChampionBtn">
592:                <button class="btn btn-smash" id="smashChampionBtn">
```

---

## TABLA DE CORRESPONDENCIAS

| Elemento | Línea Global | Línea DOMContentLoaded | Estado Global | Estado DOMContentLoaded |
|----------|-------------|----------------------|---------------|----------------------|
| smashBtn | 4084 | 8526 | NULL ❌ | Valid ✅ |
| passBtn | 4085 | 8527 | NULL ❌ | Valid ✅ |
| smashChampionBtn | 5287 | 8573 | NULL ❌ | Valid ✅ |
| passChampionBtn | 5288 | 8574 | NULL ❌ | Valid ✅ |
| gameContainer | 4088 | - | NULL ❌ | - |
| statsContainer | 4089 | - | NULL ❌ | - |

---

## FLUJO DE EJECUCIÓN

### Flujo problemático (Escenario de fallo):
```
1. Página HTML carga
2. Script.js comienza a ejecutar
3. Línea 4084-4085: document.getElementById('smashBtn') retorna NULL
   (El DOM no está completamente parseado aún)
4. Línea 4489: Se registra listener de keydown
5. Línea 4490-4491: Intenta acceder a statsContainer y gameContainer (NULL)
6. Usuario presiona tecla de flecha
7. Línea 4494: Se llama handleChoice('pass')
8. Línea 4411: smashBtn.disabled = true  
   ❌ Error: Cannot set property 'disabled' of null
```

### Flujo correcto (Lo que debería pasar):
```
1. Página HTML carga completamente
2. Script.js comienza a ejecutar
3. Línea 4084-4085: document.getElementById('smashBtn') retorna NULL (aún, porque el DOMContentLoaded no ha disparado)
4. ... más código se ejecuta ...
5. DOMContentLoaded se dispara (línea 8419)
6. Línea 8526-8527: document.getElementById('smashBtn') retorna el elemento VÁLIDO
7. Línea 8558: Se registra el listener de click correctamente
8. Usuario hace click en botón
9. Línea 8558: Se dispara handleChoice('smash')
10. handleChoice usa las referencias globales NULL ❌ (sigue siendo un problema)
```

---

## RECOMENDACIONES POR LÍNEA

| Línea(s) | Problema | Acción |
|---------|---------|--------|
| 4084-4085 | Declaración global NULL | ELIMINAR - Mantener solo en DOMContentLoaded |
| 5287-5288 | Declaración global NULL | ELIMINAR - Mantener solo en DOMContentLoaded |
| 4088-4089 | Variables NULL usadas en keydown | MOVER a DOMContentLoaded o validar |
| 4411-4412 | Sin validación de referencias | AGREGAR validación: if (!smashBtn) return; |
| 4437-4438 | Sin validación de referencias | AGREGAR validación: if (!smashBtn) return; |
| 4489-4498 | Listener fuera de DOMContentLoaded | MOVER dentro de DOMContentLoaded |
| 5380-5381 | Sin validación de referencias | AGREGAR validación |
| 5406-5407 | Sin validación de referencias | AGREGAR validación |
| 4484-4486 | Código comentado | ELIMINAR |
| 5444-5446 | Código comentado | ELIMINAR |
| 8556-8567 | MANTENER como está | ✅ Correcto |
| 8596-8607 | MANTENER como está | ✅ Correcto |

