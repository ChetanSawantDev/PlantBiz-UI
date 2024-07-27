import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppShellComponent } from './app-shell/app-shell.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterOutlet } from '@angular/router';
import { PLBreadcrumbComponent } from "./Breadcrumb/plbreadcrumb.component";

@NgModule({
  declarations: [AppBarComponent,AppShellComponent, SideNavBarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    InputGroupAddonModule,
    InputGroupModule,
    SidebarModule,
    CardModule,
    BreadcrumbModule,
    PLBreadcrumbComponent,
    RouterOutlet
],
  exports:[
    AppBarComponent,AppShellComponent, SideNavBarComponent
  ]
})
export class AppShellModule { }
