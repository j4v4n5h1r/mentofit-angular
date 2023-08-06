import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
// import { KafkaService } from 'src/app/service/kafka.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = {
    name: '',
    email: '',
    password: ''
  };
  submitted = false;

  constructor(private userService: UserService) { }

  save(): void {
    const data = {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password
    };

    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  // constructor(private kafkaService: KafkaService) {}

  // save(): void {
  //   const topic = 'user-topic';
  //   const message = JSON.stringify({
  //     name: this.user.name,
  //     email: this.user.email,
  //     password: this.user.password
  //   });

  //   // this.kafkaService.publish(topic, message);
  //   this.kafkaService.sendMessage(message);
  // }

}





// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
// })
// export class RegisterComponent {
//   name = '';
//   email = '';
//   password = '';
//   response: string = '';
//   responseColor: string = '';

//   constructor(private http: HttpClient) {}

//   sendRequest(name: string, email: string, password: string) {
//     const url = 'http://localhost:8080/api/profile/';
//     const body = {
//       name,
//       email,
//       password,
//     };

//     this.http.post(url, body).subscribe(
//       (data) => {
//         this.response = 'Success!';
//         this.responseColor = 'green';
//       },
//       (error) => {
//         this.response = 'Error!'+error.message;
//         this.responseColor = 'red';
//       }
//     );
//   }
// }

