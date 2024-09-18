//ANGIE MELISSA SANTIAGO RODRIGUEZ
//INCISO NO.4
let albums: string[] = ["Taylor Swift","Fearless", "Speak Now", "Red", "1989", "reputation", "Lover", "folklore", "evermore", "Midnights","The Tortured Poets Deparment"];

console.log("\n\nINCISO NO.4")
console.log("\nCiclo For:");
console.log("Álbumes de Taylor Swift:");
for (let i = 0; i < albums.length; i++) {
    console.log(`${i + 1}. ${albums[i]}`);
}

console.log("\nCiclo While");
console.log("\nÁlbumes de Taylor Swift:");
let index = 0;
while (index < albums.length) {
    console.log(`${index + 1}. ${albums[index]}`);
    index++;
}