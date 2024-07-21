import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  budget.getIncomeInDollars = function (income) {
    return `$${income}`;
  };
  budget.getIncomeInEuros = function (income) {
    return `${income} euros`;
  };
  return budget;
}
