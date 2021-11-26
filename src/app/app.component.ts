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
      Host: 'smtp.elasticemail.com',
      Username: 'mujib.rehman@focusteck.com',
      Password: 'F910853DCAD40D589CE288D84F971B93F174',
      To: this.email,
      From: 'mujib.rehman@focusteck.com',
      Subject: 'Subject',
      Body: 'Body'
    }).then(function () {
      alert("mail sent successfully")
    }
    )
  }
}
