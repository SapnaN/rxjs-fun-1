import { Component, VERSION } from '@angular/core';
import {of, from ,map, tap, take} from 'rxjs';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){

   // of(1,2,3,4).subscribe(item=>console.log(item));

    from([20,30,40]).pipe(
      tap(item=>console.log(`original ${item}`)),
      map(item => item  * 2),
      tap(item=>console.log(item)),
      map(item => item  -  1),
      tap(item=>console.log(item)),
      take(2)
    ).
    subscribe({
      next:(item) => console.log(`Emited number ${item}`),
      error:(err) => console.log(`Error ${err}`),
      complete:() => console.log('complete')

    });
    
  }
}
