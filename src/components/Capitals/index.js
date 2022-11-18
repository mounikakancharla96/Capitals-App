import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCapital: countryAndCapitalsList[0].id}

  changeCountry = event => {
    this.setState({selectedCapital: event.target.value})
  }

  getCountry = () => {
    const {selectedCapital} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === selectedCapital,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {selectedCapital} = this.state
    const country = this.getCountry()
    return (
      <div className="container">
        <div className="capitals-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div>
            <select
              id="status"
              className="form-control option"
              value={selectedCapital}
              onChange={this.changeCountry}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="status" className="label">
              is capital of which country?
            </label>
          </div>
          <p className="para">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
