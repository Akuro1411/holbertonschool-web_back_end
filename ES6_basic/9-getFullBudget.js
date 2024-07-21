import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  budget.getIncomeInDollars = function (income) {
    return `$${budget.income}`;
  };
  budget.getIncomeInEuros = function (income) {
    return `${budget.income} euros`;
  };
  return budget;
}
