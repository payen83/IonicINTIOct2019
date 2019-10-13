import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddPage } from '../add/add.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  productList: Array<any>;

  constructor(public modalController: ModalController, public storage: Storage) { 
    this.productList = [
      {
        name: "Adidas Shoes",
        description: "Made from Vietnam",
        price: 149.90,
        image: "https://contents.mediadecathlon.com/p1419921/k$72b461620e3e5ec61db942355362dd66/pw-100-men-s-fitness-walking-shoes-grey.jpg"
      },
      {
        name: "Nike Cap",
        description: "Nice to wear",
        price: 29.90,
        image: "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/zlwog4w53fewzsqi3bns/legacy-91-adjustable-golf-hat-y1MAwd.jpg"
      },
      {
        name: "Reebok T-Shirt",
        description: "White color",
        price: 45.00,
        image: "https://assets.reebok.com/images/w_280,h_280,f_auto,q_auto:sensitive/0961ef13110840c2b421a8a1015649cb_9366/reebok-classic-vector-tee.jpg"
      }
    ];

  }

  add(){
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddPage
    });

    modal.onDidDismiss().then(data => {
      let item: any = data;
      if(item.data.product) {
        this.productList.push(item.data.product);
        this.storage.set('PRODUCTS', JSON.stringify(this.productList));
      }
    });

    return await modal.present();
  }

  ngOnInit() {
    // this.storage.remove('PRODUCTS');
    this.storage.get('PRODUCTS').then(data => {
      if(data){
        this.productList = JSON.parse(data);
      }
    });
  }

}
