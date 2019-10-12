import React from 'react';

export default function MenuButton(props) {
  return (
    <button className="menu-btn" onClick={() => alert('KUKEN')}>
      {props.value}
    </button>
  );
}
