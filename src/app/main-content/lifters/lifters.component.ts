import { Component, OnInit } from '@angular/core';
import { Lifter } from 'src/app/models/lifter';
import { LiftersService } from './lifters.service';

@Component({
  selector: 'app-lifters',
  templateUrl: './lifters.component.html',
  styleUrls: ['./lifters.component.css']
})
export class LiftersComponent implements OnInit {

  colSpan = 3;

  public ourLifters: Lifter[] = [];

  constructor(private liftersService:LiftersService) { }

  ngOnInit(): void {
    this.ourLifters = this.liftersService.getLifters();
    this.ourLifters = this.ourLifters.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
    return 0;
    });
    console.log("Ourlifters: ", this.ourLifters)
    if (window.innerWidth >= 1100) {
      this.colSpan = 3;
    }else if(window.innerWidth >= 766){
      this.colSpan = 2;
    } else {
      this.colSpan = 1;
    }
    
  }

  onResize(event: any) {
    if (event.target.innerWidth >= 1100) {
      this.colSpan = 3;
    }else if(event.target.innerWidth >= 767){
      this.colSpan = 2;
    } else {
      this.colSpan = 1;
    }
  }
}
