import React from 'react';
import { Card } from 'react-bootstrap';
import AddText from './AddText'

const Contents = () => {
  return (
    <>
      <Card className="mx-3 mt-3">
        <Card.Body>

        <AddText />
          
        </Card.Body>
      </Card>
    </>
  );
};

export default Contents;