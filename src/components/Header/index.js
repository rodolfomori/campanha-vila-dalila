import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  Profile,
  Button,
  IconBarOpen,
  Home,
  IconBar,
  IconBack,
  LinkStyle,
  Menu,
} from './styles';

import logo from '../../assets/vila-dalila-logo.svg';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const admin = useSelector(state => state.user.profile.admin);
  const dispatch = useDispatch();

  const { profile } = useSelector(state => state.user);
  const [open, setOpen] = useState(false);

  function handleSignOut() {
    setOpen(false);
    dispatch(signOut());
  }

  return (
    <Container>
      <Menu isOpen={open} closeCallback={() => setOpen(false)}>
        <div className="my-menu-content">
          <ul style={{ marginTop: '50px' }}>
            <li>
              <LinkStyle to="/" onClick={() => setOpen(false)}>
                Home
              </LinkStyle>
            </li>
            <li>
              <LinkStyle to="/assistance" onClick={() => setOpen(false)}>
                Assistência
              </LinkStyle>
            </li>
            <li>
              <LinkStyle to="/territories" onClick={() => setOpen(false)}>
                Territórios
              </LinkStyle>
            </li>
            <li>
              <LinkStyle to="/groups" onClick={() => setOpen(false)}>
                Grupos
              </LinkStyle>
            </li>

            {admin && (
              <li>
                <LinkStyle to="/settings" onClick={() => setOpen(false)}>
                  Configurações
                </LinkStyle>
              </li>
            )}

            <li>
              <LinkStyle to="/profile" onClick={() => setOpen(false)}>
                Meu Perfil
              </LinkStyle>
            </li>
            <li>
              <LinkStyle
                to="/profile"
                onClick={handleSignOut}
                style={{
                  position: 'fixed',
                  bottom: '20px',
                  color: '#B22222',
                  fontSize: '30px',
                  textDecoration: 'none',
                }}
              >
                Sair
              </LinkStyle>
            </li>
          </ul>
        </div>
        <IconBack onClick={() => setOpen(false)} />
      </Menu>
      <Button onClick={() => setOpen(!open)}>
        {open ? <IconBarOpen /> : <IconBar />}
      </Button>

      <Content>
        <aside>
          <Home>
            <div>
              <Link to="/">
                <img src={logo} alt="logo" style={{ width: '50px' }} />
              </Link>
            </div>
          </Home>
        </aside>
        <nav>
          <Link to="/assistance">Assistência</Link>
        </nav>
        <nav>
          <Link to="/groups">Grupos</Link>
        </nav>
        <nav>
          <Link to="/territories">Territórios</Link>
        </nav>
        {admin && (
          <nav>
            <Link to="/settings">Configurações</Link>
          </nav>
        )}

        <aside>
          <Profile>
            <div>
              <strong>Olá {profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
              <Link to="/" onClick={handleSignOut}>
                Sair
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
