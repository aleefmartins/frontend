import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { UserAccountService } from '../service/user_account.service';
import { UserAccount } from '../model/user_account.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

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

  editarUsuario(): void {
    this.userAccountService.update(this.userAccount).subscribe(() => {
    this.userAccountService.showMenssage('Conta atualizada com sucesso!');
    this.router.navigate(['/users']);
   })
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }

}
