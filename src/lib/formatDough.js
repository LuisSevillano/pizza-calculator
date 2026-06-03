/** @param {number} value */
export const roundGram = (value) => `${Math.round(Math.max(0, value))} g`;

/** @param {number} value */
export const roundYeast = (value) => `${Math.max(0, value).toFixed(1)} g`;

/** @param {number} value */
export const formatPercent = (value) => `${Number(value.toFixed(1))}%`;

/** @param {string | number} value */
export const readPositiveInput = (value) => Math.max(0, Number(value) || 0);
