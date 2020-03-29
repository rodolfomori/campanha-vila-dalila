import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';
import Menu from '../Menu';
import {
  Container,
  Content,
  Profile,
  IconBarOpen,
  Home,
  IconBar,
  AsideMenu,
} from './styles';

export default function Header() {
  const admin = useSelector(state => state.user.profile.admin);
  const dispatch = useDispatch();

  const { profile } = useSelector(state => state.user);
  const [open, setOpen] = useState(false);

  function handleSignOut() {
    setOpen(false);
    dispatch(signOut());
  }

  const closeMenu = state => {
    if (!state) {
      setOpen(state);
    }
  };

  return (
    <Container>
      <AsideMenu isOpen={open} closeCallback={() => setOpen(false)}>
        <Menu onClicked={e => closeMenu(e)} />
      </AsideMenu>

      {open ? (
        <IconBarOpen onClick={() => setOpen(!open)} />
      ) : (
        <IconBar onClick={() => setOpen(!open)} />
      )}

      <Content elevation={20}>
        <aside>
          <Home />
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
