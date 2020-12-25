import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(){}


  title = 'an-playground';
  myvariable = 'myvariable'


   doSomething = () =>{
     const generated = 'generated';


     console.log(generated)
    return 1+1;
  }
}
