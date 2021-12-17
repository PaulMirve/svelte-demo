<script lang="ts">
import Heading from "./Heading.svelte";


    export let name: string;
    export let description: string;
</script>

<div class="card">
    <Heading className="title" component='h4' font='body' weight='extra-light'>{name}</Heading>
    <p class="description">{description}</p>
</div>
