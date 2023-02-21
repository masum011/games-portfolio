import React from 'react';


import styled from 'styled-components';
import {motion} from 'framer-motion';
import {loadDetails} from '../actions/gameDetailAction';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {smallImage} from '../util';


const Game = ({name, released, id, image}) => {
    const stringPathId = id.toString();
    const dispatch = useDispatch();
    const detailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetails(id));
    };
    return (
        <SyledGame layoutId={stringPathId} onClick={detailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title {stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image,640)} alt={name} />
            </Link>
        </SyledGame>
    );
};

const SyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;
export default Game;