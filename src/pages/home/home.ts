import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service'
import { NavController, App, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading: any;
  isLoggedIn: boolean = false;

  constructor(public app: App, public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    if(localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.authService.logout();
            let headers = new Headers();
      let nav = this.app.getRootNav();
      nav.setRoot(LoginPage);
    /*.then((result) => {
      this.loading.dismiss();
      let nav = this.app.getRootNav();
      nav.setRoot(LoginPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });*/
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Autenticando...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}