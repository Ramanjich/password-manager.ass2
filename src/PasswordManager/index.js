import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    webInput: '',
    nameInput: '',
    passInput: '',
    searchPass: '',
    passwordShow: false,
  }

  onWebsiteChange = event => {
    this.setState({webInput: event.target.value})
  }

  onUsernameChange = event => {
    this.setState({nameInput: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({passInput: event.target.value})
  }

  onSearching = event => {
    this.setState({searchPass: event.target.value})
  }

  notFoundPassword = () => (
    <div className="not-foundpass-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
        alt="no passwords"
        className="nofound-image"
      />
      <p className="no-para">No Passwords</p>
    </div>
  )

  onPasswordsubmit = event => {
    event.preventDefault()
    const {webInput, nameInput, passInput} = this.state
    const newList = {
      id: uuidv4(),
      webSite: webInput,
      userName: nameInput,
      passWord: passInput,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newList],
      webInput: '',
      nameInput: '',
      passInput: '',
    }))
  }

  onDeletePass = id => {
    const {passwordsList} = this.state

    const updateList = passwordsList.filter(eachone => eachone.id !== id)

    this.setState({passwordsList: updateList})
  }

  onPasswordShow = () => {
    console.log('hjbhd')
    this.setState(prevState => ({passwordShow: !prevState.passwordShow}))
  }

  render() {
    const {
      webInput,
      passInput,
      nameInput,
      passwordsList,
      searchPass,
      passwordShow,
    } = this.state
    const searchList = passwordsList.filter(eachItem =>
      eachItem.webSite.toLowerCase().includes(searchPass),
    )

    const isFound = searchList.length !== 0
    const count = searchList.length
    return (
      <div className="app-container">
        <div className="password-m-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="logo-style"
            />
          </div>
          <div className="password-creat-container">
            <div className="pass-form-container">
              <h1 className="main-heading">Add New Password</h1>
              <form onSubmit={this.onPasswordsubmit}>
                <div className="website-con">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="web-image"
                    />
                  </div>
                  <div className="input-web-con">
                    <input
                      type="text"
                      placeholder="Enter Website"
                      className="input-ele-web"
                      onChange={this.onWebsiteChange}
                      value={webInput}
                    />
                  </div>
                </div>

                <div className="username-con">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="username-image"
                    />
                  </div>
                  <div className="input-username-con">
                    <input
                      type="text"
                      placeholder="Enter Username"
                      className="input-ele-username"
                      onChange={this.onUsernameChange}
                      value={nameInput}
                    />
                  </div>
                </div>

                <div className="password-con">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="password-image"
                    />
                  </div>
                  <div className="input-password-con">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="input-ele-password"
                      onChange={this.onPasswordChange}
                      value={passInput}
                    />
                  </div>
                </div>
                <div className="button-container">
                  <button type="submit" className="add-btn">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="password-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="manager-image"
              />
            </div>
          </div>
          <div className="password-item-container">
            <div className="your-search-container">
              <div className="your-count-con">
                <h1 className="your-heading">Your Passwords</h1>
                <div>
                  <p className="count-para">{count}</p>
                </div>
              </div>

              <div className="search-con">
                <div className="search-con-image">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-image"
                  />
                </div>
                <div className="input-search-con">
                  <input
                    type="search"
                    placeholder="search"
                    className="input-ele-search"
                    onChange={this.onSearching}
                  />
                </div>
              </div>
            </div>
            <div className="show-password-con">
              <input
                type="checkbox"
                id="password"
                className="check-ele"
                onClick={this.onPasswordShow}
              />
              <label htmlFor="password" className="label-text">
                Show passwords
              </label>
            </div>
            {isFound ? (
              <ul className="items-container">
                {searchList.map(eachList => (
                  <PasswordItem
                    eachList={eachList}
                    key={eachList.id}
                    onDeletePass={this.onDeletePass}
                    passwordShow={passwordShow}
                  />
                ))}
              </ul>
            ) : (
              this.notFoundPassword()
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
