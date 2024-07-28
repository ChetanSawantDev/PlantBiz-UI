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
export class PLGUserActivityComponent implements OnInit,OnChanges{
  selectedIndex: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.getTabNameFromRoutes();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getTabNameFromRoutes();
  }
  
  getTabNameFromRoutes(){
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { tab: string };
    console.warn(state + "This is state");
    if (state) {
      this.setTabIndex(state.tab);
    }
    console.warn(state.tab+ "FROM NAVIGATIOn");
    this.route.params.subscribe(params => {
      const tab = params['tab'];
      if (!state) {
        this.setTabIndex(tab);
      }
    });

  }


  setTabIndex(tab: string): void {
    switch (tab) {
      case 'profile':
        this.selectedIndex = 0;
        break;
      case 'messages':
        this.selectedIndex = 1;
        break;
      case 'settings':
        this.selectedIndex = 2;
        break;
      default:
        this.selectedIndex = 0;
        break;
    }
  }

  onTabChange(event: any): void {
    const tabs = ['profile', 'messages', 'settings'];
    const route = tabs[event.index];
    this.router.navigate(['/user'], { state: { tab: route } });
  }
}
