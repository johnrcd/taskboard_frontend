const Notification = ({message, date, isRead, key}) => {
    return (
        <section>
            <p>{message}</p>
            <p>{date}</p>
        </section>
    )
}

export default Notification;