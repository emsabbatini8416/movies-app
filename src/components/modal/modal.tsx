import * as React from "react"

import type { ModalProps } from "../../typings/components"
import { StyledModalContainer, StyledModalBackdrop, StyledModalContent } from "./modal.styles"

const Modal = (props: React.PropsWithChildren<ModalProps>) => {
  const { children, onClose } = props

  return(
    <StyledModalContainer>
      <StyledModalBackdrop onClick={onClose} />
      <StyledModalContent>
        {children}
      </StyledModalContent>
    </StyledModalContainer>
  )

}

export default Modal
