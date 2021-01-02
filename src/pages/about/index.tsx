import React from 'react';
import { Container, ContentWrapper } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <h1>About</h1>
      <ContentWrapper>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          voluptatum eos. Voluptatem voluptate fugit nemo possimus aliquid in?
          Expedita deserunt nemo sapiente soluta? Accusamus culpa asperiores ea
          architecto distinctio minus!
        </p>
      </ContentWrapper>
    </Container>
  );
};

export default About;
