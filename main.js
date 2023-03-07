let metodo = prompt("Qué sistema de calificación usas? 1. Tradicional 2. Rango de 14 puntos 3. Letras (responda con el número de elección)")
if (metodo == 1) {
    let calculo = (metodo) => {
        let nota = prompt(`Ingresa tu nota`);
        if (nota >= 90 && nota <= 100) return (`Tu nota de ${nota} en SBG equivale a 4, Exceeds proficiency`);
        if (nota >= 80 && nota <=89) return (`Tu nota de ${nota} en SBG equivale a 3, and you Demostrates proficiency`);
        if (nota >= 70 && nota <=79) return (`Tu nota de ${nota} en SBG equivale a 2, and you Approaches proficiency`);
        if (nota >= 60 && nota <=69) return (`Tu nota de ${nota} en SBG equivale a 1, and you Falls well below proficiency`);
        if (nota > 0 && nota < 60) return (`Tu nota de ${nota} en SBG equivale a 0, and you Lacks all proficiency`);
        if (nota == 0) return (`Tu nota de ${nota} en SBG equivale a 0, you don't made an attempt`);
    }
    console.log(calculo(`1`))
}
else if (metodo == 2) {
    calificacion = prompt(`Ingrese su calificación en el sistema 14-point range`)    
}
else if (metodo == 3) {
    calificacion = prompt(`Ingrese su calificación en el sistema de letras `)
}
else {
    alert(`Ingrese un valor válido`)
}
