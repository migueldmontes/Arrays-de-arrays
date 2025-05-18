// 1- TABLAS DE MULTIPLICAR
function tablasDeMultiplicar(inicio, fin) {
    if (inicio < 1 || fin > 10 || inicio >= fin) {
        console.log("Por favor, introduce un intervalo válido entre 1 y 10.");
        return;
    }
    for (let i = inicio; i <= fin; i++) {
        console.log(`Tabla del ${i}`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log("");
    }
}

// Ejemplo de uso
// tablasDeMultiplicar(5, 7);


// 2- ACCESO A DATOS EN BUCLES MULTI-DIMENSIONALES
const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];
const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];

// Imprimir números
console.log(medidas[0][1]);  // 134
console.log(medidas[2][3]);  // 92
console.log(medidas[2][2][1]);  // 26

// Imprimir nombres
console.log(nombres[2][1]);  // Rosa
console.log(nombres[1][2]);  // Roberto

// Imprimir todos los nombres de mascotas
echoMascotas(nombres);
function echoMascotas(arr) {
    console.log(arr.flat().join(", "));
    arr.flat().forEach(nombre => console.log(nombre));
}


// 3- LA GALLETA DE LA FORTUNA
const estudiantes = ["Ana", "Luis", "Sofia", "Ferdi", "Maria"];
const vaticinios = [
    "Hoy es un buen día para iniciar nuevos proyectos.",
    "Escucha tus sueños, contienen la clave para el éxito.",
    "Pronto encontrarás una oportunidad inesperada.",
    "Confía en tu intuición, te llevará lejos.",
    "El éxito está más cerca de lo que crees."
];

function galletaDeLaFortuna(estudiantes, vaticinios) {
    const estudiante = estudiantes[Math.floor(Math.random() * estudiantes.length)];
    const vaticinio = vaticinios[Math.floor(Math.random() * vaticinios.length)];
    console.log(`Vaticinio para ${estudiante}:\n${vaticinio}`);
}

// Ejemplo de uso
// galletaDeLaFortuna(estudiantes, vaticinios);
