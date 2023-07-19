import styled from 'styled-components';
import SydsButton from '../day1/SydsSquareButton';
const SydsModal = ({
  type = 'confirm',
  content = 'alert',
  btnText,
  btnCallback,
}) => {
  if (type === 'warning') {
    return (
      <Container>
        <p>{content}</p>
      </Container>
    );
  }
  if (type === 'confirm') {
    return (
      <Container>
        <p>{content}</p>x
        <SydsButton
          className="default"
          value="취소"
          onClick={() => console.log('handleModal')}
        />
        <SydsButton
          className={type}
          value={btnText}
          callback={btnCallback}
          onClick={() => console.log('handleModal')}
        />
      </Container>
    );
  }
};
const Container = styled.div``;
export default SydsModal;
