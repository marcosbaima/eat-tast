import React from 'react';
import { FiUser } from 'react-icons/fi';

import { HeaderStyle, LinkBtn } from './styles';
import { WhiteButton } from '../../global-styles';

import { isAuthenticated, signOut } from '../../utils/auth';

export default function Header() {
  const HandleLogout = () => {
    signOut();
  }

  return (
  <HeaderStyle>
    <a href="/">
      <img src="https://scontent.ffor27-1.fna.fbcdn.net/v/t1.6435-9/57457036_1180004858833920_2896174865205690368_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=973b4a&_nc_ohc=CYjtkfqRc_8AX8PQ-l0&_nc_ht=scontent.ffor27-1.fna&oh=61b017d8e45e0c93248fb6fc2ab9a865&oe=60FAF87E"  width="60px" alt=""/>
    </a>
    <div> { isAuthenticated() ? <WhiteButton onClick={HandleLogout}>Logout</WhiteButton> :
      <>
      <LinkBtn white={true} href="/session"><FiUser className="icon" size={20}/> Sign in</LinkBtn>
      <LinkBtn href="/">Sign up</LinkBtn>
      </>
    }
    </div>
  </HeaderStyle>
  );
}
