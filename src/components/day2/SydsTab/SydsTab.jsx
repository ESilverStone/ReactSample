import styled from 'styled-components';

const SydsTabBtn = ({ label, idx, tabIdx, setTabIdx, tabLength }) => {
  return (
    <Container
      isShow={idx === tabIdx}
      isFirst={idx === 0}
      isLast={idx === tabLength - 1}
      onClick={(e) => setTabIdx(idx)}
    >
      <span>{label}</span>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background: ${(props) => (props.isShow ? 'var(--main-whitegrey)' : 'none')};
  border-top-left-radius: ${(props) => (props.isFirst ? '0.25rem' : '0')};
  border-top-right-radius: ${(props) => (props.isLast ? '0.25rem' : '0')};
`;
export default SydsTabBtn;
