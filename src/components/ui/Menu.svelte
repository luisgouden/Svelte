<script>
  import Brand from "./Brand.svelte";
  import Li from "./Li.svelte";
  export let config;
  export let segment;

  let length = config.Links.length;
</script>

<style>
  aside {
    height: max-content;
    position: sticky;
    display: flex;
    flex-direction: row;
    top: 0;
    align-items: center;
    width: 100%;
    justify-content: center;
    background-color: transparent;

    @media (min-width: 992px) {
      justify-content: space-between;
      background-color: var(--white);
    }
  }

  nav {
    display: none;
    font-weight: 400;

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      width: min-content;
      flex-direction: row-reverse;
      min-width: 25%;

      &.todo {
        width: 50%;
      }

      &.casi {
        width: 40%;
      }
    }
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
  p {
    font-size: 120%;
  }
</style>

<aside>
  <Brand>
    <p>Felix Porteiro</p>
  </Brand>
  <nav class={length >= 4 ? "todo" : "casi"}>
    <ul>
      {#each config.Links as link}
        <Li {segment} link={link.link} text={link.text} />
      {/each}
    </ul>
  </nav>
</aside>
