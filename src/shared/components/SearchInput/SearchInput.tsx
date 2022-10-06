import { FC, useState, ChangeEvent } from 'react';
//styles
import styles from './SearchInput.module.scss';

const SearchInput: FC = ({ children }) => {
    const [params, setParams] = useState<string>('');

    const inputChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParams(e.target.value);
    };

    const handleSearch = async (params: string) => {
        if (!params) return;
        setParams('');
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
                    onClick={() => handleSearch(params)}>
                    Search
                </button>
            </section>
        </>
    );
};

export default SearchInput;
