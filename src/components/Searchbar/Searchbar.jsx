import { Component } from 'react';
import css from './Searchbar.module.css'


class Searchbar extends Component {

    state = {
        query: '',
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
    }

    handleInputChange = (e) => {
        this.setState({ query: e.currentTarget.value })
    }


    render() {
        return (
            <header className={css.searchbar}>
                <form onSubmit={this.handleFormSubmit} className={css.form}>
                    <button type="submit" className={css.button}>
                        <span className={css.button__label}>Search</span>
                    </button>

                    <input
                        onChange={this.handleInputChange}
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;