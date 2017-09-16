import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
//import { Pagina3Page } from '../../pages/pagina3/pagina3';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private alertCtrl: AlertController,
  	private loadingCtrl: LoadingController 
  	) {
  }




	ionViewCanEnter(){
		console.log('Event: ionViewCanEnter (bool/prom) -> 1-Puede entrar');
		//return false; no permite entrar a la pagina
		/*
		let numero = Math.round(Math.random()*10);
		console.log(numero);
		if (numero>=5){
			 return true;
		} else  {
			 return false;
		}
		*/
		let promesa = new Promise( (resolve, reject)=>{

		      let confirmar = this.alertCtrl.create({
		        title: "¿Seguro?",
		        subTitle: "¿Esta seguro que desea entrar?",
		        buttons: [
		          {
		            text: 'Cancelar',
		            handler: () => {
		            	resolve(false)  //promesa regresa un false
		            	//return false;
		            }
		          },
		          {
		            text: 'Seguro!',
		            handler: () => {

		            	resolve(true) //promesa regresa un true
		            	//return true;
		            }
		          }
		        ]

		      });

		      confirmar.present();

		    });

		    return promesa;

	}

	ionViewDidLoad(){
		console.log('Event: ionViewDidLoad (void) * ->2- Cargo la pagina');
	}
	ionViewWillEnter(){
		console.log('Event: ionViewWillEnter (void) ->3- La pagina va a ser mostrada');
	}
	ionViewDidEnter(){
		console.log('Event: ionViewDidEnter  (void) ->4-La Pagina esta en pantalla');
	}

	
	ionViewCanLeave(){
		console.log('Event: ionViewCanLeave  (bool/prom) ->5- Puede Salir');
		console.log('espere 2 seg para salir...');
		/*
		let promesa =new Promise ((resolve, reject) => {
			setTimeout( ()=>{
				resolve(true);
			},2000)
		})
		return promesa;
		*/
		 let loading = this.loadingCtrl.create({
		      content: "Espere por favor..."
		    });

		    loading.present();


		    let promesa = new Promise( ( resolve, reject )=>{

		      setTimeout( ()=>{

		        loading.dismiss(); //apagamos el loading
		        resolve(true)

		      }, 2000 );

		    })


		  return promesa;

	}

	ionViewWillLeave(){
		console.log('Event: ionViewWillLeave  (void) ->6- La página se volverá innactiva');
	}
	ionViewDidLeave(){
		console.log('Event: ionViewDidLeave  (void) ->7- Termino de salir de la pagina');
	}
	ionViewWillUnload(){
		console.log('Event: ionViewWillUnload (void) * ->8- La página será destruida');
	}



ir_pagina3(){
	
	//this.navCtrl.push("Pagina3Page"); //sin declarar a Pagina3 en module.ts
	this.navCtrl.push("mi-pagina3");
}


}


