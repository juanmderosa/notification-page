/* eslint-disable react/prop-types */
import { Notification } from "./Notification";

export const NotificationContainer = ({notifications, setNotifications}) => {

    
  return (
    <section className="notification-main-container">
      <Notification notifications={notifications} setNotifications={setNotifications}/>
    </section>
  )
}



  