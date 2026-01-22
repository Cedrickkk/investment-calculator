import { Injectable } from '@angular/core';
import {
  AnnualInvestmentData,
  InvestmentFormData,
} from '@/shared/components/investment/model/investment';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  public calculateInvestmentResults(data: InvestmentFormData) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData: AnnualInvestmentData[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueOfEndYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}
