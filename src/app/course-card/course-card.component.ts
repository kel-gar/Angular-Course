import { Component, OnInit, Input, Output } from '@angular/core';
import {COURSES} from '../../db-data';
import {Course} from '../model/course';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
 
  @Input()
  course:Course;

  @Input()
  cardIndex:number;
 
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }  

  onCourseViewed() {
    console.log("CARD COMPONENT CLICKED");

    this.courseEmitter.emit(this.course);
  }

  cardClasses(){
    if(this.course.category == "BEGINNER"){
      return ['beginner'];
    }
  } 

  cardStyles(){
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }
}
