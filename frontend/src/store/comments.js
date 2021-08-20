const ADD_COMMENT = 'comments/addComment';
const GET_COMMENTS = 'comments/loadComments';

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
});

const loadComments = (comments) => ({
    type: GET_COMMENTS,
    comments
});

export const fetchComments = () => async(dispatch) => {
    const res = await fetch('/api/place/:id/comments');
    const comments = await res.json();
    dispatch(loadComments(comments));
};

export const postComment = (payload) => async(dispatch) => {
    const res = await fetch('/api/place/:id/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });
    const newComment = await res.json();

    if (res.ok) {
        dispatch(addComment(newComment));;
    }
    return newComment;
};

const initialState = {};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            const newState = {...state};
            action.comments.forEach(comment => {
                newState[comment.id] = comment;
            });
            return newState;
        case ADD_COMMENT:
            return {
                ...state,
                entries: {
                  ...state.entries,
                  [action.newComment.id]: action.newComment,
                },
            };
        default:
            return state;

    }
}

export default commentReducer;
