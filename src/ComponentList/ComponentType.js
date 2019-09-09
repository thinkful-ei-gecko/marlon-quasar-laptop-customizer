import React, { Component } from 'react';
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class ComponentType extends Component{

  render() { 
  const options = this.props.feature.map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={1}/* {item.name === this.state.selected[feature].name} */
          onChange={1}/* {e => this.updateFeature(feature, item)} */
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  });

  return (
    <fieldset className="feature" key={this.props.featureHash}>
      <legend className="feature__name">
        <h3>{this.props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  );

  }
}

export default ComponentType