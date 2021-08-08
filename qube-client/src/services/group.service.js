import axios from './axios.custom';

const create = async (group) => {
  try {
    const res = await axios.post('/groups', {
      id       : group.id,
      name     : group.name,
      desc     : group.desc,
      courseId : group.courseId
    });

    return Promise.resolve(res.data);
  } catch(error) {
    Promise.reject(error);
  }
};

const findAllByCourseId = async (courseId) => {
  try {
    const res = await axios.get(`/groups?courseId=${courseId}`);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const findById = async (id) => {
  try {
    const res = await axios.get(`/groups/${id}`);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const update = async (id, group) => {
  const data = {};

  if (!group.name) { data.name = group.name; }
  if (!group.desc) { data.desc = group.desc; }
  if (!group.courseId) { data.courseId = group.courseId; }

  try {
    const res = axios.patch(`/groups/${id}`, data);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const remove = async (id) => {
  try {
    const res = axios.delete(`/groups/${id}`);

    return Promise.resolve(res.statusText === 'OK');
  } catch(error) {
    return Promise.reject(error);
  }
};

const GroupService = {
  create             : create,
  findAllByCourseId  : findAllByCourseId,
  findById           : findById,
  update             : update,
  delete             : remove
};

export default GroupService;
