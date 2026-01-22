import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentForm } from '@/shared/components/investment/form/investment-form';
import {
  AnnualInvestmentData,
  InvestmentFormData,
} from '@/shared/components/investment/model/investment';
import { InvestmentService } from '@/shared/services/investment.service';
import { InvestmentResults } from './shared/components/investment/results/investment-results';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvestmentForm, InvestmentResults],
  templateUrl: './app.html',
})
export class App {
  public annualData = signal<AnnualInvestmentData[]>([]);

  constructor(private investmentService: InvestmentService) {}

  public onCalculateInvestmentResults(data: InvestmentFormData) {
    const results = this.investmentService.calculateInvestmentResults(data);
    this.annualData.set(results);
  }
}
