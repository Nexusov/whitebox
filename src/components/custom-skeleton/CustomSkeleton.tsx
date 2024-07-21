import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import sg from './CustomSkeleton.module.scss';
import { gameIds } from '../../config';
import { useMediaQuery } from 'react-responsive';

type CustomSkeletonProps = {
  type: 'games';
}

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({ type }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'games':
        return <GamesSkeleton />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderSkeleton()}
    </>
  );
};

const GamesSkeleton: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  return (
    <>
      {gameIds.map((_, index) => (
        <div key={index} className={sg.cardItem}>
          <Skeleton className={sg.poster} baseColor='#dfdede' highlightColor='#d1d1d1' />
          <div className={sg.infoContainer}>
            <div className={sg.mainInfo}>
              <Skeleton className={sg.gameTitle} baseColor='#dfdede' highlightColor='#d1d1d1' />
              <Skeleton className={sg.gameDate} baseColor='#dfdede' highlightColor='#d1d1d1' />
            </div>
            <div className={sg.ratingContainer}>
              <Skeleton className={sg.ratingText} baseColor='#dfdede' highlightColor='#d1d1d1' />
              <Skeleton className={sg.ratingCount} baseColor='#dfdede' highlightColor='#d1d1d1' />
            </div>
          </div>
          <div className={sg.buttonsContainer}>
            <Skeleton className={sg.buttonBuy} baseColor='#dfdede' highlightColor='#d1d1d1' />
            {!isMobile && <Skeleton className={sg.buttonPlay} baseColor='#dfdede' highlightColor='#d1d1d1' />}
          </div>
        </div>
      ))}
    </>
  );
};

export default CustomSkeleton;
