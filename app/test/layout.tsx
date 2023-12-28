import React, { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const layout: FC<Props> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default layout