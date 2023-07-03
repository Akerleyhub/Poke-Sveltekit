// This should be where all database calls are made

//import {json} from '@sveltejs/kit';

// export function GETPOKEMON() {
//     let pokemon = 'https://pokeapi.co/api/v2/pokemon/ditto/';
// 	var data;
//     var pokedata;
// 	onMount(async () => {
//         fetch(pokemon)
//         .then(response => response.json())
//         .then(data => {
//             //console.log(data);
//             pokedata = data;
//             //apiData.set(data);
//         }).catch(error => {
//             console.log(error);
//             return [];
//         });
//     });

//     return json(data);
// }

// export async function SUMMON(){
//     let name;
//     let type;
//     let arrayOfObjects=[];
//     function getRandomInt(max) {
//         return Math.floor(Math.random() * max);
//     }
//     for(let zero=0;zero<3;zero++){
//         // GET A RANDOM TYPE
//         //let rand = getRandomInt(1118); total amount of pokemon I know of
//         let types = ['dark','ghost'];
//         let randType = getRandomInt(2);
//         type = types[randType];
//         //const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}/`);
//         const getType = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
//         type = type.toUpperCase();

//         // FIND OUT THE LENGTH OF ALL POKEMON OF THAT TYPE
//         let typeJson = await getType.json();
//         let amountOfType = typeJson.pokemon.length;
//         let randPokemonNum = getRandomInt(amountOfType);
//         let randPokemon = typeJson.pokemon[randPokemonNum];
//         name = randPokemon.pokemon.name;

//         // GET CALL POKEMON OF THAT SPECIFIC TYPE
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
//         name = name.toUpperCase();
//         const resjson = await res.json();
//         //pokedata = JSON.stringify(resjson);
//         pokedata = resjson.sprites.front_default;
//         text = JSON.stringify(pokedata);
//         arrayOfObjects.push({name,type,pokedata});
//     }
//     console.log(arrayOfObjects)
//     return arrayOfObjects;  
// }

//export const pokeApi_store = SUMMON()