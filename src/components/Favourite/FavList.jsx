import "./FavList.css";
import FavGame from "./FavGame";
import logo from "../../imgs/logo-fav.svg";
import { useSelector } from "react-redux";

const FavList = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <section className="banner">
        <div className="container banner-container">
          <div className="banner-elem">
            <div className="banner-text">
              <h1>Follow your favourite games</h1>
              <p>
                Follow a game and be notified when the price of one of your
                favourite game drop !
              </p>
            </div>
          </div>
          <div className="banner-elem ">
            {state.favorites.length > 0 ? (
              <div className="fav-list">
                {state.favorites.map((game) => (
                  <FavGame key={game.id} {...game} />
                ))}
              </div>
            ) : (
              <div className="img-container">
                <img className="banner-img" src={logo} alt="banner_img" />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FavList;
