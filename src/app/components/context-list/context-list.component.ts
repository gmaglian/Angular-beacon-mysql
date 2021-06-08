import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { BeaconService } from 'src/app/services/beacon.service';

@Component({
  selector: 'app-context-list',
  templateUrl: './context-list.component.html',
  styleUrls: ['./context-list.component.css']
})
export class ContextListComponent implements OnInit {
  array = [];
  stringJson : any;
  stringObject: any;
  id:any;
  submitted=false;

  constructor(private contextservice:ContextService, private beaconservice:BeaconService) { }

  ngOnInit(): void {
   
    this.beaconservice.getAll()
    .subscribe(
      data => {
        this.array = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

  
  retrieveContext(): void {
    this.contextservice.get(this.id)
      .subscribe(
        data => {          
          console.log(data);

          // Convert String obect to JSON
          this.stringJson = JSON.stringify(data);
          console.log("String json object :", this.stringJson);
          console.log("Type :", typeof this.stringJson);

          // ConvertjSON to an object
          this.stringObject = JSON.parse(this.stringJson);
          console.log("JSON object -", this.stringObject);
        },
        error => {
          console.log(error);
        });

  }

  showContext(){
    this.retrieveContext();
    console.log("Stampa id: ", this.id);
    this.submitted=true;
  }

}