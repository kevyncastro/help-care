import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.scss']
})
export class SuppliesComponent implements OnInit {

  public supplies = [
    'High Flow Nasal Cannula',
    'Pulse Oximeter',
    'Acohol, Disinfectants',
    'Baricitinib',
    'Leronlimab',
    'Remdesivir',
    'Favipiravir',
    'Tocilizumab',
    'Oxygen Concentrator',
    'Oxygen Tank',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
