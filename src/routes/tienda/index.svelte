<script context="module">
  export function preload() {
    return this.fetch(`tienda.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  import Container from "/src/components/ItemContainer.svelte";
</script>

<style>
</style>

<svelte:head>
  <title>tienda</title>
</svelte:head>

<h1>tiendas</h1>

<Container {posts} />
