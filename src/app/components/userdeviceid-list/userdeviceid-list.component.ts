import { Component, OnInit } from "@angular/core";
import { UserDeviceId } from 'src/app/models/userdeviceid.model';
import { UserDeviceIdService } from 'src/app/services/userdeviceid.service';

@Component({
    selector: 'app-userdeviceid-list',
    templateUrl: './userdeviceid-list.component.html',
    styleUrls: ['./userdeviceid-list.component.css']

})
export class UserDeviceIdListComponent implements OnInit{
    userdeviceids?: UserDeviceId[];

    userdeviceid:any;
    activateEditUserdeviceid:boolean=false;
    constructor(private Userdeviceidservice:UserDeviceIdService){}
    ngOnInit(): void{
        this.retriveUserDeviceId();
    }

    retriveUserDeviceId(): void{
        this.Userdeviceidservice.getAll()
            .subscribe(
                data => {
                    this.userdeviceids = data;
                    console.log(data);
                },
                error =>{
                    console.log(error);
                }
            );
    }
    refreshList(): void {
        this.retriveUserDeviceId();
      }
    
      removeAllUserDeviceId(): void {
        if(confirm('Sei sicuro di voler rimuovere tutte le località?')){
          this.Userdeviceidservice.deleteAll()
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
      deletebyId(userdeviceid:UserDeviceId): void{
        if(confirm('Sei sicuro?'))
        {
          this.Userdeviceidservice.delete(userdeviceid.userid).subscribe(data=>{
            this.refreshList();
          })
        }
      }
      edit(userdeviceid:UserDeviceId):void{

        this.userdeviceid=userdeviceid;
        console.log(this.userdeviceid);
        this.activateEditUserdeviceid=true;
      }
    
      close(){
        this.activateEditUserdeviceid=false;
        this.refreshList();
      }
    
    
    
}