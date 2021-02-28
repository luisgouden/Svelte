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
  console.log(posts);
</script>

<style>
</style>

<svelte:head>
  <title>tienda</title>
</svelte:head>

<h1>tienda</h1>
