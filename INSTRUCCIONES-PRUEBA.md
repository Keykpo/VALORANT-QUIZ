# 🧪 INSTRUCCIONES PARA PROBAR LOS BOTONES

## ⚠️ IMPORTANTE: test-buttons.html NO es tu sitio

`test-buttons.html` es solo una herramienta de diagnóstico separada.
Para probar tus botones reales, sigue estos pasos:

---

## 📋 PASO A PASO - Probar en tu sitio real

### 1️⃣ Abre tu sitio principal

```
index.html  ← Este es tu sitio real
```

### 2️⃣ Abre las DevTools

- **Windows:** Presiona `F12`
- **Mac:** Presiona `Cmd + Option + I`
- O click derecho → "Inspeccionar"

### 3️⃣ Ve a la pestaña "Console"

Deberías ver logs como:
```
🚀 INIT-FIX: DOM Content Loaded
🔧 INIT-FIX: Initializing all elements...
✅ INIT-FIX: Daily Ranked card onclick attached
✅ INIT-FIX: Free Mode card onclick attached
```

### 4️⃣ Haz click en el botón "PLAY RANKED"

Deberías ver en consola:
```
🎮 INIT-FIX: Daily Ranked clicked!
```

### 5️⃣ ¿Qué ves exactamente?

**Opción A:** Si ves los logs y la pantalla cambia → ✅ **FUNCIONA**

**Opción B:** Si NO ves ningún log → ❌ El script no se cargó

**Opción C:** Si ves logs pero NO cambia la pantalla → ❌ Hay un error en la función

---

## 🔍 Diagnóstico rápido en Console

Copia y pega esto en la consola del navegador (F12 → Console):

```javascript
// Test 1: Verificar si los elementos existen
console.log('dailyRankedCard:', document.getElementById('dailyRankedCard'));
console.log('freeModeCard:', document.getElementById('freeModeCard'));

// Test 2: Verificar si init-fix.js se cargó
console.log('initializeAllElements exists:', typeof initializeAllElements);

// Test 3: Simular click manualmente
document.getElementById('dailyRankedCard').click();
```

Copia TODA la salida y pégamela.

---

## ❓ Si sigue sin funcionar

Responde estas preguntas:

1. ¿Qué navegador usas? (Chrome, Firefox, Edge, Safari)
2. ¿Ves ALGÚN mensaje en la consola cuando cargas la página?
3. ¿Ves errores en ROJO en la consola?
4. ¿Los botones se ven en pantalla?
5. ¿Pasa algo cuando haces click? (aunque sea un pequeño efecto visual)

---

## 📁 Archivos que deben existir

Verifica que estos archivos existan en tu carpeta:

```
✅ index.html
✅ script.js
✅ style.css
✅ init-fix.js  ← NUEVO (importante)
✅ firebase-config.js
```

Si `init-fix.js` NO existe, ese es el problema.
