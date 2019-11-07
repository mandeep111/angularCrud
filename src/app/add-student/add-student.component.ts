import { StudentService } from './../service/student.service';
import { Student } from '../Student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
  }

  // newStudent(): void {
  //   this.submitted = false;
  //   this.student = new Student();
  // }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.studentService.createStudent(this.student).subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    this.goToList();
  }

  goToList() {
    this.router.navigate(['view-student']);
  }

}
