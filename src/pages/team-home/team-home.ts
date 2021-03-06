import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StandingsPage} from '../pages';
import { TeamDetailPage } from '../pages';
import { MyTeamsPage } from '../pages';


/*
  Generated class for the TeamHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {
  team: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  goHome(){
             //this.navCtrl.push(MyTeamsPage);
             //this.navCtrl.popToRoot();
             console.log('**parent', this.navCtrl.parent)
             this.navCtrl.parent.parent.popToRoot();
  }

}
