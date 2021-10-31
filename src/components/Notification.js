// styles
import { useSelector } from 'react-redux'
import '../styles/notification.css'

const Notification = () => {

  // eslint-disable-next-line no-unused-vars
  const { message, success } = useSelector(store => store.notification)

  if (message !== '') {
    return (
      <div className={`notification-position notification-style ${success ? 'success' : 'error'}`}>
        {message}
      </div>
    )
  }
  else
    return null
}

export default Notification