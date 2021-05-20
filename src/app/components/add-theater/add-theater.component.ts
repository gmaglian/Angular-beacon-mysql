import { Component, OnInit } from '@angular/core';
import { Theater } from 'src/app/models/theater.model';
import { TheaterService } from 'src/app/services/theater.service';  

@Component({
  selector: 'app-add-theater',
  templateUrl: './add-theater.component.html',
  styleUrls: ['./add-theater.component.css']
})
export class AddTheaterComponent implements OnInit {
  theater: Theater =
    {
        NomeTeatro:'',
        Descrizione:'',
        Localita_idLocalita:''
      };

    submitted=false;

  constructor(private theaterservice:TheaterService) { }

  ngOnInit(): void {
  }

  saveTheater(nome_teatro_ref,localita_idlocalita_ref): void {
    const data = {
      NomeTeatro: this.theater.NomeTeatro,
      Descrizione: this.theater.Descrizione,
      Localita_idLocalita:this.theater.Localita_idLocalita
    };
    if(nome_teatro_ref!='' && localita_idlocalita_ref!=0)
    {
    this.theaterservice.create(data)
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
