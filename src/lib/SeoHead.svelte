<script>
  const title = 'Calculadora de masa napolitana';
  const description = 'Calcula harina, agua, sal y levadura para masa de pizza napolitana, con o sin prefermento.';
  const siteName = 'Pizza Math';
  const siteUrl = 'https://luissevillano.github.io/pizza-calculator/';
  const imageUrl = `${siteUrl}og.svg`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="application-name" content={siteName} />
  <meta name="apple-mobile-web-app-title" content={siteName} />
  <meta name="theme-color" content="#11110f" media="(prefers-color-scheme: dark)" />
  <meta name="theme-color" content="#eee8dc" media="(prefers-color-scheme: light)" />
  <meta name="color-scheme" content="dark light" />
  <link rel="canonical" href={siteUrl} />

  <meta property="og:type" content="website" />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:type" content="image/svg+xml" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Pizza Math, calculadora de masa napolitana" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
  <meta name="twitter:image:alt" content="Pizza Math, calculadora de masa napolitana" />
</svelte:head>
