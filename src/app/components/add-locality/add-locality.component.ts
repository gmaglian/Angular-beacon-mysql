import { Component, OnInit } from '@angular/core';
import { Locality } from 'src/app/models/locality.model';
import { LocalityService } from 'src/app/services/locality.service';


@Component({
  selector: 'app-add-locality',
  templateUrl: './add-locality.component.html',
  styleUrls: ['./add-locality.component.css']
})
export class AddLocalityComponent implements OnInit {
  locality: Locality =
  {
      NomeLocalita:'' 
  };

  submitted=false;
  constructor(private localityservice:LocalityService) { }

  ngOnInit(): void {
  }



  saveLocality(): void {
    const data = {
      NomeLocalita: this.locality.NomeLocalita
    };

    this.localityservice.create(data)
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
