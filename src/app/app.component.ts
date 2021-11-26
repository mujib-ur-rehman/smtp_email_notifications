import { Component } from '@angular/core';
declare let Email: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smtp';
  myFunction() {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'mujib.rehman@focusteck.com',
      Password: 'F910853DCAD40D589CE288D84F971B93F174',
      To: 'raza.sajjad@focusteck.com',
      From: 'mujib.rehman@focusteck.com',
      Subject: 'Subject',
      Body: '<i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b><br /> <b>Email: </b><br /> <b>Subject: </b><br /> <b>Message:</b> <br /><br><br> <b>~End of Message.~</b> '
    }).then(err => console.warn(err))
  }
}
