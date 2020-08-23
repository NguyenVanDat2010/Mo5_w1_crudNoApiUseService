import { Component, OnInit, EventEmitter } from '@angular/core';
import { StudentService } from '../../service/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {
  public students: any = [];
  student = {
    id: 0,
    name : '',
    gender : '',
    age : 0,
  }

  newStudent = new EventEmitter();

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudent();    //Goi ham getStudent() hien thi list
  }

  getStudent(){
    return this.studentService.get().then(students => {
      this.students = students;
    })
  }

  addStudent(){
    this.studentService.add({id: (this.students.length) + 1, name: this.student.name, gender: this.student.gender, age: this.student.age}).then(()=>{
      // console.log(this.students);
      return this.getStudent();
    }).then(() => {
      this.student.name = '';
      this.student.gender ='';
      this.student.age = 0;
    })
  }

  showUpdateStd(std){
    this.student.id = std.id;
    this.student.name = std.name;
    this.student.gender = std.gender;
    this.student.age = std.age;
  }

  updateStudent(){
    // console.log(this.student.name);

    return this.studentService.put(this.student).then(()=>{
      return this.getStudent();
    }).then(()=>{
      this.student.name = '';
      this.student.gender = '';
      this.student.age = 0;
    })
  }

  destroyStudent(std){
    this.studentService.delete(std).then(()=>{
      return this.getStudent();
    });
  }
}
