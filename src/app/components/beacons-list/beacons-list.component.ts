import { Component, OnInit } from '@angular/core';
import { Beacon } from 'src/app/models/beacon.model';
import { BeaconService } from 'src/app/services/beacon.service';

@Component({
  selector: 'app-beacons-list',
  templateUrl: './beacons-list.component.html',
  styleUrls: ['./beacons-list.component.css']
})
export class BeaconsListComponent implements OnInit {
  beacons?: Beacon[];
  //currentBeacon?: Beacon;
  //currentIndex=-1;

  beacon:any;
  activateEditBeacon:boolean=false;

  constructor(private beaconservice:BeaconService) { }

  ngOnInit(): void {
    this.retrieveBeacons();
  }


  retrieveBeacons(): void {
    this.beaconservice.getAll()
      .subscribe(
        data => {
          this.beacons = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

  }

  refreshList(): void {
    this.retrieveBeacons();
    //this.currentBeacon = undefined;
    //this.currentIndex = -1;
  }



  removeAllBeacons(): void {
    if(confirm('Sei sicuro di voler rimuovere tutta la tabella dei beacons?')){
      this.beaconservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
    }
  }



  deletebyId(beacon:Beacon): void{
    if(confirm('Sei sicuro?'))
    {
      this.beaconservice.delete(beacon.idBeacon).subscribe(data=>{
        this.refreshList();
      })
    }
  }


  edit(beacon:Beacon):void{

    this.beacon=beacon;
    console.log(this.beacon);
    this.activateEditBeacon=true;
  }


  close(){
    this.activateEditBeacon=false;
    this.refreshList();
  }


}
