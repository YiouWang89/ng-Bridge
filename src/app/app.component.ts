import { Component } from '@angular/core';
import { Bridge } from './bridge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Bridge';

  currentBridge:Bridge;

  handleSelectedBridge(bridge:Bridge):void{
    console.log('handle bridge selected');
    console.log(bridge);
    this.currentBridge = bridge;
  }
}
