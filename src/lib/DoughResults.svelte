<script>
  import IngredientRow from '$lib/IngredientRow.svelte';
  import { formatPercent, roundGram, roundYeast } from '$lib/formatDough.js';

  let { result, usePoolish } = $props();
</script>

<section class="card results-card" aria-labelledby="results-title" aria-live="polite">
  <div class="section-heading">
    <span class="section-number">02</span>
    <h2 id="results-title">Receta calculada</h2>
    <p>Masa final: {roundGram(result.summary.totalMass)}</p>
  </div>

  {#if result.warnings.poolishTooLarge}
    <div class="warning" role="alert">
      <strong>El poolish es demasiado grande para esta receta.</strong>
      <span>Reduce el poolish o aumenta el número/peso de bollos.</span>
    </div>
  {:else if result.warnings.invalidBase}
    <div class="warning" role="alert">
      <strong>No se puede calcular una receta válida.</strong>
      <span>Revisa el peso final y la cantidad de levadura.</span>
    </div>
  {:else if usePoolish && result.poolish}
    <div class="result-block">
      <h3>Poolish</h3>
      <p class="process-note">
        Para una pizza con más sabor y mejor cornicione, se recomienda hacer un prefermento que repose en la nevera
        un mínimo de 24 h.
      </p>
      <IngredientRow icon="grain" label="Harina" value={roundGram(result.poolish.flour)} />
      <IngredientRow icon="drop" label="Agua" value={roundGram(result.poolish.water)} />
      <IngredientRow icon="yeast" label="Levadura" value={roundYeast(result.poolish.yeast)} />
    </div>

    <div class="result-block">
      <h3>Añadir después</h3>
      <p class="process-note">
        A continuación, añade el resto de ingredientes y deja reposar otras 24 h. Después, saca la masa, divide en bolas y deja
        reposar a temperatura ambiente unas 2-3 h, según la temperatura.
      </p>
      <IngredientRow icon="grain" label="Harina" value={roundGram(result.finalAdditions.flour)} />
      <IngredientRow icon="drop" label="Agua" value={roundGram(result.finalAdditions.water)} />
      <IngredientRow icon="salt" label="Sal" value={roundGram(result.finalAdditions.salt)} />
    </div>
  {:else}
    <div class="result-block direct-result">
      <IngredientRow icon="grain" label="Harina" value={roundGram(result.finalAdditions.flour)} />
      <IngredientRow icon="drop" label="Agua" value={roundGram(result.finalAdditions.water)} />
      <IngredientRow icon="salt" label="Sal" value={roundGram(result.finalAdditions.salt)} />
      <IngredientRow icon="yeast" label="Levadura" value={roundYeast(result.finalAdditions.yeast)} />
    </div>
  {/if}

  <div class="result-block">
    <h3>Resultado</h3>
    <dl class="summary-list">
      <div>
        <dt>Bollos</dt>
        <dd>{Math.round(result.summary.balls)}</dd>
      </div>
      <div>
        <dt>Peso por bola</dt>
        <dd>{roundGram(result.summary.ballWeight)}</dd>
      </div>
      <div>
        <dt>Hidratación</dt>
        <dd>{formatPercent(result.summary.hydrationPercent)}</dd>
      </div>
      <div>
        <dt>Sal</dt>
        <dd>{formatPercent(result.summary.saltPercent)}</dd>
      </div>
    </dl>
  </div>
</section>
