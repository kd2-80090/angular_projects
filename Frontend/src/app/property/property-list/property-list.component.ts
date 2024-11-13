import { Component } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HousingService } from '../../service/housing.service';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule,PropertyCardComponent],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  properties!: Array<any>;

  constructor(private housingService : HousingService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.housingService.getAllProperties().subscribe(
      data=>{
              this.properties=data;
              console.log(data);
      },
      error=>{
               console.log(error);
      }
    );

    // this.http.get('/data/properties.json')
    //          .subscribe(
    //           data=>{
    //             this.properties=data;
    //             console.log(data);
    //           }
    //          );
  }
}
