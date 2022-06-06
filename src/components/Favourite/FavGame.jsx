import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromFav } from "../../store/actions";

const FavGame = ({ game }) => {
  const dispatch = useDispatch();

  const saving = Math.round(
    100 - 100 * (parseFloat(game.newPrice) / parseFloat(game.price))
  );

  return (
    <div className="fav-row">
      <Link
        className="fav-card"
        to={{
          pathname: `/game/${game.id}`,
        }}
        state={{ game: game }}
      >
        <span
          className="fav-thumb"
          style={{ backgroundImage: `url(${game.info.thumb})` }}
        ></span>
        <div className="game-info-container">
          <div className="game-info">
            <p>{game.title}</p>
          </div>
          <div className="game-price-card">
            <div className="game-savings">
              {saving > 0 && <p>-{saving} %</p>}
            </div>
          </div>
        </div>
      </Link>
      <div
        className="remove-btn"
        onClick={() => {
          dispatch(removeFromFav(game));
        }}
      >
        <MdClose />
      </div>
    </div>
  );
};

export default FavGame;
