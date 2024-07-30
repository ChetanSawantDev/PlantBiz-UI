import { Component } from '@angular/core';
import { ChatListComponent } from "./Chat List/chat-list.component";
import { MessageComponent } from "./Messages/message.component";

@Component({
  selector: 'app-user-messages',
  standalone: true,
  imports: [ChatListComponent, MessageComponent],
  templateUrl: './user-messages.component.html',
  styleUrl: './user-messages.component.scss'
})
export class UserMessagesComponent {

}
