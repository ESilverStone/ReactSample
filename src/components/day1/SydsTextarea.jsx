import styled from 'styled-components';
import useInput from './useInput';

const SydsTextarea = ({
  id,
  placeholder = 'placeholder',
  label = '',
  height = 10,
}) => {
  const [value, handleChange, reset] = useInput();
  return (
    <Container>
      <Label htmlFor={id}>
        <p>{label}</p>
      </Label>
      <Txtarea
        id={id}
        onChange={
          handleChange
          //상위 컴포넌트로 올릴때 어떻게 깔꼼하게 올리지;
        }
        height={height}
        placeholder={placeholder}
        value={value}
      />
    </Container>
  );
};

const Container = styled.div``;
const Label = styled.label`
  font-size: 0.85rem;
`;
const Txtarea = styled.textarea`
  font-size: 1rem;
  width: 100%;
  height: ${(props) => props.height}rem;
  padding: 1.25rem;
  border-radius: 1rem;
  resize: none;

  ::placeholder {
    color: var(--main-darkgrey);
  }
`;

export default SydsTextarea;
