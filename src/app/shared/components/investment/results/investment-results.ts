import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ZardTableComponent } from '@/shared/components/table';
import { InvestmentService } from '@/shared/services/investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [ZardTableComponent, CurrencyPipe],
  templateUrl: './investment-results.html',
})
export class InvestmentResults {
  private investmentService = inject(InvestmentService);

  public results = this.investmentService.annualData();
}
