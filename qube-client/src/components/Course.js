import React from 'react';
import GroupService from '../services/group.service';

const capitalize = (text) => {
  if (!text || text.length === 0)
    return "";

  if (text.length === 1)
    return text.charAt(0).toUpperCase();

  return text.charAt(0).toUpperCase() + text.slice(1);
};

const Group = (props) => {
  return (
    <div className="group card">
      <div className="group-title bold">
      {capitalize(props.title)}
      </div>
      <div className="group-content">
        <div className="group-desc">{props.desc}</div>
        <div className="group-action">
          <a
            className="btn btn-line-primary"
            href={`/${props.groupId}/questions`}
          >Solve Problems</a>
          <a
            className="btn btn-line-primary"
            href={`/${props.groupId}/editorials`}
          >View Editorials</a>
        </div>
      </div>
    </div>
  );
};

const Course = (props) => {
  const [groups, setGroups] = React.useState([]);

  React.useEffect(() => {
    GroupService.findAllByCourseId(props.courseId)
      .then(res => {
        setGroups(res.groups);
      })
      .catch(error => {
        setGroups([]);
      });
  }, [props.courseId]);

  return (
    <div>
      <div className="course-title">
        <h2 className="text-headline bold">
          {capitalize(props.title)}
        </h2>
      </div>
      <div className="course-row grid">
      {groups.map(group => {
        return (
          <Group
            key={group.id}
            title={group.name}
            desc={group.desc}
            groupId={group.id}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Course;
