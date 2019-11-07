import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  
  { path: '', redirectTo: 'view-student', pathMatch: 'full' },  
  { path: 'view-student', component: StudentListComponent },  
  { path: 'add-student', component: AddStudentComponent }, 
  {path: 'update-student/:student_id', component: UpdateStudentComponent} 
];  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  
