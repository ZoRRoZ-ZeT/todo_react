import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dropdown-block">
        <button clasName="dropdown-block__button"></button>
        <div className="dropdown-block__content content-list">
          {this.props.values.map((value) => {
            const markerClass = `dropdown-item__marker mark-${value.priority}`;
            return (
              <li
                key={value.toString()}
                className="content-list__item dropdown-item"
              >
                <div className={markerClass}></div>
                <span className="dropdown-item__caption"></span>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
