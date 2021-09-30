/* eslint-disable @typescript-eslint/no-empty-interface */
import clsx from 'clsx';
import React from 'react';

interface IProps {
  title: string;
}

interface IState {
  isHovered: boolean;
  isClosing: boolean;
}

class Tooltip extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
    this.handleUnhover = this.handleUnhover.bind(this);

    this.state = {
      isHovered: false,
      isClosing: false,
    };
  }

  handleHover() {
    this.setState({
      isHovered: true,
      isClosing: false,
    });
  }

  handleUnhover() {
    this.setState({
      isClosing: true,
    });
    setTimeout(() => {
      if (this.state.isClosing) {
        this.setState({
          isHovered: false,
        });
      }
    }, 100);
  }

  render() {
    return (
      <div className="tooltip-wrapper" onMouseLeave={this.handleUnhover}>
        <div className="content" onMouseEnter={this.handleHover}>
          {this.props.children}
        </div>
        <div
          className={clsx({
            'tooltip-content': true,
            hovered: this.state.isHovered,
          })}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleUnhover}
        >
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default Tooltip;
