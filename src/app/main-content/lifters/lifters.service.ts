import { isLoweredSymbol } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Lifter } from "src/app/models/lifter";

@Injectable({
    providedIn: 'root'
  })
export class LiftersService {


    ourLifters: Lifter[] =[
      new Lifter("1", "Jesper B", 73, 107, 125, 228, {imageURL:"https://i.insider.com/60f7f5a70729770012b90039?width=700"}),
      new Lifter("2", "Albin", 89, 106, 124, 227, {imageURL:"https://www.mercurynews.com/wp-content/uploads/2021/08/BNG-L-OLYLIFT-3.jpg"}),
      new Lifter("3", "Linus", 73, 105, 123, 226,{bio:"some bio",imageURL:"https://i0.wp.com/www.mercurynews.com/wp-content/uploads/2021/08/BNG-L-OLYLIFT-1.jpg?fit=620,9999px&ssl=1"}),
      new Lifter("4", "Olle", 96, 104, 122, 225, {imageURL:"https://d.newsweek.com/en/full/1855213/team-usas-jourdan-elizabeth-delacruz.jpg?w=790&f=a7ff3c88bd2c02056a1694d011e03a54"}),
      new Lifter("5", "Fredrik", 81, 103, 121, 224, {imageURL:"https://d.newsweek.com/en/full/1855213/team-usas-jourdan-elizabeth-delacruz.jpg?w=790&f=a7ff3c88bd2c02056a1694d011e03a54"}),
      new Lifter("6", "Jesper H", 81, 102, 120, 223, {imageURL:"https://d.newsweek.com/en/full/1855213/team-usas-jourdan-elizabeth-delacruz.jpg?w=790&f=a7ff3c88bd2c02056a1694d011e03a54"}),
      new Lifter("7", "Amanda", 64, 101, 119, 222, {imageURL:"https://d.newsweek.com/en/full/1855213/team-usas-jourdan-elizabeth-delacruz.jpg?w=790&f=a7ff3c88bd2c02056a1694d011e03a54"}),
      new Lifter("8", "Lina", 59, 100, 118, 221, {imageURL:"https://d.newsweek.com/en/full/1855213/team-usas-jourdan-elizabeth-delacruz.jpg?w=790&f=a7ff3c88bd2c02056a1694d011e03a54"}),
      new Lifter("9", "Wilma", 71, 99, 117, 220, {imageURL:"https://d.newsweek.com/en/full/1855213/team-usas-jourdan-elizabeth-delacruz.jpg?w=790&f=a7ff3c88bd2c02056a1694d011e03a54"}),
      
      ]

  getLifters() {
    return this.ourLifters;
  }

  getLifter(id: string) : Lifter{
    const lifter = this.ourLifters.find(
      (l) => {
        return l.id === id;
      }
    );
    if (lifter === undefined) {
      throw new TypeError('Cannot find the newsPost')
    }
    return lifter;
  }

  constructor() { }
}
