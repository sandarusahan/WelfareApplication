import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seating-layout',
  templateUrl: './seating-layout.component.html',
  styleUrls: ['./seating-layout.component.css']
})
export class SeatingLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rows:number;
createLayout (rows) {
  console.log(rows);
  var table: HTMLTableElement = <HTMLTableElement> document.getElementById("seatTable");
    for(var i=0; i<rows; i++){
      var row = table.insertRow(i);
    } 
  }
}

