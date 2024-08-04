import { useNotifications } from "../hooks/useNotifications";
import Notification from "../components/Notification";

const NotificationList = ({username}) => {
    const notifications = useNotifications(username);

    // don't question why i did it this way
    // i'm on 4 hours of sleep and i hate coding rn
    let notificationsJsx = [];
    
    for(let i = 0; i < notifications.length; i++){
        notificationsJsx.push(
            <li>
                <Notification message={notifications[i].message} />
            </li>
        )
    }
    return (
        <ul className="list-none">
            {notificationsJsx}
        </ul>
    );
};

export default NotificationList;