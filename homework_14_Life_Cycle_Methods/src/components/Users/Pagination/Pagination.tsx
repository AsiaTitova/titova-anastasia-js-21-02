import React from 'react';
import './Pagination.scss';

interface Props {
  pageCount: Array<number>;
  page: number;
  limit: number;
  updatePageNumber: (count: number) => void;
  updateLimitUser: (count: number) => void;
}

interface State {
  countArray: Array<number>;
  count: number;
  selectOptionValue: string;
}

const initialState = {
  countArray: [10, 20, 50],
  count: 10,
  selectOptionValue: 'count_to_10',
};

export class Pagination extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
    this.setLimit = this.setLimit.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.change = this.change.bind(this);
  }

  updatePage = (count: number): void => {
    this.props.updatePageNumber(count);
  }

  setLimit = (option: any): void => {
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
    if (this.props.updateLimitUser) {
      this.props.updateLimitUser(count);
    }
  }

  change(event: any): void {
    this.setState({ selectOptionValue: event.currentTarget.value });
    this.setLimit(event.currentTarget.value);
  }

  render() {
    return (
      <>
        <div className="count">
          <select onChange={this.change.bind(this)} value={this.state.selectOptionValue}>
            {
              this.state.countArray.map((count: number, index: number) => (
                <option value={`count_to_${count}`} key={index}>{count}</option>
              ))
            }
          </select>
        </div>
        <ul className="pagination">
          {this.props.pageCount.length
            ? this.props.pageCount.map((page: number, index: number) => (
              <li className={`pagination__item ${this.props.page + 1 === page ? 'pagination__item_current' : ''}`} key={index}>
                <button className="pagination__button" type="button" onClick={() => this.updatePage(page)}>{page}</button>
              </li>
            ))
            : '' }
        </ul>
      </>
    );
  }
}
