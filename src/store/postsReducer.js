// Состояние по умолчанию
const defaultState = {
  posts: [],
  isFetching: true,
  isFiltered: false,
  isFailure: false,
};

// Типы action
export const LOAD_POSTS = "LOAD_POSTS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
export const TOOGLE_LIKE_POST = "TOOGLE_LIKE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const TOOGLE_FILTER_POSTS = "FILTER_POSTS";

//Reduser
export const postsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    // Добавление постов при начальной загрузке
    case LOAD_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        isFetching: false,
      };
    // Ошибка загрузки постов
    case LOAD_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFailure: true,
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

// Actions
export const loadPostsAction = (payload) => ({ type: LOAD_POSTS, payload });
export const loadPostsFailureAction = () => ({ type: LOAD_POSTS_FAILURE });
export const removePostAction = (id) => ({ type: REMOVE_POST, id });
export const likePostAction = (id) => ({ type: TOOGLE_LIKE_POST, id });
export const toogleFilterPostsAction = () => ({ type: TOOGLE_FILTER_POSTS });
