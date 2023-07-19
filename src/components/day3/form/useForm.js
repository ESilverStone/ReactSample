import { useState } from 'react';

const useForm = (steps) => {
  const [curPage, setCurPage] = useState(0);
  const [endPage] = useState(steps.length - 1);

  return [curPage, setCurPage, endPage];
};

export default useForm;
