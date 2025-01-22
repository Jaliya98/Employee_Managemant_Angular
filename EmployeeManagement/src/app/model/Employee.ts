export class Employee
{
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: number;
    password: string;
    gender: string;
    role: string;
    createdDate: Date

    constructor()
    {
        this.employeeId = 0;
        this.deptId = 0;
        this.contactNo = '';
        this.emailId = '';
        this.employeeName = '';
        this.password = '';
        this.gender = '';
        this.role = 'Employee';
        this.createdDate = new Date();
    }
  }

  export interface IParenteDepart
  {
    departmentId: number;
    departmentName: string;
    departmentLogo: string;
  }

  export interface IChildDepart
  {
    childDeptId: number;
    parentDeptId: number;
    departmentName: string;
  }

  export interface IApiResponse
  {
    message: string;
    result: boolean;
    data: any; 
  }