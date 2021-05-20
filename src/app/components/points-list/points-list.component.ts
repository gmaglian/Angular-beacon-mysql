import { Component, OnInit } from '@angular/core';
import { Point } from 'src/app/models/point.model';
import { PointService } from 'src/app/services/point.service';
@Component({
  selector: 'app-points-list',
  templateUrl: './points-list.component.html',
  styleUrls: ['./points-list.component.css']
})
export class PointsListComponent implements OnInit {
  points?: Point[];


  point:any;
  activateEditPoint:boolean=false;

  constructor(private pointservice:PointService) { }

  ngOnInit(): void {
    this.retrievePoints();
  }

  retrievePoints(): void {
    this.pointservice.getAll()
      .subscribe(
        data => {
          this.points = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

  }

  refreshList(): void {
    this.retrievePoints();
  }


  
  removeAllPoints(): void {
    if(confirm('Sei sicuro di voler rimuovere tutti i punti di Interesse?')){
      this.pointservice.deleteAll()
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


  deletebyId(point:Point): void{
    if(confirm('Sei sicuro?'))
    {
      this.pointservice.delete(point.idPuntiDiInteresse).subscribe(data=>{
        this.refreshList();
      })
    }
  }


  edit(point:Point):void{

    this.point=point;
    console.log(this.point);
    this.activateEditPoint=true;
  }



  close(){
    this.activateEditPoint=false;
    this.refreshList();
  }




}
