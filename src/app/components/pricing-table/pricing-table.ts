import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-table',
  imports: [],
  templateUrl: './pricing-table.html',
  styleUrl: './pricing-table.css',
})
export class PricingTable {
  plans = [
    {
      name: 'Free',
      storage: '5 GB',
      projects: '3',
      support: 'Email',
    },
    {
      name: 'Pro',
      storage: '100 GB',
      projects: '25',
      support: 'Priority Email',
    },
    {
      name: 'Business',
      storage: '1 TB',
      projects: 'Unlimited',
      support: '24/7 Phone',
    },
  ];
}
