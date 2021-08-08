import axios from './axios.custom';

const create = async (topic) => {
  try {
    const res = await axios.post('/topics', {
      id        : topic.id,
      name      : topic.name,
      desc      : topic.desc,
      subjectId : topic.subjectId
    });

    return Promise.resolve(res.data);
  } catch(error) {
    Promise.reject(error);
  }
};

const findAllBySubjectId = async (subjectId) => {
  try {
    const res = await axios.get(`/topics?subjectId=${subjectId}`);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const findById = async (id) => {
  try {
    const res = await axios.get(`/topics/${id}`);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const update = async (id, topic) => {
  const data = {};

  if (!topic.name) { data.name = topic.name; }
  if (!topic.desc) { data.desc = topic.desc; }
  if (!topic.subjectId) { data.subjectId = topic.groupId; }

  try {
    const res = axios.patch(`/topics/${id}`, data);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const remove = async (id) => {
  try {
    const res = axios.delete(`/topics/${id}`);

    return Promise.resolve(res.statusText === 'OK');
  } catch(error) {
    return Promise.reject(error);
  }
};

const TopicService = {
  create              : create,
  findAllBySubjectId  : findAllBySubjectId,
  findById            : findById,
  update              : update,
  delete              : remove
};

export default TopicService;
