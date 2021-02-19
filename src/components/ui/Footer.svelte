<script>
  import Li from "./Li.svelte";

  export let config;
</script>

<style>
  footer {
    height: var(--heightMenu);
    left: 0;
    width: 100%;
    position: fixed;
    bottom: 0;
    text-align: center;
    z-index: 1;
    background-color: var(--white);
    max-width: 100vw;
  }

  nav {
    display: flex;
    width: 100%;
    box-shadow: 0 0 var(--heightMenu) 0 var(--shadowone);
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    font-weight: 400;

    @media (min-width: 992px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }
</style>

<div class="comodin mobile" />

<footer class="mobile">
  <nav>
    <ul>
      {#each config.Links as link}
        <Li link={link.link} text={link.text} />
      {/each}
    </ul>
  </nav>
</footer>
