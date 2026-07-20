# Programando con Harry Potter 🧙⚡

Aprende lógica de programación ayudando a Harry, Hermione, Ron o Luna a atrapar la Snitch Dorada. Un juego educativo con 30 niveles que enseñan conceptos fundamentales de programación mediante **pseudocódigo estilo Python**.

## 🎮 Modos de Juego

| Modo | Descripción |
|------|-------------|
| **📜 Historia** | 30 niveles progresivos con diálogos narrativos y límite de memoria |
| **🏆 Optimización** | Completa niveles con la menor cantidad de tarjetas posible |
| **🐛 Debugging** | Encuentra y corrige errores en programas predefinidos |

## 📚 Conceptos por Año

| Año | Concepto | Niveles |
|-----|----------|---------|
| **1er Año** — El Mapa del Merodeador | Secuencia, giros, hechizos básicos | 1–5 |
| **2do Año** — La Cámara de los Secretos | Bucles (`for i in range(n)`) | 6–10 |
| **3er Año** — El Torneo de los Tres Magos | Bucles anidados, condicionales (`if/else`) | 11–15 |
| **4to Año** — El Cáliz de Fuego | Definición de funciones (`def` / `call`) | 16–20 |
| **5to Año** — La Orden del Fénix | Desafíos y laberintos combinados | 21–25 |
| **6to Año** — El Misterio del Príncipe | Composición de funciones y lógica avanzada | 26–30 |

## 👥 Personajes

Selecciona tu personaje al iniciar — cada uno con su propio sprite y diálogos adaptados:

| Personaje | Sprite |
|-----------|--------|
| **Harry Potter** | ⚡ El Niño que Vivió |
| **Hermione Granger** | 📚 La más brillante de su clase |
| **Ron Weasley** | ♟️ El estratega del ajedrez mágico |
| **Luna Lovegood** | 🦄 La soñadora de Ravenclaw |

Los diálogos en cada nivel usan el nombre del personaje seleccionado automáticamente.

## 🃏 Tarjetas de Código (Pseudocódigo Python)

| Tarjeta | Sintaxis | Función |
|---------|----------|---------|
| AVANZAR | `avanzar()` | Mueve al personaje hacia adelante |
| GIRAR IZQUIERDA | `girar_izquierda()` | Rota 90° a la izquierda |
| GIRAR DERECHA | `girar_derecha()` | Rota 90° a la derecha |
| EXPELLIARMUS | `expelliarmus()` | Elimina Dementores |
| ALOHOMORA | `alohomora()` | Abre puertas cerradas |
| PROTEGO | `protego()` | Escudo contra Dementores |
| LUMOS | `lumos()` | Revela caminos ocultos |
| WINGARDIUM | `wingardium()` | Mueve rocas y dragones |
| SI / SI NO | `if condicion:` / `else:` | Ejecuta condicionales |
| BUCLE | `for i in range(n):` | Repite un bloque de código |
| FUNCIÓN | `def nombre():` | Define una función reutilizable |
| LLAMAR | `nombre()` | Ejecuta una función definida |

## 🏠 Casas de Hogwarts

Elige tu casa al iniciar y acumula estrellas para tu casa:
- 🦁 Gryffindor — 🦡 Hufflepuff — 🦅 Ravenclaw — 🐍 Slytherin

## 🎯 Objetivo

Haz clic en tarjetas para construir un programa que lleve al personaje hasta la Snitch Dorada. Cada nivel tiene un **límite de memoria** (tarjetas máximas) — usa bucles y funciones para optimizar.

Las funciones se crean con la tarjeta `def`: escribe un nombre, agrega tarjetas dentro de la función, cierra la definición, y luego puedes llamarla con su nombre desde el panel.

## 🚀 Cómo jugar

1. Abre `index.html` en tu navegador
2. Elige una casa de Hogwarts
3. Selecciona tu personaje (Harry, Hermione, Ron o Luna)
4. Selecciona un modo de juego
5. Escucha el diálogo del nivel, luego haz clic en tarjetas para armar tu programa
6. Presiona **▶ EJECUTAR** para ver al personaje ejecutar tu código

## 🛠️ Tecnologías

- HTML5, CSS3, JavaScript (vanilla)
- Imágenes locales en carpeta `img/` (antes usaban URLs externas)
- Fuente Press Start 2P desde CDN
- El pseudocódigo Python se ejecuta internamente en JavaScript (no usa Pyodide ni Skulpt)
- Persistencia con localStorage (progreso, personaje, funciones, casa)

## 🎨 Estilo

Interfaz con temática de Harry Potter, vista de código tipo IDE con sintaxis coloreada (Material Palenight), animaciones retro y efectos visuales para cada hechizo.

---

> *"La programación es como la magia — solo tienes que pronunciar las palabras correctas en el orden correcto."*
