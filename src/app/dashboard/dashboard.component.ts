import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { SportService } from '../sport.service';
import { Sport } from '../data/sport';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  title = 'Available Sports Centers';
  sports: Observable<Sport[]>;
  newSportForm;
  newSportB = false;
  available_images = [
    {
      index: 0,
      src: '../../assets/cycling.jpg'
    },
    {
      index: 1,
      src: '../../assets/running.jpg'
    },
    {
      index: 2,
      src: '../../assets/gym.jpg'
    },
  ];

  constructor(
    private sportService: SportService,
    private formBuilder: FormBuilder
  ) {
    this.newSportForm = this.formBuilder.group({
      name: '',
      description: '',
      image: ''
    });
  }

  ngOnInit() {
    this.sports = this.sportService.sports;
    // this._sportSub = this.sportService.currentSport.subscribe(sport => this.currentSportId = sport.id);
    console.log(this.sports);
  }

  ngOnDestroy() {
    // this._sportSub.unsubscribe();
  }

  loadSport(sport: Sport) {
    this.sportService.getSport(sport.id);
    console.log(sport.id);
  }

  setImage(imgSrc) {
    this.newSportForm.controls['image'].setValue(imgSrc);

  }
  onSubmit(sport) {
    console.log(sport);
    this.newSport(sport);
    this.newSportForm.reset();

  }
  newSport(sport) {
    this.sportService.newSport(sport);
  }

  showForm() {
    this.newSportB = !this.newSportB;
  }

}
