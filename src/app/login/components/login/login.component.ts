import { Component, OnInit } from '@angular/core';
import { profile } from '../../../profile';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buldForm()
   }

  ngOnInit(): void {
  }

  send(envent: Event){
    envent.preventDefault();
    console.log(this.form.value);
    this.router.navigate(['/user']);
  }

  private buldForm(){
    this.form = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }

}
