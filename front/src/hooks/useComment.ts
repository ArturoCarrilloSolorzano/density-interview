import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from './storeHook'
import { set, add, del, edit } from '../slices/commentSlice'
import { useNavigate } from "react-router-dom";

export default function useComment(){

    const commentsRedux = useAppSelector((state) => state.comment.comments)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>("")
    const [comment, setComment] = useState<string>("")

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch('http://localhost:3000/comment');
            const response = await data.json()
            dispatch(set(response))
        }

        fetchData();
    }, [])

    const createComment = async () => {
        if (email == "" || comment == "")
            return

        const commentCreated = await fetch('http://localhost:3000/comment', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                email: email,
                comment: comment
            })
        });

        const response = await commentCreated.json()
        dispatch(add(response))
        setEmail("")
        setComment("")

        console.log("all good")
    }

    const deleteComment = async (id: number) => {
        const commentDeleted = await fetch(`http://localhost:3000/comment/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "DELETE",
        });

        const response = await commentDeleted.json()
        console.log(response
        )
        dispatch(del(id))

        console.log("all good")
    }

    const editComment = async (id: number) => {
        const commentEdited = await fetch(`http://localhost:3000/comment/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({
                comment: comment
            })
        });

        const response = await commentEdited.json()
        dispatch(edit(response))
        navigate("/")
    }

    const onEdit = (id: number) => {
        navigate(`/edit/${id}`)
    }

    const getComment = (id: number) =>{
        
        const com = commentsRedux.find(com => com.id === id);
        if(com == undefined)
            return

        setEmail(com.email)
        setComment(com.comment)
    }

    return {
        commentsRedux,
        email, 
        setEmail,
        comment,
        setComment,
        createComment, 
        deleteComment, 
        onEdit,
        editComment,
        getComment
    }
}