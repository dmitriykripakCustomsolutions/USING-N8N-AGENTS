import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  response: string | undefined;

  constructor(private api: ApiService) { }

  pingApi() {
    this.api.ping().subscribe({
      next: res => this.response = res.message,
      error: err => this.response = 'Error: ' + err.message
    });
  }
}
