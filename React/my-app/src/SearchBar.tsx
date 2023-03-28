import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
    setValue("");
  };

  return (
    <header data-ln="Header" className="header__container">
	

<ul className="loginbar__list" id="menu" style={{flex: 'initial'}}>

    <li className="loginbar__listitem loginbar__listitem--search" id="header-search" >
        <button aria-label="Type to search for Artist, Event, or Venue" name="Type to search for Artist, Event, or Venue" className="headerSearch__button" type="button" data-testid="header-search-button">
            <svg className="headerSearch__button__icon" width="16" height="16">
                <use xlinkHref="#Search" />
            </svg>
        </button>
        <div className="headerSearch__wrapper" data-testid="header-search"></div>
    </li>
    </ul>


</header>
  );
};

export default SearchBar;
