import React from 'react';
import { CourseService } from '../../services';

const CoursePanel = (props) => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    CourseService.findAll()
      .then(res => {
        setCourses(res.courses);
      })
      .catch(error => {});
  }, []);

  return (
    <div className="question-list">
      <form className="form">
        <div className="form-group">
          <input type="text" name="id" placeholder="Course id" required />
          <input type="text" name="name" placeholder="Course name" required />
        </div>
        <div className="form-group">
          <textarea name="desc" placeholder="Description"></textarea>
        </div>
        <input type="submit" value="Create Course" />
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Course Id</th>
            <th>Course Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {courses.map((course, idx) => {
          return (
            <tr key={course.id}>
              <td>{idx + 1}</td>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.desc}</td>
              <td>delete</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default CoursePanel;
