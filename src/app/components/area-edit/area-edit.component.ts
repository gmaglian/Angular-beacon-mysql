import { Component, OnInit, Input  } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service'
import { TheaterService } from 'src/app/services/theater.service';  

@Component({
  selector: 'app-area-edit',
  templateUrl: './area-edit.component.html',
  styleUrls: ['./area-edit.component.css']
})
export class AreaEditComponent implements OnInit {
  array = [];
  currentArea: Area={
    idAree:'',
    NomeArea:'',
    Descrizione:'',
    Teatri_idTeatro:''

 };
  constructor(private service:AreaService, private theaterservice:TheaterService) { }

  @Input() area:any;
  ngOnInit(): void {
    this.currentArea.idAree=this.area.idAree;
    this.currentArea.NomeArea=this.area.NomeArea;
    this.currentArea.Descrizione=this.area.Descrizione;
    this.currentArea.Teatri_idTeatro=this.area.Teatri_idTeatro;

    this.theaterservice.getAll()
    .subscribe(
      data => {
        this.array = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });


  }


  UpdateArea()
  {
    console.log("Update area");
    this.service.update(this.currentArea.idAree,this.currentArea).subscribe(
      response => {
        console.log(response);
        
      },
      error => {
        console.log(error);
      });
  }


}
