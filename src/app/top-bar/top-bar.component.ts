import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class TopBarComponent implements OnInit {

  static nameToDisplay;

  constructor(
  ) 
  { 
    
  }

  ngOnInit() {
  }

  get name()  {
    return TopBarComponent.nameToDisplay;
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/