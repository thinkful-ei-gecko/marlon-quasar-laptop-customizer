import React, { Component }  from 'react';
import ComponentType from './ComponentType'
import slugify from 'slugify';

class ComponentList extends Component {

  render() {

    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return ( <ComponentType feature={this.props.features} key={featureHash}/> )
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