import React from 'react';
import ReactMarkdown from 'react-markdown';
import RemarkMath from 'remark-math';
import RehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const Markdown = (props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[RemarkMath]}
      rehypePlugins={[RehypeKatex]}
      {...props}
    />
  );
};

export default Markdown;
