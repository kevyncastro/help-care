import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class InjuriesService {

  constructor(private firestore: AngularFirestore) {
  }

  subscribeToInjuries() {
    return  this.firestore.collection('List').doc('Injrues').snapshotChanges()
  }
}
