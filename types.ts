
export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  keyPoints: string[];
  curriculum?: string[];
  prerequisites?: string[];
  instructor?: {
    name: string;
    bio: string;
    image?: string;
  };
  hasLiveLab?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}
