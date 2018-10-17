import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ListPage } from '../list/list';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = LoginPage;
    this.tab2 = ListPage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  tab1;
  tab2;

}
