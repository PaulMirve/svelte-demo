<script lang="ts">
    import { shoppingCart } from "../store/store";
    import Button from "./Button.svelte";

    export let onClose: () => void;
    export let open: boolean;

    const clickOutside = (node) => {
        const handleClick = (event) => {
            if (!node.contains(event.target)) {
                node.dispatchEvent(new CustomEvent("outclick"));
            }
        };

        document.addEventListener("click", handleClick, true);

        return {
            destroy() {
                document.removeEventListener("click", handleClick, true);
            },
        };
    };
</script>

{#if open}
    <div use:clickOutside on:outclick={onClose} class="menu">
        {#if $shoppingCart.length > 0}
            <h1 class="title">Cart</h1>
            <hr />
            {#each $shoppingCart as cartEl}
                <div class="product">
                    <img
                        class="image"
                        src={cartEl.product.image}
                        alt={cartEl.product.name}
                    />
                    <span>
                        <h5 class="name">{cartEl.product.name}</h5>
                        <h5 class="price">
                            {cartEl.product.price} x {cartEl.count} = ${cartEl
                                .product.price * cartEl.count}.00
                        </h5>
                    </span>
                </div>
            {/each}
            <Button size="small" class="mt-md" fullWidth>Checkout</Button>
        {:else}
            <h1 class="tac">There is no products in the cart</h1>
        {/if}
    </div>
{/if}

<style lang="scss">
    @use "../sass/abstract/variables" as *;

    .title {
        font-size: 2.8rem;
        margin-bottom: 1rem;
    }

    hr {
        margin-bottom: 1rem;
    }

    .menu {
        position: absolute;
        background-color: $color-bone;
        width: 40rem;
        transform: translateX(-50%);
        padding: 2em;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }

    .product {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .name {
        font-size: 2.6rem;
    }

    .price {
        font-size: 1.8rem;
        font-weight: 700;
    }

    .image {
        width: 10rem;
        aspect-ratio: 1;
    }
</style>
