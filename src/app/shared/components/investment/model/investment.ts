export type InvestmentFormData = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

export type AnnualInvestmentData = {
  year: number;
  interest: number;
  valueOfEndYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};
