import { GetStaticProps } from "next";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.body, 
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
