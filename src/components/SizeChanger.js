import React, { Component } from 'react';

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  // componentWillReceiveProps
    componentWillReceiveProps(newProps){
    this.setState({
      allowEdit: newProps.allowEdit
    })
  }

  render() {
    return (
      <select className="dropDownContainer" onChange={ (e) => this.props.update(e.target.value) } disabled={ this.state.allowEdit === "false" }>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    )
  }
}