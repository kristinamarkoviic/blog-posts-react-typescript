import { FC, useState, ChangeEvent, useContext } from 'react';
//context
import { PostsContext } from '../Posts/context/PostsContext';
//styles
import styles from './SearchInput.module.scss';

const SearchInput: FC = ({ children }) => {
    const [params, setParams] = useState<string>('');

    const { handleSearchPosts } = useContext(PostsContext);

    const inputChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParams(e.target.value);
        if (e.target.value.length < 3) return;
        handleSearchPosts(e.target.value);
    };

    return (
        <>
            <section className={styles.search}>
                <input
                    className={styles.bar}
                    value={params}
                    onChange={inputChangedHandler}
                    placeholder="Search Example: title"
                />
                <button
                    className={styles.button}
                    onClick={() => handleSearchPosts(params)}>
                    Search
                </button>
            </section>
        </>
    );
};

export default SearchInput;
