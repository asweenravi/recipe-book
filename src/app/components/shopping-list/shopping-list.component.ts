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

  cartItem: Object = {
    'name': '',
    'amount': '' 
  };

  cartItems: any = [
  ]

  constructor() { }

  ngOnInit() {
  }

  revert() {
    this.shoppingForm.reset();
  }

  addProduct() {
    this.cartItem['name'] = this.shoppingForm.controls.name.value;
    this.cartItem['amount'] = this.shoppingForm.controls.amount.value; 
    var addingItem = JSON.parse(JSON.stringify(this.cartItem));
    this.cartItems.push(addingItem);
    this.revert();
  }


  deleteItem(index) {
    this.cartItems.splice(index,1);
  }

}
