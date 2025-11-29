export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'Consulting' | 'Staffing' | 'Training' | 'Development' | 'Testing';
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
