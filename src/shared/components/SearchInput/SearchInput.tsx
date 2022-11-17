import { FC, useState, ChangeEvent, useContext, useCallback } from 'react';
//context
import { PostsContext } from '../Posts/context/PostsContext';
//styles
import styles from './SearchInput.module.scss';

const SearchInput: FC = () => {
    const [params, setParams] = useState<string>('');
    const { handleSearchPosts } = useContext(PostsContext);

    const inputChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParams(e.target.value);
        if (e.target.value.length === 0) {
            handleSearchPosts(e.target.value);
        }
    };

    const handleClick = useCallback(() => {
        handleSearchPosts(params);
    }, [params]);

    return (
        <section className={styles.search}>
            <input
                className={styles.bar}
                value={params}
                onChange={inputChangedHandler}
                placeholder="Search Example: title"
            />
            <button className={styles.button} onClick={handleClick}>
                Search
            </button>
        </section>
    );
};

export default SearchInput;
