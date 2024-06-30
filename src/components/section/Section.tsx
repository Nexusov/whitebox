import { ReactNode } from 'react';
import s from './Section.module.scss';

type SectionProps = {
  children: ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className={s.container}>
      {children}
    </section>
  )
}

export default Section