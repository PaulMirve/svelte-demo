<script lang="ts">
    export let component: "h1" | "h2" | "h3" | "h4" | "h5" = "h3";
    export let casing: "uppercase" | "default" = "default";
    export let className: string = "";
    export let weight:
        | "thin"
        | "extra-light"
        | "light"
        | "regular"
        | "medium"
        | "semibold"
        | "bold"
        | "extra-bold"
        | "black" = "bold";
    export let font: "heading" | "body" = "heading";
</script>

<h1
    class={`${component} ${
        casing === "uppercase" && "uppercase"
    } ${weight} ${font} ${className}`}
>
    <slot />
</h1>

<style lang="scss">
    @use "../sass/abstract/variables" as *;
    .h1 {
        font-size: 9rem;
    }

    .h2 {
        font-size: 6rem;
    }

    .h3 {
        font-size: 4rem;
    }

    .h4 {
        font-size: 3.6rem;
    }

    .h5 {
        font-size: 2.4rem;
    }

    .body {
        font-family: $font-body;
    }

    .uppercase {
        text-transform: uppercase;
    }

    .thin {
        font-weight: 100;
    }

    .extra-light {
        font-weight: 200;
    }

    .light {
        font-weight: 300;
    }

    .regular {
        font-weight: 200;
    }

    .medium {
        font-weight: 500;
    }

    .semibold {
        font-weight: 600;
    }

    .bold {
        font-weight: 700;
    }

    .extra-bold {
        font-weight: 800;
    }
</style>
