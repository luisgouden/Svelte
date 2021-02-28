<script>
  import Image from "/src/components/Image.svelte";
</script>

<style>
  article {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(min-content, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(min-content, 1fr));
    grid-gap: 1rem;
  }

  h2,
  h3 {
    padding: 0;
    margin: 0;
  }

  img {
    width: clamp(150px, 200px, 300px);
    height: clamp(150px, 200px, 300px);
    max-width: clamp(150px, 200px, 300px);
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-1 {
    grid-column: 1/3;
    grid-row: 2/3;
  }
  .item-2 {
    grid-column: 2/3;
    grid-row: 2/3;
    z-index: -2;
  }

  .item-3 {
    grid-column: 1/2;
    grid-row: 3/4;
    z-index: -2;
  }

  .item-4 {
    grid-column: 4/5;
    grid-row: 3/4;
  }

  .item-5 {
    grid-column: 4/5;
    grid-row: 4/5;
  }
  .item-6 {
    grid-column: 1/3;
    grid-row: 4/5;
  }

  .item-7 {
    grid-column: 4/5;
    grid-row: 4/5;
    z-index: -2;
  }

  .item-8 {
    grid-column: 1/2;
    grid-row: 5/6;
  }

  .item-9 {
    grid-column: 1/-1;
    grid-row: 6/7;
  }
  h3,
  li {
    font-weight: 500;
  }
  h2,
  p {
    font-weight: 300;
  }
  li {
    padding: clamp(0.25rem, 0.3vw, 0.5rem) 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  ul:first-of-type li {
    justify-content: flex-end;
  }
</style>

<article>
  <h2 class="item-1">
    Hola soy Luis Portiero aka Luis Gouden, soy diseñador (gráfico) y maquetador
    web.
  </h2>
  <section class="item-2">
    <Image />
  </section>

  <section class="item-3">
    <Image />
  </section>

  <ul class="item-4">
    <li><h3>Grafico</h3></li>
    <li><p>proyecto 1</p></li>
    <li><p>proyecto 2</p></li>
    <li><p>proyecto 3</p></li>
    <li />
  </ul>

  <ul class="item-5">
    <li><h3>Web</h3></li>
    <li><p>proyecto 1</p></li>
    <li><p>proyecto 2</p></li>
    <li><p>proyecto 3</p></li>
    <li />
  </ul>

  <p class="item-6">texto extra donde cuento cosas divertidas :D</p>

  <section class="item-7">
    <Image />
  </section>

  <ul class="item-8">
    <li><h3>Links</h3></li>
    <li><p>Link 1</p></li>
    <li><p>Link 2</p></li>
    <li><p>Link 3</p></li>
    <li />
  </ul>
  <section class="item-9">
    <img class="" src="gouden.svg" alt="imagen" />
  </section>
</article>
