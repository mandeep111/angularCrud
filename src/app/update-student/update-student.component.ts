import { StudentService } from './../service/student.service';
import { Student } from './../Student';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id:number;
  student: Student;
  constructor(private router: Router, 
    private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.student = new Student();
    this.id = this.route.snapshot.params['student_id'];
    this.studentService.getStudent(this.id).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateStudent();
  }

  updateStudent() {
    this.studentService.updateStudent(this.id, this.student).subscribe(data => console.log(data), error => console.log(error));;
    this.student = new Student();
    this.goToList();
  }

  goToList() {
    this.router.navigate(['view-student']);
  }
}
