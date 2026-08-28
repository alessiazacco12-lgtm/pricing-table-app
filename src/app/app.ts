import { Component } from '@angular/core';
import { PricingTable } from './components/pricing-table/pricing-table';

@Component({
  selector: 'app-root',
  imports: [PricingTable],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
