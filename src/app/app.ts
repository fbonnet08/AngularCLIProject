import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {Master} from './components/master/master';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonToggle,
    Master,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularCLIProject');

  getDebugger(){

    let a = "wow Debugger";
    console.log("Hello world from debugger ...");

  }

}
