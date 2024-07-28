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
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { MatMenuModule } from '@angular/material/menu';
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
    RouterOutlet,
    MatSelectModule,
    RouterLink,
    MenuModule,
    DropdownModule,
    MatMenuModule
],
  exports:[
    AppBarComponent,AppShellComponent, SideNavBarComponent
  ]
})
export class AppShellModule { }
