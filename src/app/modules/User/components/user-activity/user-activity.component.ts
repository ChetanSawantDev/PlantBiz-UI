import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { UserMessagesComponent } from '../user-messages/user-messages.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-activity',
  standalone: true,
  imports: [MatTabsModule, UserMessagesComponent, UserProfileComponent, UserSettingsComponent],
  templateUrl: './user-activity.component.html',
  styleUrl: './user-activity.component.scss'
})
export class PLGUserActivityComponent implements OnInit{
  selectedIndex: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.getTabNameFromRoutes();
  }

  
  getTabNameFromRoutes(){
    let l_tabName ='';
    this.route.queryParams.subscribe((params) => {
      l_tabName = params['tabName'];
      if (l_tabName) {
        this.setTabIndex(l_tabName);
      }
    });

  }

  setTabIndex(tab: string): void {
    console.warn('Set Tab Index ' + tab);
    switch (tab) {
      case 'Profile':
        this.selectedIndex = 0;
        break;
      case 'Inbox':
        this.selectedIndex = 1;
        break;
      case 'Settings':
        this.selectedIndex = 2;
        break;
      default:
        this.selectedIndex = 0;
        break;
    }
    console.warn('Selected Index' + this.selectedIndex);
  }

  onTabChange(event: any): void {
    const tabs = ['profile', 'messages', 'settings'];
    const route = tabs[event.index];
    this.router.navigate(['/user'], { state: { tab: route } });
  }
}
