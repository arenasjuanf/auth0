import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.handleRedirectCallback$.subscribe(
      result => {
        console.log('result callback: ', result);
      },
      error => {
        console.log('error callback: ', error);
      }
    )
  }

}
