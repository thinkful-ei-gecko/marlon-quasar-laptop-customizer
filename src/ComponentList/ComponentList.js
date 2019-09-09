import React, { Component }  from 'react';
import ComponentType from './ComponentType'
import './ComponentList.css'

class ComponentList extends Component {

  render() {

    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return ( <ComponentType 
                  features={this.props.features} 
                  featureName={feature} 
                  key={featureHash}
                  onChange={this.props.onChange}
                  selectedFeatures={this.props.selectedFeatures}/> )
    });

    return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
    );
  }
}

export default ComponentList;