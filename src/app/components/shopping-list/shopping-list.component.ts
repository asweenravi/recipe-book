import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    amount: new FormControl('',[Validators.required])
  });

  cartItems: any = [
    {
      name: 'Apple',
      amount: '5'
    },
    {
      name: 'Orange',
      amount: '6'
    },
    {
      name: 'Fig',
      amount: '2'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  revert() {
    this.shoppingForm.reset()
  }

}
