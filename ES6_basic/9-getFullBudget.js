import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    getIncomeInDollars: function (income) {
      return `$${budget.income}`;
    },
    getIncomeInEuros: function (income) {
      return `${budget.income} euros`;
    },
  };

  return fullBudget;
}
