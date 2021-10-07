import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHeaderComponent } from '../components/my-header/my-header.component';



@NgModule({
  declarations: [MyHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [MyHeaderComponent]
})
export class SharedModule { }
