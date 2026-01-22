import { Component, input } from '@angular/core';
import { AnnualInvestmentData } from '@/shared/components/investment/model/investment';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { ZardTableComponent } from '@/shared/components/table';

@Component({
  selector: 'app-investment-results',
  imports: [ZardTableComponent, CurrencyPipe, PercentPipe],
  templateUrl: './investment-results.html',
})
export class InvestmentResults {
  public results = input<AnnualInvestmentData[]>();
}
