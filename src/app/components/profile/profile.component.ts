import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/service/course.service';
import { Event } from 'src/app/model/event.model';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  users: User[] = [];
  courses: Course[] = [];
  events: Event[] = [];

  constructor(private userService: UserService, private courseService: CourseService, private eventService: EventService) { 
    this.userService.getAll()
      .subscribe({
        next: (users) => {
          this.users = users;
        },
        error: (e) => console.error(e)
      });

    this.courseService.getAll()
      .subscribe({
        next: (courses) => {
          this.courses = courses;
        },
        error: (e) => console.error(e)
      });

    this.eventService.getAll()
      .subscribe({
        next: (events) => {
          this.events = events;
        },
        error: (e) => console.error(e)
      });
  }

}
