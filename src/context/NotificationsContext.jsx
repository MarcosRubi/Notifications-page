import React, { useState, createContext, useEffect } from "react";
export const NotificationContext = createContext();
import data from "../data/data.json";

export function NotificationContextProvider(props) {
    const [numberNotifications, setNumberNotifications] = useState(3);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(data);
    }, []);

    const markAllAsRead = () => {
        setNumberNotifications(0);
        const notifications = document.querySelectorAll(".show");
        notifications.forEach((element) => {
            element.classList.remove("show");
        });
    };

    return (
        <NotificationContext.Provider
            value={{ numberNotifications, posts, markAllAsRead }}
        >
            {props.children}
        </NotificationContext.Provider>
    );
}

export default NotificationContext;
