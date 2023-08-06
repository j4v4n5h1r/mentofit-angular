import { Component } from '@angular/core';
import { Message } from 'src/app/model/message.model';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  messages: Message[] = [];
  // messages: Message = {
  //   // sender: '',
  //   body: '',
  //   sentAt: '',
  //   userId: 0
  // };

  constructor(private messageService: MessageService) { 
    this.messageService.getAll()
      .subscribe({
        next: (messages) => {
          this.messages = messages;
        },
        error: (e) => console.error(e)
      });
  }

}



// user: User = {
//     name: '',
//     email: '',
//     password: ''
//   };
//   submitted = false;

//   constructor(private userService: UserService) { }

//   save(): void {
//     const data = {
//       name: this.user.name,
//       email: this.user.email,
//       password: this.user.password
//     };

//     this.userService.create(data)
//       .subscribe({
//         next: (res) => {
//           console.log(res);
//           this.submitted = true;
//         },
//         error: (e) => console.error(e)
//       });
//   }