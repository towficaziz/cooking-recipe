import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports:[
    RouterModule.forChild([
      { path: 'shopping-list', component: ShoppingListComponent},
    ]),
    CommonModule,
    FormsModule
  ],
  exports:[
    ShoppingListComponent,
    ShoppingEditComponent,
  ]
})
export class ShoppinListModule{

}
