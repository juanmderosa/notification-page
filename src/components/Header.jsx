/* eslint-disable react/prop-types */
export const Header = ({unreaded, notifications, setNotifications}) => {

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      unread: false,
    }));
    setNotifications(updatedNotifications);
  };

  return (
    <header className="notification-page-header">
    <h1 className="header-title">Notifications</h1>
    <h2 className="header-notifications">{unreaded}</h2>
    <button className="header-markAsRead" onClick={markAllAsRead}>Mark all as read</button>
  </header>
  )
}
