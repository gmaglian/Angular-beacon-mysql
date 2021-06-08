import { Component, OnInit, Input  } from '@angular/core';
import { Point } from 'src/app/models/point.model';
import { PointService } from 'src/app/services/point.service';
import { AreaService } from 'src/app/services/area.service';


@Component({
  selector: 'app-point-edit',
  templateUrl: './point-edit.component.html',
  styleUrls: ['./point-edit.component.css']
})
export class PointEditComponent implements OnInit {
  array = [];
  currentPoint: Point={
    idPuntiDiInteresse:'',
    NomePunto:'',
    DescrizionePunto:'',
    Aree_idAree:''
 };
  constructor(private service:PointService, private areaservice:AreaService) { }

  @Input() point:any;

  ngOnInit(): void {
    this.currentPoint.idPuntiDiInteresse=this.point.idPuntiDiInteresse;
    this.currentPoint.NomePunto=this.point.NomePunto;
    this.currentPoint.DescrizionePunto=this.point.DescrizionePunto;
    this.currentPoint.Aree_idAree=this.point.Aree_idAree;

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


  UpdatePoint()
  {
    console.log("Update point");
    this.service.update(this.currentPoint.idPuntiDiInteresse,this.currentPoint).subscribe(
      response => {
        console.log(response);
        
      },
      error => {
        console.log(error);
      });
  }

}
