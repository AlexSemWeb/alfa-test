import React from "react";
import Like from "./Like";
import { useDispatch, useSelector } from "react-redux";
import { toogleFilterPostsAction } from "../store/postsReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const isFiltered = useSelector((state) => state.postsReducer.isFiltered);

  function filterPosts() {
    dispatch(toogleFilterPostsAction());
  }

  return (
    <div className="filter">
      <Like active={isFiltered} makeActive={filterPosts} />
    </div>
  );
};

export default Filter;
