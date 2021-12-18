<script>
    import { Router, Link } from "svelte-navigator";
    import Avatar from "./Avatar.svelte";
    import ShoppingCart from "./Icon/ShoppingCart.svelte";
</script>

<Router primary={false}>
    <nav class="navbar">
        <div class="menu" />
        <Link style="color:black; text-decoration: none;" to="/">
            <span class="title"> Drip </span>
        </Link>
        <div class="links">
            <a href="/" class="link">Collections</a>
            <a href="/" class="link">Man</a>
            <a href="/" class="link">Women</a>
            <a href="/" class="link">About</a>
            <a href="/" class="link">Contact</a>
        </div>
        <span class="actions">
            <ShoppingCart />
            <Avatar name="Paul Miranda" />
        </span>
    </nav>
</Router>

<style lang="scss">
    @use "../sass/abstract/variables" as *;
    @use "../sass/abstract/mixins" as *;

    .menu {
        height: 2px;
        width: 20px;
        background-color: black;
        position: relative;
        margin-right: 2rem;
        display: none;

        @include respond(tab-port) {
            display: block;
        }

        &::before {
            content: "";
            position: absolute;
            top: -5px;
            left: 0;
            height: 2px;
            width: 20px;
            background-color: black;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            height: 2px;
            width: 20px;
            background-color: black;
        }
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-left: auto;
        & :global(svg) {
            width: 3rem;
            cursor: pointer;
        }
    }
    .navbar {
        display: flex;
        align-items: center;
        background-color: white;
        position: fixed;
        left: 0;
        top: 0;
        padding: $padding;
        width: 100%;

        @include respond(tab-land) {
            padding: 0 4rem;
        }
    }

    .title {
        font-size: 3.5rem;
        font-weight: 600;
        margin-right: 4rem;
        color: black;
    }

    .links {
        display: flex;
        gap: 2rem;

        @include respond(tab-port) {
            display: none;
        }
    }

    .link {
        font-size: 1.8rem;
        text-decoration: none;
        color: black;
        font-weight: 200;
    }
</style>
