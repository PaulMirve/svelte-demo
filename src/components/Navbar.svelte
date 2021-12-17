<nav class="navbar">
    <span class="title"> Drip </span>
    <div class="links">
        <a href="#" class="link">Collections</a>
        <a href="#" class="link">Man</a>
        <a href="#" class="link">Women</a>
        <a href="#" class="link">About</a>
        <a href="#" class="link">Contact</a>
    </div>
</nav>

<style lang="scss">
    @use "../sass/abstract/variables" as *;

    .navbar {
        display: flex;
        align-items: center;
    }

    .title {
        font-size: 3.5rem;
        font-weight: 600;
        margin-right: 4rem;
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
