import { Component } from 'react'

interface ConfirmModalProps {
  noLabel: string,
  yesLabel: string,
  onHide: () => void,
}

interface MaxwellModalProps {
  onHide: () => void,
}

interface AlertModalProps {
  onHide: () => void,
  yesLabel: string
  yesButton: () => void
}

interface ContentModalProps {
  onHide: () => void,
  isOpen: boolean,
  onShow: () => void,
  customClassName: string,
  shouldCloseOnOverlayClick: boolean
}

export class ConfirmModal extends Component<ConfirmModalProps, undefined> { }
export class MaxwellModal extends Component<MaxwellModalProps, undefined> { }
export class AlterModal extends Component<AlterModalProps, undefined> { }
export class ContentModal extends Component<ContentModalProps, undefined> { }