import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Navbar } from './components/navbar/navbar';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'midterm-project';
}
