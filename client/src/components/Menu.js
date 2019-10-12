import React from 'react';
import '../App.css';
import MenuButton from './MenuButton';
import Logo from './Logo';

export default function Menu() {
  return (
    <div className="menu-container">
      <Logo />
      <MenuButton value={'New Recipe'} />
      <MenuButton value={'View BrewLog'} />
      <MenuButton value={'Edit Recipes'} />
    </div>
  );
}
