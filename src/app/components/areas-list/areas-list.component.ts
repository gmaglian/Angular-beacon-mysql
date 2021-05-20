import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service'

@Component({
  selector: 'app-areas-list',
  templateUrl: './areas-list.component.html',
  styleUrls: ['./areas-list.component.css']
})
export class AreasListComponent implements OnInit {
  areas?: Area[];
  //currentBeacon?: Beacon;
  //currentIndex=-1;

  area:any;
  activateEditArea:boolean=false;
  constructor(private areaservice:AreaService) { }

  ngOnInit(): void {
    this.retrieveAreas();
  }


  retrieveAreas(): void {
    this.areaservice.getAll()
      .subscribe(
        data => {
          this.areas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

  }

  refreshList(): void {
    this.retrieveAreas();
  }


  removeAllAreas(): void {
    if(confirm('Sei sicuro di voler rimuovere tutte le aree?')){
      this.areaservice.deleteAll()
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


  deletebyId(area:Area): void{
    if(confirm('Sei sicuro?'))
    {
      this.areaservice.delete(area.idAree).subscribe(data=>{
        this.refreshList();
      })
    }
  }


  
  edit(area:Area):void{

    this.area=area;
    console.log(this.area);
    this.activateEditArea=true;
  }

  close(){
    this.activateEditArea=false;
    this.refreshList();
  }


}
