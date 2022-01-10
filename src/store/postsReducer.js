//Состояние по умолчанию
const defaultState = {
  posts: [],
  isFetching: true,
  isFiltered: false,
};

//Типы action
export const ADD_POSTS = "ADD_POSTS";
export const TOOGLE_LIKE_POST = "TOOGLE_LIKE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const TOOGLE_FILTER_POSTS = "FILTER_POSTS";

//Reduser
export const postsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    //Добавление постов при начальной загрузке
    case ADD_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        isFetching: false,
      };
    // Удаление поста путём фильтрации
    case REMOVE_POST:
      let filteredPosts = state.posts.filter((item) => item.id !== action.id);
      return {
        ...state,
        posts: [...filteredPosts],
      };
    // Переключение состояние лайка у поста
    case TOOGLE_LIKE_POST:
      let postsWithLike = state.posts.map((item) => {
        if (item.id === action.id) {
          item.isLiked = item.isLiked ? false : true;
        }

        return item;
      });
      return {
        ...state,
        posts: [...postsWithLike],
      };
    // Включение, выключение фильтрации
    case TOOGLE_FILTER_POSTS: {
      return {
        ...state,
        isFiltered: !state.isFiltered,
      };
    }
    default:
      return state;
  }
};

//Actions
export const addPostsAction = (payload) => ({ type: ADD_POSTS, payload });
export const removePostAction = (id) => ({ type: REMOVE_POST, id });
export const likePostAction = (id) => ({ type: TOOGLE_LIKE_POST, id });
export const toogleFilterPostsAction = () => ({ type: TOOGLE_FILTER_POSTS });
