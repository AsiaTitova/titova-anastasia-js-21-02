/* eslint-disable */
import React, { ReactNode, SyntheticEvent } from 'react';
import './ComponentWithHelper.scss';

interface State {
  hovered: boolean;
}

interface Props {
  children: ReactNode;
  id: string
}

export default class ComponentWithHelper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hovered: false };
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
  }

  mouseOver(event: SyntheticEvent): void {
    this.setState({ hovered: true });
    event.stopPropagation();
  }

  mouseOut(event: SyntheticEvent): void {
    this.setState({ hovered: false });
    event.stopPropagation();
  }

  render() {
    return (
      <li
        className="component-with-helper"
        onMouseOut={this.mouseOut}
        onMouseOver={this.mouseOver}
        onFocus={() => this.mouseOver}
        onBlur={() => this.mouseOut}
      >
        { this.state.hovered && <div className="component-with-helper__helper">{this.props.id}</div>}
        {this.props.children}
      </li>
    );
  }
}
