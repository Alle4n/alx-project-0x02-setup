import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => (
  <div className="border p-4 rounded bg-white shadow">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-sm text-gray-600 mb-2">{body}</p>
    <span className="text-xs text-gray-400">User ID: {userId}</span>
  </div>
);

export default PostCard;
