import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';

import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppinListModule } from './shopping-list/shopping-list.module';

@NgModule({
    declarations: [
        BasicHighlightDirective,
        AppComponent,
        HeaderComponent,


        BetterHighlightDirective,
        UnlessDirective,
        DropdownDirective,

        AuthComponent,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective
    ],
    providers: [ShoppingListService, RecipeService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
      }],
    bootstrap: [AppComponent],
    entryComponents:[
      AlertComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,

        RecipesModule,
        ShoppinListModule
    ]
})
export class AppModule { }
