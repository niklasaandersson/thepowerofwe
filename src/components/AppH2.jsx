import React from 'react'

function AppH2 ({ color, text }) {
  const styles = {
    color: color,
    zIndex: 1
  }
  return (
    <>
      <h2 style={styles}>{text}</h2>
    </>
  )
}

export default AppH2
