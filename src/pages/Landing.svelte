<script lang="ts">
    import Heading from "../components/Heading.svelte";
    import ProductCard from "../components/ProductCard.svelte";
    import { getProducts } from "../db";

    const getProductsPromise = getProducts();
</script>

<Heading component="h2" class="mt-md mb-sm">New Products</Heading>
<hr class="mb-md" />
<div class="products">
    {#await getProductsPromise}
        <Heading component="h5">Loading</Heading>
    {:then products}
        {#each products as { description, ...product }}
            <ProductCard {...product} />
        {/each}
    {/await}
</div>

<style lang="scss">
    .products {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>
