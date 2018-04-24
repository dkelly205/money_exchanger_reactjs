import React from 'react';
import ExchangeDetail from '../components/ExchangeDetail';
import ExchangeSelector from '../components/ExchangeSelector';

class ExchangeContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleRateSelected = this.handleRateSelected.bind(this);
    this.state = {
      rates: [],
      currentRate: null
    };
  }

  componentDidMount(){
    fetch('https://exchangeratesapi.io/api/latest')
    .then(response => response.json())
    .then(json => this.setState({rates: json.rates}));
  }

  handleRateSelected(index){
    const selectedRate = this.state.rates[index];
    this.setState({currentRate : selectedRate})
  }

  render(){
    return(
    <div>
      <h2>Convert yer dough</h2>
      <ExchangeSelector
        rates={this.state.rates}
        onRateSelected={this.handleRateSelected}
      />

      <ExchangeDetail/>




    </div>
  )
  }

}

export default ExchangeContainer;
