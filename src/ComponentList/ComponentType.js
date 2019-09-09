import React, { Component } from 'react';
import './ComponentType.css'
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class ComponentType extends Component{

  render() { 
  const { features, featureName, selectedFeatures } = this.props;

  const options = features[featureName].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(featureName)}
          checked={item.name === selectedFeatures[featureName].name}
          onChange={e => this.props.onChange(featureName, item)
          }
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
        <h3>{featureName}</h3>
      </legend>
      {options}
    </fieldset>
  );

  }
}

export default ComponentType