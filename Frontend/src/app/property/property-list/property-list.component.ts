import { Component } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule,PropertyCardComponent],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  properties : Array<any> = [
    {
    "Id" : 1,
    "Name" : "Birla House",
    "Type" : "House",
    "Price" : 120000
    },
    {
      "Id" : 2,
      "Name" : "Sharma Villa",
      "Type" : "Farm House",
      "Price" : 502000 
    },
    {
      "Id" : 3,
      "Name" : "Kurla Project",
      "Type" : "Apartment",
      "Price" : 150000 
    },
    {
      "Id" : 4,
      "Name" : "Suman House",
      "Type" : "Ro-House",
      "Price" : 200000 
    }, 
    {
      "Id" : 5,
      "Name" : "Mane Nivas",
      "Type" : "Big-House",
      "Price" : 100000 
    },
    {
      "Id" : 6,
      "Name" : "Parkside",
      "Type" : "2BHK",
      "Price" : 100000 
    },
    {
      "Id" : 7,
      "Name" : "Jagtap House",
      "Type" : "Villa",
      "Price" : 120000 
    }, 
  ]
}
