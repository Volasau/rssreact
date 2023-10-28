import React, { Component } from 'react';
import './form.css';

interface State {
  searchQuery: string;
  savedSearch: string | null;
}

class Search extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      searchQuery: '',
      savedSearch: null,
    };
  }

  componentDidMount(): void {
    const savedQuery = localStorage.getItem('savedSearchQuery');
    if (savedQuery) {
      this.setState({ searchQuery: savedQuery });
    }
  }

  handleSearch = (): void => {
    if (this.state.searchQuery !== this.state.searchQuery.trim()) {
      this.showSpaceError();
    } else {
      localStorage.setItem('savedSearchQuery', this.state.searchQuery);
      this.setState({ savedSearch: this.state.searchQuery });
    }
  };

  showSpaceError = (): void => {
    alert('The search field must not contain leading or trailing spaces!');
  };

  render(): React.ReactNode {
    return (
      <form className="search">
        <input
          className="seach__input"
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        ></input>
        <button onClick={this.handleSearch} className="search__btn">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
