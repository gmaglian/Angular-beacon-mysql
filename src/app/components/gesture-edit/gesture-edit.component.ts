import { Component, OnInit,Input } from '@angular/core';

import { Gesture } from 'src/app/models/gesture.model';
import { GestureService } from 'src/app/services/gesture.service';

@Component({
  selector: 'app-gesture-edit',
  templateUrl: './gesture-edit.component.html',
  styleUrls: ['./gesture-edit.component.css']
})
export class GestureEditComponent implements OnInit {
  currentGesture: Gesture={
    id: '',
    infoscena: '',
    infoattore: '',
    sottotitoliit: '',
    sottotitolien: '',
    posizione: '',
    dimcarattere: ''
 };

  constructor(private gestureservice:GestureService) { }

  @Input() gesture:any;

  ngOnInit(): void {
    this.currentGesture.id=this.gesture.id;
    this.currentGesture.infoscena=this.gesture.infoscena;
    this.currentGesture.infoattore=this.gesture.infoattore;
    this.currentGesture.sottotitoliit=this.gesture.sottotitoliit;
    this.currentGesture.sottotitolien=this.gesture.sottotitolien;
    this.currentGesture.posizione=this.gesture.posizione;
    this.currentGesture.dimcarattere=this.gesture.dimcarattere;

  }
  UpdateGesture()
  {
    console.log("Update beacon");
    this.gestureservice.update(this.currentGesture.id,this.currentGesture).subscribe(
      response => {
        console.log(response);
      
      },
      error => {
        console.log(error);
      });
  }

}
