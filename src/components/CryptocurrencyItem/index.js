// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDataList} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = cryptoCurrencyDataList
  return (
    <li className="currency-item-container">
      <div className="currency-log-name-card">
        <img src={currencyLogo} alt={currencyName} className="currency-log" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-usd-euro-value-card">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
