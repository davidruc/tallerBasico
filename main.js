const tabla = [
    {tradicional:"90-100", point14range: "12-14", letter: "A", SBGRating: "4", profeciency: "Exceeds proficiency" },
    {tradicional: "80-89", point14range: "9-11", letter: "B", SBGRating: "3", profeciency: "Demostrates proficiency" },
    {tradicional: "70-79", point14range: "6-8", letter: "C", SBGRating: "2", profeciency: "Approaches proficiency" },
    {tradicional: "60-69", point14range: "3-5", letter: "D", SBGRating: "1", profeciency: "Falls well below proficiency" },
    {tradicional: "< 60", point14range: "1-2", letter: "E", SBGRating: "0", profeciency: "Lacks all proficiency" },
    {tradicional: "0", point14range: "0", letter: "Z", SBGRating: "0", profeciency: "Don't made an attempt" },
]
console.table(tabla)
let metodo = 0
do{
let metodo = prompt("Qué sistema de calificación usas? 1. Tradicional o letras 2. Rango de 14 puntos (responda con el número de elección)")
if (metodo == 1) {
    let calculo = (metodo) => {
        let nota = prompt(`Ingresa tu nota`);
        if ((nota >= 90 && nota <= 100) || (nota = "A")) return (`Tu nota de ${nota} en SBG equivale a 4, `);
        else if ((nota >= 80 && nota <=89) || (nota = "B") ) return (`Tu nota de ${nota} en SBG equivale a 3, and you Demostrates proficiency`);
        else if ((nota >= 70 && nota <=79) || (nota = "C") ) return (`Tu nota de ${nota} en SBG equivale a 2, and you Approaches proficiency`);
        else if ((nota >= 60 && nota <=69) || (nota = "D") ) return (`Tu nota de ${nota} en SBG equivale a 1, and you Falls well below proficiency`);
        else if ((nota > 0 && nota < 60) || (nota = "E") ) return (`Tu nota de ${nota} en SBG equivale a 0, and you Lacks all proficiency`);
        else if ((nota == 0) || (nota = "z") ) return (`Tu nota de ${nota} en SBG equivale a 0, you don't made an attempt`);
        else(`ingrese un valor válido`)
    }
    console.log(calculo(`1`))
    break
}
else if (metodo == 2) {
    let calculo = (metodo) => {
        let nota = prompt(`Ingresa tu nota`);
        if (nota >= 12 && nota <= 14 ) return (`Tu nota de ${nota} en SBG equivale a 4, Exceeds proficiency`);
        else if (nota >= 9 && nota <= 11 ) return (`Tu nota de ${nota} en SBG equivale a 3, and you Demostrates proficiency`);
        else if (nota >= 6 && nota <= 8 ) return (`Tu nota de ${nota} en SBG equivale a 2, and you Approaches proficiency`);
        else if (nota >= 3 && nota <= 5 ) return (`Tu nota de ${nota} en SBG equivale a 1, and you Falls well below proficiency`);
        else if (nota >= 1 && nota <= 2) return (`Tu nota de ${nota} en SBG equivale a 0, and you Lacks all proficiency`);
        else if (nota == 0) return (`Tu nota de ${nota} en SBG equivale a 0, you don't made an attempt`);
        else(`ingrese un valor válido`)
    }
    console.log(calculo(`2`))
    break
}
else {
    alert(`Ingrese un valor válido`)
}
}
while(metodo != 1 && metodo != 2) // Se usa un do while para que el menú se repita siempre que se ingresa un valor no válido en el método a utilizar.