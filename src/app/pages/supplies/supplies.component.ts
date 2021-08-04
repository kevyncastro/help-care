import { Component, OnInit } from '@angular/core';
import { SuppliesService } from '../../core/services/supplies.service';
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
    'Oxygen Tank'
  ]

  public list = [];
  public search = '';
  public selected = false;

  constructor(private suppliesService: SuppliesService) { }

  ngOnInit(): void {
    this.getSuppliesList();
  }

  getSuppliesList() {
    this.suppliesService.subscribeToSupplies().subscribe((data) => {
      const newData: any = data.payload.data();
      this.list = newData?.List;
    })
  }

}
