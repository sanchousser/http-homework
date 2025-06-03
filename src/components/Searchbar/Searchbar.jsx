import { Component } from 'react';
import css from './Searchbar.module.css'
import { toast } from 'react-toastify';


class Searchbar extends Component {

    state = {
        value: '',
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if(this.state.value.trim() === '') {
            toast.error('Enter something for search')
            return;
        }
        this.props.onSubmit(this.state.value);
    }

    handleInputChange = (e) => {
        this.setState({ value: e.target.value })
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