const animal = {
    cat: Symbol('고양이'),
    mouse: '쥐'
};

let mouseHole: string;
mouseHole = animal.mouse;

let backyard: any;
backyard = mouseHole;