import SydsBottomSheet from '../components/day2/SydsBottomSheet';
import SydsCard from '../components/day2/SydsCard';
import SydsH1 from '../components/day2/SydsH1';
import SydsH2 from '../components/day2/SydsH2';
import SydsList from '../components/day2/SydsList';
import SydsModal from '../components/day2/SydsModal';
import SydsParagraph from '../components/day2/SydsParagraph';
import SydsTabContainer from '../components/day2/SydsTab/SydsTabContainer';
import SydsToggle from '../components/day2/SydsToggle';

const View2 = () => {
  const arr = ['a', 'b', 'c'];

  return (
    <div>
      <h2>H1, H2, P</h2>
      <br />
      <SydsH1 />
      <SydsH2 />
      <SydsParagraph />
      <hr />
      <h2>List</h2>
      <br />
      <SydsList />
      <hr />
      <h2>Card</h2>
      <br />
      <SydsCard />
      <hr />
      <h2>Modal</h2>
      <br />
      <SydsModal />
      <hr />
      <h2>BottomSheet</h2>
      <br />
      <SydsBottomSheet />
      <hr />
      <h2>Tab</h2>
      <br />
      <SydsTabContainer />
      <hr />
      <h2>Toggle</h2>
      <br />
      <SydsToggle />
      <hr />
    </div>
  );
};
export default View2;
