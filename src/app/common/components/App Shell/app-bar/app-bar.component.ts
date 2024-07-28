import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';


interface LinkItem{label:string, tabName:string , icon:string}

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss'
})
export class AppBarComponent {
  

  @Input() public isSideNavOpen = false;
  @Output() openCloseSideNav:EventEmitter<boolean> = new EventEmitter<boolean>();

  isProfileMenuOpen:boolean=false;

  constructor(private router:Router){}

  links:LinkItem[] = [
    { label: 'Profile', tabName: 'profile', icon:'fa-solid fa-user' },
    { label: 'Inbox', tabName: 'messages' , icon:'fa-solid fa-inbox'},
    { label: 'Settings', tabName: 'settings' , icon:'fa-solid fa-gear'},
    { label: 'Sign Out', tabName: '' , icon:'fa-solid fa-right-from-bracket'}
  ];

  dropDownMenu() {
    this.isProfileMenuOpen = this.isProfileMenuOpen?false:true;
  }

  openSideNavBar(){
    this.isSideNavOpen = this.isSideNavOpen ? false:true;
    this.openCloseSideNav.emit(this.isSideNavOpen);
  }

  navigateToUser(tabName:string){
    this.router.navigate(['/user/',{ state: { tab: tabName } }]);
  }


}
