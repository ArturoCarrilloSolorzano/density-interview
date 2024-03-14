import '../App.css'

export default function CreateForm({ email, onEmail, comment, onComment, onSend }) {

    return (
        <div className="form">
            <p>Email</p>
            <input type="email" name="email" value={email} onChange={(e) => onEmail(e.target.value)} />
            <p>Comment</p>
            <textarea name="comment" value={comment} onChange={(e) => onComment(e.target.value)} />
            <button onClick={() => onSend()}>Send Comment</button>
        </div>
    )

}