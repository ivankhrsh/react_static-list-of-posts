import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';
import { postsPrepared } from './helpers';

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={postsPrepared} />
    </div>
  </section>
);