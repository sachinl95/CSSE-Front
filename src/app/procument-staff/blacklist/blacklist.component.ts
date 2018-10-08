import { Component, OnInit } from '@angular/core';

export interface status {
  value: string;
  viewValue: string;
}

export interface Suplier {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.scss']
})
export class BlacklistComponent implements OnInit {

  status: status[] = [
    {value: 'status-0', viewValue: 'Yes'},
    {value: 'status-1', viewValue: 'No'}
  ];

  suplier: Suplier[] = [
    {value: 'siteM-0', viewValue: 'Suresh Pathirana'},
    {value: 'siteM-1', viewValue: 'Lahiru Perera'},
    {value: 'siteM-2', viewValue: 'Kasun Lakmal'}
  ];
  constructor() { }

  ngOnInit() {
  }

  blackList(){
    alert("Black List Suppler");
  }

}
