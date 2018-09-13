import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isDetailsInValid ="true";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";



onSubmit(userForm){
  this.isDetailsInValid="false";
  console.log(userForm);

  console.log(userForm.value);
  console.log(this.isDetailsInValid);



 if(!userForm.value.username){
  userForm.value.username = userForm.value.email.split("@")[0];

  userForm.value.username = userForm.value.username.replace(/[0-9]/g, '')
 }
 
 if(userForm.value.username){
  userForm.value.username = userForm.value.username.replace(/[0-9]/g, '')

 }

 console.log("final value:::::",userForm.value)

 


}
}
