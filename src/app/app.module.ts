import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InstructorAdminModule } from './modules/admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { MainAdminModule } from './modules/main-admin/main-admin.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminApiService } from './modules/shared/services/admin-api.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    DashboardModule,
    InstructorAdminModule,
    MainAdminModule,
    NgbModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: AdminApiService , multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
