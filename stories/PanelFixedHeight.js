/**
 * Created by suppanathuss on 1/6/2017 AD.
 */
import React from 'react';

export default class PanelFixedHeight extends React.Component {
  render() {
    return (
      <div style={{height: '300px', backgroundColor: 'lightGrey'}}>
        {this.props.children}
      </div>
    )
  }
}