import { Component, OnInit,Input } from '@angular/core';
import { Theater } from 'src/app/models/theater.model';
import { TheaterService } from 'src/app/services/theater.service';
import { LocalityService } from 'src/app/services/locality.service';

@Component({
  selector: 'app-theater-edit',
  templateUrl: './theater-edit.component.html',
  styleUrls: ['./theater-edit.component.css']
})
export class TheaterEditComponent implements OnInit {
  array = [];
  currentTheater: Theater={
    idTeatro:'',
    NomeTeatro:'',
    Descrizione:'',
    Localita_idLocalita:''

 };
  constructor(private service:TheaterService, private localityservice:LocalityService) { }

  @Input() theater:any;

  ngOnInit(): void {
    this.currentTheater.idTeatro=this.theater.idTeatro;
    this.currentTheater.NomeTeatro=this.theater.NomeTeatro;
    this.currentTheater.Descrizione=this.theater.Descrizione;
    this.currentTheater.Localita_idLocalita=this.theater.Localita_idLocalita;

    this.localityservice.getAll()
    .subscribe(
      data => {
        this.array = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

  UpdateTheater()
  {
    console.log("Update theater");
    this.service.update(this.currentTheater.idTeatro,this.currentTheater).subscribe(
      response => {
        console.log(response);
        
      },
      error => {
        console.log(error);
      });
  }


}
