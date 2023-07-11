/* eslint-disable react/prop-types */
export const Notification = ({notifications, setNotifications}) => {

    const handleReaded = (index) => {
        const updatedNotifications = [...notifications];
        updatedNotifications[index].unread = false;
        setNotifications(updatedNotifications)
    }

  return (
    <>
    {notifications && notifications.map((notification, index)=>(
        <article key={notification.name} className={notification.unread ? "notification-container notification-container-unread" :"notification-container"} onClick={notification.unread ? () => handleReaded(index) : null}>
          <figure className="avatar-container">
            <img className="avatar" src={notification.avatar} alt="avatar"/>
          </figure>
          <aside className="notification-details-container">
            <div className={notification.comment ? "notification-details notification-details80" : "notification-details"}>
              <span className="notification-name">{notification.name} </span>
              <span className="notification-action">{notification.action} {notification.actionTarget} </span>
              <span className={notification.actionTarget === "group" ? "notification-content notification-content-group" : "notification-content"}> {notification.actionContent} </span>
              {notification.hasComment && <img src={notification.comment} className="comment-img" alt="comment-img"/>}
              {notification.unread && <div className="notification-unread"></div>}
            </div>
            {notification.hasPrivateMsg && <div className="private-msj">{notification.privateMsg}</div>}
            <p className="notfication-time">{notification.actionTime}</p>
          </aside>
        </article>
        ))}
    </>
  )
}
