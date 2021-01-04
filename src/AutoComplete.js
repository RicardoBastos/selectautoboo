import React, { useState, useRef, useEffect, useMemo } from "react";
import AutoCompleteItem from "./AutoCompleteItem";
import { Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const AutoComplete = ({ data, onSelect }) => {
  const [isVisbile, setVisiblity] = useState(false);
  const [search, setSearch] = useState("");
  const [cursor, setCursor] = useState(-1);

  const searchContainer = useRef(null);
  const searchResultRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollIntoView = (position) => {
    searchResultRef.current.parentNode.scrollTo({
      top: position,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    if (cursor < 0 || cursor > suggestions.length || !searchResultRef) {
      return () => {};
    }

    let listItems = Array.from(searchResultRef.current.children);
    listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop);
  }, [cursor]);

  const suggestions = useMemo(() => {
    if (!search) return data;

    setCursor(-1);
    scrollIntoView(0);

    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const handleClickOutside = (event) => {
    if (
      searchContainer.current &&
      !searchContainer.current.contains(event.target)
    ) {
      hideSuggestion();
    }
  };

  const Searching = (event) => {
    setSearch(event.target.value);
  };

  const Teste = (event) => {
    if (
      data.filter(
        (item) => item.name.toLowerCase() === event.target.value.toLowerCase()
      ).length === 0
    ) {
      inputRef.current.value = "";
      setSearch("");
    }
  };

  const showSuggestion = () => setVisiblity(true);

  const hideSuggestion = () => setVisiblity(false);

  const keyboardNavigation = (e) => {
    if (e.key === "ArrowDown") {
      isVisbile
        ? setCursor((c) => (c < suggestions.length - 1 ? c + 1 : c))
        : showSuggestion();
    }

    if (e.key === "ArrowUp") {
      setCursor((c) => (c > 0 ? c - 1 : 0));
    }

    if (e.key === "Escape") {
      hideSuggestion();
    }

    if (e.key === "Enter" && cursor > 0) {
      setSearch(suggestions[cursor].name);
      hideSuggestion();
      onSelect(suggestions[cursor]);
    }
  };

  return (
    <div className="search-bar-container" ref={searchContainer}>
      {/* <input
        type="text"
        name="search"
        className="search-bar"
        autoComplete="off"
        value={search}
        onClick={showSuggestion}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => keyboardNavigation(e)}
      /> */}

      <Form.Control
        ref={inputRef}
        required
        onBlur={(e) => Teste(e)}
        type="text"
        placeholder="País"
        autoComplete="off"
        value={search}
        onClick={showSuggestion}
        onChange={Searching}
        onKeyDown={(e) => keyboardNavigation(e)}
      />

      <div className="icon2">
        {search ? (
          <FontAwesomeIcon icon={faTimes} onClick={() => setSearch("")} />
        ) : (
          <FontAwesomeIcon icon={faSearch} onClick={showSuggestion} />
        )}
      </div>

      <div className={`search-result ${isVisbile ? "visible" : "invisible"}`}>
        <ul className="list-group" ref={searchResultRef}>
          {suggestions.map((item, idx) => (
            <AutoCompleteItem
              key={item.name}
              onSelectItem={() => {
                hideSuggestion();
                setSearch(item.name);
                onSelect(item);
              }}
              isHighlighted={cursor === idx ? true : false}
              {...item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
