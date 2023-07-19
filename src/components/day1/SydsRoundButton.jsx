import styled from 'styled-components';

const SydsRoundButton = ({
  display = 'inline-block',
  value = 'Button',
  className = 'default',
  callback = () => {
    console.log('button onclick');
  },
}) => {
  return (
    <Container display={display}>
      <button
        type="button"
        className={className}
        onClick={(e) => callback(e)}
      >
        {value}
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: ${(props) => props.value};
  button {
    height: 3rem;
    padding: 0 1.25rem 0 1.25rem;
    border-radius: 3rem;
    font-size: 1rem;
  }
  button:hover,
  button:active {
    opacity: 0.7;
  }
  .default {
    background-color: var(--main-white);
    border: 1px solid var(--main-black);
    color: var(--main-black);
  }
  .warning {
    background-color: var(--main-red);
    border: 1px solid var(--main-red);
    color: var(--main-white);
  }
  .confirm {
    background-color: var(--main-blue);
    border: 1px solid var(--main-blue);
    color: var(--main-white);
  }
`;
export default SydsRoundButton;
