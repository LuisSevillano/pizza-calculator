<script>
  import { onMount } from 'svelte';
  import DoughForm from '$lib/DoughForm.svelte';
  import DoughResults from '$lib/DoughResults.svelte';
  import SeoHead from '$lib/SeoHead.svelte';
  import { calculateDough } from '$lib/calculateDough.js';

  const STORAGE_KEY = 'pizza-calculator:dough-recipe:v1';

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
  let recipeLoaded = $state(false);

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

  const savedRecipe = $derived({
    balls,
    ballWeight,
    hydrationPercent,
    customHydration,
    saltPercent,
    usePoolish,
    poolishFlour,
    poolishWater,
    poolishYeast,
    directYeast
  });

  /** @param {unknown} value */
  const numberOrNull = (value) => {
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  };

  /** @param {Record<string, unknown>} recipe */
  function restoreRecipe(recipe) {
    balls = numberOrNull(recipe.balls) ?? balls;
    ballWeight = numberOrNull(recipe.ballWeight) ?? ballWeight;
    hydrationPercent = numberOrNull(recipe.hydrationPercent) ?? hydrationPercent;
    customHydration = typeof recipe.customHydration === 'boolean' ? recipe.customHydration : customHydration;
    saltPercent = numberOrNull(recipe.saltPercent) ?? saltPercent;
    usePoolish = typeof recipe.usePoolish === 'boolean' ? recipe.usePoolish : usePoolish;
    poolishFlour = numberOrNull(recipe.poolishFlour) ?? poolishFlour;
    poolishWater = numberOrNull(recipe.poolishWater) ?? poolishWater;
    poolishYeast = numberOrNull(recipe.poolishYeast) ?? poolishYeast;
    directYeast = numberOrNull(recipe.directYeast) ?? directYeast;
  }

  onMount(() => {
    try {
      const storedRecipe = localStorage.getItem(STORAGE_KEY);
      if (storedRecipe) {
        const parsedRecipe = JSON.parse(storedRecipe);
        if (parsedRecipe && typeof parsedRecipe === 'object' && !Array.isArray(parsedRecipe)) {
          restoreRecipe(parsedRecipe);
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      recipeLoaded = true;
    }
  });

  $effect(() => {
    if (!recipeLoaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedRecipe));
  });
</script>

<SeoHead />

<main class="page-shell">
  <header class="hero">
    <h1>forno<span>.</span></h1>
    <p class="subtitle">una calculadora para masa de pizza napolitana</p>
  </header>

  <div class="workspace">
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
  </div>

  <footer>
    <span>© 2026 — un proyecto personal</span>
    <span>hecho a mano, no a máquina</span>
  </footer>
</main>
