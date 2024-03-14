import Comments from '../components/comments'
import CreateForm from '../components/createForm'
import useComment from '../hooks/useComment'
export default function Main() {

    const { commentsRedux, email, setEmail, comment, setComment, createComment, deleteComment, onEdit } = useComment()

    return (
        <>
            <CreateForm email={email} comment={comment} onEmail={(val: string) => setEmail(val)} onComment={(val: string) => setComment(val)} onSend={() => createComment()} />
            <Comments
                comments={commentsRedux}
                onEdit={(id: number) => onEdit(id)} onDelete={(id: number) => deleteComment(id)} />
        </>
    )
}