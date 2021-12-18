<script lang="ts">
    import { createEventDispatcher } from "svelte";

    let className = "";
    export { className as class };

    const dispatch = createEventDispatcher();

    const onClick = () => dispatch("click");
</script>

<button on:click={onClick} class={`btn ${className}`}>
    <slot />
</button>

<style lang="scss">
    @use "../sass/abstract/variables" as *;

    .btn {
        background-color: $color-primary;
        font-size: 1.8rem;
        font-weight: 700;
        color: white;
        font-family: $font-body;
        padding: 0 4em;
        height: 7rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        box-shadow: 0 1rem 2rem rgba($color-primary, 0.4);
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        & :global(svg) {
            width: 3rem;
        }

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 1rem 2rem rgba($color-primary, 0.6);
        }

        &:active {
            transform: translateY(-2px);
            box-shadow: 0 1rem 2rem rgba($color-primary, 0.4);
        }
    }
</style>
