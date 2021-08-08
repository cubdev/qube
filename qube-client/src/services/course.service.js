import axios from './axios.custom';

const create = async (course) => {
  try {
    const res = await axios.post('/courses', {
      id   : course.id,
      name : course.name,
      desc : course.desc
    });

    return Promise.resolve(res.data);
  } catch(error) {
    Promise.reject(error);
  }
};

const findAll = async () => {
  try {
    const res = await axios.get('/courses');

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const findById = async (id) => {
  try {
    const res = await axios.get(`/courses/${id}`);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const update = async (id, course) => {
  const data = {};

  if (!course.name) { data.name = course.name; }
  if (!course.desc) { data.desc = course.desc; }

  try {
    const res = axios.patch(`/courses/${id}`, data);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const remove = async (id) => {
  try {
    const res = axios.delete(`/courses/${id}`);

    return Promise.resolve(res.statusText === 'OK');
  } catch(error) {
    return Promise.reject(error);
  }
};

const CourseService = {
  create   : create,
  findAll  : findAll,
  findById : findById,
  update   : update,
  delete   : remove
};

export default CourseService;
