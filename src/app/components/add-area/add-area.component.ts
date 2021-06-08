import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';
import { TheaterService } from 'src/app/services/theater.service';  

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.css']
})
export class AddAreaComponent implements OnInit {
  array = [];
  area: Area =
  {
      NomeArea:'',
      Descrizione:'',
      Teatri_idTeatro:''
    };

  submitted=false;

  constructor(private areaservice:AreaService, private theaterservice:TheaterService) { }

  ngOnInit(): void {

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



  saveArea(nome_ref,teatri_ref): void {
    const data = {
      NomeArea: this.area.NomeArea,
      Descrizione: this.area.Descrizione,
      Teatri_idTeatro:this.area.Teatri_idTeatro
    };

    if(nome_ref!='' && teatri_ref!=0)
    {
    this.areaservice.create(data)
      .subscribe(
        
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
      }
     
  }

}
