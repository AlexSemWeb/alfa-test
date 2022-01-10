import React from "react";
import Like from "./Like";
import Remove from "./Remove";
import { useDispatch } from "react-redux";
import { removePostAction, likePostAction } from "../store/postsReducer";

const Post = ({ img, title, id, isLiked = false }) => {
  const dispatch = useDispatch();

  //Удаление поста
  function removePost() {
    dispatch(removePostAction(id));
  }

  //Лайк поста
  function likePost() {
    dispatch(likePostAction(id));
  }

  return (
    <div className="card">
      <div className="card__img--container">
        <Remove removeItem={removePost} />
        <Like active={isLiked} makeActive={likePost} />
        <img className="card__img" src={img} alt="" />
      </div>
      <span className="card__title">{title}</span>
    </div>
  );
};

export default Post;
