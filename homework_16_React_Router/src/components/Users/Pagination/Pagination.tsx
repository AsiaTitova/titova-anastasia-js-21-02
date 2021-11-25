import React, { useState } from 'react';
import './Pagination.scss';
import { setPagination } from '../../../utils/setPagination';
import { DOTS } from '../../../constants/constants';

interface Props {
  total: number;
  currentPage: number;
  limit: number;
  siblingCount?: number;
  updatePageNumber: (count: number | string) => void;
  updateLimitUser: (count: number) => void;
}

const Pagination = ({
  total,
  currentPage,
  limit,
  siblingCount,
  updatePageNumber,
  updateLimitUser,
}: Props) => {
  const [countArray] = useState([5, 10, 20, 50] as Array<number>);
  const [selectOptionValue, setSelectOptionValue] = useState('count_to_10' as string);

  const paginationRange = setPagination({
    total,
    limit,
    siblingCount,
    currentPage,
  });

  const resetActivePaginationClass = (): void => {
    const pageElementsArray = document.querySelectorAll('.pagination__button');
    pageElementsArray.forEach((item) => {
      item.classList.remove('pagination__button_current');
    });
  };

  const updatePage = (count: number | string): void => {
    resetActivePaginationClass();
    updatePageNumber(count);
  };

  const setLimit = (option: any): void => {
    let count;
    switch (option) {
      case 'count_to_5':
        count = 5;
        break;
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
        {paginationRange.length
          ? paginationRange.map((pageNumber: string | number, index: number) => (
            pageNumber === DOTS
              ? <li className="pagination__item" key={index}>{ DOTS }</li>
              : (
                <li className="pagination__item" key={index}>
                  <button className={`pagination__button ${pageNumber === currentPage ? 'pagination__button_current' : ''}`} type="button" onClick={() => updatePage(pageNumber)}>{pageNumber}</button>
                </li>
              )))
          : '' }
      </ul>
    </>
  );
};

Pagination.defaultProps = {
  siblingCount: 1,
};

export default Pagination;
