import React from 'react';
import './navbar.css';
const Navbar = () => {
  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products',
      id: 'product',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ],
    },
    { name: 'Contact Us', id: 'contact' },
  ];
  return (
    <>
      <header>
        <h1>Shopkart</h1>
        <ul className='header__list'>
          <li className='header__list-item'>Wishlist (0)</li>
          <li className='header__list-item'>Bag (0)</li>
        </ul>
      </header>

      <div className='horizontal-line'></div>

      <nav className='navbar'>
        <ul>
          {navbar.map((item) => (
            <li key={item.id}>
              {item.name}
              {/* {item.child && (
                <ul>
                  {item.child.map((childItem) => (
                    <li key={childItem.id}>{childItem.name}</li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
