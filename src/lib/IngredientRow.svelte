<script>
  import { Droplet, FlaskConical, Package, Wheat } from '@lucide/svelte';

  let { icon, label, value } = $props();
</script>

<div class="ingredient-row">
  <div class="ingredient-name">
    <span class="ingredient-icon" aria-hidden="true">
      {#if icon === 'grain'}
        <Wheat size={24} strokeWidth={1.8} />
      {:else if icon === 'drop'}
        <Droplet size={24} strokeWidth={1.8} />
      {:else if icon === 'salt'}
        <Package size={24} strokeWidth={1.8} />
      {:else}
        <FlaskConical size={24} strokeWidth={1.8} />
      {/if}
    </span>
    <span>{label}</span>
  </div>
  <strong>{value}</strong>
</div>
