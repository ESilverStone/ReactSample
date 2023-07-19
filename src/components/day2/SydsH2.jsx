import styled from 'styled-components';
const SydsH2 = ({ text }) => {
  return (
    <Container>
      <h2>{text}</h2>
    </Container>
  );
};
const Container = styled.div`
  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--main-black);
  }
`;
export default SydsH2;
