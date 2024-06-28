import { ReactNode } from "react";
import Header from "../header/Header"
import s from './PageLayout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.container}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default PageLayout