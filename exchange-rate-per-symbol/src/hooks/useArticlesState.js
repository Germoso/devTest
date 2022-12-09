import React from "react";

const useArticlesState = () => {
  const initialState = {
    data: [],
    dataFilter: [],
    loading: true,
    error: false,
    sortDate: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return {
          ...state,
          loading: true,
        };
      case "LOADED":
        return {
          ...state,
          data: [...action.payload],
          loading: false,
        };
      case "ERROR":
        return {
          ...state,
          loading: false,
          error: true,
        };
      case "SEARCH":
        return {
          ...state,
          dataFilter: action.payload,
        };
      case "SORT":
        return {
          ...state,
          sortDate: action.payload,
        };
      default:
        return state;
    }
  };

  const [articles, dispatch] = React.useReducer(reducer, initialState);
  const [searchValue, setSearchValue] = React.useState("");

  const setData = (data) => {
    dispatch({ type: "LOADED", payload: data });
  };

  const onSearch = (titleString) => {
    const titleSearched = titleString.toLowerCase();
    const articlesFilter = articles.data.filter((item) =>
      item.title.toLowerCase().includes(titleSearched)
    );
    dispatch({ type: "SEARCH", payload: articlesFilter });
  };

  const onLoading = () => {
    dispatch({ type: "LOADING" });
  };

  const onError = () => {
    dispatch({ type: "ERROR" });
  };

  const sortByDate = (a, b, state) => {
    onLoading();
    a = a.date.split("/").reverse().join("");
    b = b.date.split("/").reverse().join("");
    if (!state) {
      return a > b ? 1 : a < b ? -1 : 0;
    }
    return a < b ? 1 : a > b ? -1 : 0;
  };

  const toggleSort = () => {
    dispatch({ type: "SORT", payload: !articles.sortDate });
  };

  const changeEvents = {
    setData,
    onSearch,
    onError,
    setSearchValue,
    toggleSort,
    onLoading,
    sortByDate,
  };

  const states = { articles, searchValue };

  return {
    changeEvents,
    states,
  };
};

export { useArticlesState };
