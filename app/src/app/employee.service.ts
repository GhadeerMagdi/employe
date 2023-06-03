import { Injectable } from '@angular/core';
import { Employee } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;
  id: any;


  getEmployee(){

    return [
      {
        id:1,
        name: 'John Doe',
        department: 'Department 1',
        employmentDate: '2022-01-01',
        salary: 50000,
        experience: '1-3'
      },
      {
        id:2,
        name: 'Jane Smith',
        department: 'Department 2',
        employmentDate: '2021-06-15',
        salary: 60000,
        experience: 'gt3'
      },
      {
        id:3,
        name: 'Adam Johnson',
        department: 'Department 1',
        employmentDate: '2023-02-10',
        salary: 45000,
        experience: 'lt1'
      },
      {
        id:4,
        name: 'Emily Davis',
        department: 'Department 1',
        employmentDate: '2022-07-20',
        salary: 55000,
        experience: '1-3'
      }
    ];

  } 

  constructor() { }

  getEmployeeById(id: number): Employee | undefined {
    return this['employees'].find((employee: { id: number; }) => employee.id === id);
  }
  
}
