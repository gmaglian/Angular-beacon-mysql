import { Component, OnInit } from '@angular/core';
import { Locality } from 'src/app/models/locality.model';
import { LocalityService } from 'src/app/services/locality.service';

@Component({
  selector: 'app-localities-list',
  templateUrl: './localities-list.component.html',
  styleUrls: ['./localities-list.component.css']
})
export class LocalitiesListComponent implements OnInit {
  localities?: Locality[];


  locality:any;
  activateEditLocality:boolean=false;

  constructor(private localityservice:LocalityService) { }
  ngOnInit(): void {
    this.retrieveLocalities();
  }

  retrieveLocalities(): void {
    this.localityservice.getAll()
      .subscribe(
        data => {
          this.localities = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveLocalities();
  }

  removeAllLocalities(): void {
    if(confirm('Sei sicuro di voler rimuovere tutte le località?')){
      this.localityservice.deleteAll()
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


  deletebyId(locality:Locality): void{
    if(confirm('Sei sicuro?'))
    {
      this.localityservice.delete(locality.idLocalita).subscribe(data=>{
        this.refreshList();
      })
    }
  }

  edit(locality:Locality):void{

    this.locality=locality;
    console.log(this.locality);
    this.activateEditLocality=true;
  }

  close(){
    this.activateEditLocality=false;
    this.refreshList();
  }

}
