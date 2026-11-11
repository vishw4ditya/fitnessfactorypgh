import React, { useEffect } from 'react';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, description, children }) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return <main className="flex-1 relative overflow-x-clip">{children}</main>;
};
