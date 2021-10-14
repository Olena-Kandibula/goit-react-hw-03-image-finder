import React, { Component } from 'react';
import PropTypes from 'prop-types';



import s from '../SearchForm/SearchForm.module.css';
import { BiSearchAlt } from 'react-icons/bi';


class SearchForm extends Component {
    
    state = {        
        searchQuery : '',
    }
      

    handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({searchQuery: value});
    
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  handleSubmit = e => {
      e.preventDefault();
      const { searchQuery } = this.state;

    const newSearch = searchQuery.trim().toLowerCase();
    //   console.log(searchQuery)
      if (newSearch === '') {
          alert('Input is empty');
          return;
      }

     this.props.onSubmit(newSearch);
    
    this.reset();
    };
    
    render() {
        return (            
                <form onSubmit={this.handleSubmit}
                    className={s.searchForm}>
                    <button
                        type="submit"
                        className={s.searchFormButton}
                    >
                        <BiSearchAlt size="20" />
                        <span className={s.searchFormButtonLabel}
                        >
                        Search
                        </span>
                    </button>

                    <input
                        className={s.searchFormInput}
                        type="text"
                        autoComplete="off"
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
                        
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        autoFocus
                        placeholder="Search images and photos"
                    />

                </form>

                

            

        );
    }

}

export default SearchForm;

SearchForm.prototypes = {
onSubmit: PropTypes.func,
}