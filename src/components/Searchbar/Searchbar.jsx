import { useState } from 'react';
import css from './Searchbar.module.css'
import { toast } from 'react-toastify';


const Searchbar = ({onSubmit}) => {

    // state = {
    //     value: '',
    // }

    const [value, setValue] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === '') {
            toast.error('Enter something for search')
            return;
        }
        onSubmit(value);
    }

    const handleInputChange = (e) => {
        // this.setState({ value: e.target.value })
        setValue(e.target.value)
    }


    return (
        <header className={css.searchbar}>
            <form onSubmit={handleFormSubmit} className={css.form}>
                <button type="submit" className={css.button}>
                    <span className={css.button__label}>Search</span>
                </button>

                <input
                    onChange={handleInputChange}
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

export default Searchbar;