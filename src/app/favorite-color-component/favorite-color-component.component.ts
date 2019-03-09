import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-favorite-color-component',
  templateUrl: './favorite-color-component.component.html',
  styleUrls: ['./favorite-color-component.component.scss'],
  template : `Favorite Color: <input type = "text">
  [formControl]= "favoriteColorControl"`
})
export class FavoriteColorComponentComponent implements OnInit {

  // Defination needs to be outside of constructor other wise throws error.
  favoriteColorControl = new FormControl('');
  dev;
  constructor() {
    dev = new FormControl();
}

  ngOnInit() {
  }

}
