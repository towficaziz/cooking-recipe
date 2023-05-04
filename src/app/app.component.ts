import { LoggingService } from './logging.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService, private loggingService: LoggingService){}

  ngOnInit(){
    this.authService.autoLogin();
    this.loggingService.printLog('Hello form AppComponent ngOnInit');
  }
  // loadedFeature = 'recipe'

  // onNavigate(feature: string){
  //   this.loadedFeature = feature;
  // }

  // numbers = [1,2,3,4,5];
  // oddNumbers = [1,3,5];
  // evenNumbers = [2,4];
  // onlyOdd = false;
  // value = 5;
}
