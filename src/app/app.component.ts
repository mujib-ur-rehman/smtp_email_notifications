import { Component } from '@angular/core';
import 'src/assets/smtp.js'
declare let Email: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smtp';
  email: any = 'mujib.rehman@focusteck.com'
  myFunction() {
    Email.send({
      Host: 'smtp.gmail.com',
      Username: 'raza.sajjad@focusteck.com',
      Password: 'mduocqantvbtcons',
      To: this.email,
      From: 'raza.sajjad@focusteck.com',
      Subject: 'Subject',
      Body: 'Body'
    }).then(function () {
      alert("mail sent successfully")
    }
    )
  }
}
