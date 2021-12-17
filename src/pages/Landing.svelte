<script lang="ts">
    import Heading from "../components/Heading.svelte";
    import ProductCard from "../components/ProductCard.svelte";
    import { getProducts } from "../db";

    const getProductsPromise = getProducts();
</script>

<Heading component="h2">New Products</Heading>
<div class="products">
    {#await getProductsPromise}
        <Heading component="h5">Loading</Heading>
    {:then products}
        {#each products as product}
            <ProductCard {...product} />
        {/each}
    {/await}
</div>

<style lang="scss">
</style>
