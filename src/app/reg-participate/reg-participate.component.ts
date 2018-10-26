import { Component, OnInit } from '@angular/core';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-reg-participate',
  templateUrl: './reg-participate.component.html',
  styleUrls: ['./reg-participate.component.css']
})
export class RegParticipateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // showGroup:boolean = true;

  // hideGuest(isGuest) {
  //   console.log(isGuest)
  //   this.showGroup = isGuest.value === 'valNo' ? false:true;
  // }
}
