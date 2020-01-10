import React, { Component } from "react";
import SearchIcon from "../../assets/ic/black/ic_search.png";
import IconButton from "../elements/IconButton";
import PropTypes from "prop-types";

class NavSearchBar extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);
    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  onChange = async e => {
    const userInput = e.target.value;
    this.setState({
      userInput: userInput
    });
    const filteredSuggestions = await fetch(
      `https://swapi.co/api/people/?search=${userInput}`
    )
      .then(res => res.json())
      .then(result => {
        return result.results;
      });
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true
    });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion].name
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };
  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      },
      props: { className }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions list pos-absolute top-100 left-0 right-0 p-8 bg-secondary mt-mob-s-0">
            {filteredSuggestions.map((suggestion, index) => {
              let suggestClassName;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                suggestClassName = "suggestion-active text-primary";
              }

              return (
                <li
                  className={` d-mob-s-flex p-4 ${
                    suggestClassName ? suggestClassName : ""
                  }`}
                  key={index}
                  onClick={onClick}
                >
                  {suggestion.name}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions pos-absolute left-0 right-0">
            <em className="text-light">No suggestions, you're on your own!</em>
          </div>
        );
      }
    }
    return (
      <div className={`pt-8 pb-24 col ${className ? className : ""}`}>
        <div className="input-group icon-right px-16 pos-relative">
          <input
            type="text"
            onChange={e => onChange(e)}
            onKeyDown={onKeyDown}
            value={userInput}
            className="p-12 border-box w-100 border-radius-4"
          />
          <IconButton className="group-icon">
            <img src={SearchIcon} alt="search" />
          </IconButton>
          <div className="row mx-0">
            <div className="col col-mob-s-16 pos-relative">
              {suggestionsListComponent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavSearchBar;
