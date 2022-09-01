import React from 'react';

import Container from 'react-bootstrap/esm/Container';

function Error() {
  return (
    <Container className='pages'>
      <h1 className='big-header'>Sorry, but there's nothing here!</h1>
      <h1 className='sub-header'>Please try one of the links from the menu...</h1>
    </Container>
  )
}

export default Error