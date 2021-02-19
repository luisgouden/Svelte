<script>
  import Menu from "/src/components/ui/Menu.svelte";
  import LateralMenu from "/src/components/ui/LateralMenu.svelte";
  import Footer from "/src/components/ui/Footer.svelte";
  import config from "../config.js";

  export let segment;

  let layout = config.Layout;
</script>

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

{#if config.Landing}
  <Footer {config} {segment} />
{/if}
