import { useEffect, useRef, useState } from "react";

function Notification({post}) {
    const [notification, setNotification] = useState('')
    const [entryObserver, setEntryObserver] = useState(false)
    const notificationRef = useRef(null)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            entries =>{
                const entry = entries[0]
                setEntryObserver(entry.isIntersecting)
                if(entryObserver){
                    setNotification('visible')
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            }
        )
        observer.observe(notificationRef.current)
    },[entryObserver])
    return (
        <div className={`notificationItem ${notification}`} ref={notificationRef}>
            <div className="d-flex">
                <div className="avatar">
                    <img
                        src={post.avatar}
                        alt={`Photo profile - ${post.name}`}
                    />
                </div>
                <div className="information">
                    <div className="d-flex jc-between">
                        <div>
                            <a href="#" className="username">{post.name} </a> 
                            <span className="type">{post.information.type} </span>
                            {post.information.link ?  
                                <a href="#" className={`link ${post.information.typePost}`}>{post.information.link} </a>
                                : ''
                            } 
                            {!post.isReading ? 
                                <span className="reading show"></span> 
                                : ''  
                            }
                            <p className="timeAgo">{post.timeAgo}</p>
                            {post.complement && post.complement.typeComplement === 'message' ?
                                <p className="message">{post.complement.content} </p> : ''
                            }
                        </div>
                        {post.complement && post.complement.typeComplement === 'photo' ?
                            <img src={post.complement.content} alt="Image" className="img-commented" /> 
                            : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;
