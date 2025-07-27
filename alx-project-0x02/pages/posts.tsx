import { GetStaticProps } from "next";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allPosts, setAllPosts] = useState(posts);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    const newId = allPosts.length + 1;
    setAllPosts([...allPosts, { id: newId, title: newPost.title, content: newPost.content }]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="grid gap-4">
        {allPosts.map((post) => (
          <PostCard key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.body,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
