import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { UserAccountService } from '../service/user_account.service';
import { UserAccount } from '../model/user_account.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userAccount: UserAccount[];
  displayedColumns = ['userName', 'userCpf', 'userEmail','action'];

  constructor(private userAccountService: UserAccountService) {
    this.userAccount = [];
  }

  ngOnInit(): void {
    this.listaCadastro()
  }

  listaCadastro() {
    this.userAccountService.read().subscribe(userAccount => {
      this.userAccount = userAccount;
    })
  }

}
