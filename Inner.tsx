import React, {StaticLifecycle} from 'react'

type Props = {
  message: string
}

type State = {
  upperMessage: string
}

class Inner extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      upperMessage: props.message.toUpperCase()
    }
  }

  static getDerivedStateFromProps = (nextProps: Readonly<Props>, prevState: State): Partial<State> => {
    return {
      upperMessage: nextProps.message.toUpperCase()
    }
  };

  render() {
    const {upperMessage} = this.state;
    return <div>
      <h2>Inner</h2>
      <div>{this.props.message}</div>
      <div>{upperMessage}</div>
    </div>
  }
}

export default Inner;
