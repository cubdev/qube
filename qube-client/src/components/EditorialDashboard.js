import React from 'react';
import SubjectService from '../services/subject.service';

import Navbar from './Navbar';
import Footer from './Footer';

const QuestionDashboard = (props) => {
  const [subjects, setSubjects] = React.useState([]);

  React.useEffect(() => {
      SubjectService.findAllByGroupId(props.match.params.groupId)
        .then(subjects => {
          setSubjects(subjects.data.subjects);
        })
        .catch(error => {
          setSubjects([]);
          console.log(`error: ${error}`);
        });
  }, [props.match.params.groupId]);

  return (
    <div className="App">
      <Navbar />
      <div className="dashboard">
      {subjects.map(subject => {
        return (
          <div className="subject" key={subject.id}>
            <p>{subject.name}</p>
            <p>{subject.id}</p>
            <p>{subject.groupId}</p>
          </div>
        );
      })}
      </div>
      <Footer />
    </div>
  );
}

export default QuestionDashboard;
