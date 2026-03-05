import { Component } from '@angular/core';

@Component({
  selector: 'app-user.ts',
  imports: [],
  templateUrl: './user.ts.component.html',
  styleUrl: './user.ts.component.css'
})
export class UserTsComponent {
  id: number = 0;
  name: string = '';
  position: string = '';
  department: string = '';
  details: { role: [number, string] } = { role: [0, ''] };

}
