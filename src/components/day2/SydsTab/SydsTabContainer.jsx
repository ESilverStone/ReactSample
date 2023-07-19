import { useState } from 'react';
import styled from 'styled-components';
import SydsTabContents from './SydsTabContents';
import SydsTabBtn from './SydsTab';

const SydsTabContainer = ({
  data = [
    { title: 'abcd', contents: 'ABCD' },
    { title: 'efgh', contents: 'EFGH' },
    { title: 'ijkl', contents: 'IJKL' },
  ],
}) => {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <Container>
      <TabContainer>
        {data.map((item, idx, arr) => {
          return (
            <SydsTabBtn
              label={item.title}
              key={idx}
              idx={idx}
              tabIdx={tabIdx}
              setTabIdx={setTabIdx}
              tabLength={arr.length}
            />
          );
        })}
      </TabContainer>
      <SydsTabContents contents={data[tabIdx].contents} />
    </Container>
  );
};

const Container = styled.div``;
const TabContainer = styled.div`
  border-bottom: 1px solid var(--main-whitegrey);
  display: flex;
`;

export default SydsTabContainer;
