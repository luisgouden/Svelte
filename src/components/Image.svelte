<script>
  let w = Math.floor(Math.random() * 256 + 1);
  let v = Math.floor(Math.random() * 256 + 1);
  let d = Math.floor(Math.random() * 360 + 1);

  let m = { x: w, y: v };
</script>

<style>
  div {
    width: clamp(50px, 8vw, 300px);
    height: clamp(50px, 8vw, 300px);
    max-width: clamp(50px, 8vw, 300px);
  }
</style>

<div
  on:mousemove
  on:touchMove
  style="background-image: linear-gradient({d}deg,hsl({m.x}, 70%, 70%), hsl({m.y}, 70%, 70%));"
/>
