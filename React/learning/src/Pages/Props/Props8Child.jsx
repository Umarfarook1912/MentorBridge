import React from 'react'

const Props8Child = ({children}) => {
  return (
    <div style={{
      border: '2px dashed #888',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      {children}
    </div>
  )
}

export default Props8Child