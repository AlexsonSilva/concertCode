import { Component, OnInit } from '@angular/core';
import { Concert } from 'src/app/models/concert';
import { Concertlist } from 'src/app/models/concertlist';
import { ConcertService } from 'src/app/services/concert.service';

@Component({
  selector: 'app-concertlisting',
  templateUrl: './concertlisting.component.html',
  styleUrls: ['./concertlisting.component.scss'],
})
export class ConcertlistingComponent implements OnInit {

  listing: Concert[] | any;

  constructor(private concertService: ConcertService) { }

  ngOnInit() {
    this.GetConcerts();

  }
  selectedConcert: Concert | any;
  GetConcerts(){
  this.concertService.getConcerts().subscribe(concerts => {
    this.listing = concerts;

    this.selectedConcert = this.listing[0];
    })

  }
}
