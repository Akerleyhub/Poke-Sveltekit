<script>
    import logo from "$lib/images/darker.jpg";
    //import background from "$lib/images/dark_background.jpg";
</script>

<div class='globe'>
    <h1>Welcome to Poke Underworld</h1>
    <img src={logo} alt="poke logo"/>
    <div class="app">
        <main>
            <slot />
        </main>
    </div>
</div>

<style>
	h1 {
		color: rgb(93, 8, 103);
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
        justify-content: center;
        text-align: center;
	}
    img {
        justify-content: center;
        text-align: center;
        align-items: center;
        height: 250px;
        widows: 250px;
        display:block;
        margin:auto;
    }
    p {
        justify-content: center;
    }
    body {
        background-color: ghostwhite;
    }
    .globe {
        background-image: url('https://cdn.wallpapersafari.com/1/92/LprfHb.jpg');
        width:100%;
        height: 100vh;
        background-clip: content-box;
        margin:0px;
    }
</style>
