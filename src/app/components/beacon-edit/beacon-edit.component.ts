import { Component, OnInit, Input } from '@angular/core';

import { Beacon } from 'src/app/models/beacon.model';
import { BeaconService } from 'src/app/services/beacon.service';
@Component({
  selector: 'app-beacon-edit',
  templateUrl: './beacon-edit.component.html',
  styleUrls: ['./beacon-edit.component.css']
})
export class BeaconEditComponent implements OnInit {


  currentBeacon: Beacon={
     idBeacon:'',
     UID:'',
     MAJOR:'',
     MINOR:'',
     URL:'',
     Descrizione:'',
     //DataAssegnazione: new Date,
     PuntiDiInteresse_idPuntiDiInteresse:''
  };
  
  constructor(private service:BeaconService) { }
  

  @Input() beacon:any;


  ngOnInit(): void {

    this.currentBeacon.idBeacon=this.beacon.idBeacon;
    this.currentBeacon.UID=this.beacon.UID;
    this.currentBeacon.MAJOR=this.beacon.MAJOR;
    this.currentBeacon.MINOR=this.beacon.MINOR;
    this.currentBeacon.URL=this.beacon.URL;
    this.currentBeacon.Descrizione=this.beacon.Descrizione;
    this.currentBeacon.DataAssegnazione=this.beacon.DataAssegnazione;
    this.currentBeacon.PuntiDiInteresse_idPuntiDiInteresse=this.beacon.PuntiDiInteresse_idPuntiDiInteresse;

  }


  UpdateBeacon()
  {
    console.log("Update beacon");
    this.service.update(this.currentBeacon.idBeacon,this.currentBeacon).subscribe(
      response => {
        console.log(response);
        
      },
      error => {
        console.log(error);
      });
  }

}
