import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-home',
  standalone: true,
  templateUrl: './comp-home.html',
  styleUrls: ['./comp-home.css']
})
export class HomeComponent {

  appTitle: string = 'My Midterm Project';
  userImageUrl: string = 'src/app/assets/images/download.jpg';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();

  userName: string = 'Shannia Sanidad Borata';
  userEmail: string = '20225625@s.ubaguio.edu';
  userRole: string = 'UBSIT Student';
  userBio: string = 'APPDEV student at the University of Bsguio.';


  isButtonDisabled: boolean = true;

  onButtonClick() {
    this.isButtonDisabled = false;
  }

}