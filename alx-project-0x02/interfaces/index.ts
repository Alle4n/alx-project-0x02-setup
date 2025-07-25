export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
    isOpen: boolean;
  onSubmit: (post: { title: string; content: string }) => void;
  onClose: () => void;
}