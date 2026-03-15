
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserTsComponent } from '../../user.ts/user.ts.component';
import { CommonModule } from '@angular/common';

// Define a proper User interface for your data
interface User {
  id: number;
  name: string;
  position: string;
  department: string;
  details: { role: [number, string] };
}

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',   // ✅
})
export class TwoWayBinding {
  // SECTION D: Two-Way Binding Properties
  // [(ngModel)] syncs the component property AND the input field
  // at the same time. Change one, the other updates automatically.
  twoWName: string = 'Juan Dela Cruz';
  twoWayEmail: string = '';
  twoWayAge: number = 20;
  twoWayGender: string = 'male';
  twoWaySubscribed: boolean = false;
  twoWayLanguage: string = 'TypeScript';
  twoWayRating: number = 3;
  twoWayColor: string = '#3b82f6';

  // Language options for select dropdown
  programmingLanguages: string[] = ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'];

  i: number = 0;
  twoWayName: string = 'Change me!';
  selectedColor: string = '#2E75B6';
  rangeValue: number = 50;
  selectedOption: string = 'option1';

  // Selected user details
  selectedId: number | null = null;
  selectedName: string = '';
  selectedDepartment: string = '';
  selectedPosition: string = '';
  selectedRole: string = '';

  // ✅ Use the User interface instead of UserTsComponent
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Developer',
      department: 'IT',
      details: { role: [1, 'Admin'] }
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Designer',
      department: 'Creative',
      details: { role: [2, 'Editor'] }
    },
    {
      id: 3,
      name: 'Alice Johnson',
      position: 'Manager',
      department: 'Management',
      details: { role: [3, 'Viewer'] }
    }
  ];

  // ✅ Update method to use User interface
  onClick(u: User): void {
    console.log('Button clicked!');
    this.selectedId = u.id;
    this.selectedName = u.name || '';
    this.selectedDepartment = u.department || '';
    this.selectedPosition = u.position || '';
    this.selectedRole = u.details?.role[1] || '';

    console.log(`Selected User ID: ${this.selectedId}`);
  }

  // Generated profile output
  get profileSummary(): string {
    const sub = this.twoWaySubscribed ? 'Subscribed' : 'Not subscribed';
    return `${this.twoWayName}, ${this.twoWayAge} years old, ${this.twoWayGender}. ` +
           `Prefers ${this.twoWayLanguage}. Rating: ${this.twoWayRating}/5. ${sub}.`;
  }

  // Reset the entire form programmatically
  resetForm(): void {
    this.twoWayName = '';
    this.twoWayEmail = '';
    this.twoWayAge = 18;
    this.twoWayGender = 'male';
    this.twoWaySubscribed = false;
    this.twoWayLanguage = 'TypeScript';
    this.twoWayRating = 3;
  }
}
