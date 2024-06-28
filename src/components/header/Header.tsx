import { Link } from 'react-router-dom';
import Text from '../text/Text';
import LogoIcon from '../icons/logo/LogoIcon';
import LanguageIcon from '../icons/language/LanguageIcon';
import ThemeIcon from '../icons/theme/ThemeIcon';
import BurgerIcon from '../icons/burger/BurgerIcon';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
        <Link to="/" className={s.logoContainer}>
          <LogoIcon />
          <Text type='logo' theme='dark'>White Box</Text>
        </Link>
        <div className={s.controlsContainer}>
          <LanguageIcon />
          <ThemeIcon />
          <BurgerIcon />
        </div>
    </header>
  )
}

export default Header