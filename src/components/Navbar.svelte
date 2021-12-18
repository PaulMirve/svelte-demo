<script>
    import { Router, Link } from "svelte-navigator";
</script>

<Router primary={false}>
    <nav class="navbar">
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
    </nav>
</Router>

<style lang="scss">
    @use "../sass/abstract/variables" as *;

    .navbar {
        display: flex;
        align-items: center;
        background-color: white;
        position: fixed;
        width: 100%;
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
    }

    .link {
        font-size: 1.8rem;
        text-decoration: none;
        color: black;
        font-weight: 200;
    }
</style>
