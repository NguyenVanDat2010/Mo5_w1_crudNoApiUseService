import { Injectable } from '@angular/core';

const students = [
  {id: 1, name: 'Nguyễn Huy Long', gender: 'Male', age: 22},
  {id: 2, name: 'Nguyễn Thị Kiều Anh', gender: 'Female', age: 28},
  {id: 3, name: 'Nguyễn Trương Bảo', gender: 'Male', age: 18},
  {id: 4, name: 'Nguyễn Đình Phú', gender: 'Male', age: 29},
  {id: 5, name: 'Nguyễn Thị Thanh', gender: 'Female', age: 29}
]

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  get(){
    return new Promise(resolve => resolve(students))
  }

  add(data) {
    return new Promise(resolve => {
      students.push(data);
      resolve(data);
    });
  }

  put(changed){
    return new Promise(resolve =>{
      const index = students.findIndex(student => student.id == changed.id);
      // console.log(changed.id);
      // console.log(index);

      students[index].name = changed.name;
      students[index].gender = changed.gender;
      students[index].age = changed.age;
      resolve(changed);
    });
  }

  delete(selected){
    return new Promise(resolve =>{
      const index = students.findIndex(student => student === selected);
      students.splice(index , 1);
      resolve(true);
    })
  }
}
