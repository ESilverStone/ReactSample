import SydsSquareButton from '../components/day1/SydsSquareButton';
import SydsRoundButton from '../components/day1/SydsRoundButton';
import MyTest from '../components/_test/MyTest';

import SydsDropdown from '../components/day1/SydsDropdown';
import SydsInput from '../components/day1/SydsInput';
import SydsTextarea from '../components/day1/SydsTextarea';

const View = () => {
  const arr = ['a', 'b', 'c'];

  return (
    <div>
      <h2>Button</h2>
      <br />
      <MyTest
        className = 'default'
        value = '취소'
      />
      <br />
      <SydsSquareButton
        className = 'default'
        value = '취소'
      />
      <br />
      <SydsSquareButton
        className = 'warning'
        value = '탈출하기'
      />
      <br />
      <SydsSquareButton
        className = 'confirm'
        value = '등록하기'
      />
      <br />
      <SydsRoundButton
        className = 'confirm'
        value = '등록하기'
      />
      <hr />
      <h2>Input</h2>
      <br />
      <SydsInput />
      <br />
      <SydsInput placeholder = '닉네임을 입력해주세요'/>
      <br />
      <SydsInput label = '비밀번호' type = 'password' placeholder = '비밀번호를 입력해주세요'/>
      <hr />
      <h2>Textarea</h2>
      <br />
      <SydsTextarea />
      <hr />
      <h2>Dropdown</h2>
      <br />
      <SydsDropdown options={arr} />
    </div>
  );
};
export default View;
