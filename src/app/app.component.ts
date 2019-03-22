import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `

  <h1>Navigation</h1>

  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Proposals FrontEnd Angular';
}
