import { Component } from '@angular/core';
import { AuthenticationService } from './Services/authentication.service';
import { StorageService } from './Services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthenticationService, StorageService ]
})
export class AppComponent {
  title = 'app';
}
