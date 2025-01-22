import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  http = inject(HttpClient);
  router = inject(Router);

  loginObj : any = {
    
      "userName": "",
      "password": ""  
  }
  onLogin(){
    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/login",
    this.loginObj).subscribe((response: any) => {
      if(response.result)
      {
        this.router.navigateByUrl('dashboard');
      }
      else
      {
        alert(response.message);
      }
    }
    )
  }

}
