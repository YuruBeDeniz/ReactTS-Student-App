import './App.css';
import { useState } from 'react';
import { AppNameProps, Student, Level } from './Interfaces';
import { studentList, coursesList } from './data';
import { DisplayData } from './Components/DisplayData';

function App(appName: AppNameProps) {
  const [student, setStudent] = useState<Student | null>(null);

  const addStudent = () => {
    setStudent({
      name: 'Deniz',
      surname: 'Saganak',
      age: 31, 
      level: 'Undergraduate'
    })
  }

  return (
    <div className="App">
      <h1>{appName.name}</h1>
      <p><b>{student?.name} {student?.surname}</b></p>
      {student?.level === Level.Undergraduate && 
      <p><b>Age: {student.age}</b></p>
      }
      <button onClick={addStudent}>Add Student</button>

      <h3>List of Students</h3>
      <DisplayData items={studentList} />
    
      <h3>List of Courses</h3>
      <DisplayData items={coursesList} />

    </div>
  );
}
export default App;
