import React, {useEffect} from 'react';
import {loadGames} from '../actions/gameActions';
import {useDispatch, useSelector} from 'react-redux';
import Game from '../components/game';
import GameDetail from '../components/gameDetail';
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {useLocation} from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];
    console.log(typeof pathId);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    const {popular, newGames, upcoming, searched} = useSelector((state) => state.games);
    return (
        <GameList>
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
                { searched.length ? (
                <div>
                <h2>Search Games</h2>

                <Games>
                    {searched.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
                </div>
                ) : ("")}
                <h2>Upcoming Games</h2>

                <Games>
                    {upcoming.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>popular Games</h2>
                <Games>
                    {popular.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
            padding: 5rem 0rem;
        }
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;
export default Home;