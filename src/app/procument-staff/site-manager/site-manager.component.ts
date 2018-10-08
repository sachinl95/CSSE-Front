import { Component, OnInit } from '@angular/core';

export interface Site {
  value: string;
  viewValue: string;
}

export interface SiteManager {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-site-manager',
  templateUrl: './site-manager.component.html',
  styleUrls: ['./site-manager.component.scss']
})
export class SiteManagerComponent implements OnInit {

  sites: Site[] = [
    {value: 'site-0', viewValue: 'Colombo Site'},
    {value: 'site-1', viewValue: 'Kandy Site'},
    {value: 'site-2', viewValue: 'Galle Site'}
  ];

  siteManager: SiteManager[] = [
    {value: 'siteM-0', viewValue: 'Kamal Perera'},
    {value: 'siteM-1', viewValue: 'Aruna Pradeep'},
    {value: 'siteM-2', viewValue: 'Kasun Lakmal'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
