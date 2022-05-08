import { Component, OnInit, Input } from '@angular/core';
import { Bridge } from '../bridge';

function printDataString(value:number | null):string{
  return value ? `${value} m` : 'unknow';
}

@Component({
  selector: 'app-bridge-info-panel',
  templateUrl: './bridge-info-panel.component.html',
  styleUrls: ['./bridge-info-panel.component.css']
})
export class BridgeInfoPanelComponent implements OnInit {

  @Input() bridge:Bridge;

  constructor() { }

  ngOnInit(): void {
  }

  getWidth():string{
    return printDataString(this.bridge.width);
  }

  getLength():string{
    return printDataString(this.bridge.length);
  }

  getAge():number{
    const currentYear = new Date().getFullYear();
    return currentYear - this.bridge.year;
  }

}
