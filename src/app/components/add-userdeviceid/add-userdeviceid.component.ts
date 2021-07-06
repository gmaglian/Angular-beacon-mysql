import { Component, OnInit } from "@angular/core";
import { UserDeviceId } from "src/app/models/userdeviceid.model";
import { MacDeviceIdService } from "src/app/services/macdeviceid.service";
import { UserDeviceIdService } from "src/app/services/userdeviceid.service";

@Component({
    selector: 'app-add-userdeviceid',
    templateUrl: './add-userdeviceid.component.html',
    styleUrls: ['./add-userdeviceid.component.css']
})
export class AddUserDeviceIdComponent implements OnInit{
    array=[];
    userdeviceid: UserDeviceId = 
    {
        id:'',
    userid:'',
    hololensid:'',
    gestureid:'',
    data_consegna:'',
    data_ritiro:''
    };
    submitted=false;

    constructor(private userdeviceidservice:UserDeviceIdService, private macdeviceid:MacDeviceIdService){}

    ngOnInit(): void {
      this.macdeviceid.getAll()
      .subscribe(
          data => {
              this.array = data;
              console.log(data);
          },
          error => {
              console.log(error)
          }
      );
    }
    saveUserDeviceId(id_ref,userid_ref,hololensid_ref,dataconsegna_ref): void {
      var currentdate = new Date();
      var datetime = ""+currentdate.getHours()+":"+currentdate.getMinutes();
        const data = {
            id: this.userdeviceid.id,
            userid: this.userdeviceid.userid,
            hololensid: this.userdeviceid.hololensid,
            gestureid: this.userdeviceid.gestureid,
            data_consegna: this.userdeviceid.data_consegna +" "+ datetime+" ",
            data_ritiro: null
        };
        if(id_ref!=0 && userid_ref!=0 && hololensid_ref!=0  && dataconsegna_ref!=0)
    {
      
    this.userdeviceidservice.create(data)
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