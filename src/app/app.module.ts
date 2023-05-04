import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core-module';
import { LoggingService } from './logging.service';

@NgModule({
    declarations: [
        BasicHighlightDirective,
        BetterHighlightDirective,

        AppComponent,
        HeaderComponent,
        UnlessDirective,
    ],
    bootstrap: [AppComponent],
    // providers: [LoggingService],

    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        CoreModule
    ]
})
export class AppModule { }
