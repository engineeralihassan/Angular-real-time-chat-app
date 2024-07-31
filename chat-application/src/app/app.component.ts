import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactListComponent} from '../app/components/contact-list/contact-list.component'
import {ChatBoxComponent} from '../app/components/chat-box/chat-box.component'
import { ChatBoxHeaderComponent } from "./components/chat-box-header/chat-box-header.component";
import { SendMessageComponent } from "./components/send-message/send-message.component";
import { ContactListSearchComponent } from "./components/contact-list-search/contact-list-search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactListComponent, ChatBoxComponent, ChatBoxHeaderComponent, SendMessageComponent, ContactListSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-application';
}
