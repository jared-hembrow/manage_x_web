'use client'
import React, { FC, ReactNode } from 'react'

type Props = {
    onClose?: (e:React.MouseEvent<HTMLDivElement>) => void
    open: boolean
    children: JSX.Element | JSX.Element[]
}
export type CommonPropsType = {
    className?: string
    children: React.ReactNode
  }

type ModalSubProps = {
    children: ReactNode
}
const Header: FC<ModalSubProps> = ({children}) => {
    return <div className="modal-header">
    {children}</div>
}
const Content: FC<ModalSubProps> = ({children}) => {
    return <div className="modal-body">{children}</div>
}
const Actions: FC<ModalSubProps> = ({children}) => {
    return <div className="modal-footer">{children}</div>
}


const findComponentByDisplayName = (
    children: JSX.Element | JSX.Element[],
    targetDisplayName: string
  ): JSX.Element[] | null => {
    const body: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
        {
            return child.type.name === targetDisplayName ? child : null}
    );
    return body
  };
  
const Modal: FC<Props> = ({onClose,open, children}) => {
    const header = findComponentByDisplayName(children, "Header")
    const content = findComponentByDisplayName(children, "Content")
    const actions = findComponentByDisplayName(children, "Actions")

    const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (onClose) onClose(e)

    }
    console.log("open modal: ",open, open ? "block": "hide")
    if (!open) return null
  return (
    <div className={`modal fade show`} tabIndex={-1} onClick={handleOnClose} aria-labelledby="exampleModalLiveLabel" style={{display: "block"}} aria-modal="true" role="dialog">
    <div className="modal-dialog">
    <div className="modal-content" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
      
        {header}
        {content}
        {actions}
       
      
    </div>
  </div>
</div>
  )
}

export default Object.assign(Modal, {
    Header: Header,
    Content: Content,
    Actions: Actions
})