import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Bridge } from '../bridge';
import { Bridges } from '../bridges';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  bridges = Bridges;

  constructor() { }

  @Output() selectedBridge:EventEmitter<Bridge> = new EventEmitter();

  onSelectedBridge(bridge:Bridge):void{
    console.log('Bridge selected');
    console.log(bridge);
    this.selectedBridge.emit(bridge);
  }

  ngOnInit(): void {
  }

}
