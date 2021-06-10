import { Component, OnInit } from '@angular/core';
import { Gesture } from 'src/app/models/gesture.model';
import { GestureService } from 'src/app/services/gesture.service';

@Component({
  selector: 'app-gestures-list',
  templateUrl: './gestures-list.component.html',
  styleUrls: ['./gestures-list.component.css']
})
export class GestureListComponent implements OnInit {
  gestures?: Gesture[];

  gesture:any;
  activateEditGesture:boolean=false;

  constructor(private gestureservice:GestureService) { }

  ngOnInit(): void {
    this.retrieveGestures();
  }
  
  retrieveGestures(): void {
    this.gestureservice.getAll()
      .subscribe(
        data => {
          this.gestures = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveGestures();

  }

  removeAllGestures(): void {
    if(confirm('Sei sicuro di voler rimuovere tutta la tabella dei gesti?')){
      this.gestureservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
    }
  }

  deletebyId(gesture:Gesture): void{
    if(confirm('Sei sicuro?'))
    {
      this.gestureservice.delete(gesture.id).subscribe(data=>{
        this.refreshList();
      })
    }
  }

  edit(gesture:Gesture):void{
    this.gesture=gesture;
    console.log(this.gesture);
    this.activateEditGesture=true;
  }


  close(){
    this.activateEditGesture=false;
    this.refreshList();
  }

}
