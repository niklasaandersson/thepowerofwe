import React from 'react'
import logo from './logo.png'

function Logo () {
  const styles = {
    imgDiv: { display: 'flex', justifyContent: 'flex-end', width: '100%', padding: '20px' },
    logo: { height: '80px', float: 'right' }
  }

  return (
    <div style={styles.imgDiv}>
      <img style={styles.logo} src={logo} />
    </div>
  )
}

export default Logo
