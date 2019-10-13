import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string;
  constructor(public alertController: AlertController) {}

  userClick(){
    this.name = "Alvin";
    //alert('Hello ' + this.name);
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: this.name,
      buttons: ['OK']
    });

    await alert.present();
  }

}
