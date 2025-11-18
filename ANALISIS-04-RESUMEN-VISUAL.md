# RESUMEN VISUAL - Event Listeners y Botones

## ÁRBOL DE PROBLEMAS

```
PROBLEMAS EN EVENT LISTENERS Y BUTTON LOGIC
│
├─ 🔴 CRÍTICOS (Afectan funcionamiento)
│  ├─ Doble declaración de variables (4084-4085, 5287-5288 retornan NULL)
│  ├─ Listeners de teclado fuera de DOMContentLoaded (4489)
│  ├─ Referencias NULL en handleChoice (4411-4412, 4437-4438)
│  └─ Referencias NULL en handleChampionChoice (5380-5381, 5406-5407)
│
├─ 🟡 MODERADOS (Pueden causar problemas ocasionales)
│  ├─ Inconsistencia en validación (DOMContentLoaded vs handleChoice)
│  ├─ Listeners de teclado sin validación de estado de botones
│  └─ Variables compartidas sin inicialización defensiva (4088-4089)
│
└─ 🟢 MENORES (Código sucio, funciona)
   ├─ Código comentado obsoleto (4484-4486, 5444-5446)
   └─ Redeclaración de variables locales en DOMContentLoaded
```

---

## MATRIZ DE PROBLEMAS

```
PROBLEMA                              | LÍNEA(S) | SEVERIDAD | TIPO      | ESTADO
─────────────────────────────────────────────────────────────────────────────
Doble declaración smashBtn/passBtn    | 4084-85  | 🔴 CRIT   | Scope     | Activo
Doble decl. smashChamBtn/passChamBtn  | 5287-88  | 🔴 CRIT   | Scope     | Activo
Listener keydown fuera DOMContentLoaded| 4489-98  | 🔴 CRIT   | Timing    | Activo
handleChoice sin validación (línea 1)  | 4411-12  | 🔴 CRIT   | Validación| Activo
handleChoice sin validación (línea 2)  | 4437-38  | 🔴 CRIT   | Validación| Activo
handleChampionChoice sin validación (1)| 5380-81  | 🔴 CRIT   | Validación| Activo
handleChampionChoice sin validación (2)| 5406-07  | 🔴 CRIT   | Validación| Activo
Variables NULL usadas en keydown       | 4088-89  | 🟡 MOD    | Referencias| Activo
Listeners de teclado sin estado check  | 4489-98  | 🟡 MOD    | Race Cond | Activo
Código comentado obsoleto (SMASH)      | 4484-86  | 🟢 MENOR  | Mantenimiento| Activo
Código comentado obsoleto (CHAMPION)   | 5444-46  | 🟢 MENOR  | Mantenimiento| Activo
```

---

## FLUJO DE REFERENCIAS

### FLUJO ACTUAL (PROBLEMÁTICO)

```
SCRIPT.JS CARGA
    │
    ├─> Línea 4084-4085: const smashBtn = NULL (DOM no está listo)
    ├─> Línea 5287-5288: const smashChampionBtn = NULL (DOM no está listo)
    │
    ├─> Línea 4489: Registra listener de keydown USANDO referencias NULL
    │
    └─> ... más código ...
    
USUARIO PRESIONA FLECHA
    │
    └─> Línea 4494/4496: handleChoice() se ejecuta
            │
            ├─> Línea 4411: smashBtn.disabled = true  ❌ ERROR: Cannot set property of null
            │
            └─> El botón no se deshabilita, permite múltiples clics
    
DOMContentLoaded SE DISPARA
    │
    ├─> Línea 8526-8527: const smashBtn = ELEMENTO VÁLIDO (nueva variable local)
    ├─> Línea 8556-8562: Se registran listeners de click CORRECTAMENTE
    │
    └─> ... más listeners ...

USUARIO HACE CLICK EN BOTÓN
    │
    └─> Línea 8558/8562: Listener dispara handleChoice()
            │
            └─> Línea 4411: Intenta usar la referencia GLOBAL NULL
                (No la local de DOMContentLoaded)
                ❌ ERROR: Cannot set property of null
```

### FLUJO ESPERADO (CORRECTO)

```
SCRIPT.JS CARGA
    │
    └─> NO declara variables de botones globales
    
USUARIO ESPERA ...

DOMContentLoaded SE DISPARA
    │
    ├─> Línea 8526-8527: const smashBtn = ELEMENTO VÁLIDO
    ├─> Línea 8556-8562: Se registran listeners de click ✅
    ├─> Línea 4489 (MOVIDO): Se registra listener de keydown AQUÍ ✅
    │
    └─> ... más listeners ...

USUARIO PRESIONA FLECHA
    │
    └─> Listener de keydown dispara handleChoice()
            │
            └─> Línea 4411: smashBtn.disabled = true ✅ FUNCIONA (referencia válida)

USUARIO HACE CLICK EN BOTÓN
    │
    └─> Listener de click dispara handleChoice()
            │
            └─> Línea 4411: smashBtn.disabled = true ✅ FUNCIONA
```

---

## TABLA COMPARATIVA: CURRENT vs EXPECTED

```
ELEMENTO                  | ACTUAL (INCORRECTO)      | ESPERADO (CORRECTO)
─────────────────────────┼──────────────────────────┼──────────────────────
smashBtn                 | NULL global + válido     | SOLO válido en DOM
                         | local en DOM             | ready
─────────────────────────┼──────────────────────────┼──────────────────────
passBtn                  | NULL global + válido     | SOLO válido en DOM
                         | local en DOM             | ready
─────────────────────────┼──────────────────────────┼──────────────────────
smashChampionBtn         | NULL global + válido     | SOLO válido en DOM
                         | local en DOM             | ready
─────────────────────────┼──────────────────────────┼──────────────────────
passChampionBtn          | NULL global + válido     | SOLO válido en DOM
                         | local en DOM             | ready
─────────────────────────┼──────────────────────────┼──────────────────────
Listener keydown         | FUERA DOMContentLoaded   | DENTRO DOMContentLoaded
                         | Usa referencias NULL    | Usa referencias válidas
─────────────────────────┼──────────────────────────┼──────────────────────
handleChoice validación  | SIN validación           | CON validación
                         | Accede a NULL            | Valida referencias
─────────────────────────┼──────────────────────────┼──────────────────────
Race condition prevention| SIN protección           | CON flags/disabled
                         | Permite múltiples clics | Evita múltiples votos
```

---

## IMPACTO EN FUNCIONALIDADES

```
CARACTERÍSTICA              | AFECTADA | SÍNTOMAS
────────────────────────────┼──────────┼─────────────────────────────
Click en botón SMASH        | ✅ SÍ   | Funciona (por suerte)
Click en botón PASS         | ✅ SÍ   | Funciona (por suerte)
Tecla flecha derecha (→)    | ✅ SÍ   | Puede no funcionar
Tecla flecha izquierda (←)  | ✅ SÍ   | Puede no funcionar
Deshabilitar botones        | ✅ SÍ   | Falla silenciosamente
Habilitar botones           | ✅ SÍ   | Falla silenciosamente
Múltiples clics rápidos     | ✅ SÍ   | Puede causar dobles votos
Champion SMASH button       | ✅ SÍ   | Funciona (por suerte)
Champion PASS button        | ✅ SÍ   | Funciona (por suerte)
Champion arrow keys         | ✅ SÍ   | Puede no funcionar
```

---

## CHECKLIST DE FIXES

### FIX 1: Mover listeners de teclado
```
[ ] Identificar línea 4489-4498
[ ] Copiar código
[ ] Eliminar de línea 4489
[ ] Pegar dentro de DOMContentLoaded (después de línea 8607)
[ ] Agregar validación de referencias
[ ] Probar teclas de flecha
```

### FIX 2: Eliminar doble declaración
```
[ ] Eliminar líneas 4084-4085
[ ] Eliminar líneas 5287-5288
[ ] Verificar que las variables en DOMContentLoaded existen
[ ] Probar clicks en botones
```

### FIX 3: Validación en handleChoice
```
[ ] Ubicar línea 4411-4412
[ ] Agregar validación: if (!smashBtn || !passBtn) return;
[ ] Ubicar línea 4437-4438
[ ] Agregar validación: if (smashBtn && passBtn) { ... }
[ ] Probar votos
```

### FIX 4: Validación en handleChampionChoice
```
[ ] Ubicar línea 5380-5381
[ ] Agregar validación: if (!smashChampionBtn || !passChampionBtn) return;
[ ] Ubicar línea 5406-5407
[ ] Agregar validación: if (smashChampionBtn && passChampionBtn) { ... }
[ ] Probar votos de campeones
```

### FIX 5: Eliminar código comentado
```
[ ] Eliminar líneas 4484-4486
[ ] Eliminar líneas 5444-5446
[ ] Verificar que no hay más código comentado relacionado
```

### FIX 6: Agregar flags (OPCIONAL)
```
[ ] Agregar variables: isProcessingChoice, isProcessingChampionChoice
[ ] Modificar handleChoice con try-finally
[ ] Modificar handleChampionChoice con try-finally
[ ] Probar múltiples clics rápidos
```

---

## MAPA DE LÍNEAS PROBLEMÁTICAS

```
script.js
│
├─── SECCIÓN GLOBAL (4080-5500)
│    │
│    ├─ Línea 4084-4085: ❌ Doble declaración (ELIMINAR)
│    ├─ Línea 4088-4089: ❌ Variables NULL (PROBLEMA INDIRECTO)
│    ├─ Línea 4407-4441: ❌ handleChoice sin validación (AGREGAR VALIDACIÓN)
│    ├─ Línea 4411-4412: ❌ smashBtn.disabled sin check (VALIDAR)
│    ├─ Línea 4437-4438: ❌ smashBtn.disabled sin check (VALIDAR)
│    ├─ Línea 4484-4486: ❌ Código comentado (ELIMINAR)
│    ├─ Línea 4489-4498: ❌ Keydown listener fuera DOM (MOVER A DOMContentLoaded)
│    │
│    ├─ Línea 5287-5288: ❌ Doble declaración (ELIMINAR)
│    ├─ Línea 5376-5410: ❌ handleChampionChoice sin validación (AGREGAR)
│    ├─ Línea 5380-5381: ❌ champBtn.disabled sin check (VALIDAR)
│    ├─ Línea 5406-5407: ❌ champBtn.disabled sin check (VALIDAR)
│    └─ Línea 5444-5446: ❌ Código comentado (ELIMINAR)
│
└─── SECCIÓN DOMContentLoaded (8419-8754)
     │
     ├─ Línea 8526-8527: ✅ Declaración correcta (MANTENER)
     ├─ Línea 8556-8562: ✅ Listeners correctos (MANTENER)
     ├─ Línea 8573-8574: ✅ Declaración correcta (MANTENER)
     └─ Línea 8596-8606: ✅ Listeners correctos (MANTENER)
     
     ⭐ AQUÍ SE DEBEN AGREGAR:
     └─ Línea 8609+: Listeners de keydown (MOVER DESDE 4489)
```

---

## ÍNDICE DE RIESGO

```
RIESGO DE BUG POR ESCENARIO
═══════════════════════════════════════

Escenario 1: Usuario presiona flecha en página lenta
   Riesgo: 🔴🔴🔴 MUY ALTO
   Causa: Listener de teclado usa referencias NULL
   
Escenario 2: DOM carga lentamente
   Riesgo: 🔴🔴🔴 MUY ALTO
   Causa: Variables globales NULL, handleChoice no valida
   
Escenario 3: Múltiples clics rápidos
   Riesgo: 🔴🔴 ALTO
   Causa: Sin flag de procesamiento, pueden ocurrir dobles votos
   
Escenario 4: Reinicio de juego
   Riesgo: 🟡 MODERADO
   Causa: Variables pueden quedar en estado inconsistente
   
Escenario 5: Cambio rápido entre modes
   Riesgo: 🟡 MODERADO
   Causa: Listeners pueden estar registrados múltiples veces
```

---

## CONCLUSIÓN VISUAL

```
ESTADO ACTUAL:
┌─────────────────────────────────────┐
│ Funciona en condiciones normales    │
│ Pero tiene 7+ problemas potenciales │
│ Vulnerable a edge cases             │
└─────────────────────────────────────┘
        ⬇️⬇️⬇️
   IMPLEMENTAR FIXES
        ⬇️⬇️⬇️
┌─────────────────────────────────────┐
│ Funcionará en todas las condiciones │
│ Código limpio y mantenible          │
│ Sin vulnerabilidades conocidas      │
└─────────────────────────────────────┘
```

