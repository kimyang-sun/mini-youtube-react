import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef(null);
  // useRef()의 인자로 null을 넣어주는건 명시적으로 빈 레퍼런스를 생성했음을 알려주기 위함입니다.
  // 실제로 inputRef에 input 엘리먼트가 담기는 시점은
  // componentDidMount(), 즉 useEffect() 혹은 useLayoutEffect()의 콜백이 실행되기 전입니다.
  // 여기엔 useEffect가 없지만 만약 있을때는 오류가 날수도 있으니 명시적으로 null check를 해줍니다.

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>
          Youtube<span>mini</span>
        </h1>
      </a>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search"
        onKeyPress={onKeyPress}
      />
      <button type="submit" className={styles.button} onClick={onClick}>
        <img src="/images/search.png" alt="search" />
      </button>
    </header>
  );
});

export default SearchHeader;
