export interface EmailProps {
  to: string;
  subject: string;
  html: string;
}

export interface VerifyEmailProps {
  email: string;
  userId: string;
}

export interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

