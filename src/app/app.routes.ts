import { Routes } from '@angular/router';
import { UserSignInComponent } from './common/components/Authentication/sign-in/user-sign-in.component';
import { AppShellComponent } from './common/components/App Shell/app-shell/app-shell.component';
import { authGuard, authGuardForChild } from './common/Guards/auth.guard';
import { PLGAdminComponent } from './modules/Admin/components/Admin Home/pl-gadmin.component';
import { PLGCrmComponent } from './modules/CRM/components/CRM Home/plgcrm.component';
import { PLGFinanceComponent } from './modules/Finance/components/Finance Home/plgfinance.component';
import { PLGHumanResourceComponent } from './modules/Human Resource/components/HR Home/plghuman-resource.component';
import { PLGInventoryComponent } from './modules/Inventory/components/Inventory Home/plginventory.component';
import { PLGLogisticsAndShippingComponent } from './modules/Logistics & Shipping/components/Logistics & Shipping Home/plglogistics-and-shipping.component';
import { PLGProductionComponent } from './modules/Production/components/Production Home/plgproduction.component';
import { PLGQualtiyControlComponent } from './modules/Quality Control/components/Quality Control/plgqualtiy-control.component';
import { PLGRetailersComponent } from './modules/Retailers Management/components/Retailers Home/plgretailers.component';
import { PLGSalesComponent } from './modules/Sales/components/Sales Home/plgsales.component';
import { NotFoundComponent } from './common/components/Authentication/not-found/not-found.component';

export const routes: Routes = [
    {   path:"", 
        component:AppShellComponent, 
        canActivate: [authGuard], 
        canActivateChild:[authGuardForChild],
            children:[
                {path:"admin", component:PLGAdminComponent},
                {path:"crm", component:PLGCrmComponent},
                {path:"finance", component:PLGFinanceComponent},
                {path:"hr", component:PLGHumanResourceComponent},
                {path:"inventory", component:PLGInventoryComponent},
                {path:"logistics", component:PLGLogisticsAndShippingComponent},
                {path:"production", component:PLGProductionComponent},
                {path:"quality", component:PLGQualtiyControlComponent},
                {path:"retailers", component:PLGRetailersComponent},
                {path:"sales", component:PLGSalesComponent}
            ]
    },
    {path:"login",component:UserSignInComponent},
    { path: '**', component:NotFoundComponent }
];
