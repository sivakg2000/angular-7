import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypipes',
  templateUrl: './mypipes.component.html',
  styleUrls: ['./mypipes.component.scss']
})
export class MypipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  title = 'pipes';
  public name = "MEAN Stack";
  public myNumber = 12.34543534534
  public myNumberPer = 0.34
  public object = [{ "sno": 1, "name": "Ram" },
  { "sno": 2, "name": "Kumar" },
  { "sno": 3, "name": "Babu" }

  ]
  public myDate = new Date();
}
