import React from "react";

export type Post = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  posts: Post[];
};

const PostList = React.memo(({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
});

export default PostList;
