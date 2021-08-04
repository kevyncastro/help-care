import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class SuppliesService {

  constructor(private firestore: AngularFirestore) {
  }

  subscribeToSupplies() {
    return this.firestore.collection('List').doc('Supplies').snapshotChanges();
  }
}
