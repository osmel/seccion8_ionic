import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform } from "ionic-angular";

@Injectable()
export class AjustesService {

  ajustes = {
    mostrar_tutorial: true
  }


  constructor( private platform : Platform,
               private storage: Storage) {
    console.log('Hello Ajustes Provider');

  }

  cargar_storage(){  // storage.get -->cargar la data

    let promesa = new Promise(  ( resolve, reject )=>{

      if(  this.platform.is("cordova")   ){    // si estamos en un Dispositivo
            console.log("Inicializando storage");

            this.storage.ready()  //esto regresa una promesa
                .then( ()=>{

                  console.log("Storage listo");

                  this.storage.get("ajustes") //este regresa una promesa
                      .then( ajus=>{

                        if( ajus ){ //ajustes inicialmente viene null
                          this.ajustes = ajus;
                        }

                        resolve();

                      });
                })

      }else{  // si estamos en  Escritorio
            if( localStorage.getItem("ajustes") ){ //como puede ser la primera vez que carguemos puede ser que no exista la prop ajustes, por tanto debemos comprobarla
              this.ajustes = JSON.parse( localStorage.getItem("ajustes") );  //guardamos el valor del ajuste como objeto(lo convertimos a objeto con JSON.parse porque es un string)
            } 

            resolve();

      }


  });

  return promesa;


  }


  guardar_storage(){  // storage.set -->guardar la data


    if(  this.platform.is("cordova")   ){  //cuando estamos en un movil funciona el plugin    // Dispositivo
      this.storage.ready() //regresa una promesa
            .then( ()=>{
              this.storage.set( "ajustes", this.ajustes );
            })

    }else{  //cuando estamo en un Escritorio(localstorage en los escritorios solo graban string por eso convierto el objeto a string con  JSON.stringify)
      localStorage.setItem("ajustes", JSON.stringify(this.ajustes) );  //guardo en la propiedad ajuste
    }



  }


}
