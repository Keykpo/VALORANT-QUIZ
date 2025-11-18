# 🐛 BUGS Y ERRORES ENCONTRADOS EN VALORANT QUIZ

## ❌ BUGS CRÍTICOS (Impiden funcionalidad)

### 1. **Inputs deshabilitados después de la primera pregunta** (CRÍTICO)
**Archivo**: `script.js`
**Funciones afectadas**:
- `loadNextAbilityQuestion()` (línea ~435)
- `loadNextQuoteQuestion()` (línea ~518)
- `loadNextAgentQuestion()` (línea ~598)

**Problema**:
Los inputs y botones se deshabilitan cuando el usuario responde correctamente o se queda sin intentos, pero NO se rehabilitan al cargar la siguiente pregunta.

**Impacto**: Después de responder la primera pregunta, el usuario no puede continuar jugando.

**Ubicación del código problemático**:
```javascript
// En checkAbilityGuess(), checkQuoteGuess(), checkAgentGuess()
document.getElementById('abilityGuessInput').disabled = true;
document.getElementById('abilityGuessBtn').disabled = true;

// Pero en loadNextAbilityQuestion() falta:
// document.getElementById('abilityGuessInput').disabled = false;
// document.getElementById('abilityGuessBtn').disabled = false;
```

---

### 2. **Scores no inicializados en Weapon y Map Quiz**
**Archivo**: `script.js`
**Funciones afectadas**:
- `startWeaponQuiz()` (línea ~648)
- `startMapQuiz()` (línea ~694)

**Problema**:
Los scores no se muestran correctamente porque no se inicializan los elementos HTML.

**Código faltante**:
```javascript
document.getElementById('weaponScore').textContent = '0';
document.getElementById('mapScore').textContent = '0';
```

---

## ⚠️ BUGS MODERADOS (Pueden causar crashes)

### 3. **Agentes sin habilidades pueden romper Ability Quiz**
**Archivo**: `script.js`
**Función**: `loadNextAbilityQuestion()` (línea ~430)

**Problema**:
Si un agente no tiene habilidades o el array de habilidades está vacío, el código puede fallar.

**Código actual**:
```javascript
const randomAbility = randomAgent.abilities[Math.floor(Math.random() * randomAgent.abilities.length)];
```

**Problema potencial**: Si `randomAgent.abilities` es undefined o vacío, esto causará un error.

---

### 4. **Nombres de agentes en quotes pueden no coincidir con la API**
**Archivo**: `script.js`
**Problema**:
Los nombres en el objeto `agentQuotes` son hardcodeados y pueden no coincidir exactamente con los nombres retornados por la API.

**Ejemplo**:
- Hardcoded: `'KAY/O'`
- API podría retornar: `'KAY-O'` o `'KAYO'`

**Impacto**: El quiz de quotes podría seleccionar agentes que no existen en la API.

---

## 🔧 BUGS MENORES (Experiencia de usuario)

### 5. **No hay mensaje de "cargando" durante fetch de API**
**Problema**:
Si la API tarda en cargar, el usuario ve una pantalla en blanco sin feedback.

---

### 6. **Autocomplete no cierra el dropdown al hacer Enter**
**Archivo**: `script.js`
**Función**: Event listeners en startGuessAbility, startGuessQuote, startGuessAgent

**Problema**:
Cuando el usuario presiona Enter para adivinar, el dropdown de autocomplete permanece abierto.

---

### 7. **Sin validación de datos de API**
**Problema**:
No hay validación de que los datos de la API sean válidos antes de usarlos.

**Código actual**:
```javascript
gameState.agents = agentsData.data.filter(agent => agent.isPlayableCharacter);
```

**Problema**: Si `agentsData.data` es undefined, esto causará un error.

---

### 8. **Duplicación de quotes para Breach y Raze**
**Archivo**: `script.js`
**Líneas**: 76-99

**Problema**:
Breach y Raze tienen el mismo quote "Here comes the party!"

---

### 9. **Falta robots.txt**
**Archivo**: Eliminado por error
**Problema**: El archivo `robots.txt` fue eliminado pero es importante para SEO.

---

### 10. **Imágenes de agentes pueden no cargar**
**Problema**:
Uso de `agent.fullPortrait || agent.displayIcon` sin validar que existan.

---

## 🎯 MEJORAS RECOMENDADAS

### 11. **Sin manejo de errores en fetch**
Agregar try-catch y mensajes de error al usuario.

### 12. **Sin sistema de reinicio a home**
No hay forma de volver al menú principal sin recargar la página.

### 13. **Sin prevención de agentes/preguntas repetidas**
El mismo agente/arma/mapa puede aparecer múltiples veces seguidas.

---

## RESUMEN

- **Bugs Críticos**: 2
- **Bugs Moderados**: 2
- **Bugs Menores**: 6
- **Mejoras sugeridas**: 3

**TOTAL**: 13 problemas encontrados
