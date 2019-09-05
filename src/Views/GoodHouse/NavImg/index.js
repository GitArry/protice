import React, {Component} from 'react';
import css from './index.module.scss'

class NavImg extends Component {
  render() {
    return (
      <div className={css.navimg}>
        <img src={this.props.data.image} alt="" />
        <h2>{this.props.data.main_title}</h2>
        <h3>{this.props.data.description}</h3>
      </div>
    )
  }
}

export default NavImg