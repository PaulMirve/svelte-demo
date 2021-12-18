<script lang="ts">
    import { navigate } from "svelte-navigator";
    import Heading from "./Heading.svelte";

    export let id: number;
    export let name: string;
    export let image: string;
    export let price: number;
</script>

<div on:click={() => navigate(`/product/${id}`)} class="card">
    <div class="frame">
        <img class="image" src={image} alt="Product" />
    </div>
    <Heading component="h4" weight="light" font="body" class="mt-sm">
        {name}
    </Heading>
    <h5 class="price">${price}</h5>
</div>

<style lang="scss">
    @use "../sass/abstract/variables" as *;

    .card {
        cursor: pointer;
    }
    .frame {
        width: 400px;
        aspect-ratio: 1;
        border-radius: 20px;
        overflow: hidden;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .price {
        font-size: 2.4rem;
        color: $color-grey-dark;
    }

    .btn {
        background-color: wheat;
    }
</style>
