import { UserAccountService } from '../service/user_account.service';
import { UserAccount } from '../model/user_account.model';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userAccount: UserAccount = {
    userName: '',
    userPhone:'',
    userCpf: '',
    userRg:'',
    userEndereco: '',
    userTipoConta:'',
    userEmail: ''
  };

  constructor(private userAccountService: UserAccountService,
              private router: Router) { }

  ngOnInit(): void {

  }

  cadastrarUsuario(): void {
    this.userAccountService.create(this.userAccount).subscribe(() => {
      this.userAccountService.showMenssage('Operação realizada com sucesso')
      this.router.navigate(['/userAccount'])
    })

  }

  cancel(): void {
    this.router.navigate(['/userAccount'])
  }

}
