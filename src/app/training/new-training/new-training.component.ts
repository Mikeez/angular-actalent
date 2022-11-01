import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];

  // Load Training Services
  constructor() { }

  ngOnInit() {
    // Get Avialble Exercises and populate exercises
    // code here
  }

  onStartTraining(form: NgForm) {
    // Uncomment when implemented
    //this.trainingService.startExercise(form.value.exercise);
  }

}
