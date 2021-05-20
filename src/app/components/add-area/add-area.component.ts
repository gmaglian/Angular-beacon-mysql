import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service'

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.css']
})
export class AddAreaComponent implements OnInit {
  area: Area =
  {
      NomeArea:'',
      Descrizione:'',
      Teatri_idTeatro:''
    };

  submitted=false;

  constructor(private areaservice:AreaService) { }

  ngOnInit(): void {
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
