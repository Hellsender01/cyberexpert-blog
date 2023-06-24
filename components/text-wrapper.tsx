import React from 'react';

interface TextWrapperProps {
    text: string;
    maxLength: number;
}

const TextWrapper = ({ text, maxLength }: TextWrapperProps) => {
  const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'hidden' }}>{truncatedText}</div>;
};

export default TextWrapper;