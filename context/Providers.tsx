import React, { FC, ReactNode } from 'react'
import { GlobalStateProvider } from '.'

type Props = {
    children: ReactNode
}


const Providers: FC<Props> = ({children}) => {
  return (
    <GlobalStateProvider>{children}</GlobalStateProvider>
  )
}

export default Providers