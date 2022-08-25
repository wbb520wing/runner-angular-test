import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import  {MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule


  ],
  exports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule

  ]
})
export class MaterialModule { }
