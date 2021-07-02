import * as React from 'react'

interface QbFormJs {
  buildHtml (): string
  setProperty (element: string | string[], property: string, value: any): void
  getProperty (element: string | string[], property: string): any
  setCallback (elementPath: string | string[], cbName: string, cb: (elementPath: string[], cbName: string, input: object | null) => void): void
}

// interface WindowEx { [index: string]: (parentId: string, schema: object) => qbFormJs }
interface WindowEx { [index: string]: any }
type QbFormProps = {
  Schema: object
  Theme?: string
}

type QbFormStates = {
}

export default class QbForm extends React.Component<QbFormProps, QbFormStates> {

  qbFormJs: QbFormJs

  constructor (props: QbFormProps) {
    super(props)
    this.state = { }
    let windowEx = window as unknown as WindowEx
    this.qbFormJs = new windowEx['QbForm'](this.props.Schema, this.props.Theme || 'default')
  }

  // ---------------------------------------------------------
  setProperty (elementPath: string | string[], property: string, value: any): void {
  // ---------------------------------------------------------
    this.qbFormJs.setProperty(elementPath, property, value)
  }

  // ---------------------------------------------------------
  getProperty (elementPath: string | string[], property: string): any {
  // ---------------------------------------------------------
    const result = this.qbFormJs.getProperty(elementPath, property)
    return result
  }

  // ---------------------------------------------------------
  setCallback (elementPath: string | string[], cbName: string, cb: (elementPath: string[], cbName: string, input: object | null) => void): void {
  // ---------------------------------------------------------
    this.qbFormJs.setCallback(elementPath, cbName, cb)
  }

  render () {
    return(<div dangerouslySetInnerHTML={ { __html: this.qbFormJs.buildHtml() } }/>)
  }
}
