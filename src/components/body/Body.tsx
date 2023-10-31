import React, { Component } from 'react';
import './body.css';
import Card from '../card/Card';
import ApiService from '../../Api/fetch';
import Loader from '../loader/Loader';

interface State {
  data: Array<{
    name: string;
    climate: string;
    terrain: string;
    population: string;
  }>;
  isLoading: boolean;
  noResults: boolean;
}

class Body extends Component<object, State> {
  constructor(props: object | Readonly<object>) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      noResults: false,
    };
  }

  componentDidMount() {
    const savedQuery = localStorage.getItem('savedSearchQuery');
    if (savedQuery) {
      this.getSearch(savedQuery);
    } else {
      this.getSearch('');
    }
  }

  getSearch = (searchQuery: string) => {
    this.setState({ isLoading: true, noResults: false });

    ApiService.getPlanets(searchQuery)
      .then((data) => {
        this.setState({
          isLoading: false,
          data: data,
          noResults: data.length === 0,
        });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.error('Error data:', error);
      });
  };

  render(): React.ReactNode {
    const { isLoading, noResults } = this.state;
    return (
      <div className="body__container">
        {isLoading ? (
          <div className="body__loader">
            <Loader />
          </div>
        ) : noResults ? (
          <div className="body__no-results">Nothing found</div>
        ) : (
          this.state.data.map(
            (
              item: {
                name: string;
                climate: string;
                terrain: string;
                population: string;
              },
              index: React.Key | null | undefined
            ) => (
              <Card
                key={index}
                name={item.name}
                climate={item.climate}
                terrain={item.terrain}
                population={item.population}
              />
            )
          )
        )}
      </div>
    );
  }
}

export default Body;
