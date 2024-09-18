//INCISO NO.5
function ReproducirCancion(cancion: string): void {
    console.log(`Reproduciendo la cancion: ${cancion}`);
}

function AlbumPorYear(anio: number): string {
    switch (anio) {
        case 2006:
            return "Taylor Swift";
        case 2008:
            return "Fearless";
        case 2010:
            return "Speak Now";
        case 2012:
            return "Red";
        case 2014:
            return "1989";
        case 2017:
            return "reputation";
        case 2019:
            return "Lover";
        case 2020:
            return "folklore";
        case 2021:
            return "Fearless (Taylor's Version)";
        case 2022:
            return "Midnights";
        case 2023:
            return "Speak Now (Taylor's Version)";
        case 2024:
            return "The Tortured Poets Department";
        default:
            return "¡ERROR!\nNo hay Album de Taylor Swift Lanzando en ese Ano";
    }
}

function AlbumPorAnio(anio: number): string {
    switch (anio) {
        case 2006:
            return "Taylor Swift\nCanciones: 'Tim McGraw', 'Teardrops on My Guitar', 'Our Song'";
        case 2008:
            return "Fearless\nCanciones: 'Love Story', 'You Belong with Me', 'Fearless'";
        case 2010:
            return "Speak Now\nCanciones: 'Mine', 'Back to December', 'Sparks Fly'";
        case 2012:
            return "Red\nCanciones: 'We Are Never Ever Getting Back Together', 'I Knew You Were Trouble', 'All Too Well'";
        case 2014:
            return "1989\nCanciones: 'Blank Space', 'Style', 'Shake It Off'";
        case 2017:
            return "reputation\nCanciones: 'Look What You Made Me Do', 'Delicate', '...Ready for It?'";
        case 2019:
            return "Lover\nCanciones: 'Lover', 'The Man', 'You Need to Calm Down'";
        case 2020:
            return "folklore\nCanciones: 'cardigan', 'exile', 'the 1'";
        case 2021:
            return "Fearless (Taylor's Version)\nCanciones: 'Mr. Perfectly Fine (Taylor's Version)(From The Vault)', 'You All Over Me (Taylor's Version)(From The Vault)', 'Love Story (Taylor's Version)'";
        case 2022:
            return "Midnights\nCanciones: 'Anti-Hero', 'Bejeweled', 'Lavender Haze'";
        case 2023:
            return "Speak Now (Taylor's Version)\nCanciones: 'Enchanted (Taylor's Version)', 'Better Than Revenge (Taylor's Version)', 'Back to December (Taylor's Version)'";
        case 2024:
            return "The Tortured Poets Department\nCanciones: 'My Boy Only Breaks His Favorite Toys', 'Guilty As Sin?', 'The Smallest Man Who Ever Lived'";
        default:
            return "¡ERROR!\nNo hay album de Taylor Swift lanzado en ese ano";
    }
}

function CancionDeAlbum(cancion: string, album: string): boolean {
    let canciones1989 = ["Blank Space", "Style", "Shake It Off"];
    return album === "1989" && canciones1989.includes(cancion);
}

console.log("\n\nINCISO NO.5")
console.log(AlbumPorAnio(2014));
console.log(AlbumPorAnio(2020));
console.log(AlbumPorAnio(2023));

ReproducirCancion("Blank Space");

console.log("¿Shake It Off es del album 1989?", CancionDeAlbum("Shake It Off", "1989"));

