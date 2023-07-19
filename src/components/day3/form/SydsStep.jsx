import { useState } from 'react';
import SydsInput from '../../day1/SydsInput';
import SydsSquareButton from '../../day1/SydsSquareButton';
import SydsH1 from '../../day2/SydsH1';
import styled from 'styled-components';
const SydsStep = ({ step, onChange, onNext }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <Container>
        <Caption>
          <SydsH1 text={step + '을 입력하세요'} />
        </Caption>
        <Body>
          <SydsInput
            value={inputValue}
            callback={(e) => {
              setInputValue(e.target.value);
              onChange(e);
            }}
          />
        </Body>
        <BtnContainer>
          <SydsSquareButton
            className="confirm"
            callback={() => {
              onNext();
              setInputValue('');
            }}
            value={'다음'}
          />
        </BtnContainer>
      </Container>
    </>
  );
};
const Container = styled.div`
  height: calc(100vh - 7rem);
`;
const Caption = styled.div`
  padding-top: 2rem;
`;
const Body = styled.div`
  padding-top: 1rem;
`;
const BtnContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 2rem);
`;
export default SydsStep;
