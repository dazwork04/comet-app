import { Button } from '@react-navigation/elements';
import React from 'react';

const TestButton: React.FC = () => {
  const handleClick = () => {
    alert('I\'m clicked');
  };

  return (
    <Button  onPress={() => handleClick()}>Info</Button>
  );
};

export default TestButton;