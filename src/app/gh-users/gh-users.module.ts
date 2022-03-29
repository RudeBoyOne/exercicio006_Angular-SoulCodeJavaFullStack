import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { GhHomeComponent } from './components/gh-home/gh-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GhShowDialogComponent } from './components/gh-show-dialog/gh-show-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { GhApiService } from './services/gh-api.service';



@NgModule({
  declarations: [
    GhHomeComponent,
    GhShowDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    GhHomeComponent
  ],
  providers: [
    GhApiService
  ]
})
export class GhUsersModule { }
