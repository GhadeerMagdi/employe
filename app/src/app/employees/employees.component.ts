import { Component , ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employe'
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @ViewChild('filtersFormRef', { static: false }) filtersFormRef!: ElementRef;
  filtersForm: FormGroup;
  departments: string[] = ['Department 1', 'Department 2'];
  experiences = [
    { label: 'Less than a year', value: 'lt1' },
    { label: '1-3 years', value: '1-3' },
    { label: '3 years or above', value: 'gt3' }
  ];
  employees: Employee[] = [];
 
  filteredEmployees: Employee[] = [];

  filtersCollapsed: boolean = false;

  constructor(private formBuilder: FormBuilder , private router: Router, private _employe: EmployeeService) {
    this.filtersForm = this.formBuilder.group({
      name: [''],
      department: [''],
      employmentDate: [''],
      salary: [''],
      experience: [[]]
    });

  }

  ngOnInit() {
    this.employees = this._employe.getEmployee();
    this.filteredEmployees = this.employees;
  }

  filterEmployees() {
    const filters = this.filtersForm.value;
    this.filteredEmployees = this.employees.filter(employee => {
      if (filters.name && !employee.name.toLowerCase().includes(filters.name.toLowerCase())) {
        return false;
      }
      if (filters.department && employee.department !== filters.department) {
        return false;
      }
      if (filters.employmentDate && employee.employmentDate !== filters.employmentDate) {
        return false;
      }
      if (filters.salary && employee.salary !== filters.salary) {
        return false;
      }
      if (filters.experience.length > 0 && !filters.experience.includes(employee.experience)) {
        return false;
      }
      return true;
    });
  }

  clearFilters() {
    this.filtersForm.patchValue({
      name: '',
      department: '',
      employmentDate: '',
      salary: '',
      experience: []
    });
    this.filteredEmployees = this.employees;
  }

  getExperienceLabel(experience: string) {
    const exp = this.experiences.find(exp => exp.value === experience);
    return exp ? exp.label : '';
  }

  goToEmployeeDetails(employee: Employee) {
    this.router.navigate(['/employee', employee.id]);
  }

}
