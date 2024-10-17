import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-form-field-container',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './form-field-container.component.html',
  styleUrl: './form-field-container.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldContainerComponent {}
