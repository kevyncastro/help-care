import { Component, OnInit } from '@angular/core';
import { InjuriesService } from '../../core/services/injuries.service'
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public list = [];

  public search = '';
  public showFiller = false;
  public selected = false;

  public descriptions = [];
  public title = [];
  public images = [];
  public card = [];
  public noContent = true;
  public data = null;
  public video = null;
  public injury: string;

  constructor(private injuriesService: InjuriesService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getInjuriesList();
  }

  getInjuriesList() {
    this.injuriesService.subscribeToInjuries().subscribe((data) => {
      const newData: any = data.payload.data();
      this.list = newData?.List;
    })
  }

  select(item: string) {
    this.injury = item;
    this.selected = !this.selected;
    this.search = '';
    this.firestore.collection('Injuries').doc(item).snapshotChanges().subscribe((data) => {
      if(data) {
        const newData: any = data.payload.data();
        this.data = newData;
        this.descriptions = newData?.Description;
        this.title = newData?.Title;
        this.images = newData?.images;
        this.video = newData?.video;
      }
    })
  }

}
