import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAccordionGroup } from '@ionic/angular/standalone';
import { InstallationType } from 'equation-connect';
import { RointeService } from 'src/app/services/rointe.service';
import { ZoneCardComponent } from './zone-card/zone-card.component';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.page.html',
  styleUrls: ['./installation.page.scss'],
  standalone: true,
  imports: [IonAccordionGroup, IonAccordionGroup, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ZoneCardComponent]
})
export class InstallationPage implements OnInit {

  constructor(
    private rointeService: RointeService
  ) { }

  readonly id = input<string>()
  installation: InstallationType | undefined

  ngOnInit() {
    const id = this.id()
    console.log('INSTALLATION ID', id)
    console.log('INSTALLATIONS', this.rointeService.installations)
    if (this.rointeService.installations && id) {
      this.installation = this.rointeService.installations[id]
      console.log('INSTALLATION', this.installation)
    }

  }

}
