const animal = {
    cat: Symbol('고양이'),
    mouse: '쥐'
  };
  
let wallWithMouseHole: string;
wallWithMouseHole = animal.mouse;
  
let backyard: any;
backyard = wallWithMouseHole;