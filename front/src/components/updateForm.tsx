import '../App.css'

export default function UpdateForm({ email, comment, onComment, onSend }) {

    return (
        <div className="form">
            <p>Email</p>
            <input type="email" name="email" disabled value={email} />
            <p>Comment</p>
            <textarea name="comment" value={comment} onChange={(e) => onComment(e.target.value)} />
            <button onClick={() => onSend()}>Send Comment</button>
        </div>
    )
}