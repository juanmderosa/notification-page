import { useState, useEffect, useMemo } from "react"
import { Header } from "./components/Header"
import { NotificationContainer } from "./components/NotificationContainer";

const initialNotifications = [
  {
    name: "Mark Webber",
    avatar: "images/avatar-mark-webber.webp",
    action: "reacted to",
    actionTarget: "your recent post",
    actionContent: "My first tournament today!",
    hasPrivateMsg: false,
    privateMsg: "",
    hasComment: false,
    comment: "",
    actionTime: "1m ago",
    unread: true,
  },
  {
    name: "Angela Grayr",
    avatar: "images/avatar-angela-gray.webp",
    action: "followed you",
    actionTarget: "",
    actionContent: "",
    hasPrivateMsg: false,
    privateMsg: "",
    hasComment: false,
    comment: "",
    actionTime: "5m ago",
    unread: true,
  },
  {
    name: "Jacob Thompson",
    avatar: "images/avatar-jacob-thompson.webp",
    action: "has joined your",
    actionTarget: "group",
    actionContent: "Chess Club",
    hasPrivateMsg: false,
    privateMsg: "",
    hasComment: false,
    comment: "",
    actionTime: "1 day ago",
    unread: true,
  },
  {
    name: "Rizky Hasanuddin",
    avatar: "images/avatar-rizky-hasanuddin.webp",
    action: "sent you",
    actionTarget: "a private message",
    actionContent: "",
    hasPrivateMsg: true,
    privateMsg: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    hasComment: false,
    comment: "",
    actionTime: "5 days ago",
    unread: false
  },
  {
    name: "Kimberly Smith",
    avatar: "images/avatar-kimberly-smith.webp",
    action: "commented on",
    actionTarget: "your picture",
    actionContent: "",
    hasPrivateMsg: false,
    privateMsg: "",
    hasComment: true,
    comment: "images/image-chess.webp",
    actionTime: "1 week ago",
    unread: false
  },
  {
    name: "Nathan Peterson",
    avatar: "images/avatar-nathan-peterson.webp",
    action: "reacted to",
    actionTarget: "your recent post",
    actionContent: "5 end-game strategies to increase your win rate",
    hasPrivateMsg: false,
    privateMsg: "",
    hasComment: false,
    comment: "",
    actionTime: "2 weeks ago",
    unread: false
  },
  {
    name: "Anna Kim",
    avatar: "images/avatar-anna-kim.webp",
    action: "left the",
    actionTarget: "group",
    actionContent: "Chess Club",
    hasPrivateMsg: false,
    privateMsg: "",
    hasComment: false,
    comment: "",
    actionTime: "2 weeks ago",
    unread: false
  }
  
]

function App() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreaded  = useMemo(()=>{
    let initialUnreaded = notifications.filter((notification => notification.unread === false)).length
    return notifications.length - initialUnreaded
    }, [notifications]);

  useEffect(() => {
    setNotifications(notifications)
  }, [notifications]);

  return (
    <>
      <main className="main-container">
        <Header notifications={notifications} setNotifications={setNotifications} />
        <NotificationContainer notifications={notifications} unreaded={unreaded} setNotifications={setNotifications}/>
      </main>
    </>
  )
}

export default App
