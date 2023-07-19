import styled from 'styled-components';
const SydsH1 = ({ text }) => {
  return (
    <Container>
      <h1>{text}</h1>
    </Container>
  );
};
const Container = styled.div`
  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--main-black);
  }
`;
export default SydsH1;
