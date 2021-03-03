
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    declarations: [],
    exports: [CommonModule, MatExpansionModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule,MatIconModule],
    imports: [CommonModule, MatExpansionModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule,MatIconModule],
    providers: []
})
export class MatModule { }
