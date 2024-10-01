import React from 'react'

import './globals.css'

type Props = {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}



export default layout