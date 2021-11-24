import React, { useState } from 'react';
import './Pagination.scss';

interface Props {
  pageCount: Array<number>;
  updatePageNumber: (count: number) => void;
  updateLimitUser: (count: number) => void;
}

const Pagination = ({ pageCount, updatePageNumber, updateLimitUser }: Props) => {
  const [countArray] = useState([10, 20, 50] as Array<number>);
  const [selectOptionValue, setSelectOptionValue] = useState('count_to_10' as string);

  const updatePage = (count: number): void => {
    updatePageNumber(count);
  };

  const setLimit = (option: any): void => {
    let count;
    switch (option) {
      case 'count_to_10':
        count = 10;
        break;
      case 'count_to_20':
        count = 20;
        break;
      case 'count_to_50':
        count = 50;
        break;
      default:
        count = 10;
        break;
    }
    if (updateLimitUser) {
      updateLimitUser(count);
    }
  };

  const change = (event: any): void => {
    setSelectOptionValue(event.currentTarget.value);
    setLimit(event.currentTarget.value);
  };

  return (
    <>
      <div className="count">
        <select onChange={change.bind(this)} value={selectOptionValue}>
          {
            countArray.map((count: number, index: number) => (
              <option value={`count_to_${count}`} key={index}>{count}</option>
            ))
          }
        </select>
      </div>
      <ul className="pagination">
        {pageCount.length
          ? pageCount.map((page: number, index: number) => (
            <li className={`pagination__item ${page + 1 === page ? 'pagination__item_current' : ''}`} key={index}>
              <button className="pagination__button" type="button" onClick={() => updatePage(page)}>{page}</button>
            </li>
          ))
          : '' }
      </ul>
    </>
  );
};

export default Pagination;
