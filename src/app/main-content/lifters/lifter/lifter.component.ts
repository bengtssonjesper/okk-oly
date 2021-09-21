import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lifter } from 'src/app/models/lifter';
import { LiftersService } from '../lifters.service';

@Component({
  selector: 'app-lifter',
  templateUrl: './lifter.component.html',
  styleUrls: ['./lifter.component.css']
})
export class LifterComponent implements OnInit {

  lifter!: Lifter;
  imageValues = { cols: 0, rows: 0 };
  descriptionValues = { cols: 0, rows: 0 };
  bioValues = { cols: 0, rows: 0 };

  constructor(private route: ActivatedRoute, private liftersService: LiftersService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.lifter = this.liftersService.getLifter(id);

    if (window.innerWidth >= 1100) {
      this.imageValues.cols = 2;
      this.imageValues.rows = 4;
      this.descriptionValues.cols = 2;
      this.descriptionValues.rows = 2;
      this.bioValues.cols = 4;
      this.bioValues.rows = 2;
    } else if (window.innerWidth >= 767) {
      this.imageValues.cols = 2;
      this.imageValues.rows = 2;
      this.descriptionValues.cols = 2;
      this.descriptionValues.rows = 2;
      this.bioValues.cols = 4;
      this.bioValues.rows = 4;
    } else {
      this.imageValues.cols = 4;
      this.imageValues.rows = 4;
      this.descriptionValues.cols = 4;
      this.descriptionValues.rows = 1;
      this.bioValues.cols = 4;
      this.bioValues.rows = 6;
    }
  }

  onResize(event: any) {
    if (event.target.innerWidth >= 1100) {
      this.imageValues.cols = 2;
      this.imageValues.rows = 4;
      this.descriptionValues.cols = 2;
      this.descriptionValues.rows = 2;
      this.bioValues.cols = 4;
      this.bioValues.rows = 2;
    } else if (event.target.innerWidth >= 767) {
      this.imageValues.cols = 2;
      this.imageValues.rows = 4;
      this.descriptionValues.cols = 2;
      this.descriptionValues.rows = 2;
      this.bioValues.cols = 4;
      this.bioValues.rows = 4;
    } else {
      this.imageValues.cols = 4;
      this.imageValues.rows = 4;
      this.descriptionValues.cols = 4;
      this.descriptionValues.rows = 1;
      this.bioValues.cols = 4;
      this.bioValues.rows = 6;
    }
  }
}
