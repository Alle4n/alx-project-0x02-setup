import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, id }) => (
  <div className="border p-4 rounded bg-white shadow">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-sm text-gray-600 mb-2">{content}</p>
    <span className="text-xs text-gray-400">Post ID: {id}</span>
  </div>
);

export default PostCard;