<script>
	import Navbar from './components/layout/navbar.svelte';
	export let name;
</script>

<Navbar />

<main>
	
	<h1>Avinh's WIP Website</h1>
	<p>email: avinhahuynh@gmail.com</p>
	<p><a href="https://www.linkedin.com/in/avinh-huynh-59b075196/">LinkedIn</a></p>
	<p><a href="https://github.com/SlimeyTurtles">Github</a></p>
	<p><a href="https://docs.google.com/document/d/1VHEcHkoLdGqQNJh45Lq4B2C3oM5WSDVJVXhSIZYIBc4/edit?usp=sharing">Resume</a></p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>