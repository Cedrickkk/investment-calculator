import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentForm } from '@/shared/components/investment/form/investment-form';
import { InvestmentResults } from '@/shared/components/investment/results/investment-results';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvestmentForm, InvestmentResults],
  templateUrl: './app.html',
})
export class App {}
