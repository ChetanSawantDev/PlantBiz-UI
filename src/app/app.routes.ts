import { Routes } from '@angular/router';
import { UserSignInComponent } from './common/components/Authentication/sign-in/user-sign-in.component';
import { AppShellComponent } from './common/components/App Shell/app-shell/app-shell.component';
import { authGuard } from './common/Guards/auth.guard';
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
import { AppComponent } from './app.component';
import { PLGUserActivityComponent } from './modules/User/components/user-activity/user-activity.component';

export const routes: Routes = [
    {
        path: "",
        component: AppComponent,
        children: [
            {
                path: "", component: AppShellComponent, canActivate:[authGuard],
                children: [
                    { path: "admin", component: PLGAdminComponent, canActivate:[authGuard] },
                    { path: "crm", component: PLGCrmComponent, canActivate:[authGuard] },
                    { path: "finance", component: PLGFinanceComponent , canActivate:[authGuard]},
                    { path: "hr", component: PLGHumanResourceComponent , canActivate:[authGuard]},
                    { path: "inventory", component: PLGInventoryComponent , canActivate:[authGuard]},
                    { path: "logistics", component: PLGLogisticsAndShippingComponent, canActivate:[authGuard] },
                    { path: "production", component: PLGProductionComponent , canActivate:[authGuard]},
                    { path: "quality", component: PLGQualtiyControlComponent , canActivate:[authGuard]},
                    { path: "retailers", component: PLGRetailersComponent , canActivate:[authGuard]},
                    { path: "sales", component: PLGSalesComponent , canActivate:[authGuard]},
                    { path: 'user' , component: PLGUserActivityComponent, canActivate:[authGuard]}
                ]
            },
            { path: "login", component: UserSignInComponent },

        ]
    },
    { path: '**', component: NotFoundComponent }
];
