import React from 'react';
import { SubjectService } from '../services';

import Navbar from './Navbar';
import Footer from './Footer';

import QuestionList from './QuestionList';

const Accordion = (props) => {
  const [expanded, setExpanded] = React.useState(
    props.expanded ? true : false
  );

  const handleClick = (e) => {
    setExpanded(!expanded);
  };

  const show = expanded ? 'show' : '';
  const collapsed = !expanded ? 'collapsed' : '';

  return (
    <li className="nav-item">
      <a
        className={`nav-link bold ${collapsed}`}
        data-toggle="collapse"
        role="button"
        aria-expanded={expanded}
        aria-controls={props.id}
        onClick={handleClick}
      >{props.title}</a>
      <ul
        id={props.id}
        className={`nav flex-column collapse ${show}`}
      >{props.children}</ul>
    </li>
  );
};

const QuestionDashboard = (props) => {
  const [subjects, setSubjects] = React.useState([]);
  const [activeIdx, setActiveIdx] = React.useState({
    tid: 0,
    sid: 0
  });

  React.useEffect(() => {
    SubjectService.findAllByGroupId(props.match.params.groupId)
      .then(res => {
        setSubjects(res.subjects);
      })
      .catch(error => {
        setSubjects([]);
      });
  }, [props.match.params.groupId]);

  const handleClick = (tid, sid) => {
    setActiveIdx({tid: tid, sid: sid});
  };

  const topicId = "T101";//subjects[activeIdx.sid].topics[activeIdx.tid].id;

  return (
    <div className="App">
      <Navbar />
      <div className="dashboard">
        <div className="container">
          <div className="site-sidebar">
            <ul className="nav flex-column" >
            {subjects.map((subject, sidx) => {
              return (
                <Accordion
                  key={subject.id}
                  id={subject.id}
                  title={subject.name}
                  expanded={sidx === activeIdx.sid}
                >
                  {subject.topics.map((topic, tidx) => {
                    const actv = (tidx === activeIdx.tid) ? 'active' : '';
                    return (
                      <li key={topic.id} className={`nav-item ${actv}`}>
                        <div
                          className='nav-button'
                          onClick={() => {handleClick(tidx, sidx);}}
                        >{tidx + 1}. {topic.name}</div>
                      </li>
                    );
                  })}
                </Accordion>
              );
            })}
            </ul>
          </div>
          <div className="site-content">
            <QuestionList topicId={topicId} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QuestionDashboard;
