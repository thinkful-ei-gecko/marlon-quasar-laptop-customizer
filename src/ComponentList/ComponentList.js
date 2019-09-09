import React, { Component }  from 'react';
import ComponentType from './ComponentList/ComponentType'
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class ComponentList extends Component {

  render() {

    return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <ComponentType features={this.props.features}/>
    </form>
    );
  }
}

export default ComponentList;