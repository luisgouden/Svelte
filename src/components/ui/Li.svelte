<script>
  export let segment;
  export let link;
  export let text;
</script>

<style>
  li {
    padding: 0;
    font-size: 120%;

    @media (min-width: 992px) {
      line-height: 2;
      font-size: 100%;
    }
  }

  .selected {
    color: purple;
  }

  @media (min-width: 1200px) {
  }
</style>

<li>
  <a class={segment === { link } ? "selected" : ""} href={link}> {text} </a>
</li>
