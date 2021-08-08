import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';

import CoursePanel from './course.panel';
import GroupPanel from './group.panel';
import SubjectPanel from './subject.panel';
import TopicPanel from './topic.panel';
import QuestionPanel from './question.panel';

const sidemenu = [
  {title: "Courses", component: <CoursePanel />},
  {title: "Groups", component: <GroupPanel />},
  {title: "Subjects", component: <SubjectPanel />},
  {title: "Topics", component: <TopicPanel />},
  {title: "Questions", component: <QuestionPanel />}
];

const AdminPanel = (props) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleClick = (idx) => {
    setActiveTab(idx);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="dashboard">
        <div className="container">
          <div className="site-sidebar">
            <ul className="nav flex-column">
            {sidemenu.map((menu, idx)=> {
              return (
                <li
                  className={`btn nav-item${activeTab === idx ? ' btn-primary' : ''}`}
                  onClick={() => { handleClick(idx); }}
                  key={idx}
                >{menu.title}</li>
              )
            })}
            </ul>
          </div>
          <div className="site-content">
          {sidemenu[activeTab].component}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
