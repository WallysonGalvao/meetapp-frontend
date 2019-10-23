import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, WrapperProfile } from './styles';
import logo from '~/assets/logo.svg';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">
                        <img src={logo} alt="Meetapp" />
                    </Link>
                </nav>
                <div>
                    <WrapperProfile>
                        <strong>{profile.name}</strong>
                        <Link to="/profile">
                            <span>Meu perfil</span>
                        </Link>
                    </WrapperProfile>
                    <button type="button" onClick={handleSignOut}>
                        Sair
                    </button>
                </div>
            </Content>
        </Container>
    );
}
