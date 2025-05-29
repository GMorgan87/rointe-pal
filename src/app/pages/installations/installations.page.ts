import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/angular/standalone';
import { RointeService } from 'src/app/services/rointe.service';
import { InstallationsType } from 'equation-connect';
import { InstallationCardComponent } from './installation-card/installation-card.component';

@Component({
  selector: 'app-installations',
  templateUrl: './installations.page.html',
  styleUrls: ['./installations.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, InstallationCardComponent]
})
export class InstallationsPage implements OnInit {

  installations: InstallationsType | undefined

  constructor(
    private rointeService: RointeService
  ) { }

  ngOnInit() {
    this.installations = this.rointeService.installations
  }

}
