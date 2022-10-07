import { FC } from 'react';
//components
import { PageLayout } from '../PageLayout';
//styles
import styles from './Posts.module.scss';

const Posts: FC = ({ children }) => {
    return <PageLayout content={<h1>Posts page (Home)</h1>} />;
};

export default Posts;
