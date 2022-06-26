import { Component } from '@angular/core';

interface IRegisterForm {
  name      : string;
  response  : string;
//   email     : string;
//   password  : string;
//   repeatPass: string;  

 }

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent  {
  register : IRegisterForm = {
    name      : "",
    response  : "",
    // email     : "",
    // password  : "",
    // repeatPass: ""  
  }  
  constructor() {     
}
  
  submit() {
    console.log(this.register.name);
    let str = this.register.name;
    let strPigLatin = str.replace(/(^[aeiou]+\w*)/,"$1way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
    console.log(strPigLatin)   
    this.register.response = strPigLatin;
  }
}
