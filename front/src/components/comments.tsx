import "../App.css"

export default function Comments({ comments, onEdit, onDelete }) {

    return (
        <div className="comments">
            {comments.map(comment => {
                return (
                    <div key={comment.id} className="comment">
                        <p>email: {comment.email}</p>
                        <p>comment: {comment.comment}</p>
                        <div>
                            <button onClick={() => onEdit(comment.id)}>Edit</button>
                            <button onClick={() => onDelete(comment.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}