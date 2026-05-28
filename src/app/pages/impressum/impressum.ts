import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-impressum',
  imports: [TranslateModule, RouterModule],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss',
})
export class Impressum {}
