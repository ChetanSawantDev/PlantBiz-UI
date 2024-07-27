import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss'
})
export class AppBarComponent implements OnChanges{
  

  @Input() public isSideNavOpen = false;
  @Output() openCloseSideNav:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  openSideNavBar(){
    this.isSideNavOpen = this.isSideNavOpen ? false:true;
    this.openCloseSideNav.emit(this.isSideNavOpen);
  }



}
