import { Component } from '@angular/core';

@Component({
  selector: 'ns-root',
  template: `
  <h1>PonyRacer</h1>
  <ns-races (newRaceAvailable)="onNewRace()"></ns-races>`
})
export class AppComponent {
  onNewRace(): void {
  };
}
