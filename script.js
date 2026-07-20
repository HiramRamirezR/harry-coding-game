const IMAGES = {
    harry: 'img/harry.png',
    hermione: 'img/hermione.svg',
    ron: 'img/ron.svg',
    luna: 'img/luna.svg',
    snitch: 'img/snitch.png',
    dementor: 'img/dementor.png',
    door: 'img/door.png',
    dragon: 'img/dragon.png',
    rock: 'img/rock.png'
};

const CARD_TYPES = {
    move: { class: 'card-py', name: 'avanzar()', type: 'move' },
    turnLeft: { class: 'card-py', name: 'girar_izquierda()', type: 'turnLeft' },
    turnRight: { class: 'card-py', name: 'girar_derecha()', type: 'turnRight' },
    expelliarmus: { class: 'card-py', name: 'expelliarmus()', type: 'spell' },
    alohomora: { class: 'card-py', name: 'alohomora()', type: 'key' },
    protego: { class: 'card-py', name: 'protego()', type: 'protego' },
    lumos: { class: 'card-py', name: 'lumos()', type: 'lumos' },
    wingardium: { class: 'card-py', name: 'wingardium()', type: 'wingardium' },
    condicional: { class: 'card-py-keyword', name: 'if', type: 'condicional' },
    loop: { class: 'card-py-keyword', name: 'for', type: 'loop' },
    funcion: { class: 'card-py-func', name: 'def', type: 'funcion' },
    call: { class: 'card-py-call', name: 'func()', type: 'call' }
};

const CONDICIONES = [
    { value: 'dementor_delante', label: 'dementor_delante' },
    { value: 'puerta_delante', label: 'puerta_delante' },
    { value: 'pared_delante', label: 'pared_delante' },
    { value: 'snitch_delante', label: 'snitch_delante' },
    { value: 'camino_bloqueado', label: 'camino_bloqueado' }
];

const NIVELES_ANIOS = [
    { año: 1, nombre: '1er Año — El Mapa del Merodeador' },
    { año: 2, nombre: '2do Año — La Cámara de los Secretos' },
    { año: 3, nombre: '3er Año — El Torneo de los Tres Magos' },
    { año: 4, nombre: '4to Año — El Cáliz de Fuego' },
    { año: 5, nombre: '5to Año — La Orden del Fénix' },
    { año: 6, nombre: '6to Año — El Misterio del Príncipe' }
];

const CHARACTERS = {
    harry: { name: 'Harry', emoji: '⚡', image: IMAGES.harry, color: '#ae0001' },
    hermione: { name: 'Hermione', emoji: '📖', image: IMAGES.hermione, color: '#8B4513' },
    ron: { name: 'Ron', emoji: '♟️', image: IMAGES.ron, color: '#c9a0dc' },
    luna: { name: 'Luna', emoji: '🦄', image: IMAGES.luna, color: '#ffd5dc' }
};

// ════════════════════════════════════════════════════════════════
//  LEVELS — 30 niveles con narrativa y diálogos
// ════════════════════════════════════════════════════════════════

const LEVELS = [
    // ═══ 1er AÑO: SECUENCIA ═══
    {
        id: 1, year: 1,
        title: 'PRIMER PASO EN HOGWARTS',
        desc: 'Un pasillo recto hacia la Snitch. Aprende el orden de las instrucciones.',
        concept: 'SECUENCIA', size: 3,
        harry: { x: 0, y: 1, dir: 0 }, snitch: { x: 2, y: 1 },
        walls: [], dementors: [], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move'], memoryLimit: 2, points: 50,
        dialogues: [
            { speaker: 'Hagrid', text: '¡Bienvenido a Hogwarts, {player}! Aquí aprenderás PROGRAMACIÓN MÁGICA.' },
            { speaker: 'Hagrid', text: 'Mira este pasillo. La Snitch está al fondo. Cada instrucción se ejecuta EN ORDEN, una tras otra.' },
            { speaker: 'Hagrid', text: 'Haz clic en "avanzar()" para agregarlo a tu programa. Luego presiona EJECUTAR. ¡Inténtalo!' }
        ]
    },
    {
        id: 2, year: 1,
        title: 'EL CAMINO EN L',
        desc: 'El pasillo gira. Necesitas avanzar y girar en el orden correcto.',
        concept: 'GIROS', size: 3,
        harry: { x: 0, y: 0, dir: 0 }, snitch: { x: 2, y: 1 },
        walls: [{ x: 0, y: 2 }, { x: 1, y: 2 }],
        dementors: [], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnRight', 'turnLeft'], memoryLimit: 4, points: 50,
        dialogues: [
            { speaker: 'Ron', text: '¡Eh, {player}! El camino no es recto. Necesitas girar.' },
            { speaker: 'Ron', text: '"girar_derecha()" cambia la dirección de {player}. Primero avanza, luego gira, ¡y luego avanza otra vez!' },
            { speaker: 'Ron', text: 'Acuérdate: las instrucciones se ejecutan de arriba a abajo. El orden importa.' }
        ]
    },
    {
        id: 3, year: 1,
        title: 'EL CAMINO EN Z',
        desc: 'Zigzag. Sigue el camino con giros a derecha e izquierda.',
        concept: 'GIROS AVANZADOS', size: 4,
        harry: { x: 0, y: 0, dir: 0 }, snitch: { x: 2, y: 3 },
        walls: [{ x: 0, y: 2 }, { x: 2, y: 0 }, { x: 1, y: 3 }],
        dementors: [], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnRight', 'turnLeft'], memoryLimit: 7, points: 50,
        dialogues: [
            { speaker: 'Hermione', text: '{player}, presta atención. El programa se lee de arriba a abajo, como un libro.' },
            { speaker: 'Hermione', text: 'Cada línea es una instrucción. Si el camino hace zigzag, solo debes seguir el orden.' },
            { speaker: 'Hermione', text: 'avanzar(), girar(), avanzar(), girar(), avanzar(). ¡Así de simple!' }
        ]
    },
    {
        id: 4, year: 1,
        title: 'EL PRIMER DEMENTOR',
        desc: '¡Un dementor bloquea el paso! Usa expelliarmus() antes de avanzar.',
        concept: 'HECHIZOS', size: 4,
        harry: { x: 0, y: 1, dir: 0 }, snitch: { x: 3, y: 1 },
        walls: [], dementors: [{ x: 2, y: 1 }], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'expelliarmus'], memoryLimit: 4, points: 75,
        dialogues: [
            { speaker: 'Snape', text: '¿{player}? Otra vez tú. Bueno, al menos hay un dementor que te puede dar una lección.' },
            { speaker: 'Snape', text: 'Usa "expelliarmus()" para eliminarlo. Hazlo ANTES de avanzar hacia él.' },
            { speaker: 'Snape', text: 'El orden de las instrucciones es crítico. ¿O acaso quieres que el dementor te atrape?' }
        ]
    },
    {
        id: 5, year: 1,
        title: 'EL MAPA DEL MERODEADOR',
        desc: 'Combina giros y hechizos. ¡El dementor acecha!',
        concept: 'REPASO 1er AÑO', size: 3,
        harry: { x: 0, y: 0, dir: 0 }, snitch: { x: 2, y: 1 },
        walls: [], dementors: [{ x: 1, y: 0 }], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnRight', 'turnLeft', 'expelliarmus'], memoryLimit: 5, points: 75,
        dialogues: [
            { speaker: 'George', text: '¡Llegaste lejos, {player}! El Mapa del Merodeador muestra el camino.' },
            { speaker: 'Fred', text: 'Ahora combina todo lo que aprendiste: avanza donde puedas, gira donde toque, ataca cuando haya peligro.' },
            { speaker: 'George', text: 'Las instrucciones en orden. Como una receta, pero más divertida. ¡Tú puedes!' }
        ]
    },

    // ═══ 2do AÑO: BUCLES ═══
    {
        id: 6, year: 2,
        title: 'REPITE CONMIGO',
        desc: 'Un pasillo muy largo. El límite es pequeño: ¡usa for!',
        concept: 'INTRO A BUCLES', size: 6,
        harry: { x: 0, y: 2, dir: 0 }, snitch: { x: 5, y: 2 },
        walls: [], dementors: [], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'loop'], memoryLimit: 2, points: 100,
        dialogues: [
            { speaker: 'Hermione', text: '{player}, observa: hay 5 celdas rectas. Podrías escribir "avanzar()" cinco veces...' },
            { speaker: 'Hermione', text: '...O usar un bucle "for". Pon "avanzar()" dentro de "for i en range(5):" y se repetirá solo.' },
            { speaker: 'Hermione', text: 'Los bucles ahorran trabajo. En programación, repetir es cosa del pasado.' }
        ]
    },
    {
        id: 7, year: 2,
        title: 'LA VUELTA AL BLOQUE',
        desc: 'Rodea un obstáculo. El patrón avanzar + girar se repite.',
        concept: 'BUCLE CON GIROS', size: 4,
        harry: { x: 0, y: 0, dir: 0 }, snitch: { x: 2, y: 0 },
        walls: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }],
        dementors: [], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnRight', 'turnLeft', 'loop'], memoryLimit: 3, points: 100,
        dialogues: [
            { speaker: 'Ron', text: 'Mira {player}, el patrón se repite: avanzar, girar, avanzar, girar...' },
            { speaker: 'Ron', text: 'Pon todo lo que se repite DENTRO del bucle. El bloque entero se repite las veces que elijas.' },
            { speaker: 'Ron', text: '¡Es como un hechizo que lanzas varias veces seguidas!' }
        ]
    },
    {
        id: 8, year: 2,
        title: 'EL CORREDOR DEL DEMENTOR',
        desc: 'Un largo pasillo con un dementor. Bucle + hechizo.',
        concept: 'BUCLE + HECHIZO', size: 6,
        harry: { x: 0, y: 0, dir: 0 }, snitch: { x: 5, y: 0 },
        walls: [], dementors: [{ x: 2, y: 0 }], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'expelliarmus', 'loop'], memoryLimit: 3, points: 100,
        dialogues: [
            { speaker: 'Harry', text: '{player}, los hechizos también pueden ir dentro de bucles. El bucle repite TODO lo que está dentro.' },
            { speaker: 'Harry', text: 'Si avanzas, luego encuentras un dementor, y eso se repite... pon ambas instrucciones en el bucle.' },
            { speaker: 'Harry', text: 'El bucle no discrimina: repite tanto movimientos como hechizos.' }
        ]
    },
    {
        id: 9, year: 2,
        title: 'DOS BUCLES',
        desc: 'Dos secciones rectas separadas por un giro. Usa dos bucles.',
        concept: 'MÚLTIPLES BUCLES', size: 6,
        harry: { x: 0, y: 2, dir: 0 }, snitch: { x: 5, y: 2 },
        walls: [{ x: 4, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }],
        dementors: [], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnRight', 'turnLeft', 'loop'], memoryLimit: 5, points: 125,
        dialogues: [
            { speaker: 'Hermione', text: 'Dos segmentos rectos, separados por un giro. Son DOS patrones diferentes.' },
            { speaker: 'Hermione', text: 'Cada patrón necesita su propio bucle. Puedes tener varios bucles en un mismo programa.' },
            { speaker: 'Hermione', text: 'Primer bucle: avanza varias veces. Giro. Segundo bucle: avanza más veces. ¡Listo!' }
        ]
    },
    {
        id: 10, year: 2,
        title: 'LA CÁMARA DE LOS HECHIZOS',
        desc: 'Bucles, hechizos y obstáculos. Tu límite es muy ajustado.',
        concept: 'REPASO DE BUCLES', size: 6,
        harry: { x: 0, y: 1, dir: 0 }, snitch: { x: 5, y: 1 },
        walls: [{ x: 3, y: 0 }, { x: 3, y: 2 }],
        dementors: [{ x: 2, y: 1 }], doors: [{ x: 4, y: 1 }], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'alohomora', 'loop'],
        memoryLimit: 5, points: 125,
        dialogues: [
            { speaker: 'Dumbledore', text: '{player}, los bucles son como la repetición de un hechizo: practicas hasta dominarlo.' },
            { speaker: 'Dumbledore', text: 'Aquí encontrarás dementores y puertas. Usa bucles para ser eficiente.' },
            { speaker: 'Dumbledore', text: 'La memoria limitada te obliga a pensar: ¿cómo resuelvo esto con la menor cantidad de instrucciones?' }
        ]
    },

    // ═══ 3er AÑO: CONDICIONALES ═══
    {
        id: 11, year: 3,
        title: 'PROTEGO',
        desc: 'Un dementor acecha. Protégete con protego() o ataca con expelliarmus().',
        concept: 'PROTEGO', size: 4,
        harry: { x: 0, y: 1, dir: 0 }, snitch: { x: 3, y: 1 },
        walls: [], dementors: [{ x: 2, y: 1 }], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'expelliarmus', 'protego', 'loop'], memoryLimit: 4, points: 150,
        dialogues: [
            { speaker: 'Snape', text: 'Protego, {player}. Un escudo. No siempre necesitas atacar.' },
            { speaker: 'Snape', text: 'Contra un dementor, tanto "expelliarmus()" como "protego()" funcionan. Una decisión.' },
            { speaker: 'Snape', text: 'En programación, hay múltiples soluciones para un mismo problema. Elige sabiamente.' }
        ]
    },
    {
        id: 12, year: 3,
        title: 'LUMOS',
        desc: 'Caminos ocultos bloquean el paso. ¡Revela el camino con lumos()!',
        concept: 'LUMOS', size: 4,
        harry: { x: 0, y: 1, dir: 0 }, snitch: { x: 3, y: 1 },
        walls: [], dementors: [], doors: [], dragons: [], rocks: [],
        hiddenPaths: [{ x: 1, y: 1 }, { x: 2, y: 1 }],
        availableCards: ['move', 'turnRight', 'turnLeft', 'lumos', 'loop'], memoryLimit: 5, points: 150,
        dialogues: [
            { speaker: 'Luna', text: '{player}, hay caminos que no se ven a simple vista. Lumos revela lo oculto.' },
            { speaker: 'Luna', text: 'A veces la solución está donde no estás mirando. Lumos te ayuda a descubrirla.' },
            { speaker: 'Luna', text: 'Los Nargles no existen, pero los caminos ocultos sí. Usa Lumos para encontrarlos.' }
        ]
    },
    {
        id: 13, year: 3,
        title: 'WINGARDIUM LEVIOSA',
        desc: '¡Una roca bloquea el camino! Levántala con wingardium().',
        concept: 'WINGARDIUM', size: 4,
        harry: { x: 0, y: 1, dir: 0 }, snitch: { x: 3, y: 1 },
        walls: [], dementors: [], doors: [], dragons: [], rocks: [{ x: 2, y: 1 }], hiddenPaths: [],
        availableCards: ['move', 'turnRight', 'turnLeft', 'wingardium', 'loop'], memoryLimit: 4, points: 150,
        dialogues: [
            { speaker: 'Hermione', text: '{player}, no es wingardium levioSÁ, es wingardium levioSAAA.' },
            { speaker: 'Hermione', text: 'Con wingardium() puedes mover objetos que bloquean el paso. Úsalo cuando una roca esté delante.' },
            { speaker: 'Hermione', text: 'Primero quita el obstáculo, luego avanza. El orden importa, como siempre.' }
        ]
    },
    {
        id: 14, year: 3,
        title: 'SI EL CAMINO ESTÁ BLOQUEADO...',
        desc: 'Dos caminos posibles. Si hay un dementor, ataca. Si no, avanza.',
        concept: 'CONDICIONALES', size: 4,
        harry: { x: 0, y: 0, dir: 0 }, snitch: { x: 3, y: 0 },
        walls: [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
        dementors: [{ x: 2, y: 0 }], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'condicional', 'loop'],
        memoryLimit: 4, points: 175,
        dialogues: [
            { speaker: 'Hermione', text: '{player}, aquí el camino cambia. A veces hay un dementor, a veces no...' },
            { speaker: 'Hermione', text: 'Bueno, sí hay. Pero el concepto es que uses "if dementor_delante:" para preguntar.' },
            { speaker: 'Hermione', text: 'Si se cumple la condición, ejecuta las instrucciones dentro del if. Tu programa decide SOLO.' }
        ]
    },
    {
        id: 15, year: 3,
        title: 'EL TORNEO DE LOS TRES MAGOS',
        desc: 'Dementores, puertas y obstáculos. Aplica todo lo aprendido.',
        concept: 'TODO COMBINADO', size: 5,
        harry: { x: 0, y: 2, dir: 0 }, snitch: { x: 4, y: 2 },
        walls: [{ x: 2, y: 1 }, { x: 2, y: 3 }],
        dementors: [{ x: 1, y: 2 }], doors: [{ x: 3, y: 2 }], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'alohomora', 'protego', 'lumos', 'wingardium', 'condicional', 'loop'],
        memoryLimit: 6, points: 175,
        dialogues: [
            { speaker: 'McGonagall', text: '{player}, ha llegado el Torneo de los Tres Magos.' },
            { speaker: 'McGonagall', text: 'Demuestra que sabes combinar bucles, condicionales y hechizos.' },
            { speaker: 'McGonagall', text: 'Un buen programa es como un buen hechizo: preciso, eficiente y bien estructurado.' }
        ]
    },

    // ═══ 4to AÑO: FUNCIONES ═══
    {
        id: 16, year: 4,
        title: 'NOMBRA TU HECHIZO',
        desc: 'Define una función con def y reutilízala. El patrón se repite.',
        concept: 'INTRO A FUNCIONES', size: 5,
        harry: { x: 0, y: 0, dir: 0 }, snitch: { x: 4, y: 0 },
        walls: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }],
        dementors: [], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnRight', 'turnLeft', 'expelliarmus', 'funcion', 'call', 'loop'],
        memoryLimit: 6, points: 200,
        dialogues: [
            { speaker: 'Dumbledore', text: '{player}, un mago sabio no repite el mismo hechizo una y otra vez. Lo NOMBRA y lo reutiliza.' },
            { speaker: 'Dumbledore', text: 'Usa "def" para definir una función: Dale un nombre a un grupo de instrucciones.' },
            { speaker: 'Dumbledore', text: 'Luego, solo escribe el nombre de la función y se ejecutará todo su contenido. ¡Magia pura!' }
        ]
    },
    {
        id: 17, year: 4,
        title: 'EL PUENTE GUARDADO',
        desc: 'Un dragón custodia el puente. Define una función que cruce, luego llámala.',
        concept: 'BUCLE + FUNCIÓN', size: 5,
        harry: { x: 0, y: 2, dir: 0 }, snitch: { x: 4, y: 2 },
        walls: [], dementors: [], doors: [], dragons: [{ x: 1, y: 2 }], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnRight', 'turnLeft', 'wingardium', 'funcion', 'call', 'loop'],
        memoryLimit: 5, points: 200,
        dialogues: [
            { speaker: 'Ron', text: '{player}, hay un dragón en el puente. Define una función que: wingardium al dragón y luego avance.' },
            { speaker: 'Ron', text: 'Después de definir la función, solo escríbela donde la necesites. Una vez definida, se usa como cualquier instrucción.' },
            { speaker: 'Ron', text: 'Define una vez, usa mil veces. ¡Hasta yo puedo hacerlo!' }
        ]
    },
    {
        id: 18, year: 4,
        title: 'DOS FUNCIONES',
        desc: 'Dos patrones diferentes. Define dos funciones y reutilízalas.',
        concept: 'MÚLTIPLES FUNCIONES', size: 6,
        harry: { x: 0, y: 2, dir: 0 }, snitch: { x: 5, y: 2 },
        walls: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }],
        dementors: [], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnRight', 'turnLeft', 'expelliarmus', 'funcion', 'call', 'loop'],
        memoryLimit: 7, points: 225,
        dialogues: [
            { speaker: 'Hermione', text: 'Dos patrones diferentes, {player}. Define una función para cada uno.' },
            { speaker: 'Hermione', text: 'Las funciones son como herramientas en una caja: cada una hace una cosa específica.' },
            { speaker: 'Hermione', text: 'Crea las dos funciones y luego combínalas en tu programa principal.' }
        ]
    },
    {
        id: 19, year: 4,
        title: 'EL CALLEJÓN CON SORPRESA',
        desc: 'Una función con un condicional dentro. Tu función decide según lo que encuentra.',
        concept: 'CONDICIONAL + FUNCIÓN', size: 5,
        harry: { x: 0, y: 1, dir: 0 }, snitch: { x: 4, y: 1 },
        walls: [{ x: 2, y: 0 }, { x: 2, y: 2 }],
        dementors: [{ x: 1, y: 1 }], doors: [{ x: 3, y: 1 }], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'alohomora', 'condicional', 'funcion', 'call', 'loop'],
        memoryLimit: 6, points: 225,
        dialogues: [
            { speaker: 'Fred', text: '{player}, lo mejor está por venir: ¡puedes poner un "if" DENTRO de una función!' },
            { speaker: 'Fred', text: 'La función decide según lo que encuentre. Es como un hechizo inteligente.' },
            { speaker: 'George', text: 'Es como nuestros productos de la tienda: nunca sabes qué va a pasar, pero siempre funciona.' }
        ]
    },
    {
        id: 20, year: 4,
        title: 'LOS DADOS DE PROGRAMACIÓN',
        desc: 'Bucles, condicionales y funciones. Todo junto. Demuestra tu maestría.',
        concept: 'REPASO 4to AÑO', size: 6,
        harry: { x: 0, y: 2, dir: 0 }, snitch: { x: 5, y: 2 },
        walls: [], dementors: [{ x: 2, y: 2 }, { x: 4, y: 2 }],
        doors: [{ x: 1, y: 2 }], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'alohomora', 'protego', 'lumos', 'wingardium', 'condicional', 'loop', 'funcion', 'call'],
        memoryLimit: 6, points: 250,
        dialogues: [
            { speaker: 'Dumbledore', text: '{player}, has llegado lejos. Secuencias, bucles, condicionales y funciones.' },
            { speaker: 'Dumbledore', text: 'Este nivel pondrá a prueba tu capacidad de combinar todo lo aprendido.' },
            { speaker: 'Dumbledore', text: 'Usa funciones para mantener tu programa limpio y eficiente. ¡Adelante!' }
        ]
    },

    // ═══ 5to AÑO: DESAFÍOS ═══
    {
        id: 21, year: 5,
        title: 'LABERINTO I',
        desc: 'Un laberinto con paredes y obstáculos. Planifica antes de programar.',
        concept: 'LABERINTO', size: 6,
        harry: { x: 0, y: 5, dir: 1 }, snitch: { x: 5, y: 0 },
        walls: [{ x: 1, y: 5 }, { x: 1, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 5, y: 2 }],
        dementors: [{ x: 2, y: 3 }], doors: [{ x: 4, y: 4 }], dragons: [{ x: 2, y: 1 }], rocks: [{ x: 4, y: 2 }], hiddenPaths: [],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'alohomora', 'protego', 'lumos', 'wingardium', 'condicional', 'loop', 'funcion', 'call'],
        memoryLimit: 12, points: 300,
        dialogues: [
            { speaker: 'Snape', text: 'Un laberinto, {player}. Espero que tu programa sea mejor que tus anteriores trabajos.' },
            { speaker: 'Snape', text: 'Planifica antes de ejecutar. Un buen programador piensa antes de escribir.' },
            { speaker: 'Snape', text: 'Hay múltiples obstáculos. Usa funciones para organizar tu código.' }
        ]
    },
    {
        id: 22, year: 5,
        title: 'LABERINTO II',
        desc: 'Más grande, más obstáculos, caminos ocultos. Usa todo lo aprendido.',
        concept: 'LABERINTO AVANZADO', size: 6,
        harry: { x: 0, y: 0, dir: 0 }, snitch: { x: 5, y: 5 },
        walls: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 0, y: 3 }, { x: 1, y: 3 }],
        dementors: [{ x: 3, y: 1 }, { x: 3, y: 5 }],
        doors: [{ x: 5, y: 3 }], dragons: [{ x: 1, y: 5 }], rocks: [{ x: 5, y: 1 }],
        hiddenPaths: [{ x: 3, y: 0 }, { x: 3, y: 2 }],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'alohomora', 'protego', 'lumos', 'wingardium', 'condicional', 'loop', 'funcion', 'call'],
        memoryLimit: 14, points: 300,
        dialogues: [
            { speaker: 'Harry', text: '{player}, el mapa del Merodeador me ayudaría ahora. Busca patrones en el caos.' },
            { speaker: 'Harry', text: 'Hay caminos ocultos. Recuerda usar Lumos para revelarlos.' },
            { speaker: 'Harry', text: 'Este laberinto tiene de todo. Funciones y bucles serán tus mejores herramientas.' }
        ]
    },
    {
        id: 23, year: 5,
        title: 'EL TORNEO FINAL',
        desc: 'El desafío definitivo. Todo lo que aprendiste te trajo hasta aquí.',
        concept: 'TORNEO', size: 7,
        harry: { x: 0, y: 3, dir: 0 }, snitch: { x: 6, y: 3 },
        walls: [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 4, y: 1 }, { x: 4, y: 5 }],
        dementors: [{ x: 1, y: 3 }, { x: 5, y: 3 }],
        doors: [{ x: 3, y: 3 }], dragons: [{ x: 5, y: 1 }], rocks: [{ x: 5, y: 5 }],
        hiddenPaths: [{ x: 0, y: 2 }, { x: 0, y: 4 }],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'alohomora', 'protego', 'lumos', 'wingardium', 'condicional', 'loop', 'funcion', 'call'],
        memoryLimit: 12, points: 350,
        dialogues: [
            { speaker: 'Dumbledore', text: '{player}, el verdadero mago no solo lanza hechizos. Piensa, planifica y actúa.' },
            { speaker: 'Dumbledore', text: 'Este nivel tiene de todo. Es el momento de demostrar que eres un programador.' },
            { speaker: 'Dumbledore', text: 'Recuerda: divide el problema en partes pequeñas y resuelve cada una con una función.' }
        ]
    },
    {
        id: 24, year: 5,
        title: 'EL RETO DEL MAGO',
        desc: 'Cada camino es diferente. Usa condicionales y funciones para adaptarte.',
        concept: 'CONDICIONALES AVANZADOS', size: 6,
        harry: { x: 0, y: 1, dir: 0 }, snitch: { x: 5, y: 1 },
        walls: [{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 4, y: 0 }, { x: 4, y: 2 }],
        dementors: [{ x: 1, y: 1 }, { x: 3, y: 1 }],
        doors: [], dragons: [], rocks: [], hiddenPaths: [{ x: 1, y: 0 }, { x: 3, y: 0 }, { x: 1, y: 2 }, { x: 3, y: 2 }],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'lumos', 'condicional', 'loop', 'funcion', 'call'],
        memoryLimit: 8, points: 350,
        dialogues: [
            { speaker: 'McGonagall', text: '{player}, cada camino es diferente. Tu programa debe ADAPTARSE.' },
            { speaker: 'McGonagall', text: 'Usa condicionales para tomar decisiones según lo que encuentres.' },
            { speaker: 'McGonagall', text: 'Hay caminos ocultos y dementores. Tus funciones deben ser inteligentes.' }
        ]
    },
    {
        id: 25, year: 5,
        title: 'EL PODER DEL HECHICERO',
        desc: 'El nivel final de este año. Todo combinado. Demuestra tu poder.',
        concept: 'EL FINAL', size: 7,
        harry: { x: 3, y: 6, dir: 1 }, snitch: { x: 3, y: 0 },
        walls: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }],
        dementors: [{ x: 0, y: 3 }, { x: 3, y: 3 }, { x: 6, y: 3 }],
        doors: [{ x: 3, y: 5 }],
        dragons: [{ x: 1, y: 0 }, { x: 5, y: 0 }],
        rocks: [{ x: 3, y: 1 }],
        hiddenPaths: [{ x: 0, y: 0 }, { x: 6, y: 0 }],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'alohomora', 'protego', 'lumos', 'wingardium', 'condicional', 'loop', 'funcion', 'call'],
        memoryLimit: 14, points: 500,
        dialogues: [
            { speaker: 'Dumbledore', text: '{player}, este es el momento. Has recorrido un largo camino.' },
            { speaker: 'Dumbledore', text: 'Secuencias, bucles, condicionales, funciones... todo te ha preparado para esto.' },
            { speaker: 'Dumbledore', text: 'Demuestra que eres digno del título de Programador Mago. ¡Adelante!' }
        ]
    },

    // ═══ 6to AÑO: COMPOSICIÓN DE FUNCIONES ═══
    {
        id: 26, year: 6,
        title: 'LA BIBLIOTECA DE HECHIZOS',
        desc: 'Define funciones pequeñas y una función principal que las llame.',
        concept: 'COMPOSICIÓN', size: 5,
        harry: { x: 0, y: 0, dir: 0 }, snitch: { x: 4, y: 0 },
        walls: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }],
        dementors: [], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnRight', 'turnLeft', 'expelliarmus', 'funcion', 'call', 'loop'],
        memoryLimit: 6, points: 400,
        dialogues: [
            { speaker: 'Hermione', text: '{player}, lo más poderoso de las funciones es que una puede llamar a OTRA.' },
            { speaker: 'Hermione', text: 'Define funciones pequeñas: una para avanzar y atacar, otra para girar y avanzar.' },
            { speaker: 'Hermione', text: 'Luego crea una función "resolver()" que llame a las otras. Como piezas de un rompecabezas.' }
        ]
    },
    {
        id: 27, year: 6,
        title: 'REFACTORIZANDO EL PASILLO',
        desc: 'Tu programa funciona pero es muy largo. Usa funciones para acortarlo.',
        concept: 'REFACTORIZACIÓN', size: 6,
        harry: { x: 0, y: 0, dir: 0 }, snitch: { x: 5, y: 0 },
        walls: [], dementors: [{ x: 2, y: 0 }, { x: 4, y: 0 }], doors: [], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'expelliarmus', 'funcion', 'call', 'loop'],
        memoryLimit: 4, points: 400,
        dialogues: [
            { speaker: 'Ron', text: '{player}, funciona, pero... ¿podría ser más CORTO? Mira qué instrucciones se repiten.' },
            { speaker: 'Ron', text: 'Eso se llama "refactorizar": mejorar el código sin cambiar lo que hace.' },
            { speaker: 'Ron', text: 'Las funciones son perfectas para esto. Menos código, más legible, más eficiente.' }
        ]
    },
    {
        id: 28, year: 6,
        title: 'TRES FUNCIONES, UN OBJETIVO',
        desc: 'Tres funciones que se llaman entre sí para resolver el laberinto.',
        concept: 'COMBINACIÓN DE FUNCIONES', size: 6,
        harry: { x: 0, y: 2, dir: 0 }, snitch: { x: 5, y: 2 },
        walls: [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 3 }, { x: 3, y: 4 }],
        dementors: [{ x: 1, y: 2 }], doors: [{ x: 4, y: 2 }], dragons: [], rocks: [], hiddenPaths: [],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'alohomora', 'condicional', 'funcion', 'call', 'loop'],
        memoryLimit: 6, points: 450,
        dialogues: [
            { speaker: 'Dumbledore', text: '{player}, divide el problema en partes pequeñas. Una función para cada parte.' },
            { speaker: 'Dumbledore', text: 'Luego combínalas. Así se resuelven los problemas más difíciles.' },
            { speaker: 'Dumbledore', text: 'Tres funciones trabajando juntas como un equipo de magos. Cada una hace su parte.' }
        ]
    },
    {
        id: 29, year: 6,
        title: 'EL LABERINTO CAMBIANTE',
        desc: 'Los dementores cambian de posición. Tus funciones deben adaptarse con condicionales.',
        concept: 'FUNCIONES ADAPTATIVAS', size: 6,
        harry: { x: 0, y: 1, dir: 0 }, snitch: { x: 5, y: 1 },
        walls: [{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 4, y: 0 }, { x: 4, y: 2 }],
        dementors: [{ x: 1, y: 1 }, { x: 3, y: 1 }],
        doors: [], dragons: [], rocks: [], hiddenPaths: [{ x: 1, y: 0 }, { x: 3, y: 0 }, { x: 1, y: 2 }, { x: 3, y: 2 }],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'lumos', 'condicional', 'funcion', 'call', 'loop'],
        memoryLimit: 8, points: 450,
        dialogues: [
            { speaker: 'Fred', text: '{player}, este laberinto es impredecible. Los dementores aparecen donde sea.' },
            { speaker: 'Fred', text: 'Necesitarás funciones con condicionales dentro para adaptarte.' },
            { speaker: 'George', text: 'Como nuestros productos: lo mejor es no saber qué va a pasar. ¡Pero tu programa lo sabrá!' }
        ]
    },
    {
        id: 30, year: 6,
        title: 'EL LEGADO DEL PROGRAMADOR',
        desc: 'El nivel final de todo el juego. Demuestra que eres un verdadero programador.',
        concept: 'EL LEGADO', size: 8,
        harry: { x: 0, y: 4, dir: 0 }, snitch: { x: 7, y: 4 },
        walls: [
            { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 },
            { x: 4, y: 1 }, { x: 4, y: 5 },
            { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }
        ],
        dementors: [{ x: 1, y: 4 }, { x: 3, y: 4 }, { x: 5, y: 4 }],
        doors: [{ x: 4, y: 4 }],
        dragons: [{ x: 2, y: 1 }, { x: 6, y: 1 }],
        rocks: [{ x: 5, y: 1 }],
        hiddenPaths: [{ x: 0, y: 3 }, { x: 7, y: 3 }],
        availableCards: ['move', 'turnLeft', 'turnRight', 'expelliarmus', 'alohomora', 'protego', 'lumos', 'wingardium', 'condicional', 'loop', 'funcion', 'call'],
        memoryLimit: 14, points: 1000,
        dialogues: [
            { speaker: 'Dumbledore', text: '{player}, este es el final. Todos los profesores observan.' },
            { speaker: 'McGonagall', text: 'Has recorrido un largo camino desde el primer "avanzar()". Hasta aquí has llegado.' },
            { speaker: 'Snape', text: 'No diré que estoy impresionado, pero... bueno, lo estoy. Un poco.' },
            { speaker: 'Harry', text: '{player}, cada línea de código, cada función, cada decisión te trajo hasta aquí.' },
            { speaker: 'Hermione', text: 'Eres un PROGRAMADOR, {player}. No es magia, es lógica y dedicación.' },
            { speaker: 'Ron', text: 'Y yo que pensaba que los bucles eran difíciles... ¡Mira hasta dónde llegaste!' },
            { speaker: 'Dumbledore', text: 'El legado del programador no es el código que escribes, sino los problemas que resuelves. ¡Felicidades, {player}!' }
        ]
    }
];

const DEBUG_PROGRAMS = {
    1: { program: [{ cardKey: 'move', type: 'move' }], error: 'Solo avanzas 1 paso. Necesitas 2 movimientos para llegar a x=2.' },
    2: { program: [{ cardKey: 'move', type: 'move' }, { cardKey: 'move', type: 'move' }, { cardKey: 'turnRight', type: 'turnRight' }], error: 'Después de girar falta avanzar hacia la Snitch en y=1.' },
    3: { program: [{ cardKey: 'move', type: 'move' }, { cardKey: 'turnRight', type: 'turnRight' }, { cardKey: 'move', type: 'move' }, { cardKey: 'move', type: 'move' }], error: 'Falta un giro a la izquierda para subir a y=3.' },
    4: { program: [{ cardKey: 'move', type: 'move' }, { cardKey: 'move', type: 'move' }], error: 'No usaste expelliarmus(). El dementor está en x=2.' },
    5: { program: [{ cardKey: 'move', type: 'move' }, { cardKey: 'move', type: 'move' }, { cardKey: 'expelliarmus', type: 'spell' }, { cardKey: 'move', type: 'move' }], error: 'Falta girar al inicio. Harry empieza en (0,0) mirando a la derecha y necesita bajar.' }
};

// ════════════════════════════════════════════════════════════════
//  GAME STATE
// ════════════════════════════════════════════════════════════════

let gameState = {
    currentLevel: null,
    program: [],
    harry: { x: 0, y: 0, dir: 0 },
    dementors: [],
    doors: [],
    dragons: [],
    rocks: [],
    hiddenPaths: [],
    revealedPaths: [],
    isRunning: false,
    aborted: false,
    won: false,
    speed: 700,
    totalPoints: 0,
    completedLevels: new Set(),
    stars: {},
    housePoints: 0,
    house: null,
    character: localStorage.getItem('harryCharacter') || 'harry',
    musicOn: false,
    loopOpen: false,
    condOpen: false,
    sinoOpen: false,
    funcOpen: false,
    funcDefName: null,
    functions: {},
    dialogueIndex: 0,
    gameMode: 'normal',
    attempts: 0,
    customSpells: JSON.parse(localStorage.getItem('harrySpells') || '[]'),
    recordingSpell: null
};

// ════════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════════

function init() {
    createStars();
    const savedHouse = localStorage.getItem('harryHouse');
    if (savedHouse) {
        gameState.house = savedHouse;
        document.querySelectorAll('.house-btn').forEach(b => {
            if (b.dataset.house === savedHouse) b.classList.add('selected');
        });
        document.getElementById('houseScoreItem').style.display = 'inline-block';
        updateHouseDisplay();
    }
    const savedChar = localStorage.getItem('harryCharacter');
    if (savedChar && CHARACTERS[savedChar]) {
        gameState.character = savedChar;
        document.querySelectorAll('.char-btn').forEach(b => {
            if (b.dataset.char === savedChar) b.classList.add('selected');
        });
        document.getElementById('charScoreItem').style.display = 'inline-block';
        updateCharDisplay();
    }
    renderLevels();
    loadProgress();
}

function createStars() {
    const c = document.getElementById('stars');
    for (let i = 0; i < 60; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.animationDelay = Math.random() * 2 + 's';
        c.appendChild(s);
    }
}

// ════════════════════════════════════════════════════════════════
//  HOUSE & CHARACTER SELECTION
// ════════════════════════════════════════════════════════════════

function selectHouse(house) {
    gameState.house = house;
    localStorage.setItem('harryHouse', house);
    document.querySelectorAll('.house-btn').forEach(b => b.classList.remove('selected'));
    document.querySelector(`.house-btn[data-house="${house}"]`).classList.add('selected');
    document.getElementById('houseScoreItem').style.display = 'inline-block';
    updateHouseDisplay();
}

function selectCharacter(char) {
    if (!CHARACTERS[char]) return;
    gameState.character = char;
    localStorage.setItem('harryCharacter', char);
    document.querySelectorAll('.char-btn').forEach(b => b.classList.remove('selected'));
    document.querySelector(`.char-btn[data-char="${char}"]`).classList.add('selected');
    document.getElementById('charScoreItem').style.display = 'inline-block';
    updateCharDisplay();
}

function updateHouseDisplay() {
    const names = { gryffindor: '🦁 GRYFFINDOR', hufflepuff: '🦡 HUFFLEPUFF', ravenclaw: '🦅 RAVENCLAW', slytherin: '🐍 SLYTHERIN' };
    document.getElementById('houseName').textContent = names[gameState.house] || '';
    document.getElementById('housePoints').textContent = gameState.housePoints;
}

function updateCharDisplay() {
    const char = CHARACTERS[gameState.character];
    if (char) {
        document.getElementById('charNameDisplay').textContent = `${char.emoji} ${char.name}`;
    }
}

function getCharName() {
    const char = CHARACTERS[gameState.character];
    return char ? char.name : 'Harry';
}

function getCharEmoji() {
    const char = CHARACTERS[gameState.character];
    return char ? char.emoji : '⚡';
}

function setGameMode(mode) {
    gameState.gameMode = mode;
    renderLevels();
}

function renderLevels() {
    const grid = document.getElementById('levelsGrid');
    grid.innerHTML = '';
    const isDebug = gameState.gameMode === 'debugging';
    const isOpt = gameState.gameMode === 'optimization';

    LEVELS.forEach((level, index) => {
        const card = document.createElement('div');
        card.className = 'level-card';

        const completed = gameState.completedLevels.has(level.id);
        const stars = gameState.stars[level.id] || 0;
        const prevUnlocked = index === 0 || gameState.completedLevels.has(LEVELS[index - 1].id);

        if (completed) {
            card.classList.add('completed');
        } else if (!prevUnlocked) {
            card.classList.add('locked');
        }

        const añoInfo = NIVELES_ANIOS.find(a => a.año === level.year) || NIVELES_ANIOS[0];
        const extraLabel = isOpt ? `🏆 LÍMITE: ${level.memoryLimit} tarjetas` : isDebug ? '🐛 Encuentra el error' : '';
        const starDisplay = completed && stars > 0 ? ('★'.repeat(stars) + '☆'.repeat(3 - stars)) : '';

        card.innerHTML = `
      ${starDisplay ? `<div class="level-stars">${starDisplay}</div>` : ''}
      <div class="level-number">${isDebug ? '🐛 ' : isOpt ? '🏆 ' : ''}NIVEL ${level.id}</div>
      <div class="level-year">${añoInfo.nombre}</div>
      <div class="level-title">${level.title}</div>
      <div class="level-desc">${level.desc}</div>
      ${extraLabel ? `<div class="level-concept">${extraLabel}</div>` : ''}
      <div class="level-concept">📚 ${level.concept}</div>
      ${!isDebug && !isOpt && !completed ? `<div class="level-concept" style="margin-top:6px;">🧠 Límite: ${level.memoryLimit} tarjetas</div>` : ''}
    `;

        if (!card.classList.contains('locked')) {
            card.onclick = () => startLevel(level.id);
        }
        grid.appendChild(card);
    });
}

function loadProgress() {
    const saved = localStorage.getItem('harryPotterGame');
    if (saved) {
        const data = JSON.parse(saved);
        gameState.totalPoints = data.totalPoints || 0;
        gameState.completedLevels = new Set(data.completedLevels || []);
        gameState.stars = data.stars || {};
        gameState.housePoints = data.housePoints || 0;
        updateScoreDisplay();
    }
}

function saveProgress() {
    localStorage.setItem('harryPotterGame', JSON.stringify({
        totalPoints: gameState.totalPoints,
        completedLevels: Array.from(gameState.completedLevels),
        stars: gameState.stars,
        housePoints: gameState.housePoints
    }));
}

function getTotalStars() {
    return Object.values(gameState.stars).reduce((a, b) => a + b, 0);
}

function getMaxStars() {
    return LEVELS.length * 3;
}

function updateScoreDisplay() {
    const total = getTotalStars();
    const max = getMaxStars();
    document.getElementById('totalPoints').textContent = gameState.totalPoints;
    document.getElementById('completedLevels').textContent = `${gameState.completedLevels.size}/${LEVELS.length}`;
    document.getElementById('totalStars').textContent = `${total}/${max}`;
    document.getElementById('housePoints').textContent = gameState.housePoints;
}

function getUsedCardCount() {
    return gameState.program.filter(c =>
        c.type !== 'loopStart' && c.type !== 'loopEnd' &&
        c.type !== 'condStart' && c.type !== 'condEnd' && c.type !== 'sinoStart' &&
        c.type !== 'funcStart' && c.type !== 'funcEnd'
    ).length;
}

// ════════════════════════════════════════════════════════════════
//  DIALOGUE SYSTEM
// ════════════════════════════════════════════════════════════════

const DIALOGUE_AVATARS = {
    Hagrid: '🧑‍🌾',
    Ron: '♟️',
    Hermione: '📖',
    Snape: '🧙',
    Harry: '⚡',
    Dumbledore: '🧙‍♂️',
    Luna: '🦄',
    Fred: '🃏',
    George: '🃏',
    McGonagall: '👩‍🏫'
};

function showDialogue(d) {
    const avatar = DIALOGUE_AVATARS[d.speaker] || '🧙';
    document.getElementById('dialogAvatar').textContent = avatar;
    document.getElementById('dialogSpeaker').textContent = d.speaker;
    let text = d.text;
    text = text.replace(/\{player\}/g, getCharName());
    document.getElementById('dialogText').textContent = text;
    document.getElementById('dialogOverlay').style.display = 'flex';
}

function nextDialogue() {
    gameState.dialogueIndex++;
    const level = gameState.currentLevel;
    if (level && level.dialogues && gameState.dialogueIndex < level.dialogues.length) {
        showDialogue(level.dialogues[gameState.dialogueIndex]);
    } else {
        closeDialogues();
    }
}

function skipDialogues() {
    closeDialogues();
}

function closeDialogues() {
    document.getElementById('dialogOverlay').style.display = 'none';
    showGameScreen();
}

function showGameScreen() {
    const level = gameState.currentLevel;
    const añoInfo = NIVELES_ANIOS.find(a => a.año === level.year) || NIVELES_ANIOS[0];
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    document.getElementById('currentLevelTitle').textContent =
        `${añoInfo.nombre} — NIVEL ${level.id}: ${level.title}`;
    document.getElementById('currentLevelDesc').textContent = level.desc;

    const debugInfo = document.getElementById('cardCountBar').querySelector('#debugInfo');
    if (gameState.gameMode === 'debugging' && DEBUG_PROGRAMS[level.id]) {
        gameState.program = DEBUG_PROGRAMS[level.id].program.map(c => ({ ...c }));
        debugInfo.style.display = 'inline';
    } else {
        debugInfo.style.display = 'none';
    }

    const limitSpan = document.getElementById('memoryLimit');
    if (gameState.gameMode === 'normal') {
        limitSpan.style.display = 'inline';
        limitSpan.textContent = `🧠 ${level.memoryLimit}`;
        limitSpan.style.color = level.memoryLimit <= 5 ? '#e74c3c' : 'var(--green-move)';
    } else if (gameState.gameMode === 'optimization') {
        limitSpan.style.display = 'inline';
        limitSpan.textContent = `🏆 ${level.memoryLimit}`;
        limitSpan.style.color = '#f39c12';
    } else {
        limitSpan.style.display = 'none';
    }

    document.getElementById('attemptDisplay').style.display = 'none';
    document.getElementById('btnCloseFunc').style.display = 'none';
    renderCards();
    renderBoard();
    renderProgram();
    document.getElementById('btnRun').disabled = false;
    showLevelInstructions(level, añoInfo);
}

// ════════════════════════════════════════════════════════════════
//  START LEVEL
// ════════════════════════════════════════════════════════════════

function startLevel(levelId) {
    const level = LEVELS.find(l => l.id === levelId);
    if (!level) return;

    if (gameState.gameMode === 'debugging' && !DEBUG_PROGRAMS[levelId]) {
        showMessage('🐛', 'MODO DEBUG', 'Este nivel aún no tiene un programa predefinido para depurar. Prueba otro nivel o cambia de modo.', false);
        return;
    }

    gameState.attempts = 0;

    gameState.currentLevel = level;
    gameState.program = [];
    gameState.functions = {};
    gameState.harry = { ...level.harry };
    gameState.dementors = level.dementors.map(d => ({ ...d, active: true }));
    gameState.doors = level.doors.map(d => ({ ...d, open: false }));
    gameState.dragons = level.dragons.map(d => ({ ...d, active: true }));
    gameState.rocks = level.rocks.map(r => ({ ...r, active: true }));
    gameState.hiddenPaths = level.hiddenPaths.map(h => ({ ...h, revealed: false }));
    gameState.revealedPaths = [];
    gameState.isRunning = false;
    gameState.aborted = false;
    gameState.won = false;
    gameState.loopOpen = false;
    gameState.condOpen = false;
    gameState.sinoOpen = false;
    gameState.funcOpen = false;
    gameState.funcDefName = null;
    document.getElementById('btnCloseFunc').style.display = 'none';

    // Check for dialogues
    if (level.dialogues && level.dialogues.length > 0 && gameState.gameMode !== 'debugging') {
        gameState.dialogueIndex = 0;
        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'none';
        showDialogue(level.dialogues[0]);
    } else {
        showGameScreen();
    }
}

function showLevelInstructions(level, añoInfo) {
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('message');
    let extraTips = '';

    if (gameState.gameMode === 'debugging') {
        extraTips = '<br><br><strong>🐛 MODO DEBUG:</strong> El programa tiene errores. Encuéntralos y corrígelos.';
        if (DEBUG_PROGRAMS[level.id]) {
            extraTips += '<br><span style="color:#f39c12;">Pista: ' + DEBUG_PROGRAMS[level.id].error + '</span>';
        }
    } else if (gameState.gameMode === 'optimization') {
        extraTips = `<br><br><strong>🏆 OPTIMIZACIÓN:</strong> Completa el nivel usando máximo ${level.memoryLimit} tarjetas.`;
    } else {
        extraTips = `<br><br><strong>🧠 LÍMITE DE MEMORIA:</strong> Puedes usar hasta <strong>${level.memoryLimit}</strong> tarjetas.`;
    }

    const charName = getCharName();
    message.innerHTML = `
    <h2>📖 ${añoInfo.nombre}</h2>
    <p>
      <strong>${level.title}</strong><br>
      ${level.desc}<br><br>
      <strong>Concepto:</strong> 📚 ${level.concept}<br><br>
      <strong>💡 CÓMO JUGAR:</strong><br>
      Haz clic en las tarjetas del panel izquierdo para agregarlas a tu programa.<br>
      Presiona "EJECUTAR" para ver a ${charName} seguir tus instrucciones.<br>
      Puedes quitar tarjetas con ✕ o reordenarlas con ▲/▼.<br><br>
      <strong>for i in range(n):</strong> Abre un bucle. Las tarjetas dentro se repiten.<br>
      <strong>if condicion:</strong> Abre un condicional. Las tarjetas dentro se ejecutan si se cumple.<br>
      <strong>def nombre():</strong> Define una función reutilizable.<br>
      ${extraTips}
    </p>
    <div class="controls" style="justify-content: center;">
      <button class="btn btn-run" onclick="closeMessage()">¡COMENZAR! ▶</button>
    </div>
  `;
    overlay.style.display = 'block';
    message.style.display = 'block';
}

function goToMenu() {
    if (gameState.isRunning) return;
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    renderLevels();
    updateScoreDisplay();
}

// ════════════════════════════════════════════════════════════════
//  RENDER CARDS (palette)
// ════════════════════════════════════════════════════════════════

function renderCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    const level = gameState.currentLevel;

    // Show function call cards for defined functions
    const funcKeys = Object.keys(gameState.functions);
    funcKeys.forEach(fName => {
        const card = document.createElement('div');
        card.className = 'card card-py-call';
        card.innerHTML = `<span style="font-family:'Courier New',monospace;font-size:0.85em;">${fName}()</span>`;
        card.onclick = () => {
            if (gameState.isRunning) return;
            if (gameState.funcOpen) return;
            if (gameState.loopOpen || gameState.condOpen) {
                gameState.program.push({ cardKey: 'call', type: 'funcCall', funcName: fName, class: 'card-py-call', icon: '⚡', name: `${fName}()` });
                renderProgram();
            } else {
                addCardToProgram('call', null, fName);
            }
        };
        container.appendChild(card);
    });

    level.availableCards.forEach(cardKey => {
        const cardData = CARD_TYPES[cardKey];
        if (!cardData) return;
        if (cardKey === 'call') return;

        const card = document.createElement('div');
        card.className = `card ${cardData.class}`;
        card.dataset.type = cardKey;

        let extraHTML = '';
        let codeLabel = cardData.name;

        if (cardKey === 'loop') {
            codeLabel = 'for i in range(';
            extraHTML = `<input type="number" class="loop-input" id="loop-count-${cardKey}" value="3" min="2" max="10" onclick="event.stopPropagation()" onmousedown="event.stopPropagation()"><span style="font-family:'Courier New',monospace;font-size:0.85em;">):</span>`;
        } else if (cardKey === 'condicional') {
            codeLabel = 'if';
            extraHTML = `<span style="font-family:'Courier New',monospace;font-size:0.65em;color:#ffcb6b;margin-left:2px;"> ... :</span>`;
        } else if (cardKey === 'funcion') {
            codeLabel = 'def ';
            extraHTML = `<span style="font-family:'Courier New',monospace;font-size:0.65em;color:#ffcb6b;margin-left:2px;"> nombre():</span>`;
        }

        card.innerHTML = `
      <span style="font-family:'Courier New',monospace;font-size:0.85em;">${codeLabel}</span>
      ${extraHTML}
    `;

        card.onclick = () => {
            if (gameState.isRunning) return;
            let count = null;
            if (cardKey === 'loop') {
                const input = document.getElementById(`loop-count-${cardKey}`);
                if (input) count = parseInt(input.value) || 3;
            }
            addCardToProgram(cardKey, count);
        };
        container.appendChild(card);
    });

    // Record spell button (keep for legacy support)
    if (level.availableCards.includes('funcion')) {
        const grabarBtn = document.createElement('div');
        grabarBtn.className = 'card card-py-func';
        grabarBtn.innerHTML = '<span style="font-family:\'Courier New\',monospace;font-size:0.7em;">💾 grabar()</span>';
        grabarBtn.onclick = startRecording;
        container.appendChild(grabarBtn);
    }
}

function startRecording() {
    if (gameState.isRunning) return;
    if (gameState.program.length === 0) {
        showMessageSimple('⚠️', 'Primero agrega tarjetas al programa para grabarlas como hechizo.');
        return;
    }
    const name = prompt('Nombre del hechizo:', 'mi_hechizo');
    if (!name || !name.trim()) return;

    gameState.customSpells.push({ name: name.trim(), program: JSON.parse(JSON.stringify(gameState.program)) });
    localStorage.setItem('harrySpells', JSON.stringify(gameState.customSpells));
    renderCards();
    showMessageSimple('✅', `¡Hechizo "${name.trim()}" grabado!`);
}

// ════════════════════════════════════════════════════════════════
//  RENDER BOARD
// ════════════════════════════════════════════════════════════════

function renderBoard() {
    const board = document.getElementById('board');
    const level = gameState.currentLevel;
    const size = level.size;
    const charData = CHARACTERS[gameState.character] || CHARACTERS.harry;

    board.style.gridTemplateColumns = `repeat(${size}, 72px)`;
    board.innerHTML = '';

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.x = x;
            cell.dataset.y = y;

            if (level.walls.some(w => w.x === x && w.y === y)) {
                cell.classList.add('wall');
            }

            const hiddenPath = gameState.hiddenPaths.find(h => h.x === x && h.y === y);
            if (hiddenPath) {
                cell.classList.add('hidden-path');
                if (hiddenPath.revealed) {
                    cell.classList.add('revealed');
                }
            }

            const dragon = gameState.dragons.find(d => d.x === x && d.y === y && d.active);
            if (dragon) {
                cell.classList.add('dragon');
                const entity = document.createElement('div');
                entity.className = 'entity';
                entity.innerHTML = `<img src="${IMAGES.dragon}" alt="Dragón">`;
                cell.appendChild(entity);
            }

            const rock = gameState.rocks.find(r => r.x === x && r.y === y && r.active);
            if (rock) {
                const entity = document.createElement('div');
                entity.className = 'entity';
                entity.innerHTML = `<img src="${IMAGES.rock}" alt="Roca">`;
                cell.appendChild(entity);
            }

            if (level.snitch.x === x && level.snitch.y === y) {
                const entity = document.createElement('div');
                entity.className = 'entity';
                entity.id = 'snitch-entity';
                entity.innerHTML = `<img src="${IMAGES.snitch}" alt="Snitch">`;
                cell.appendChild(entity);
            }

            if (gameState.harry.x === x && gameState.harry.y === y) {
                const entity = document.createElement('div');
                entity.className = 'entity harry-moving';
                entity.id = 'harry-entity';
                entity.innerHTML = `<img src="${charData.image}" alt="${charData.name}">`;
                cell.appendChild(entity);
                const arrow = document.createElement('div');
                arrow.className = 'direction-arrow';
                arrow.textContent = ['➡️', '⬇️', '⬅️', '⬆️'][gameState.harry.dir];
                cell.appendChild(arrow);
            }

            const dementor = gameState.dementors.find(d => d.x === x && d.y === y && d.active);
            if (dementor) {
                const entity = document.createElement('div');
                entity.className = 'entity';
                entity.id = `dementor-${x}-${y}`;
                entity.innerHTML = `<img src="${IMAGES.dementor}" alt="Dementor">`;
                cell.appendChild(entity);
            }

            const door = gameState.doors.find(d => d.x === x && d.y === y && !d.open);
            if (door) {
                const entity = document.createElement('div');
                entity.className = 'entity';
                entity.id = `door-${x}-${y}`;
                entity.innerHTML = `<img src="${IMAGES.door}" alt="Puerta">`;
                cell.appendChild(entity);
            }

            board.appendChild(cell);
        }
    }
}

// ════════════════════════════════════════════════════════════════
//  RENDER PROGRAM — code view
// ════════════════════════════════════════════════════════════════

function renderProgram() {
    const area = document.getElementById('programArea');
    area.innerHTML = '';

    if (gameState.program.length === 0 && Object.keys(gameState.functions).length === 0) {
        area.innerHTML = '<p style="color: #555; text-align: center; width: 100%; padding: 20px; font-size: 0.45em; font-family: \'Courier New\', monospace;"># Haz clic en las tarjetas para agregar código</p>';
        updateCardCount();
        return;
    }

    let lineNumber = 1;
    let loopDepth = 0, condDepth = 0, inSino = false;
    let currentLoopBody = null, currentCondBody = null, currentCondBlock = null, currentSinoBody = null;
    let insideFuncBlock = false;

    // Render completed functions first (before main program)
    Object.keys(gameState.functions).forEach(fName => {
        const funcCards = gameState.functions[fName];
        const funcEl = createFuncBlock(fName, funcCards, lineNumber);
        lineNumber += funcCards.length;
        area.appendChild(funcEl);
    });

    gameState.program.forEach((card, index) => {
        if (card.type === 'funcStart') {
            insideFuncBlock = true;
            const funcBlock = document.createElement('div');
            funcBlock.className = 'func-block';
            funcBlock.id = `func-block-${index}`;

            const header = document.createElement('div');
            header.className = 'block-header';
            const fName = card.funcName || 'funcion';
            header.innerHTML = `<span class="py-keyword" style="color:#c792ea;">def</span> <span class="py-func" style="color:#82aaff;">${fName}</span>():`;
            funcBlock.appendChild(header);

            const body = document.createElement('div');
            body.className = 'block-body';
            body.id = `func-body-${index}`;
            funcBlock.appendChild(body);

            if (gameState.funcOpen) {
                const footer = document.createElement('div');
                footer.className = 'block-footer';
                const closeBtn = document.createElement('button');
                closeBtn.className = 'block-close-btn';
                closeBtn.textContent = 'CERRAR DEF';
                closeBtn.style.cssText = 'color:#e67e22;border:1px solid #e67e22;';
                closeBtn.onclick = closeFunc;
                footer.appendChild(closeBtn);

                const rmBtn = document.createElement('button');
                rmBtn.className = 'remove-btn';
                rmBtn.textContent = '✕';
                rmBtn.style.cssText = 'margin-left:auto;position:static;top:auto;right:auto;background:transparent;color:#e74c3c;border:none;font-size:0.6em;cursor:pointer;';
                rmBtn.onclick = () => removeCard(index);
                footer.appendChild(rmBtn);

                funcBlock.appendChild(footer);
            }

            area.appendChild(funcBlock);
            document.getElementById('btnCloseFunc').style.display = gameState.funcOpen ? 'inline-block' : 'none';
            return;
        }
        if (card.type === 'funcEnd') {
            insideFuncBlock = false;
            return;
        }

        if (card.type === 'loopStart') {
            const block = createCodeBlock('loop', card, index, lineNumber);
            currentLoopBody = block.body;
            loopDepth = 1;
            const target = document.querySelector('.func-block:last-child .block-body');
            if (insideFuncBlock && target) {
                target.appendChild(block.el);
            } else {
                area.appendChild(block.el);
            }
            lineNumber++;
            if (gameState.loopOpen && index === gameState.program.length - 1) {
                const hint = el('p', 'block-hint', '# Agrega tarjetas dentro del bucle');
                block.body.appendChild(hint);
            }
            return;
        }
        if (card.type === 'loopEnd') {
            loopDepth = 0; currentLoopBody = null;
            return;
        }

        if (card.type === 'condStart') {
            const block = createCondCodeBlock(card, index, lineNumber);
            currentCondBody = block.body;
            currentCondBlock = block.el;
            currentSinoBody = null;
            inSino = false;
            condDepth = 1;
            const target = document.querySelector('.func-block:last-child .block-body');
            if (insideFuncBlock && target) {
                target.appendChild(block.el);
            } else {
                area.appendChild(block.el);
            }
            lineNumber++;
            return;
        }
        if (card.type === 'sinoStart') {
            inSino = true;
            const sinoDiv = document.createElement('div');
            sinoDiv.className = 'sino-block';
            const label = document.createElement('div');
            label.className = 'sino-label';
            label.textContent = 'else:';
            sinoDiv.appendChild(label);
            currentSinoBody = sinoDiv;
            if (currentCondBlock) {
                currentCondBlock.appendChild(sinoDiv);
            }
            return;
        }
        if (card.type === 'condEnd') {
            condDepth = 0; currentCondBody = null; currentCondBlock = null; currentSinoBody = null; inSino = false;
            return;
        }

        if (card.type === 'funcStart') {
            return;
        }
        if (card.type === 'funcEnd') {
            return;
        }

        const lineEl = createCodeLine(card, index, lineNumber);

        if (card.type === 'funcCall') {
            lineEl.querySelector('.py-code').textContent = `${card.funcName}()`;
        }

        if (insideFuncBlock) {
            const bodyEl = document.querySelector('.func-block:last-child .block-body');
            if (bodyEl) bodyEl.appendChild(lineEl);
            else area.appendChild(lineEl);
        } else if (loopDepth && currentLoopBody) {
            currentLoopBody.appendChild(lineEl);
        } else if (condDepth && inSino && currentSinoBody) {
            currentSinoBody.appendChild(lineEl);
        } else if (condDepth && currentCondBody) {
            currentCondBody.appendChild(lineEl);
        } else {
            area.appendChild(lineEl);
        }
        lineNumber++;
    });

    if (gameState.loopOpen) {
        const hint = el('p', 'block-hint', '# 🔽 BUCLE ABIERTO — Las tarjetas se agregan dentro. Presiona "CERRAR BUCLE"');
        hint.style.cssText += ';color:var(--purple-loop);';
        area.appendChild(hint);
    }

    if (gameState.condOpen) {
        const hint = el('p', 'block-hint', '# 🔽 CONDICIONAL ABIERTO — Las tarjetas se agregan dentro. Presiona "CERRAR SI"');
        hint.style.cssText += ';color:#e74c3c;';
        area.appendChild(hint);
    }

    if (gameState.funcOpen) {
        const hint = el('p', 'block-hint', '# 🔽 DEFINIENDO FUNCIÓN — Las tarjetas se agregan dentro');
        hint.style.cssText += ';color:#e67e22;';
        area.appendChild(hint);
    }

    document.getElementById('btnCloseFunc').style.display = gameState.funcOpen ? 'inline-block' : 'none';

    updateCardCount();
}

function createCodeLine(card, index, lineNum) {
    const el2 = document.createElement('div');
    const cardData = CARD_TYPES[card.cardKey];
    const cls = cardData ? cardData.class : 'card-py';
    el2.className = `program-card ${cls}`;
    el2.id = `program-card-${index}`;

    let code = '';
    if (card.type === 'move') code = 'avanzar()';
    else if (card.type === 'turnLeft') code = 'girar_izquierda()';
    else if (card.type === 'turnRight') code = 'girar_derecha()';
    else if (card.type === 'spell') code = 'expelliarmus()';
    else if (card.type === 'key') code = 'alohomora()';
    else if (card.type === 'protego') code = 'protego()';
    else if (card.type === 'lumos') code = 'lumos()';
    else if (card.type === 'wingardium') code = 'wingardium()';
    else if (card.type === 'funcCall') code = `${card.funcName}()`;
    else code = card.name || '?';

    el2.innerHTML = `
    <span class="line-number">${lineNum}</span>
    <span class="py-code">${code}</span>
    <div class="reorder-group">
      <button class="reorder-btn" onclick="moveCard(${index},-1)">▲</button>
      <button class="reorder-btn" onclick="moveCard(${index},1)">▼</button>
    </div>
    <button class="remove-btn" onclick="removeCard(${index})">✕</button>
  `;

    return el2;
}

function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
}

function createCodeBlock(type, card, index, lineNum) {
    const block = document.createElement('div');
    block.className = type === 'loop' ? 'loop-block' : 'cond-block';

    const header = document.createElement('div');
    header.className = 'block-header';
    header.innerHTML = type === 'loop'
        ? `<span class="line-number">${lineNum}</span><span class="py-keyword">for</span> i in <span class="py-keyword">range</span>(<span class="py-number">${card.count}</span>):`
        : `<span class="line-number">${lineNum}</span><span class="py-keyword">if</span> <span class="py-param">${card.condition || '...'}</span>:`;

    block.appendChild(header);

    const body = document.createElement('div');
    body.className = 'block-body';
    body.id = `${type}-body-${index}`;
    block.appendChild(body);

    const footer = document.createElement('div');
    footer.className = 'block-footer';
    const closeBtn = document.createElement('button');
    closeBtn.className = 'block-close-btn';
    closeBtn.textContent = type === 'loop' ? 'CERRAR BUCLE' : 'CERRAR SI';
    closeBtn.onclick = () => type === 'loop' ? closeLoop() : closeCond();
    footer.appendChild(closeBtn);

    if (type === 'cond') {
        const sinoBtn = document.createElement('button');
        sinoBtn.className = 'block-sino-btn';
        sinoBtn.textContent = '+ else:';
        sinoBtn.onclick = addSino;
        footer.appendChild(sinoBtn);
    }

    const rmBtn = document.createElement('button');
    rmBtn.className = 'remove-btn';
    rmBtn.textContent = '✕';
    rmBtn.style.cssText = 'margin-left:auto;position:static;top:auto;right:auto;background:transparent;color:#e74c3c;border:none;font-size:0.6em;cursor:pointer;';
    rmBtn.onclick = () => removeCard(index);
    footer.appendChild(rmBtn);

    block.appendChild(footer);
    return { el: block, body };
}

function createCondCodeBlock(card, index, lineNum) {
    const block = document.createElement('div');
    block.className = 'cond-block';

    const header = document.createElement('div');
    header.className = 'block-header';

    header.innerHTML = `<span class="line-number">${lineNum}</span><span class="py-keyword">if</span> <span class="py-param">${card.condition || '...'}</span>:`;

    const select = document.createElement('select');
    select.className = 'cond-select';
    CONDICIONES.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.value;
        opt.textContent = c.label;
        if (c.value === card.condition) opt.selected = true;
        select.appendChild(opt);
    });
    select.onchange = () => {
        gameState.program[index].condition = select.value;
        renderProgram();
    };
    header.appendChild(select);

    block.appendChild(header);

    const body = document.createElement('div');
    body.className = 'block-body';
    body.id = `cond-body-${index}`;
    block.appendChild(body);

    const footer = document.createElement('div');
    footer.className = 'block-footer';
    const closeBtn = document.createElement('button');
    closeBtn.className = 'block-close-btn';
    closeBtn.textContent = 'CERRAR SI';
    closeBtn.onclick = closeCond;
    footer.appendChild(closeBtn);

    const sinoBtn = document.createElement('button');
    sinoBtn.className = 'block-sino-btn';
    sinoBtn.textContent = '+ else:';
    sinoBtn.onclick = addSino;
    footer.appendChild(sinoBtn);

    const rmBtn = document.createElement('button');
    rmBtn.className = 'remove-btn';
    rmBtn.textContent = '✕';
    rmBtn.style.cssText = 'margin-left:auto;position:static;top:auto;right:auto;background:transparent;color:#e74c3c;border:none;font-size:0.6em;cursor:pointer;';
    rmBtn.onclick = () => removeCard(index);
    footer.appendChild(rmBtn);

    block.appendChild(footer);
    return { el: block, body };
}

function createFuncBlock(fName, funcCards, startLine) {
    const block = document.createElement('div');
    block.className = 'func-block';

    const header = document.createElement('div');
    header.className = 'block-header';
    header.innerHTML = `<span class="py-keyword" style="color:#c792ea;">def</span> <span class="py-func" style="color:#82aaff;">${fName}</span>():`;
    block.appendChild(header);

    const body = document.createElement('div');
    body.className = 'block-body';

    let lineNum = startLine || 1;
    funcCards.forEach((card, idx) => {
        const lineEl = createCodeLine(card, `func-${fName}-${idx}`, lineNum);
        body.appendChild(lineEl);
        lineNum++;
    });

    const footer = document.createElement('div');
    footer.className = 'block-footer';
    const rmBtn = document.createElement('button');
    rmBtn.className = 'remove-btn';
    rmBtn.textContent = '✕';
    rmBtn.style.cssText = 'margin-left:auto;background:transparent;color:#e74c3c;border:none;font-size:0.6em;cursor:pointer;padding:4px 8px;';
    rmBtn.title = `Eliminar función ${fName}`;
    rmBtn.onclick = () => {
        delete gameState.functions[fName];
        renderCards();
        renderProgram();
    };
    footer.appendChild(rmBtn);
    block.appendChild(footer);

    return block;
}

function addSino() {
    if (!gameState.condOpen) return;
    if (gameState.sinoOpen) return;
    const sinoCard = { cardKey: 'condicional', type: 'sinoStart' };
    gameState.program.push(sinoCard);
    gameState.sinoOpen = true;
    renderProgram();
}

function updateCardCount() {
    const used = getUsedCardCount();
    document.getElementById('cardCount').textContent = used;

    const level = gameState.currentLevel;
    const limitSpan = document.getElementById('memoryLimit');

    if (gameState.gameMode === 'normal' && level) {
        limitSpan.style.display = 'inline';
        const over = used > level.memoryLimit;
        limitSpan.textContent = `🧠 ${used}/${level.memoryLimit}`;
        limitSpan.style.color = over ? '#e74c3c' : 'var(--green-move)';
        limitSpan.style.fontWeight = over ? 'bold' : 'normal';
        document.getElementById('cardCount').style.color = over ? '#e74c3c' : 'var(--border-gold)';
    } else if (gameState.gameMode === 'optimization' && level) {
        limitSpan.style.display = 'inline';
        const over = used > level.memoryLimit;
        limitSpan.textContent = `🏆 ${used}/${level.memoryLimit}`;
        limitSpan.style.color = over ? '#e74c3c' : '#f39c12';
        limitSpan.style.fontWeight = over ? 'bold' : 'normal';
    }
}

// ════════════════════════════════════════════════════════════════
//  PROGRAM EDITING
// ════════════════════════════════════════════════════════════════

function addCardToProgram(cardKey, loopCount, funcName) {
    if (gameState.isRunning) return;
    const cardData = CARD_TYPES[cardKey];
    if (!cardData && cardKey !== 'call') return;

    // If funcOpen is true and we're adding to a function definition
    if (gameState.funcOpen) {
        if (cardKey === 'funcion') return;
        if (cardKey === 'loop') {
            if (gameState.loopOpen) { closeLoop(); return; }
            if (gameState.condOpen) { closeCond(); }
            const count = loopCount || 3;
            gameState.program.push({ cardKey: 'loop', type: 'loopStart', count, class: cardData.class, icon: cardData.icon, name: cardData.name });
            gameState.loopOpen = true;
            renderProgram();
            return;
        }
        if (cardKey === 'condicional') {
            if (gameState.condOpen) { closeCond(); return; }
            if (gameState.loopOpen) { closeLoop(); }
            const condition = CONDICIONES[0].value;
            gameState.program.push({ cardKey: 'condicional', type: 'condStart', condition, class: cardData.class, icon: cardData.icon, name: cardData.name });
            gameState.condOpen = true;
            gameState.sinoOpen = false;
            renderProgram();
            return;
        }
        if (cardKey === 'call' && funcName) {
            gameState.program.push({ cardKey: 'call', type: 'funcCall', funcName, class: 'card-py-call', icon: '⚡', name: `${funcName}()` });
            renderProgram();
            return;
        }
        if (cardKey === 'call') return;

        const newCard = { cardKey, type: cardData.type, class: cardData.class, icon: cardData.icon, name: cardData.name };
        if (gameState.loopOpen || gameState.condOpen) {
            gameState.program.push(newCard);
        } else {
            gameState.program.push(newCard);
        }
        renderProgram();
        return;
    }

    // Normal program (not inside function definition)
    if (cardKey === 'funcion') {
        if (gameState.loopOpen) { closeLoop(); }
        if (gameState.condOpen) { closeCond(); }
        const name = prompt('Nombre de la función (sin espacios):', 'mi_funcion');
        if (!name || !name.trim() || name.includes(' ')) {
            if (name && name.includes(' ')) showMessageSimple('⚠️', 'El nombre no puede tener espacios. Usa guión bajo: mi_funcion');
            return;
        }
        gameState.funcDefName = name.trim();
        gameState.funcOpen = true;
        gameState.program.push({ cardKey: 'funcion', type: 'funcStart', funcName: gameState.funcDefName, class: 'card-py-func', icon: '⚡', name: `def ${gameState.funcDefName}():` });
        renderProgram();
        return;
    }

    if (cardKey === 'call') {
        if (gameState.funcOpen) return;
        if (gameState.loopOpen) { showMessageSimple('⚠️', 'Cierra el bucle primero antes de agregar una llamada a función.'); return; }
        if (gameState.condOpen) { showMessageSimple('⚠️', 'Cierra el condicional primero antes de agregar una llamada a función.'); return; }
        const funcNames = Object.keys(gameState.functions);
        if (funcNames.length === 0) {
            showMessageSimple('⚠️', 'Primero define una función con "def nombre():" antes de llamarla.');
            return;
        }
        if (funcNames.length === 1) {
            gameState.program.push({ cardKey: 'call', type: 'funcCall', funcName: funcNames[0], class: 'card-py-call', icon: '⚡', name: `${funcNames[0]}()` });
            renderProgram();
            return;
        }
        const name = prompt(`Funciones disponibles: ${funcNames.join(', ')}\n¿Cuál quieres llamar?`, funcNames[0]);
        if (name && funcNames.includes(name)) {
            gameState.program.push({ cardKey: 'call', type: 'funcCall', funcName: name, class: 'card-py-call', icon: '⚡', name: `${name}()` });
            renderProgram();
        }
        return;
    }

    if (cardKey === 'loop') {
        if (gameState.loopOpen) { closeLoop(); return; }
        if (gameState.condOpen) { closeCond(); }
        const count = loopCount || 3;
        gameState.program.push({ cardKey: 'loop', type: 'loopStart', count, class: cardData.class, icon: cardData.icon, name: cardData.name });
        gameState.loopOpen = true;
        renderProgram();
        return;
    }

    if (cardKey === 'condicional') {
        if (gameState.condOpen) { closeCond(); return; }
        if (gameState.loopOpen) { closeLoop(); }
        const condition = CONDICIONES[0].value;
        gameState.program.push({ cardKey: 'condicional', type: 'condStart', condition, class: cardData.class, icon: cardData.icon, name: cardData.name });
        gameState.condOpen = true;
        gameState.sinoOpen = false;
        renderProgram();
        return;
    }

    const newCard = { cardKey, type: cardData.type, class: cardData.class, icon: cardData.icon, name: cardData.name };

    if (gameState.loopOpen) {
        const loopStartIdx = findOpenLoopIndex();
        if (loopStartIdx >= 0) {
            gameState.program.push(newCard);
            renderProgram();
            return;
        }
    }
    if (gameState.condOpen) {
        gameState.program.push(newCard);
        renderProgram();
        return;
    }

    gameState.program.push(newCard);
    renderProgram();
}

function findOpenLoopIndex() {
    for (let i = gameState.program.length - 1; i >= 0; i--) {
        if (gameState.program[i].type === 'loopStart') return i;
    }
    return -1;
}

function findOpenFuncIndex() {
    for (let i = gameState.program.length - 1; i >= 0; i--) {
        if (gameState.program[i].type === 'funcStart') return i;
    }
    return -1;
}

function closeLoop() {
    if (!gameState.loopOpen) return;
    gameState.program.push({ cardKey: 'loopEnd', type: 'loopEnd' });
    gameState.loopOpen = false;
    renderProgram();
}

function closeCond() {
    if (!gameState.condOpen) return;
    gameState.program.push({ cardKey: 'condEnd', type: 'condEnd' });
    gameState.condOpen = false;
    gameState.sinoOpen = false;
    renderProgram();
}

function closeFunc() {
    if (!gameState.funcOpen) return;
    const fName = gameState.funcDefName;
    if (!fName) { gameState.funcOpen = false; renderProgram(); return; }

    gameState.program.push({ cardKey: 'funcEnd', type: 'funcEnd' });
    const funcStartIdx = findOpenFuncIndex();
    if (funcStartIdx >= 0) {
        let funcEndIdx = -1;
        for (let i = funcStartIdx + 1; i < gameState.program.length; i++) {
            if (gameState.program[i].type === 'funcEnd') { funcEndIdx = i; break; }
        }
        if (funcEndIdx >= 0) {
            const funcCards = [];
            for (let i = funcStartIdx + 1; i < funcEndIdx; i++) {
                const idx = i - funcStartIdx - 1;
                funcCards.push({ ...gameState.program[i], _programIndex: `func-${fName}-${idx}` });
            }
            gameState.functions[fName] = funcCards;
            gameState.program.splice(funcStartIdx, funcEndIdx - funcStartIdx + 1);
        }
    }

    gameState.funcOpen = false;
    gameState.funcDefName = null;
    document.getElementById('btnCloseFunc').style.display = 'none';
    renderCards();
    renderProgram();
}

function removeCard(index) {
    if (gameState.isRunning) return;
    const card = gameState.program[index];

    if (card.type === 'funcStart') {
        let endIdx = -1;
        for (let i = index + 1; i < gameState.program.length; i++) {
            if (gameState.program[i].type === 'funcEnd') { endIdx = i; break; }
        }
        if (endIdx >= 0) gameState.program.splice(index, endIdx - index + 1);
        else { gameState.program.splice(index, 1); gameState.funcOpen = false; gameState.funcDefName = null; }
        // Remove function from gameState.functions
        if (card.funcName && gameState.functions[card.funcName]) {
            delete gameState.functions[card.funcName];
        }
        renderCards();
        renderProgram();
        return;
    }

    if (card.type === 'loopStart') {
        let endIdx = -1;
        for (let i = index + 1; i < gameState.program.length; i++) {
            if (gameState.program[i].type === 'loopEnd') { endIdx = i; break; }
        }
        if (endIdx >= 0) gameState.program.splice(index, endIdx - index + 1);
        else { gameState.program.splice(index, 1); gameState.loopOpen = false; }
        renderProgram();
        return;
    }

    if (card.type === 'condStart') {
        let endIdx = -1;
        for (let i = index + 1; i < gameState.program.length; i++) {
            if (gameState.program[i].type === 'condEnd') { endIdx = i; break; }
        }
        if (endIdx >= 0) gameState.program.splice(index, endIdx - index + 1);
        else { gameState.program.splice(index, 1); gameState.condOpen = false; gameState.sinoOpen = false; }
        renderProgram();
        return;
    }

    gameState.program.splice(index, 1);
    renderProgram();
}

function moveCard(index, dir) {
    if (gameState.isRunning) return;
    const newIdx = index + dir;
    if (newIdx < 0 || newIdx >= gameState.program.length) return;
    [gameState.program[index], gameState.program[newIdx]] = [gameState.program[newIdx], gameState.program[index]];
    renderProgram();
}

function clearProgram() {
    if (gameState.isRunning) return;
    gameState.program = [];
    gameState.functions = {};
    gameState.loopOpen = false;
    gameState.condOpen = false;
    gameState.sinoOpen = false;
    gameState.funcOpen = false;
    gameState.funcDefName = null;
    document.getElementById('btnCloseFunc').style.display = 'none';
    renderCards();
    renderProgram();
}

// ════════════════════════════════════════════════════════════════
//  PROGRAM EXECUTION
// ════════════════════════════════════════════════════════════════

async function runProgram() {
    if (gameState.isRunning || gameState.program.length === 0) return;

    if (gameState.loopOpen || gameState.condOpen || gameState.funcOpen) {
        showMessage('⚠️', 'BLOQUES SIN CERRAR', 'Cierra todos los bucles, condicionales y funciones antes de ejecutar.', false);
        return;
    }

    const used = getUsedCardCount();
    const level = gameState.currentLevel;

    if (gameState.gameMode !== 'debugging') {
        if (used > level.memoryLimit) {
            showMessage('🧠', '¡LÍMITE DE MEMORIA EXCEDIDO!',
                `Tu programa usa ${used} tarjetas, pero el límite es ${level.memoryLimit}.\n\nUsa bucles para repetir patrones o funciones para reutilizar código y reducir el número de tarjetas.`,
                false);
            return;
        }
    }

    gameState.attempts++;
    document.getElementById('attemptDisplay').style.display = 'none';

    gameState.isRunning = true;
    gameState.aborted = false;
    gameState.won = false;
    document.getElementById('btnRun').disabled = true;

    gameState.harry = { ...level.harry };
    gameState.dementors = level.dementors.map(d => ({ ...d, active: true }));
    gameState.doors = level.doors.map(d => ({ ...d, open: false }));
    gameState.dragons = level.dragons.map(d => ({ ...d, active: true }));
    gameState.rocks = level.rocks.map(r => ({ ...r, active: true }));
    gameState.hiddenPaths = level.hiddenPaths.map(h => ({ ...h, revealed: false }));
    gameState.revealedPaths = [];
    renderBoard();

    try {
        const expandedProgram = expandProgram(gameState.program);
        for (let i = 0; i < expandedProgram.length; i++) {
            if (gameState.aborted || gameState.won) break;
            const card = expandedProgram[i];
            highlightProgramCard(card._programIndex);
            await executeCard(card);
            if (gameState.aborted) {
                await sleep(2000);
                break;
            }
            renderBoard();
            if (checkWinCondition()) {
                gameState.won = true;
                await sleep(500);
                await triggerWin();
                return;
            }
            await sleep(gameState.speed);
        }

        if (!gameState.aborted && !gameState.won) {
            await sleep(1500);
            const msg = gameState.gameMode === 'debugging'
                ? 'Casi... revisa el programa. ¿Identificaste el error?'
                : `${getCharName()} no llegó a la Snitch. Revisa tu programa e intenta de nuevo. (Intento #${gameState.attempts})`;
            showMessage('❌', '¡CASI!', msg, false);
        }
    } catch (err) {
        console.error('Error en ejecución:', err);
        showMessage('⚠️', 'ERROR', 'Algo salió mal. Reinicia el nivel.', false);
    } finally {
        gameState.isRunning = false;
        document.getElementById('btnRun').disabled = false;
    }
}

function expandProgram(program) {
    const expanded = [];
    for (let i = 0; i < program.length; i++) {
        const card = program[i];

        if (card.type === 'funcStart') {
            let j = i + 1;
            while (j < program.length && program[j].type !== 'funcEnd') { j++; }
            i = j;
            continue;
        }
        if (card.type === 'funcEnd') continue;

        if (card.type === 'funcCall') {
            const funcCards = gameState.functions[card.funcName];
            if (funcCards) {
                funcCards.forEach(fc => expanded.push({ ...fc, _programIndex: fc._programIndex }));
            }
            continue;
        }

        if (card.type === 'loopStart') {
            const bodyCards = [];
            let j = i + 1;
            while (j < program.length && program[j].type !== 'loopEnd') {
                bodyCards.push({ card: program[j], programIndex: j });
                j++;
            }
            for (let k = 0; k < card.count; k++) {
                bodyCards.forEach(bc => expanded.push({ ...bc.card, _programIndex: bc.programIndex }));
            }
            i = j;
        } else if (card.type === 'condStart') {
            const condition = card.condition || 'camino_bloqueado';
            const meets = checkCondition(condition);
            const bodyCards = [];
            let j = i + 1;
            let hasSino = false;
            const sinoCards = [];
            while (j < program.length && program[j].type !== 'condEnd') {
                if (program[j].type === 'sinoStart') {
                    hasSino = true;
                    j++;
                    while (j < program.length && program[j].type !== 'condEnd') {
                        sinoCards.push({ card: program[j], programIndex: j });
                        j++;
                    }
                    break;
                }
                bodyCards.push({ card: program[j], programIndex: j });
                j++;
            }
            if (meets) {
                bodyCards.forEach(bc => expanded.push({ ...bc.card, _programIndex: bc.programIndex }));
            } else if (hasSino) {
                sinoCards.forEach(bc => expanded.push({ ...bc.card, _programIndex: bc.programIndex }));
            }
            i = j;
        } else if (card.type === 'loopEnd' || card.type === 'condEnd' || card.type === 'sinoStart') {
            continue;
        } else {
            expanded.push({ ...card, _programIndex: i });
        }
    }
    return expanded;
}

function checkCondition(cond) {
    const harry = gameState.harry;
    const level = gameState.currentLevel;
    let tx = harry.x, ty = harry.y;
    switch (harry.dir) {
        case 0: tx++; break;
        case 1: ty++; break;
        case 2: tx--; break;
        case 3: ty--; break;
    }
    switch (cond) {
        case 'dementor_delante': return gameState.dementors.some(d => d.x === tx && d.y === ty && d.active);
        case 'puerta_delante': return gameState.doors.some(d => d.x === tx && d.y === ty && !d.open);
        case 'pared_delante': return level.walls.some(w => w.x === tx && w.y === ty);
        case 'snitch_delante': return level.snitch.x === tx && level.snitch.y === ty;
        case 'camino_bloqueado':
            return tx < 0 || tx >= level.size || ty < 0 || ty >= level.size
                || level.walls.some(w => w.x === tx && w.y === ty)
                || gameState.dementors.some(d => d.x === tx && d.y === ty && d.active)
                || gameState.doors.some(d => d.x === tx && d.y === ty && !d.open)
                || gameState.rocks.some(r => r.x === tx && r.y === ty && r.active)
                || gameState.dragons.some(d => d.x === tx && d.y === ty && d.active);
        default: return false;
    }
}

async function executeCard(card) {
    const harry = gameState.harry;
    switch (card.type) {
        case 'move': moveHarry(); break;
        case 'turnLeft': harry.dir = (harry.dir + 3) % 4; break;
        case 'turnRight': harry.dir = (harry.dir + 1) % 4; break;
        case 'spell': await castSpell('expelliarmus'); break;
        case 'key': await castSpell('alohomora'); break;
        case 'protego': await castSpell('protego'); break;
        case 'lumos': await castSpell('lumos'); break;
        case 'wingardium': await castSpell('wingardium'); break;
    }
}

function moveHarry() {
    const harry = gameState.harry;
    const level = gameState.currentLevel;
    const charName = getCharName();
    let newX = harry.x, newY = harry.y;
    switch (harry.dir) {
        case 0: newX++; break;
        case 1: newY++; break;
        case 2: newX--; break;
        case 3: newY--; break;
    }

    if (newX < 0 || newX >= level.size || newY < 0 || newY >= level.size) {
        showMessage('⚠️', '¡FUERA DEL MAPA!', `${charName} se salió del mapa. Revisa tu programa. (Intento #${gameState.attempts})`, false);
        gameState.aborted = true; return;
    }
    if (level.walls.some(w => w.x === newX && w.y === newY)) {
        showMessage('🧱', '¡PARED!', `${charName} chocó con una pared. Necesitas girar.`, false);
        gameState.aborted = true; return;
    }
    const door = gameState.doors.find(d => d.x === newX && d.y === newY && !d.open);
    if (door) {
        showMessage('🚪', '¡PUERTA CERRADA!', 'Necesitas usar alohomora() frente a la puerta antes de avanzar.', false);
        gameState.aborted = true; return;
    }
    const dementor = gameState.dementors.find(d => d.x === newX && d.y === newY && d.active);
    if (dementor) {
        showMessage('👻', '¡DEMENTOR!', `¡Un Dementor atrapó a ${charName}! Usa expelliarmus() o protego() antes de avanzar.`, false);
        gameState.aborted = true; return;
    }
    const dragon = gameState.dragons.find(d => d.x === newX && d.y === newY && d.active);
    if (dragon) {
        showMessage('🐉', '¡DRAGÓN!', '¡Un dragón bloquea el paso! Usa wingardium() para moverlo.', false);
        gameState.aborted = true; return;
    }
    const rock = gameState.rocks.find(r => r.x === newX && r.y === newY && r.active);
    if (rock) {
        showMessage('🪨', '¡ROCA!', '¡Una roca pesada bloquea el camino! Usa wingardium() para moverla.', false);
        gameState.aborted = true; return;
    }

    harry.x = newX; harry.y = newY;
}

async function castSpell(spellType) {
    const harry = gameState.harry;
    let tx = harry.x, ty = harry.y;
    switch (harry.dir) {
        case 0: tx++; break;
        case 1: ty++; break;
        case 2: tx--; break;
        case 3: ty--; break;
    }

    if (spellType === 'expelliarmus') {
        const dementor = gameState.dementors.find(d => d.x === tx && d.y === ty && d.active);
        if (dementor) {
            dementor.active = false;
            const el = document.getElementById(`dementor-${tx}-${ty}`);
            if (el) el.classList.add('spell-effect');
            await sleep(500);
        } else {
            showMessage('✨', 'HECHIZO FALLIDO', 'No hay Dementor en esa dirección.', false);
            gameState.aborted = true;
        }
    } else if (spellType === 'alohomora') {
        const door = gameState.doors.find(d => d.x === tx && d.y === ty && !d.open);
        if (door) {
            door.open = true;
            const el = document.getElementById(`door-${tx}-${ty}`);
            if (el) el.classList.add('door-opening');
            await sleep(600);
        } else {
            showMessage('🔑', 'HECHIZO FALLIDO', 'No hay puerta cerrada en esa dirección.', false);
            gameState.aborted = true;
        }
    } else if (spellType === 'protego') {
        const dementor = gameState.dementors.find(d => d.x === tx && d.y === ty && d.active);
        if (dementor) {
            dementor.active = false;
            const el = document.getElementById(`dementor-${tx}-${ty}`);
            if (el) el.classList.add('protego-active');
            await sleep(500);
        } else {
            showMessage('🛡️', 'PROTEGO', 'No hay amenaza en esa dirección.', false);
            gameState.aborted = true;
        }
    } else if (spellType === 'lumos') {
        const level = gameState.currentLevel;
        let revealed = false;
        gameState.hiddenPaths.forEach(h => {
            const dist = Math.abs(h.x - harry.x) + Math.abs(h.y - harry.y);
            if (dist <= 2 && !h.revealed) {
                h.revealed = true;
                revealed = true;
            }
        });
        if (revealed) {
            const els = document.querySelectorAll('.hidden-path.revealed');
            els.forEach(e => e.classList.add('lumos-revealing'));
            await sleep(600);
        } else {
            showMessage('💡', 'LUMOS', 'No hay caminos ocultos cerca.', false);
            gameState.aborted = true;
        }
    } else if (spellType === 'wingardium') {
        const target = gameState.dragons.find(d => d.x === tx && d.y === ty && d.active)
            || gameState.rocks.find(r => r.x === tx && r.y === ty && r.active);
        if (target) {
            target.active = false;
            const cell = document.querySelector(`.cell[data-x="${tx}"][data-y="${ty}"]`);
            if (cell) {
                const ents = cell.querySelectorAll('.entity');
                ents.forEach(e => e.classList.add('wingardium-moving'));
            }
            await sleep(500);
        } else {
            showMessage('🪄', 'WINGARDIUM LEVIOSA', 'No hay nada que mover en esa dirección.', false);
            gameState.aborted = true;
        }
    }
}

function checkWinCondition() {
    const harry = gameState.harry;
    const level = gameState.currentLevel;
    return harry.x === level.snitch.x && harry.y === level.snitch.y;
}

async function triggerWin() {
    const level = gameState.currentLevel;
    const points = level.points;
    const houseBonus = Math.floor(points / 2);
    const used = getUsedCardCount();
    const charName = getCharName();

    gameState.totalPoints += points;
    gameState.housePoints += houseBonus;
    gameState.completedLevels.add(level.id);

    let newStars = 2;
    if (used <= level.memoryLimit) {
        newStars = 3;
    } else if (gameState.gameMode === 'debugging') {
        newStars = 3;
    } else if (gameState.gameMode === 'optimization') {
        newStars = used <= level.memoryLimit ? 3 : 2;
    }
    if (gameState.gameMode === 'debugging') newStars = 3;

    const prevStars = gameState.stars[level.id] || 0;
    if (newStars > prevStars) {
        gameState.stars[level.id] = newStars;
    }

    saveProgress();
    updateScoreDisplay();

    const snitchEntity = document.getElementById('snitch-entity');
    if (snitchEntity) snitchEntity.classList.add('snitch-caught');
    await sleep(1200);

    const starStr = '⭐'.repeat(newStars) + '☆'.repeat(3 - newStars);

    let extraMsg = `\n${starStr}\n+${points} PUNTOS\n+${houseBonus} PTS PARA TU CASA`;
    extraMsg += `\n🎯 INTENTOS: ${gameState.attempts}`;
    extraMsg += `\n📏 TARJETAS: ${used} (límite: ${level.memoryLimit})`;

    if (used <= level.memoryLimit) {
        extraMsg += '\n🧠 ¡Dentro del límite de memoria!';
    } else {
        extraMsg += '\n⚠️ Excediste el límite. Intenta usar bucles o funciones para reducir tarjetas.';
    }

    if (gameState.attempts === 1) {
        extraMsg += '\n🌟 ¡PERFECTO! ¡A la primera!';
    } else if (gameState.attempts <= 3) {
        extraMsg += '\n👏 ¡Buen trabajo!';
    } else {
        extraMsg += '\n🧙‍♂️ ¡Lo lograste! Cada intento te hace un mejor mago.';
    }

    const isLastLevel = level.id === LEVELS[LEVELS.length - 1].id;

    if (isLastLevel) {
        const totalStars = getTotalStars();
        const maxStars = getMaxStars();
        showMessage('🏆', '🎉 ¡HAS COMPLETADO HOGWARTS! 🎉',
            `¡${charName} atrapó la Snitch y se convirtió en un verdadero PROGRAMADOR MAGO!\n\n` +
            `📜 ${LEVELS.length} niveles completados\n` +
            `⭐ ${totalStars}/${maxStars} estrellas\n` +
            `🏆 ${gameState.totalPoints} puntos totales\n` +
            `🏠 ${gameState.housePoints} puntos para tu casa\n\n` +
            `"La programación es como la magia —\nsolo tienes que pronunciar las palabras correctas\nen el orden correcto."\n\n` +
            `${starStr}\n+${points} PUNTOS\n+${houseBonus} PTS PARA TU CASA\n` +
            `🎯 INTENTOS: ${gameState.attempts}`,
            true, level.id, true);
    } else {
        showMessage('🏆', '¡FELICIDADES!', `¡${charName} atrapó la Snitch!${extraMsg}`, true, level.id);
    }
    gameState.isRunning = false;
    document.getElementById('btnRun').disabled = false;
}

function highlightProgramCard(programIndex) {
    document.querySelectorAll('.program-card').forEach(el => el.classList.remove('executing'));
    const card = document.getElementById(`program-card-${programIndex}`);
    if (card) {
        card.classList.add('executing');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showMessage(icon, title, text, isWin, levelId, isGameComplete) {
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('message');
    let buttonsHTML = '<button class="btn btn-run" onclick="closeMessage()">CONTINUAR</button>';
    if (isWin && isGameComplete) {
        buttonsHTML = `
      <button class="btn btn-back" onclick="closeMessage(); goToMenu();">🏠 MENÚ PRINCIPAL</button>
      <button class="btn btn-reset" onclick="closeMessage(); resetLevel();">🔄 REPETIR NIVEL 30</button>
      <button class="btn btn-run" onclick="closeMessage(); startLevel(1);">🔄 JUGAR DE NUEVO</button>
    `;
    } else if (isWin) {
        const nextLevel = LEVELS.find(l => l.id === levelId + 1);
        buttonsHTML = `
      <button class="btn btn-back" onclick="closeMessage(); goToMenu();">MENÚ</button>
      <button class="btn btn-reset" onclick="closeMessage(); resetLevel();">REPETIR</button>
      ${nextLevel ? `<button class="btn btn-run" onclick="closeMessage(); startLevel(${nextLevel.id});">SIGUIENTE ▶</button>` : ''}
    `;
    }
    message.innerHTML = `
    <h2>${icon} ${title}</h2>
    <p>${text.replace(/\n/g, '<br>')}</p>
    <div class="controls" style="justify-content: center;">${buttonsHTML}</div>
  `;
    overlay.style.display = 'block';
    message.style.display = 'block';
}

function showMessageSimple(icon, text) {
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('message');
    message.innerHTML = `
    <h2>${icon}</h2>
    <p>${text}</p>
    <div class="controls" style="justify-content:center;"><button class="btn btn-run" onclick="closeMessage()">OK</button></div>
  `;
    overlay.style.display = 'block';
    message.style.display = 'block';
}

function closeMessage() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('message').style.display = 'none';
    gameState.isRunning = false;
    document.getElementById('btnRun').disabled = false;
}

function resetLevel() {
    if (gameState.isRunning) return;
    const level = gameState.currentLevel;
    gameState.harry = { ...level.harry };
    gameState.dementors = level.dementors.map(d => ({ ...d, active: true }));
    gameState.doors = level.doors.map(d => ({ ...d, open: false }));
    gameState.dragons = level.dragons.map(d => ({ ...d, active: true }));
    gameState.rocks = level.rocks.map(r => ({ ...r, active: true }));
    gameState.hiddenPaths = level.hiddenPaths.map(h => ({ ...h, revealed: false }));
    gameState.revealedPaths = [];
    gameState.aborted = false;
    gameState.won = false;

    if (gameState.gameMode === 'debugging' && DEBUG_PROGRAMS[level.id]) {
        gameState.program = DEBUG_PROGRAMS[level.id].program.map(c => ({ ...c }));
        renderProgram();
    }

    renderBoard();
}

function updateSpeed() {
    const slider = document.getElementById('speedSlider');
    gameState.speed = 1700 - slider.value;
    const label = document.getElementById('speedLabel');
    if (slider.value < 500) label.textContent = 'LENTO 🐢';
    else if (slider.value < 1000) label.textContent = 'NORMAL';
    else label.textContent = 'RÁPIDO 🐇';
}

function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const btn = document.getElementById('btnMusic');

    if (gameState.musicOn) {
        audio.pause();
        btn.textContent = '🎵 MÚSICA';
        btn.style.background = '';
    } else {
        const playPromise = audio.play();
        if (playPromise) {
            playPromise.catch(() => {
                btn.textContent = '🎵 Click para música';
                btn.style.background = '#8e44ad';
                setTimeout(() => {
                    if (!gameState.musicOn) {
                        btn.textContent = '🎵 MÚSICA';
                        btn.style.background = '';
                    }
                }, 3000);
                return;
            });
        }
        btn.textContent = '🔊 MÚSICA ON';
        btn.style.background = '#27ae60';
    }
    gameState.musicOn = !gameState.musicOn;
}

function openSpellBook() {
    let html = '<h3>📖 Mis Funciones</h3>';
    const funcNames = Object.keys(gameState.functions);
    if (funcNames.length) {
        funcNames.forEach(name => {
            html += `<strong>def ${name}():</strong> ${gameState.functions[name].length} tarjetas<br>`;
        });
    }
    if (gameState.customSpells.length) {
        html += '<hr><h4>Hechizos antiguos (legado)</h4>';
        gameState.customSpells.forEach((s, i) => {
            html += `<strong>${i + 1}. ${s.name}</strong> — ${s.program.length} tarjetas<br>`;
        });
    }
    if (funcNames.length === 0 && !gameState.customSpells.length) {
        alert('No has creado funciones aún.');
        return;
    }
    html += '<br><button class="btn btn-danger" onclick="if(confirm(\'¿Borrar todas las funciones?\')){deleteAllSpells();this.parentElement.close();}">🗑️ BORRAR TODAS</button>';
    const d = document.createElement('dialog');
    d.innerHTML = html;
    d.innerHTML += '<br><button class="btn" onclick="this.parentElement.close()">CERRAR</button>';
    document.body.appendChild(d);
    d.showModal();
    d.addEventListener('close', () => d.remove());
}

function deleteAllSpells() {
    gameState.customSpells = [];
    gameState.functions = {};
    saveProgress();
    renderCards();
    renderProgram();
}

init();
