import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AjustesService } from "../providers/ajustes";
//import { IntroduccionPage } from '../pages/introduccion/introduccion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  //rootPage:any = IntroduccionPage;
  //rootPage:any = 'IntroduccionPage';
  rootPage:any;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
      private _ajustesServicio:AjustesService) {
    platform.ready().then(() => {
      
      

        this._ajustesServicio.cargar_storage()
            .then( ()=>{

              if( this._ajustesServicio.ajustes.mostrar_tutorial ){
                this.rootPage = "IntroduccionPage";
              }else{
                this.rootPage = HomePage;
              }

              this.platform.pause.subscribe(()=>{  //me suscribo a 
                 console.log('mi aplicacion se detendra, hizo una pausa');
              });
              this.platform.resume.subscribe(()=>{  //me suscribo a 
                 console.log('mi aplicacion se reanudo, va a continuar');
              });
              
              statusBar.styleDefault();
              splashScreen.hide();  //loading de la aplicacion

        })




    });
  }
}

