import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonToggle],
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
