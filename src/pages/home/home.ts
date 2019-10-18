import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import iro from '@jaames/iro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    console.log('iro start -> ',iro);
    let colorPicker = new iro.ColorPicker("#color-picker-container", {
      borderWidth: 1,
      borderColor: "#ffffff",
      wheelAngle: -90,
      wheelDirection: "clockwise",
      width: 320,
      color: "#13e7c4",
      handleRadius: 12,
    });
    colorPicker.on("input:move",(changeValue)=>{
      //console.log("move -> ",changeValue.hexString);
    });
    colorPicker.on("input:end",(changeValue)=>{
      console.log("end -> ",changeValue.hexString);
    });
  }

}
