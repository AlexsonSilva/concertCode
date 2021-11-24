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

  message: string = `No message yet`;
  selectConcert(concert: Concert): void {

    this.message = `Selecting the  concert: ${concert.name}`

    this.selectedConcert = concert;
    console.log('selecting a concert')
  }
}
