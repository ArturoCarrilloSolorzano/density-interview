import { createSlice } from '@reduxjs/toolkit'

interface CommentState {
    comments: {
        id: number,
        email: string,
        comment: string
    }[]
}

const initialState: CommentState = {
    comments: []
}

export const commentSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    set: (state, action) => {
      state.comments = action.payload
    },
    add: (state, action) => {
        console.log("action", action.payload)
      state.comments = [...state.comments, action.payload]
    },
    edit: (state, action) => {
        state.comments = state.comments.map(com => {
            if(com.id !== action.payload.id)
                return com
        com.comment = action.payload.comment
        return com
        })
    },
    del: (state, action) => {
        state.comments = state.comments.filter(com => com.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { set, add, edit, del } = commentSlice.actions

export default commentSlice.reducer