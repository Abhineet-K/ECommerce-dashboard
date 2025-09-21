import { IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';

const FavoriteButton = () => {
  const location = useLocation();
  const { favorites, toggleFavorite } = useAppContext();

  const isFavorite = favorites.includes(location.pathname);

  const handleToggle = () => {
    toggleFavorite(location.pathname);
  };

  return (
    <IconButton
      onClick={handleToggle}
      sx={{
        color: isFavorite ? 'warning.main' : 'text.secondary',
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
    >
      {isFavorite ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="theme-contrast--icon"><path id="filled-star" d="M14.385 11.539a.63.63 0 0 0-.198.616l1.056 4.574a.624.624 0 0 1-.929.679l-3.992-2.422a.62.62 0 0 0-.644 0l-3.992 2.422a.626.626 0 0 1-.929-.68l1.056-4.573a.63.63 0 0 0-.198-.616L2.09 8.465a.625.625 0 0 1 .354-1.1l4.646-.401a.63.63 0 0 0 .52-.381l1.816-4.325a.625.625 0 0 1 1.146 0l1.815 4.325a.62.62 0 0 0 .521.381l4.646.402a.625.625 0 0 1 .354 1.099z" fill="#dfae32ff"/><path id="icon--border" d="M18.688 7.6a1.25 1.25 0 0 0-1.08-.859l-4.64-.4-1.818-4.325a1.246 1.246 0 0 0-2.3 0L7.037 6.341l-4.646.403a1.25 1.25 0 0 0-.711 2.192l3.524 3.08-1.056 4.573a1.25 1.25 0 0 0 1.862 1.355l3.985-2.422 3.993 2.422a1.25 1.25 0 0 0 1.862-1.355l-1.056-4.578 3.524-3.075a1.25 1.25 0 0 0 .37-1.335m-1.19.391-3.523 3.075a1.25 1.25 0 0 0-.397 1.228l1.059 4.581-3.99-2.422a1.24 1.24 0 0 0-1.292 0L5.37 16.875l1.052-4.578a1.25 1.25 0 0 0-.397-1.228L2.5 7.996V7.99l4.644-.402a1.25 1.25 0 0 0 1.043-.761L10 2.506l1.813 4.32a1.25 1.25 0 0 0 1.042.761l4.645.402v.006z" /></svg> : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="theme-contrast--icon"><path id="icon-theme--background" d="M14.385 11.539a.63.63 0 0 0-.198.616l1.056 4.574a.624.624 0 0 1-.929.679l-3.992-2.422a.62.62 0 0 0-.644 0l-3.992 2.422a.626.626 0 0 1-.929-.68l1.056-4.573a.63.63 0 0 0-.198-.616L2.09 8.465a.625.625 0 0 1 .354-1.1l4.646-.401a.63.63 0 0 0 .52-.381l1.816-4.325a.625.625 0 0 1 1.146 0l1.815 4.325a.62.62 0 0 0 .521.381l4.646.402a.625.625 0 0 1 .354 1.099z" /><path id="icon--border" d="M18.688 7.6a1.25 1.25 0 0 0-1.08-.859l-4.64-.4-1.818-4.325a1.246 1.246 0 0 0-2.3 0L7.037 6.341l-4.646.403a1.25 1.25 0 0 0-.711 2.192l3.524 3.08-1.056 4.573a1.25 1.25 0 0 0 1.862 1.355l3.985-2.422 3.993 2.422a1.25 1.25 0 0 0 1.862-1.355l-1.056-4.578 3.524-3.075a1.25 1.25 0 0 0 .37-1.335m-1.19.391-3.523 3.075a1.25 1.25 0 0 0-.397 1.228l1.059 4.581-3.99-2.422a1.24 1.24 0 0 0-1.292 0L5.37 16.875l1.052-4.578a1.25 1.25 0 0 0-.397-1.228L2.5 7.996V7.99l4.644-.402a1.25 1.25 0 0 0 1.043-.761L10 2.506l1.813 4.32a1.25 1.25 0 0 0 1.042.761l4.645.402v.006z" /></svg>}
    </IconButton>
  );
};

export default FavoriteButton;