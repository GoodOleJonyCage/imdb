import './Header.css'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img src="https://seeklogo.com/images/I/imdb-logo-AF81176825-seeklogo.com.jpg" />
                <MenuIcon />
                <span>Menu</span>
            </div>
            <div className="header-center">
                <select className="form-control">
                    <option>All</option>
                    <option>All2</option>
                </select>
                <input type="text" className="form-control"></input>
                <button>
                    <SearchIcon fontSize="large" />
                </button>
            </div>
            <div className="header-right">
                <span >IMDBPro</span>
                <span>Watchlist</span>
                <span>Sign In</span>
            </div>
        </div>
    );
}

