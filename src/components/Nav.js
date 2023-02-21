import React, {useState} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import {useDispatch} from 'react-redux';
import {fetchSearch} from '../actions/gameActions';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        e.target.focus()
    };
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    };
    const clearSearch = () => {
        dispatch({type: 'CLEAR_SEARCHED'})
    }
    return (
        <StyledNav>
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo" />
                <h1>Game Box</h1>
            </Logo>
            <form className="search">
                <input type="text" value={textInput} onChange={inputHandler} />
                &nbsp;&nbsp;<button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
padding: 3rem 5rem;
text-align: center;
input{
    width: 30%;
    font-size: 1.5rem;
    padding: 0.4rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
}

button{
    font-size: 2rem;
    border: none;
    padding: 0.5rem, 2rem;
    cursor: pointer;
    background: #1f1a1ac2;
    color: white;
    margin-top: 1rem;
    padding-left:0.5rem;
    padding-right:0.5rem;
    border-redius:30%;

}
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img{
        height: 2rem;
        width: 2rem;
    }
`;
export default Nav;