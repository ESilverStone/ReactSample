import styled from 'styled-components';

const SydsTabContents = ({ contents }) => {
  return <Container>{contents}</Container>;
};

const Container = styled.div`
  padding: 1rem;
`;
export default SydsTabContents;
