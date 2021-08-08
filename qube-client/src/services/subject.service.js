import axios from './axios.custom';
import TopicService from './topic.service';

const create = async (subject) => {
  try {
    const res = await axios.post('/subjects', {
      id      : subject.id,
      name    : subject.name,
      desc    : subject.desc,
      groupId : subject.groupId
    });

    return Promise.resolve(res.data);
  } catch(error) {
    Promise.reject(error);
  }
};

const findAllByGroupId = async (groupId) => {
  try {
    // First find all the available Subjects for a Group
    const res = await axios.get(`/subjects?groupId=${groupId}`);

    // Fetch all topics for each subjects
    res.data.subjects = await Promise.all(res.data.subjects.map(async (subject) => {
      subject = await TopicService.findAllBySubjectId(subject.id)
        .then (data => {
          return {...subject, topics: data.topics};
        })
        .catch(error => {
          return {...subject, topics: []};
        });
      return subject;
    }));

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const findById = async (id) => {
  try {
    const res = await axios.get(`/subjects/${id}`);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const update = async (id, subject) => {
  const data = {};

  if (!subject.name) { data.name = subject.name; }
  if (!subject.desc) { data.desc = subject.desc; }
  if (!subject.groupId) { data.groupId = subject.groupId; }

  try {
    const res = axios.patch(`/subjects/${id}`, data);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const remove = async (id) => {
  try {
    const res = axios.delete(`/subjects/${id}`);

    return Promise.resolve(res.statusText === 'OK');
  } catch(error) {
    return Promise.reject(error);
  }
};

const SubjectService = {
  create            : create,
  findAllByGroupId  : findAllByGroupId,
  findById          : findById,
  update            : update,
  delete            : remove
};

export default SubjectService;
