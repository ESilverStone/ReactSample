import styled from 'styled-components';

const SydsList = ({
  article = { title: '제목', author: '유승윤', createdAt: '어제', likes: 101 },
}) => {
  return (
    <Container>
      <h1>{article.title}</h1>
      <MetaContainer>
        <InfoSpan>{article.author}</InfoSpan>
        <InfoSpan>{article.createdAt}</InfoSpan>
        <InfoSpan>{article.likes}</InfoSpan>
      </MetaContainer>
    </Container>
  );
};
const Container = styled.div`
  p {
    margin: 0;
    color: var(--main-black);
  }
`;
const MetaContainer = styled.div`
  display: flex;
`;
const InfoSpan = styled.span``;
export default SydsList;
