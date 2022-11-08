import { FC } from 'react';
//components
import { PostsList } from '../PostsList';
import { SearchInput } from 'shared/components/SearchInput';
//styles
import styles from './PostsFilter.module.scss';

const PostsFilter: FC = () => {
    return (
        <section className={styles.filterPage}>
            <SearchInput />
            <PostsList postsToShow={6} />
        </section>
    );
};

export default PostsFilter;
