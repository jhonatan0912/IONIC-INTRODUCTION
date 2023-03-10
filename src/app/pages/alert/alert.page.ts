import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  onClick() {
    this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false, // No se puede hacer click fuera de la alerta, se tiene que pulsar el OK si o si
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
