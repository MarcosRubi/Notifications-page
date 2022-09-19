import { useContext, useEffect, useRef, useState } from "react";
import NotificationContext from "../context/NotificationsContext";

function Header() {
    const { numberNotifications, markAllAsRead } = useContext(NotificationContext);
    const [header, setheader] = useState(null)
    const [entryObserver, setEntryObserver] = useState(false)
    const headerRef = useRef(null)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            entries =>{
                const entry = entries[0]
                setEntryObserver(entry.isIntersecting)
                if(entryObserver){
                    setheader('visible')
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            }
        )
        observer.observe(headerRef.current)
    },[entryObserver])

    return (
        <header ref={headerRef} className={header}>
            <div className="d-flex jc-between align-center">
                <div className="d-flex align-center">
                    <h1>Notifications</h1>
                    <span className="countNotification">
                        {numberNotifications}
                    </span>
                </div>
                <div>
                    <a href="#" onClick={()=>{markAllAsRead()}}>Mark all as read</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
