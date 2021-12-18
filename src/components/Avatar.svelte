<script lang="ts">
    export let name: string;

    const getInitials = () => {
        const names = name.split(" ");
        return `${names[0][0]}${names[1][0]}`;
    };
</script>

<div class="avatar">
    {getInitials()}
</div>

<style lang="scss">
    @use "../sass/abstract/variables" as *;
    .avatar {
        display: grid;
        place-items: center;
        background-color: $color-grey;
        font-size: 2rem;
        border-radius: 50%;
        font-weight: 600;
        height: 5rem;
        aspect-ratio: 1;
    }
</style>
