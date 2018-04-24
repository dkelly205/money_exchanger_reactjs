import React from 'react';

const ExchangeSelector = (props) => {

  const keysArray = Object.keys(props.rates);

  const options = keysArray.map((rate, index) =>{
    return <option value={index} key={index}>{rate}</option>
  })

  const handleChange = (event) => {
    let index = event.target.value;
    props.onRateSelected(index);
  }

  return(
    <select
      onChange={handleChange}
      id="rate-selector"
      defaultValue="default">
      <option disabled value="default">Choose a country..</option>
      {options}
      </select>
  )

}

export default ExchangeSelector;
