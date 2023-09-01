import React from 'react';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
    },
    storeName: {
      fontSize: '24px',
    },
    cartIcon: {
      fontSize: '24px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.storeName}>Mi Tienda</div>
      <div style={styles.cartIcon} onClick={() => alert('Carrito clickeado!')}>
        🛒
      </div>
    </div>
  );
}

export default Navbar;
