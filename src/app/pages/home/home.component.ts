import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router:Router){}
  darkMode: boolean = false;

  Zoom(id: number) {
    if (id === 3) {
      document.body.classList.remove("normal");
      document.body.classList.remove("zoomout");
      document.body.classList.add("zoomin");
    } else if (id === 2) {
      document.body.classList.remove("zoomout");
      document.body.classList.remove("zoomin");
      document.body.classList.add("normal");
    } else if (id === 1) {
      document.body.classList.remove("normal");
      document.body.classList.remove("zoomin");
      document.body.classList.add("zoomout");
    }
  }
 }
