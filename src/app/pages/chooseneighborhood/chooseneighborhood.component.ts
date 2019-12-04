import { Component, OnInit } from '@angular/core';
import { NeighborhoodService } from 'src/app/services/neighborhood/neighborhood.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-chooseneighborhood',
  templateUrl: './chooseneighborhood.component.html',
  styleUrls: ['./chooseneighborhood.component.scss']
})
export class ChooseneighborhoodComponent implements OnInit {
  neighborhoods: any

  constructor(private neighborhoodService: NeighborhoodService) {
    console.log('lol')
  }

  ngOnInit() {this.getNeighborhoods()}

  private getNeighborhoods() {
    this
      .neighborhoodService
      .getNeighborhoods()
      .pipe(first())
      .subscribe(neighborhoods => {
        console.log({neighborhoods})
        this.neighborhoods = neighborhoods
      })
  }
}
