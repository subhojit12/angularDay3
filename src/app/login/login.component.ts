import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }
  openSnackBar() {
    this.snackBar.openFromComponent(LoginSnackComponent, {
      duration: 500,
    });
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'login-snack',
  templateUrl: 'login-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class LoginSnackComponent {}
