import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { ZardFormFieldComponent, ZardFormControlComponent } from '@/shared/components/form';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardCardComponent } from '@/shared/components/card';
import { ZardInputDirective } from '@/shared/components/input';
import { InvestmentFormData } from '@/shared/components/investment/model/investment';

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
  public calculate = output<InvestmentFormData>();

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

    this.calculate.emit(data);

    this.investmentForm.reset();
  }
}
