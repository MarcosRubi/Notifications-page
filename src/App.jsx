import { useContext, useEffect, useState } from "react";
import NotificationContext from "./context/NotificationsContext";
import "./App.css";
import Header from "./components/Header";
import Notification from "./components/Notification";

function App() {
    const { posts } = useContext(NotificationContext);
    return (
        <main className="main-container">
            <Header />
            <section className="notifications">
                {posts.map((post, index) => {
                    return <Notification post={post} key={index} />;
                })}
            </section>
        </main>
    );
}

export default App;
