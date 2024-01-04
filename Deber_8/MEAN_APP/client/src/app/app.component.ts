import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import {RouterLink, RouterOutlet} from '@angular/router';
import {UserService} from "./services/user.service";
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,HttpClientModule,FormsModule],
  providers:  [ UserService ],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
