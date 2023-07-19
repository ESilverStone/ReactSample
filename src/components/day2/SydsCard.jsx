import styled from 'styled-components';
import SydsH1 from './SydsH1';
import SydsParagraph from './SydsParagraph';

const SydsCard = ({
  info = {
    nickname: '안습이죵',
    userId: 'coco',
    userEmail: 't@t.com',
    profileImg: null,
  },
}) => {
  return (
    <Container>
      <Profile profileImg={info.profileImg} />
      <TextInfo>
        <SydsH1 text={info.nickname} />
        <SydsParagraph text={'@' + info.userId} />
        <SydsParagraph text={info.userEmail} />
      </TextInfo>
    </Container>
  );
};

const Container = styled.div`
  max-width: 50%;
  border: 1px solid var(--main-grey);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
const Profile = styled.div`
  width: 10rem;
  height: 10rem;
  background-image: url(${(props) => props.profileImg});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: ${(props) => (props.info ? 'none' : '1px solid var(--main-black)')};
`;
const TextInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
export default SydsCard;
