import { Student } from './../Student';
import { Subject } from 'rxjs';
import { StudentService } from './../service/student.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  dtTrigger: Subject<any>= new Subject();  
  students: Observable<Student[]>;
  student: Student;

  constructor(private studentService: StudentService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.studentService.getStudentList().subscribe(data =>{  
      this.students =data;
  })

}

deleteStudent(id: number) {
  var msg = confirm("Delete Student?");
  if (msg == true) {
    this.studentService.deleteStudent(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}

updateStudent(id:number) {
  this.router.navigate(['update-student', id]);
}

}

