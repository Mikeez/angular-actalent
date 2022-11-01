import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// Import service

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  ongoingTraining = false;
  exerciseSubscription: Subscription;

  // Same as last step
  constructor() {}

  ngOnInit() {
    // Subsciption to the training service
    // Subscribe to exercise Changed

    // if ongoing ===> true else false
  }
}
