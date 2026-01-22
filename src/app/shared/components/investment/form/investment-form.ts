import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZardFormFieldComponent, ZardFormControlComponent } from '@/shared/components/form';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardCardComponent } from '@/shared/components/card';
import { ZardInputDirective } from '@/shared/components/input';
import { InvestmentFormData } from '@/shared/components/investment/model/investment';
import { InvestmentService } from '@/shared/services/investment.service';

@Component({
  selector: 'app-investment-form',
  imports: [
    ReactiveFormsModule,
    ZardFormFieldComponent,
    ZardFormControlComponent,
    ZardButtonComponent,
    ZardCardComponent,
    ZardInputDirective,
  ],

  templateUrl: './investment-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvestmentForm {
  constructor(private investmentService: InvestmentService) {}

  public investmentForm = new FormGroup({
    initialInvestment: new FormControl<number>(0, [Validators.required]),
    annualInvestment: new FormControl<number>(0, [Validators.required]),
    expectedReturn: new FormControl<number>(0, [Validators.required]),
    duration: new FormControl<number>(0, [Validators.required]),
  });

  public onSubmit() {
    const raw = this.investmentForm.value;
    const data: InvestmentFormData = {
      initialInvestment: Number(raw.initialInvestment ?? 0),
      annualInvestment: Number(raw.annualInvestment ?? 0),
      expectedReturn: Number(raw.expectedReturn ?? 0),
      duration: Number(raw.duration ?? 0),
    };
    this.investmentService.calculateInvestmentResults(data);
    this.investmentForm.reset();
  }
}
