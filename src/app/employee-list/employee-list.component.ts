import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
    // const storedEmployees = localStorage.getItem('employees');
  
    // if (storedEmployees) {
    //   // Load saved employees from localStorage if available
    //   this.employees = JSON.parse(storedEmployees);
    // } else {
      // If no saved data, use the defaultrrrrr
      this.employees = [
        { id: 1, firstname: 'ashutosh', emailid: 'ashu@gmail.com', Lastname: 'shinde' },
        { id: 2, firstname: 'Rohit', emailid: 'rohit@gmail.com', Lastname: 'Patil' },
        { id: 3, firstname: 'Vishal', emailid: 'Vishal@gmail.com', Lastname: 'Patil' }
      ];
    }
  //}
  filteredEmployees(): Employee[] {
    if (!this.searchText.trim()) {
      return this.employees;  // Return full list if search text is empty
    }

    return this.employees.filter(employee =>
      employee.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      employee.Lastname.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // saveEmployee(index: number): void {
  //   const updatedEmployee = this.employees[index];
  //   console.log(`Employee at index ${index} updated:`, updatedEmployee);
    
  //   // Save the updated employees array to localStorage
  //   localStorage.setItem('employees', JSON.stringify(this.employees));
  // }
  // //adeded new line
}


