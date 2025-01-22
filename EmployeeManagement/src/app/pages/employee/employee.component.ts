import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Employee, IApiResponse, IChildDepart, IParenteDepart } from '../../model/Employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {


  masterService = inject (MasterService);
  parentDepartList: IParenteDepart[] = [];
  childDepartList: IChildDepart[] = [];
  deptId: number = 0;
  employeeService = inject(EmployeeService);

  employeeObj: Employee = new Employee();

  ngOnInit(): void {
    this.getParentDepartList();
  }

  getParentDepartList() 
  {
    this.masterService.getParentDepart().subscribe((res: IApiResponse) => {
      this.parentDepartList = res.data;
    });
  }

  onDeptChange()
  {
    this.masterService.getChildDepartByParentId(this.deptId).subscribe((res: IApiResponse) => {
      this.childDepartList = res.data});
  }

  onSaveEmp()
  {
    debugger;
    this.employeeService.createNewEmployee(this.employeeObj).subscribe((res: IApiResponse) => {
      debugger;
      if(res.result)
      {
        alert("Employee created successfully");
      }
      else
      {
        alert(res.message);
      }
    });
  }

}
