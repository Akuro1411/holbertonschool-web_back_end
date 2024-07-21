import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    getIncomeInDollars(income) {
      return `$${budget.income}`;
    },
    getIncomeInEuros(income) {
      return `${budget.income} euros`;
    },
  };

  return fullBudget;
}