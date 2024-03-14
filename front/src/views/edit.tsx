import { useEffect } from 'react';
import UpdateForm from '../components/updateForm'
import useComment from '../hooks/useComment'
import { useParams } from "react-router-dom";

export default function EditView() {

    const { id } = useParams()

    const { email, comment, setComment, getComment, editComment } = useComment();

    useEffect(() => {
        getComment(id !== undefined ? parseInt(id) : 0)
    }, [])

    return (
        <div>
            <UpdateForm
                email={email}
                comment={comment}
                onComment={(val: string) => setComment(val)}
                onSend={() => editComment(id !== undefined ? parseInt(id) : 0)} />
        </div>
    )
}