<script>
    //import {json} from '@sveltejs/kit';
    //import { onMount } from 'svelte';
    let pokedata;
    let type;
    let name;
    let arrayOfObjects=[];
    $: arrayOfObjects; //this means it's a calculated value, will update like useEffect

    async function summon(){
        arrayOfObjects=[];
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        for(let zero=0;zero<3;zero++){
            // GET A RANDOM TYPE
            //let rand = getRandomInt(1118); total amount of pokemon I know of
            let types = ['dark','ghost'];
            let randType = getRandomInt(2);
            type = types[randType];
            //const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}/`);
            const getType = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
            type = type.toUpperCase();

            // FIND OUT THE LENGTH OF ALL POKEMON OF THAT TYPE
            let typeJson = await getType.json();
            let amountOfType = typeJson.pokemon.length;
            let randPokemonNum = getRandomInt(amountOfType);
            let randPokemon = typeJson.pokemon[randPokemonNum];
            name = randPokemon.pokemon.name;

            // GET CALL POKEMON OF THAT SPECIFIC TYPE
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
            name = name.toUpperCase();
            const resjson = await res.json();
            //pokedata = JSON.stringify(resjson);
            pokedata = resjson.sprites.front_default;
            arrayOfObjects.push({name,type,pokedata});
        }
        arrayOfObjects = arrayOfObjects;
        return arrayOfObjects;  
    }
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class='all'>
    <h1>Choose a ghost or dark pokemon to begin</h1>

    <button id='btn' on:click={summon}>Summon Ghost Poke</button>
    {#if arrayOfObjects.length>1}
        {#each arrayOfObjects as { name,type,pokedata }}
        <div class="card">
            <img src={pokedata} alt="Avatar">
            <div class="container">
                <p id='type'>Type: {type}</p>
                <h4 id='name'>{name}</h4>
            </div>
        </div>
        {/each}
    {:else}
        <h4>Press BUTTON</h4>
    {/if}
</section>

<style>
    h1,h4 {
		color: rgb(93, 8, 103);
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
        justify-content: center;
        text-align: center;
	}
    img {
        width: 100%;
        border-bottom: solid;
        border-width: 1px;
    }
    .all {
        text-align: center;
        justify-content: center;
        align-items: center;
        display: flexbox;
        background-image: background;
    }
    .card {
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 16%;
        background-color: #866F85;
        border: solid;
        display:inline-block;
        margin:auto;
    }

    /* On mouse-over, add a deeper shadow */
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    /* Add some padding inside the card container */
    .container {
        padding: 2px 16px;
        text-align: center;
    }
    #type {
        color:blueviolet;
        font-weight: bold;
        text-align: center;
        font-family: 'Comic Sans MS', cursive;
    }
    #name {
        font-weight: bold;
        text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
        text-align: center;
        font-size: large;
        font-family: 'Comic Sans MS', cursive;
    }
    #btn {
        background-color: rgb(49, 8, 68);
        border: none;
        color: white;
        padding: 16px 32px;
        text-align: center;
        font-size: 16px;
        margin: 4px 2px;
        opacity: 0.6;
        transition: 0.3s;
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
    }
    #btn:hover {opacity: 1}
</style>