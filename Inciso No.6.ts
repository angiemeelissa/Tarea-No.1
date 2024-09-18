//ANGIE MELISSA SANTIAGO RODRIGUEZ
//INCISO NO.6

let LaunchYears: number[] = [2006, 2008, 2010, 2012, 2014, 2017, 2019, 2020, 2021, 2022, 2023,2024];

console.log("Años de Lanzamientos de Albumes de Taylor Swift:");
for (let i = 0; i < LaunchYears.length; i++) {
    console.log(LaunchYears[i]);
}

let suma: number = 0;
for (let i = 0; i < LaunchYears.length; i++) {
    suma = suma + LaunchYears[i];
}

console.log(`La Suma de los Años de Lanzamiento es: ${suma}`);
