import { Component, OnInit } from '@angular/core';
import { Theater } from 'src/app/models/theater.model';
import { TheaterService } from 'src/app/services/theater.service'; 

@Component({
  selector: 'app-theaters-list',
  templateUrl: './theaters-list.component.html',
  styleUrls: ['./theaters-list.component.css']
})
export class TheatersListComponent implements OnInit {
  theaters?: Theater[];


  theater:any;
  activateEditTheater:boolean=false;

  constructor(private theaterservice:TheaterService) { }

  ngOnInit(): void {
    this.retrieveTheaters();
  }

  retrieveTheaters(): void {
    this.theaterservice.getAll()
      .subscribe(
        data => {
          this.theaters = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTheaters();
  }

  removeAllTheaters(): void {
    if(confirm('Sei sicuro di voler rimuovere tutti i teatri?')){
      this.theaterservice.deleteAll()
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


  deletebyId(theater:Theater): void{
    if(confirm('Sei sicuro?'))
    {
      this.theaterservice.delete(theater.idTeatro).subscribe(data=>{
        this.refreshList();
      })
    }
  }

  edit(theater:Theater):void{

    this.theater=theater;
    console.log(this.theater);
    this.activateEditTheater=true;
  }


  
  close(){
    this.activateEditTheater=false;
    this.refreshList();
  }

}
