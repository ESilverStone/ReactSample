import { useState } from 'react';
import styled from 'styled-components';
import useForm from './useForm';
import SydsStep from './SydsStep';

const SydsForm = ({ steps = ['Id', 'PW', 'Nickname', 'Email'] }) => {
  const [curPage, setCurPage, endPage] = useForm(steps);
  const [data, setData] = useState({});

  return (
    <SydsStep
      step={steps[curPage]}
      onChange={(e) => {
        setData({ ...data, [steps[curPage]]: e.target.value });
      }}
      onNext={() => {
        curPage === endPage
          ? console.log(data, '를 전송합니다')
          : setCurPage(curPage + 1);
      }}
    />
  );
};

export default SydsForm;
