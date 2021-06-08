import { Component, OnInit } from '@angular/core';
import { Point } from 'src/app/models/point.model';
import { PointService } from 'src/app/services/point.service';
import { AreaService } from 'src/app/services/area.service';


@Component({
  selector: 'app-add-point',
  templateUrl: './add-point.component.html',
  styleUrls: ['./add-point.component.css']
})
export class AddPointComponent implements OnInit {
  array = [];
  point: Point =
    {
      NomePunto:'',
      DescrizionePunto:'',
      Aree_idAree:''
    };

  submitted=false;

  constructor(private pointservice:PointService, private areaservice:AreaService) { }

  ngOnInit(): void {
    this.areaservice.getAll()
    .subscribe(
      data => {
        this.array = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
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
