import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="p-6 space-y-4">
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Post
      </button>
      {posts.map((post, i) => (
        <Card key={i} title={post.title} content={post.content} />
      ))}
      {showModal && (
        <PostModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export default Home;