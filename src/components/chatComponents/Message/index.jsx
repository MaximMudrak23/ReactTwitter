import './styles.css';

export function Message({messageAuthor, messageText}) {
    const myUsername = localStorage.getItem('username');
    return (
    <div className={messageAuthor === myUsername ? 'myMessage' : 'otherMessage'}>
        {messageText}
    </div>
    )
}