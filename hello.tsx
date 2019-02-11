import React, {ChangeEvent} from 'react'
import Inner from './Inner';

type State = {
  message: string
}

class Hello extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: ""
    }
  }

  onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target).value;
    this.setState({
      message: value
    })
  };

  render() {
    return <div>
      <h1>Hello React</h1>
      <input type="text" value={this.state.message} onChange={this.onTextChange}/>
      <Inner message={this.state.message}/>
    </div>
  }
}

export default Hello
