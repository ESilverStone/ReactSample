import styled from 'styled-components';
import useInput from './useInput';

import SydsParagraph from '../day2/SydsParagraph';

const SydsInput = ({
  id,
  type = 'text',
  placeholder = 'placeholder',
  label = '',
  value,
  callback,
}) => {
  return (
    <Container>
      <Label htmlFor={id}>
        <SydsParagraph text={label}/>
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={
          callback
          //상위 컴포넌트로 올릴때 어떻게 깔꼼하게 올리지;
        }
      />
    </Container>
  );
};
const Container = styled.div``;
const Label = styled.label`
  font-size: 0.85rem;
`;
const Input = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  padding: 0 1.25rem 0 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--main-black);
  ::placeholder {
    color: var(--main-darkgrey);
  }
`;

export default SydsInput;
