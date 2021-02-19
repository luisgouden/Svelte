<script>
  import Brand from "./Brand.svelte";
  import Li from "./Li.svelte";
  export let config;
  export let segment;
</script>

<style>
  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
    width: 100%;
    position: sticky;
    top: 0;

    @media (min-width: 992px) {
      width: 25%;
    }

    @media (min-width: 1200px) {
      top: 2rem;
    }
  }

  nav {
    display: none;
    font-weight: 400;
    width: 100%;
    padding-left: 4px;

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      width: min-content;
      flex-direction: column;
    }

    @media (min-width: 1200px) {
      width: 200px;
      padding-left: 4px;
    }
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    font-weight: 400;

    @media (min-width: 992px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

<aside>
  <Brand />
  <nav>
    <ul>
      {#each config.Links as link}
        <Li {segment} link={link.link} text={link.text} />
      {/each}
    </ul>
  </nav>
</aside>
