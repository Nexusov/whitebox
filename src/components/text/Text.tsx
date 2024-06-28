import { ReactNode } from "react";
import s from './Text.module.scss';

interface TextProps {
  type: 'logo' | 'title' | 'subtitle' | 'description' | 'count' | 'default';
  theme: 'dark' | 'light';
  children: ReactNode;
}

const Text: React.FC<TextProps> = ({ type, theme, children }) => {
  const textStyle = `${s.text} ${s[`text--${type}`]} ${s[theme]}`;

  switch (type) {
    case 'logo':
      return <h1 className={textStyle}>{children}</h1>;
    case 'title':
      return <h1 className={textStyle}>{children}</h1>;
    case 'subtitle':
      return <h2 className={textStyle}>{children}</h2>;
    case 'description':
      return <p className={textStyle}>{children}</p>;
    case 'count':
      return <p className={textStyle}>{children}</p>;
    case 'default':
      return <p className={textStyle}>{children}</p>;
    default:
      return <p className={textStyle}>{children}</p>;
  }
};

export default Text;
