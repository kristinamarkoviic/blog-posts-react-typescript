import { FC } from 'react';
//components
import { PageLayout } from '../PageLayout';
import { PostsFilter } from './components/PostsFilter';

const Posts: FC = (props) => {
    return <PageLayout content={<PostsFilter />} />;
};

export default Posts;
