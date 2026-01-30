import { Component } from '@angular/core';
import { Logo } from '../../../shared/ui/logo/logo';

@Component({
  selector: 'rxl-main-header',
  imports: [Logo],
  templateUrl: './main-header.html',
  styleUrl: './main-header.scss',
})
export class MainHeader {}