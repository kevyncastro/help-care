import { Component, OnInit } from '@angular/core';
import { InjuriesService } from '../../core/services/injuries.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public list = [
    'Abrasion',
    'Anaphylaxis',
    'Asthma',
    'Avulsion',
    'Blister',
    'Burn',
    'Choking',
    'Contusion',
    'Dislocation',
    'Electric Shock',
    'Foreign Body',
    'Fractured Nose',
    'Fractures',
    'Head Injuries',
    'Heart Attack',
    'Heat Exhaustion',
    'Knee Injury',
    'Laceration',
    'Nosebleed',
    'Open Wound',
    'Rotator Cuff Injury',
    'Seizures',
    'Skin Rashes',
    'Sprain',
    'Strain',
    'Stroke',
    'Swelling',
    'Swollen Muscles',
    'Traumatic Amputation',
  ]

  public search = '';
  public showFiller = false;

  constructor(private injuriesService: InjuriesService) { }

  ngOnInit(): void {
    this.injuriesService.subscribeToInjuries()
  }

}
