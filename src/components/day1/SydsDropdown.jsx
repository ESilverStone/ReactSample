import styled from 'styled-components';
import useInput from './useInput';

const SydsDropdown = ({
  id,
  placeholder = 'placeholder',
  label = '',
  options = [''],
}) => {
  const [value, handleChange, reset] = useInput();
  return (
    <Container>
      <Label htmlFor={id}>
        <p>{label}</p>
      </Label>
      <Select onChange={handleChange}>
        <Option
          key="0"
          value={'선택하세요'}
          hidden
        >
          선택하세요
        </Option>
        {options.map((option, idx) => (
          <Option
            key={idx + 1}
            value={option}
          >
            {option}
          </Option>
        ))}
      </Select>
    </Container>
  );
};
const Container = styled.div``;
const Label = styled.label`
  font-size: 0.85rem;
`;
const Select = styled.select`
  width: 10rem;
  height: 3rem;
  padding: 0 1.25rem 0 1.25rem;
  border-radius: 3rem;
  font-size: 1rem;
  appearance: none;
  color: var(--main-darkgrey);
`;
const Option = styled.option`
  height: 3rem;
  padding: 0 1.25rem 0 1.25rem;
  border-radius: 3rem;
  font-size: 1rem;
`;

export default SydsDropdown;
