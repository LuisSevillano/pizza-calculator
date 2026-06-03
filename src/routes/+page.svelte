<script>
  import DoughForm from '$lib/DoughForm.svelte';
  import DoughResults from '$lib/DoughResults.svelte';
  import SeoHead from '$lib/SeoHead.svelte';
  import { calculateDough } from '$lib/calculateDough.js';

  let balls = $state(4);
  let ballWeight = $state(260);
  let hydrationPercent = $state(70);
  let customHydration = $state(false);
  let saltPercent = $state(2.8);
  let usePoolish = $state(true);
  let poolishFlour = $state(300);
  let poolishWater = $state(300);
  let poolishYeast = $state(0.6);
  let directYeast = $state(1);

  let result = $derived(
    calculateDough({
      balls,
      ballWeight,
      hydrationPercent,
      saltPercent,
      usePoolish,
      poolishFlour,
      poolishWater,
      poolishYeast,
      directYeast
    })
  );
</script>

<SeoHead />

<main class="page-shell">
  <header class="hero">
    <p class="eyebrow">Pizza Math</p>
    <h1>Calculadora de masa napolitana 🍕</h1>
    <p class="subtitle">Calcula harina, agua, sal y levadura para tus bollos, con o sin prefermento.</p>
  </header>

  <DoughForm
    bind:balls
    bind:ballWeight
    bind:hydrationPercent
    bind:customHydration
    bind:saltPercent
    bind:usePoolish
    bind:poolishFlour
    bind:poolishWater
    bind:poolishYeast
    bind:directYeast
  />

  <DoughResults {result} {usePoolish} />

  <footer>Pensado para pizza napolitana casera.</footer>
</main>
