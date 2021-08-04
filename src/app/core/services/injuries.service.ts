import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class InjuriesService {

  constructor(private firestore: AngularFirestore) {
  }


  subscribeToInjuries() {
      this.firestore.collection('List').doc('Injrues').snapshotChanges().subscribe((list) => {
        console.log(list.payload.data());
      })
  }
}
