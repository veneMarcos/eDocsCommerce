import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
            <app-footer></app-footer>`,
  styles: []
})
export class AppComponent {
  title = 'app';
}
