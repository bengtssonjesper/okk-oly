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

  constructor(private route: ActivatedRoute, private liftersService: LiftersService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.lifter = this.liftersService.getLifter(id);

  }
}
