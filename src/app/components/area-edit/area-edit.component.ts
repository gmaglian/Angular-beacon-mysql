import { Component, OnInit, Input  } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service'

@Component({
  selector: 'app-area-edit',
  templateUrl: './area-edit.component.html',
  styleUrls: ['./area-edit.component.css']
})
export class AreaEditComponent implements OnInit {
  currentArea: Area={
    idAree:'',
    NomeArea:'',
    Descrizione:'',
    Teatri_idTeatro:''

 };
  constructor(private service:AreaService) { }

  @Input() area:any;
  ngOnInit(): void {
    this.currentArea.idAree=this.area.idAree;
    this.currentArea.NomeArea=this.area.NomeArea;
    this.currentArea.Descrizione=this.area.Descrizione;
    this.currentArea.Teatri_idTeatro=this.area.Teatri_idTeatro;
  
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
