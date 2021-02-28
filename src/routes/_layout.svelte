<script>
  import Menu from "/src/components/ui/Menu.svelte";
  import LateralMenu from "/src/components/ui/LateralMenu.svelte";
  import Footer from "/src/components/ui/Footer.svelte";
  import config from "../config.js";

  export let segment;

  let layout = config.Layout;
</script>

<style>
  main {
    background-image: url(back.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
</style>

{#if !config.Landing}
  {#if layout === "column"}
    <Menu {config} {segment} />
  {:else if layout === "row"}
    <LateralMenu {config} {segment} />
  {/if}
{/if}

<main>
  <slot />
</main>

{#if !config.Landing}
  <Footer {config} {segment} />
{/if}
