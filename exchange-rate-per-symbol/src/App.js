import React from "react";
import "./styles/App.css";
import { ArticleCard } from "./components/ArticleCard";
import { getData } from "./getData";
import { useArticlesState } from "./hooks/useArticlesState";
import { MainContainer } from "./components/MainContainer";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/Header";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { ErrorCard } from "./components/ErrorCard";

const App = () => {

/*  I didn't quite understand what I should do with the connection to Websockets, so I didn't implement it.  */

  const { changeEvents, states } = useArticlesState();

  const { setData, onSearch, onError, setSearchValue, toggleSort, sortByDate } =
    changeEvents;

  const { articles, searchValue } = states;

  const listItems = () => {
    if (articles.dataFilter.length <= 0) {
      return articles.data;
    }
    return articles.dataFilter;
  };

  const list = listItems();

  const onSortDate = () => {
    let sortedList = list;
    sortedList.sort((a, b) => sortByDate(a, b, articles.sortDate));
    toggleSort();
    setData(sortedList);
  };

  React.useEffect(() => {
    getData(setData, onError);
  }, []);

  let searchedList = [];

  if (searchValue.length <= 0) {
    searchedList = articles.data;
  } else {
    searchedList = articles.dataFilter;
  }

  return (
    <>
      <Header />
      <MainContainer>
        {!!articles.loading && <LoadingSkeleton />}
        {!articles.loading && articles.error && <ErrorCard />}
        {!articles.loading && !articles.error && (
          <>
            <SearchBar
              onSearch={onSearch}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <div className="sort__container">
              <button onClick={onSortDate} className="sort__button">
                <p className="sort__text">sort by date</p>
                <span
                  className={`icon__wrapper ${
                    articles.sortDate ? "rotate-icon" : ""
                  }`}
                >
                  <i className="fa-solid fa-sort-down"></i>
                </span>
              </button>
            </div>
            {searchedList.map((item) => (
            <ArticleCard
              key={item.id}
              articleLink={item.link}
              content={item.content}
              date={item.date}
              title={item.title}
            />
            ))}
          </>
        )}
      </MainContainer>
    </>
  );
};

export default App;
