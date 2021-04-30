import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { UserAccountService } from '../service/user_account.service';
import { UserAccount } from '../model/user_account.model';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  userAccount!: UserAccount;

  constructor(private userAccountService: UserAccountService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId')!;
    this.userAccountService.readById(userId).subscribe(userAccount => {
      this.userAccount = userAccount;
    })
  }

  deleteUser(): void {
    this.userAccountService.deletProduct(this.userAccount.userId!).subscribe(() => {
      this.userAccountService.showMenssage('Produto excluido com sucesso');
      this.router.navigate(['/users']);
    })
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }

}
