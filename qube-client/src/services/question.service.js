import axios from './axios.custom';

const create = async (question) => {
  try {
    const res = await axios.post('/questions', {
      statement : question.statement,
      topicId   : question.topicId,
      options   : question.options,
      answers   : question.answers,
      level     : question.level
    });

    return Promise.resolve(res.data);
  } catch(error) {
    Promise.reject(error);
  }
};

const findAllByTopicId = async (topicId) => {
  try {
    const res = await axios.get(`/questions?topicId=${topicId}`);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const findById = async (id) => {
  try {
    const res = await axios.get(`/questions/${id}`);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const update = async (id, question) => {
  const data = {};

  if (!question.statement) { data.statement = question.statement; }
  if (!question.options) { data.options = question.options; }
  if (!question.answers) { data.answers = question.answers; }
  if (!question.topicId) { data.topicId = question.topicId; }
  if (!question.level) { data.level = question.level; }

  try {
    const res = axios.patch(`/questions/${id}`, data);

    return Promise.resolve(res.data);
  } catch(error) {
    return Promise.reject(error);
  }
};

const remove = async (id) => {
  try {
    const res = axios.delete(`/questions/${id}`);

    return Promise.resolve(res.statusText === 'OK');
  } catch(error) {
    return Promise.reject(error);
  }
};

const QuestionService = {
  create            : create,
  findAllByTopicId  : findAllByTopicId,
  findById          : findById,
  update            : update,
  delete            : remove
};

export default QuestionService;
