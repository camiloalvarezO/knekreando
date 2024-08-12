import { heroes } from './mondongo/data/heroes.js';

console.log(heroes);

// const getHeroById = (id) =>{
//     return heroes.find(heroe => heroe.id === id )
// }

const getHeroe = () => heroes.find(heroe => false)
// const heroe2 = getHeroById(2)
// console.log(heroe2);

const heroe = getHeroe(2)
console.log(heroe);

const getHeroeByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner)

const owner = getHeroeByOwner('DC')
console.log(owner);

