import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [MatTabsModule,MatIconModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss'
})
export class ChatListComponent {

}
