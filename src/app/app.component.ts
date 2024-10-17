import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormFieldContainerComponent } from './form-field-container/form-field-container.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    FormFieldContainerComponent,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'test-m';
}
