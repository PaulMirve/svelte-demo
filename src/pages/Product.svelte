<script lang="ts">
    import { onMount } from "svelte";
    import { useParams } from "svelte-navigator";
    import Button from "../components/Button.svelte";
    import Minus from "../components/Icon/Minus.svelte";
    import Plus from "../components/Icon/Plus.svelte";
    import ShoppingCart from "../components/Icon/ShoppingCart.svelte";
    import { getProducts } from "../db";
    import type { Product } from "../interfaces/Product";

    let product: Product;
    let quantity = 0;
    let productImage: string;
    const params = useParams();

    onMount(async () => {
        const products = await getProducts();
        product = products.find((x) => x.id === Number($params.id));
        productImage = product.image;
    });

    const incrementCounter = () => {
        quantity += 1;
    };

    const decreaseCounter = () => {
        if (quantity > 0) {
            quantity -= 1;
        }
    };
</script>

{#if product}
    <div class="main">
        <h5 class="company">Company name</h5>
        <img class="image" src={productImage} alt={product.name} />
        <div class="gallery">
            {#each product.gallery as photo}
                <div class={productImage === photo && "active"}>
                    <img
                        on:click={() => (productImage = photo)}
                        class={`gallery__photo`}
                        src={photo}
                        alt="Alter"
                    />
                </div>
            {/each}
        </div>
        <h1 class="name">{product.name}</h1>
        <p class="description">{product.description}</p>
        <h4 class="price">${product.price}.00</h4>
        <div class="actions">
            <div class="counter">
                <button on:click={decreaseCounter} class="counter__button">
                    <Minus />
                </button>
                {quantity}
                <button on:click={incrementCounter} class="counter__button">
                    <Plus />
                </button>
            </div>
            <Button>
                <ShoppingCart />
                Add to cart
            </Button>
        </div>
    </div>
{:else}
    <h5>Loading</h5>
{/if}

<style lang="scss">
    @use "../sass/abstract/variables" as *;

    .main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto) 1fr repeat(2, auto) 1fr;
        row-gap: 2rem;
        padding: 4rem;
        grid-template-areas:
            "image company"
            "image name"
            "image description"
            "image price"
            "gallery actions"
            ". .";
    }

    .image {
        grid-area: image;
        height: 60rem;
        border-radius: 20px;
        aspect-ratio: 1;
    }

    .company {
        grid-area: company;
        font-size: 2.4rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: $color-primary;
    }

    .name {
        grid-area: name;
        font-size: 9rem;
    }

    .description {
        grid-area: description;
        font-size: 1.8rem;
    }

    .price {
        grid-area: price;
        font-size: 4.2rem;
    }

    .actions {
        grid-area: actions;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
    }

    .counter {
        background-color: $color-bone;
        font-size: 2.4rem;
        border-radius: 10px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        font-weight: 700;
        height: 7rem;

        &__button {
            background-color: transparent;
            border: none;
            cursor: pointer;
        }

        &__button :global(svg) {
            width: 3rem;
            aspect-ratio: 1;
            color: $color-primary;
        }
    }

    .gallery {
        grid-area: gallery;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        place-items: center;
        padding-right: 8rem;

        &__photo {
            width: 12rem;
            aspect-ratio: 1;
            border-radius: 20px;
            object-fit: cover;
            cursor: pointer;
        }
    }

    .active {
        border: 2px solid $color-primary;
        position: relative;
        border-radius: 20px;
        overflow: hidden;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba($color-grey, 0.8);
        }
    }
</style>
