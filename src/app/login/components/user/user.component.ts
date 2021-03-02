import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  img!: string;
  name!: string;
  biography!: string;
  email!: string;
  password!: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  edit(event: Event){
    event.preventDefault();
    this.router.navigate(['user/change-info'])
  }

}
