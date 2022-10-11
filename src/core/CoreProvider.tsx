import { ReactQueryProvider } from './root/components/ReactQueryProvider';
import { combineContextProviders } from './root/utils';
import { PostsContextProvider } from 'shared/components/Posts/context/providers/PostsContextProvider';

const providers = [ReactQueryProvider, PostsContextProvider];

const CoreProvider = combineContextProviders(...providers);

export default CoreProvider;
