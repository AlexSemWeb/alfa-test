import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./asyncActions/posts";
import Post from "./components/Post";
import Filter from "./components/Filter";

const App = () => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const isFetching = useSelector((state) => state.postsReducer.isFetching);
  const isFiltered = useSelector((state) => state.postsReducer.isFiltered);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []); // eslint-disable-line

  if (isFetching) {
    return <div className="loading">Идёт загрузка...</div>;
  } else if (!posts.length) {
    return <div className="loading">Постов нет</div>;
  }

  let post = (item) => (
    <Post
      img={item.thumbnailUrl}
      title={item.title}
      key={item.id}
      id={item.id}
      isLiked={item.isLiked}
    />
  );

  let postsArr = isFiltered
    ? posts.filter((item) => item.isLiked)
    : posts.map((item) => item);

  return (
    <>
      <Filter />
      <div className="card--container">
        {postsArr.length
          ? postsArr.map((item) => post(item))
          : "Нет постов с лайками"}
      </div>
    </>
  );
};

export default App;
