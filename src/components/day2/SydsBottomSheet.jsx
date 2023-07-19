import styled from 'styled-components';
import SydsButton from '../day1/SydsSquareButton';
import SydsH1 from './SydsH1';
const SydsBottomSheet = ({
  content = '안녕 반가워 나는 바텀시트라고해 이 중에 제발 하나를 골라주지않겟니',
  valueList = ['a', 'b'],
  setValue,
}) => {
  //바텀시트는 여러 옵션 중 선택해서 한 값만 위쪽으로 올려주는 경우를 상정합니다
  return (
    <Container>
      <SydsH1 text={content} />
      <BtnContainer>
        {valueList.map((value, idx) => {
          return (
            <SydsButton
              key={idx}
              className="default"
              value={value}
              callback={() => setValue(value)}
              onClick={() => console.log('handleModal')}
            />
          );
        })}
      </BtnContainer>
    </Container>
  );
};
const Container = styled.div`
  border: 1px solid var(--main-whitegrey);
  background-color: var(--main-whitegrey);
  border-bottom: none;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 1.5rem;
`;
const BtnContainer = styled.div`
  margin-top: 2rem;
`;
export default SydsBottomSheet;
