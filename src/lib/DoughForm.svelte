<script>
  import { readPositiveInput } from '$lib/formatDough.js';

  const hydrationPresets = [55, 60, 65, 70];

  let {
    balls = $bindable(),
    ballWeight = $bindable(),
    hydrationPercent = $bindable(),
    customHydration = $bindable(),
    saltPercent = $bindable(),
    usePoolish = $bindable(),
    poolishFlour = $bindable(),
    poolishWater = $bindable(),
    poolishYeast = $bindable(),
    directYeast = $bindable()
  } = $props();

  /** @param {number} value */
  function usePresetHydration(value) {
    hydrationPercent = value;
    customHydration = false;
  }

  function useCustomHydration() {
    customHydration = true;
  }

  function updateCustomHydration() {
    customHydration = true;
  }
</script>

<section class="card" aria-labelledby="inputs-title">
  <div class="section-heading">
    <span class="section-number">01</span>
    <h2 id="inputs-title">Datos de la masa</h2>
    <p>Cantidades finales redondeadas para pesar fácilmente.</p>
  </div>

  <div class="form-grid">
    <label class="field" for="balls">
      <span>Número de bollos</span>
      <input id="balls" bind:value={balls} type="number" min="1" step="1" inputmode="numeric" />
    </label>

    <label class="field" for="ball-weight">
      <span>Peso por bollo antes de la última fermentación</span>
      <div class="unit-input">
        <input id="ball-weight" bind:value={ballWeight} type="number" min="100" step="5" inputmode="numeric" />
        <span>g</span>
      </div>
    </label>
  </div>

  <div class="field-group">
    <span class="label-text">Hidratación total</span>
    <div class="preset-row" aria-label="Hidratación total">
      {#each hydrationPresets as preset}
        <button
          type="button"
          class:active={!customHydration && hydrationPercent === preset}
          aria-pressed={!customHydration && hydrationPercent === preset}
          onclick={() => usePresetHydration(preset)}
        >
          {preset}%
        </button>
      {/each}
      <label class="custom-hydration" class:active={customHydration} for="custom-hydration">
        <input
          id="custom-hydration"
          bind:value={hydrationPercent}
          type="number"
          min="40"
          step="1"
          inputmode="decimal"
          aria-label="Hidratación personalizada"
          onfocus={useCustomHydration}
          oninput={updateCustomHydration}
        />
        <span>%</span>
      </label>
    </div>
  </div>

  <label class="field" for="salt-percent">
    <span>Sal sobre harina total</span>
    <div class="unit-input">
      <input id="salt-percent" bind:value={saltPercent} type="number" min="0" step="0.1" inputmode="decimal" />
      <span>%</span>
    </div>
  </label>

  <div class="toggle-row">
    <input id="use-poolish" bind:checked={usePoolish} type="checkbox" />
    <label for="use-poolish">
      <strong>Usar poolish o prefermento</strong>
      <span>La levadura va solo en el prefermento. Puedes ajustar harina y agua por separado.</span>
    </label>
  </div>

  {#if usePoolish}
    <div class="nested-card" aria-label="Datos del poolish">
      <div class="form-grid">
        <label class="field" for="poolish-flour">
          <span>Harina del poolish</span>
          <div class="unit-input">
            <input
              id="poolish-flour"
              value={poolishFlour}
              type="number"
              min="0"
              step="5"
              inputmode="decimal"
              oninput={(event) => (poolishFlour = readPositiveInput(event.currentTarget.value))}
            />
            <span>g</span>
          </div>
        </label>

        <label class="field" for="poolish-water">
          <span>Agua del poolish</span>
          <div class="unit-input">
            <input
              id="poolish-water"
              value={poolishWater}
              type="number"
              min="0"
              step="5"
              inputmode="decimal"
              oninput={(event) => (poolishWater = readPositiveInput(event.currentTarget.value))}
            />
            <span>g</span>
          </div>
        </label>
      </div>

      <label class="field" for="poolish-yeast">
        <span>Levadura del poolish</span>
        <div class="unit-input">
          <input id="poolish-yeast" bind:value={poolishYeast} type="number" min="0" step="0.1" inputmode="decimal" />
          <span>g</span>
        </div>
      </label>

      <p class="helper">Si usas poolish, la levadura va solo en el prefermento.</p>
    </div>
  {:else}
    <label class="field" for="direct-yeast">
      <span>Levadura directa</span>
      <div class="unit-input">
        <input id="direct-yeast" bind:value={directYeast} type="number" min="0" step="0.1" inputmode="decimal" />
        <span>g</span>
      </div>
    </label>
  {/if}
</section>
