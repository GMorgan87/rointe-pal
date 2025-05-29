import { Component, input, OnInit } from '@angular/core';
import { ZoneOverviewType } from 'equation-connect';
import { IonLabel, IonItem, IonAccordion, IonList } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { caretDownCircle } from 'ionicons/icons'
import { addIcons } from 'ionicons';
import { DeviceCardComponent } from './device-card/device-card.component';

@Component({
  selector: 'app-zone-card',
  templateUrl: './zone-card.component.html',
  styleUrls: ['./zone-card.component.scss'],
  imports: [IonList, IonAccordion, IonItem, IonLabel, CommonModule, DeviceCardComponent]
})
export class ZoneCardComponent  implements OnInit {

  constructor() {
    addIcons({caretDownCircle})
  }

  zone = input.required<ZoneOverviewType>()
  readonly id = input.required<string>()

  ngOnInit() {}

}
