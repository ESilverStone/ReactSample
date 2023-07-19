import styled from 'styled-components';

const SydsParagraph = ({ text }) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};
const Container = styled.div`
  p {
    margin: 0;
    color: var(--main-black);
  }
`;
export default SydsParagraph;
