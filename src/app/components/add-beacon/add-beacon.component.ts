import { Component, OnInit } from '@angular/core';
import { Beacon } from 'src/app/models/beacon.model';
import { BeaconService } from 'src/app/services/beacon.service';
import { PointService } from 'src/app/services/point.service';

@Component({
  selector: 'app-add-beacon',
  templateUrl: './add-beacon.component.html',
  styleUrls: ['./add-beacon.component.css']
})
export class AddBeaconComponent implements OnInit {
  array=[];
  beacon: Beacon =
    {
        //idBeacon:'',
        UID:'',
        MAJOR:'',
        MINOR:'',
        URL:'',
        Descrizione:'',
        //DataAssegnazione:new Date(),
        PuntiDiInteresse_idPuntiDiInteresse:''
      };

    submitted=false;

    constructor(private beaconservice:BeaconService, private ps:PointService) { }

    ngOnInit(): void {
     
      this.ps.getAll()
      .subscribe(
        data => {
          this.array = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

  }


  saveBeacon(uid_ref,major_ref,minor_ref): void {
    const data = {
      UID: this.beacon.UID,
      MAJOR: this.beacon.MAJOR,
      MINOR:this.beacon.MINOR,
      URL:this.beacon.URL,
      Descrizione:this.beacon.Descrizione,
      DataAssegnazione:this.beacon.DataAssegnazione,
      PuntiDiInteresse_idPuntiDiInteresse:this.beacon.PuntiDiInteresse_idPuntiDiInteresse
    };
    console.log(data.DataAssegnazione);
    if(uid_ref!=0 && major_ref!=0 && minor_ref!=0)
    {
    this.beaconservice.create(data)
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
