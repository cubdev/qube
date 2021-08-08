import React from 'react';
import QuestionService from '../services/question.service';

import Markdown from './Markdown';

const QuestionList = (props) => {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    QuestionService.findAllByTopicId(props.topicId)
      .then(data => {
        setQuestions(data.questions);
      })
      .catch(error => {
        setQuestions([]);
      });
  }, [props.topicId]);

  return (
    <div className="question-list">
    {questions.map((question, idx) => {
      return (
        <div className="question-card" key={question.id} id={question.id}>
          <div className="question-id"><p>{`${idx+1}.`}</p></div>
          <div className="question-text">
            <div className="qs-statement">
                <Markdown>{question.statement}</Markdown>
            </div>
            <div className="qs-options">
              <div className="options-row">
                {Object.keys(JSON.parse(question.options)).map((key) => {
                  return (
                    <div className="option" key={key}>
                      <div className="option-key">
                      <p>({key})</p>
                      </div>
                      <div className="option-text">
                        <Markdown>{JSON.parse(question.options)[key]}</Markdown>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    })}
    </div>
  );
};

export default QuestionList;
