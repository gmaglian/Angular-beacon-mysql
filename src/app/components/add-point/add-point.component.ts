import { Component, OnInit } from '@angular/core';
import { Point } from 'src/app/models/point.model';
import { PointService } from 'src/app/services/point.service';
@Component({
  selector: 'app-add-point',
  templateUrl: './add-point.component.html',
  styleUrls: ['./add-point.component.css']
})
export class AddPointComponent implements OnInit {
  point: Point =
  {
    
      NomePunto:'',
      DescrizionePunto:'',
      Aree_idAree:''
    };

  submitted=false;
  constructor(private pointservice:PointService) { }

  ngOnInit(): void {
  }

  savePoint(nome_ref,aree_ref): void {
    const data = {
      NomePunto: this.point.NomePunto,
      DescrizionePunto: this.point.DescrizionePunto,
      Aree_idAree:this.point.Aree_idAree
    };

    if(nome_ref!='' && aree_ref!=0)
    {
    this.pointservice.create(data)
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
