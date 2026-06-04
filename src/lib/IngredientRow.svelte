<script>
  let { icon, label, value } = $props();
</script>

<div class="ingredient-row">
  <div class="ingredient-name">
    <span class="ingredient-icon" aria-hidden="true">
      {#if icon === 'grain'}
        <svg viewBox="0 0 24 24">
          <path d="M2 22 16 8" />
          <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
          <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
          <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
          <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
          <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
          <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
          <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
        </svg>
      {:else if icon === 'drop'}
        <svg viewBox="0 0 24 24">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7Z" />
        </svg>
      {:else if icon === 'salt'}
        <svg class="salt-mound-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <path d="M3.3 17.4c.9-1.1 1.8-1.7 2.8-2.1 1.4-.6 2.1-1.8 3.2-3.1 1-1.1 1.9-1.8 3.3-1.8 1.3 0 2.2.7 3.2 1.8 1.2 1.3 1.8 2.5 3.2 3.1 1 .4 1.9 1 2.7 2.1-2.1 1.2-5.7 1.9-9.2 1.9-3.6 0-7.1-.7-9.2-1.9Z" />
          <circle cx="8.8" cy="9" r=".75" />
          <circle cx="12" cy="7.6" r=".75" />
          <circle cx="15.2" cy="9" r=".75" />
          <circle cx="7.2" cy="12.1" r=".65" />
          <circle cx="16.8" cy="12.1" r=".65" />
        </svg>
      {:else}
        <svg viewBox="0 0 24 24">
          <path d="M10 2v7.31" />
          <path d="M14 9.3V1.99" />
          <path d="M8.5 2h7" />
          <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
          <path d="M5.52 16h12.96" />
        </svg>
      {/if}
    </span>
    <span>{label}</span>
  </div>
  <strong>{value}</strong>
</div>
