export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
    isOpen: boolean;
  onSubmit: (post: { title: string; content: string }) => void;
  onClose: () => void;
}

export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
}
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  content: string;
}
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}