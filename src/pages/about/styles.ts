import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  h1 {
    color: ${props => props.theme.colors.secondary};
    text-align: left;
    letter-spacing: 0.05em;
    margin-top: 36px;
  }

  @media (min-width: 641px) {
    h1 {
      margin: 36px 0 20px 0;
    }
  }
`;

export const ContentWrapper = styled.div`
  background-color: rgba(135, 135, 135, 0.1);
  width: 90%;
  margin-top: 36px;
  padding: 20px;
  border-radius: 10px;
  height: 80vh;
  overflow: scroll;
  ol {
    list-style: none;
    counter-reset: li;

    li {
      counter-increment: li;
      margin-top: 0.5em;
      /* p {
        text-align: justify;
      } */
    }
    li::before {
      content: counter(li);
      color: ${props => props.theme.colors.secondary};
      display: inline-block;
      width: 1em;
      margin-right: 0.5em;
      text-align: left;
      direction: rtl;
    }
  }

  .font {
    margin-top: 30px;
    a {
      color: ${props => props.theme.colors.secondary};
    }
  }
  @media (min-width: 641px) {
    max-width: 700px;

    margin: 0 auto;
    position: relative;
    left: 16px;
    padding: 30px;
  }
`;
