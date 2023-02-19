import './index.css'

const PasswordItem = props => {
  const {eachList, onDeletePass, passwordShow} = props
  const {id, webSite, userName, passWord} = eachList
  const onDeleteBtnClick = () => {
    onDeletePass(id)
  }

  return (
    <li className="items">
      <div className="symbol-con">
        <p className="symbol-para">{webSite[0]}</p>
      </div>
      <div className="details">
        <p className="web-para">{webSite}</p>
        <p className="username-para">{userName}</p>
        {passwordShow ? (
          <p>{passWord}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-image"
          />
        )}
      </div>
      <div className="delete-con">
        <button
          className="delete-btn"
          type="button"
          onClick={onDeleteBtnClick}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem
