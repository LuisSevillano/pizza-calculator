/**
 * @typedef {Object} DoughInput
 * @property {number} balls
 * @property {number} ballWeight
 * @property {number} hydrationPercent
 * @property {number} saltPercent
 * @property {boolean} usePoolish
 * @property {number} poolishFlour
 * @property {number} poolishWater
 * @property {number} poolishYeast
 * @property {number} directYeast
 */

/**
 * @param {unknown} value
 * @param {number} [fallback]
 */
const positiveNumber = (value, fallback = 0) => {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : fallback;
};

/**
 * Calculates a pizza dough formula from final dough weight.
 * Internal values keep decimals; presentation should round only when rendering.
 * @param {DoughInput} input
 */
export function calculateDough(input) {
  const balls = Math.max(1, positiveNumber(input.balls, 1));
  const ballWeight = Math.max(100, positiveNumber(input.ballWeight, 100));
  const hydration = Math.max(0, positiveNumber(input.hydrationPercent, 70)) / 100;
  const saltRatio = Math.max(0, positiveNumber(input.saltPercent, 2.8)) / 100;
  const usePoolish = Boolean(input.usePoolish);
  const poolishFlour = positiveNumber(input.poolishFlour, 0);
  const poolishWater = positiveNumber(input.poolishWater, 0);
  const poolishYeast = positiveNumber(input.poolishYeast, 0);
  const directYeast = positiveNumber(input.directYeast, 0);
  const yeastTotal = usePoolish ? poolishYeast : directYeast;
  const totalMass = balls * ballWeight;
  const flourTotal = (totalMass - yeastTotal) / (1 + hydration + saltRatio);
  const waterTotal = flourTotal * hydration;
  const saltTotal = flourTotal * saltRatio;
  const invalidBase = !Number.isFinite(flourTotal) || flourTotal <= 0;
  const poolishFlourTooHigh = usePoolish && poolishFlour > flourTotal;
  const poolishWaterTooHigh = usePoolish && poolishWater > waterTotal;
  const isValid = !invalidBase && !poolishFlourTooHigh && !poolishWaterTooHigh;

  return {
    isValid,
    warnings: {
      invalidBase,
      poolishFlourTooHigh,
      poolishWaterTooHigh,
      poolishTooLarge: poolishFlourTooHigh || poolishWaterTooHigh
    },
    summary: {
      totalMass,
      balls,
      ballWeight,
      hydrationPercent: hydration * 100,
      saltPercent: saltRatio * 100
    },
    totals: {
      flour: flourTotal,
      water: waterTotal,
      salt: saltTotal,
      yeast: yeastTotal
    },
    poolish: usePoolish
      ? {
          flour: poolishFlour,
          water: poolishWater,
          yeast: poolishYeast
        }
      : null,
    finalAdditions: usePoolish
      ? {
          flour: flourTotal - poolishFlour,
          water: waterTotal - poolishWater,
          salt: saltTotal,
          yeast: 0
        }
      : {
          flour: flourTotal,
          water: waterTotal,
          salt: saltTotal,
          yeast: directYeast
        }
  };
}
