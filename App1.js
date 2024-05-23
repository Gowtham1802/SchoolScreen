import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/components/app/store';
import PostsList from './src/components/features/posts/PostsList';
import AddPostForm from './src/components/features/posts/AddPostForm';
// import Counter from './src/components/features/counterApp/Counter'; // Ensure the path is correct

const App1 = () => {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
    </Provider>
  );
};

export default App1;
