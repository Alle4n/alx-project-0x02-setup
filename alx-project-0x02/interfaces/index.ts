export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onSubmit: (post: { title: string; content: string }) => void;
  onClose: () => void;
}