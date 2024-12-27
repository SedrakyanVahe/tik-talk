import { NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { ProfileService } from '../../data/services/profile.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    RouterLink,
    ImgUrlPipe,
    SubscriberCardComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService = inject(ProfileService);
  me = this.profileService.me;
  subscribers$ = this.profileService.getSubscribersShortList();

  menuItems = [
    {
      label: 'Home',
      link: '',
    },
    {
      label: 'Chats',
      link: 'chats',
    },
    {
      label: 'Search',
      link: 'search',
    },
  ];

  ngOnInit() {
    firstValueFrom(this.profileService.getMe());
  }
}
