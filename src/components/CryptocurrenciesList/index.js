// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrenceData()
  }

  getCryptocurrenceData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateData = data.map(eachData => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      currencyLogo: eachData.currency_logo,
    }))
    this.setState({cryptoCurrencyData: updateData, isLoading: false})
  }

  renderCryptoCurrencyList = () => {
    const {cryptoCurrencyData} = this.state

    return (
      <div className="cryptocurrencies-list-card">
        <h1 className="cryptolist-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
          className="crypto-img"
        />
        <div className="crypto-list-nav-bar">
          <nav className="nav-bar">
            <p className="coin-paragraph">Coin Type</p>
            <div className="crypto-currency">
              <p className="usd-paragraph">USD</p>
              <p className="euro-paragraph">EURO</p>
            </div>
          </nav>
          <ul className="crypto-currency-lis-container">
            {cryptoCurrencyData.map(eachData => (
              <CryptocurrencyItem
                key={eachData.id}
                cryptoCurrencyDataList={eachData}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="render-cryptoCurrency-list">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptoCurrencyList()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
