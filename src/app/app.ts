import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeader } from './widgets/main-header/ui/main-header';

@Component({
  selector: 'rxl-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MainHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
