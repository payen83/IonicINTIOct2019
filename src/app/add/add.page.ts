import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  product: {
    name: string, 
    description: string,
    price: number,
    image: string
  }
  constructor(public modalController: ModalController) { 
    this.product = {
      name: null,
      description: null,
      price: null,
      image: null
    };
  }

  submit(){
    this.modalController.dismiss( { product: this.product } );
  }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss();
  }

}
