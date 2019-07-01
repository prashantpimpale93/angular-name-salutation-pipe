import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'pipe-example';

  data : any[] = [{
    name: 'Prashant Pimpale',
    gender: 'Male',
    salary: '10$'
  },
  {
    name: 'Sujata Mirge',
    gender: 'Female',
    salary: '200$'
  },
  {
    name: 'Vikas Pawar',
    gender: 'N/A',
    salary: '20$'
  }]
}
