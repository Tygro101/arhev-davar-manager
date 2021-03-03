import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from './mat.module';


@NgModule({
  
  declarations: [],
  imports: [HttpClientModule, MatModule],
  exports: [MatModule],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
