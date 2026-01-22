import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ZardTableComponent } from '@/shared/components/table';
import { InvestmentService } from '@/shared/services/investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [ZardTableComponent, CurrencyPipe],
  templateUrl: './investment-results.html',
})
export class InvestmentResults {
  constructor(private investmentService: InvestmentService) {}
  public readonly results = computed(() => this.investmentService.annualData());
}
