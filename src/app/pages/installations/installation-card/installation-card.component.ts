import { Component, computed, input, OnInit } from '@angular/core';
import { InstallationType } from 'equation-connect';
import { IonItem, IonLabel } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

@Component({
  selector: 'app-installation-card',
  templateUrl: './installation-card.component.html',
  styleUrls: ['./installation-card.component.scss'],
  imports: [IonLabel, IonItem]
})
export class InstallationCardComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  readonly installation = input.required<InstallationType>()
  readonly id = input.required<string>()

  ngOnInit() {
    console.log('installation card', this.installation())
  }

  handleClick(){
    const id = this.id()
    console.log('NAVIGATE', id)
    this.router.navigate([`/installations/${id}`])
  }

}
