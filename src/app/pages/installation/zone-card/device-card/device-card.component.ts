import { Component, input, OnInit } from '@angular/core';
import { DeviceType } from 'equation-connect';
import { RointeService } from 'src/app/services/rointe.service';
import { IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss'],
  imports: [IonItem]
})
export class DeviceCardComponent  implements OnInit {

  readonly id = input.required<string>()
  device: DeviceType | undefined

  constructor(
    private rointe: RointeService
  ) { }

  async ngOnInit() {
    this.getData()
  }

  async getData(): Promise<void>{
    this.device = await this.rointe.getDeviceData(this.id())
  }

}
