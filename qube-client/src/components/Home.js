import React from 'react';
import { CourseService } from '../services';

import Navbar from './Navbar';
import Footer from './Footer';
import Course from './Course';

const Home = (props) => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
      CourseService.findAll()
        .then(res => {
          setCourses(res.courses);
        })
        .catch(error => {
          setCourses([]);
        });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="dashboard">
        <div className="container flex-column">
        {courses.map(course => {
          return (
            <Course
              key={course.id}
              title={course.name}
              courseId={course.id}
            />
          );
        })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
