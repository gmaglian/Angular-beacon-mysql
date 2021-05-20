import { Component, OnInit, Input  } from '@angular/core';
import { Point } from 'src/app/models/point.model';
import { PointService } from 'src/app/services/point.service';

@Component({
  selector: 'app-point-edit',
  templateUrl: './point-edit.component.html',
  styleUrls: ['./point-edit.component.css']
})
export class PointEditComponent implements OnInit {
  currentPoint: Point={
    idPuntiDiInteresse:'',
    NomePunto:'',
    DescrizionePunto:'',
    Aree_idAree:''
 };
  constructor(private service:PointService) { }

  @Input() point:any;

  ngOnInit(): void {
    this.currentPoint.idPuntiDiInteresse=this.point.idPuntiDiInteresse;
    this.currentPoint.NomePunto=this.point.NomePunto;
    this.currentPoint.DescrizionePunto=this.point.DescrizionePunto;
    this.currentPoint.Aree_idAree=this.point.Aree_idAree;

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
