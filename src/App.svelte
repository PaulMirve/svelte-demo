<script lang="ts">
	import Landing from "@pages/Landing.svelte";
	import { Route, Router, useFocus } from "svelte-navigator";
	import Navbar from "./components/Navbar.svelte";
</script>

<head>
	<link
		href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</head>

<Router>
	<Navbar />
	<div>
		<Route path="/">
			<Landing />
		</Route>
	</div>
</Router>
