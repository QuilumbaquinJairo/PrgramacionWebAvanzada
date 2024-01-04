import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {FormsModule, NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService,private router:Router, private route:ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let id = params.id;

    });
  }

  SaveData(form:NgForm) {
    if (form.valid){
      this.userService.AddUser(this.user).subscribe(res=>{
        if (res.status===201){
          this.router.navigate(['/']);
        }
      });
    }
  }

}
