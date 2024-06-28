import { ReactNode } from 'react';
import s from './Container.module.scss';

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className={s.container}>
      {children}
    </section>
  )
}

export default Container