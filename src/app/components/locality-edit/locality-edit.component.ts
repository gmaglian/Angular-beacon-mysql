import { Component, OnInit, Input } from '@angular/core';
import { Locality } from 'src/app/models/locality.model';
import { LocalityService } from 'src/app/services/locality.service';

@Component({
  selector: 'app-locality-edit',
  templateUrl: './locality-edit.component.html',
  styleUrls: ['./locality-edit.component.css']
})
export class LocalityEditComponent implements OnInit {

  currentLocality: Locality={
    idLocalita:'',
    NomeLocalita:''
 };

  constructor(private service:LocalityService) { }

  @Input() locality:any;


  ngOnInit(): void {
    this.currentLocality.idLocalita=this.locality.idLocalita;
    this.currentLocality.NomeLocalita=this.locality.NomeLocalita;
  }


  UpdateLocality()
  {
    console.log("Update località");
    this.service.update(this.currentLocality.idLocalita,this.currentLocality).subscribe(
      response => {
        console.log(response);
        
      },
      error => {
        console.log(error);
      });
  }
}
