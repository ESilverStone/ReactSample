import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import View from './views/View';
import View2 from './views/View2';
import View3 from './views/View3';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {/* <h1>DAY1</h1>
        <br />
        <h1>DAY2</h1>
        <View3 />
        <View2 />
        <View3 />
      <br /> */}
        <h1>DAY2</h1>
        <View2 />
      </AppContainer>
    </>
  );
}
const AppContainer = styled.div`
  width: 430px;
  border: 3px solid var(--main-blue-deep);
  border-radius: 12px;
  padding: 1rem;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;
export default App;
