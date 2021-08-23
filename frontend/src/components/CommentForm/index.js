import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { postComment } from "../../store/comments";

const CommentForm = () => {
    const dispatch = useDispatch();

    const [body, setBody] = useState("");

    const reset = () => {
        setBody("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            body
        };
        const newCommentFromDb = await dispatch(postComment(newComment));
        reset();
    };

    return (
        <div className="commentBox">
            <h1>Write a Comment</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    placeholder="Comment on this location here..."
                    name="body"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CommentForm;
