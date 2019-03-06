import React from "react";

export default class GamepadItem extends React.Component<any, any> {
  axisStyle(n: number) {
    return {
      opacity: Math.abs(n) + 0.3
    }
  }

  buttonStyle(id: any) {
    var val = this.buttonValue(id);
    return {
      opacity: Math.abs(val) + 0.3,
      border: this.buttonPressed(id) ? '1px solid #888' : '1px solid transparent'
    }
  }

  buttonValue(b: any) {
    return (typeof (b) == 'number') ? b : b.value;
  }

  buttonPressed(b: any) {
    return (typeof (b) == 'number') ? b > 0.1 : b.pressed
  }

  mappingString(mapping: GamepadMappingType) {
    return mapping || '[none]';
  }

  render() {
    var gamepad: (Gamepad | null) = this.props.gamepad;
    if (gamepad && gamepad as Gamepad) {
      return (
        <div>
          <h2 className="inactive">
            <span className="icon">{this.props.index + 1} </span>
            <span>n/a</span>
          </h2>

          <div className="info">
            <ul>
              <li className="large"><label>TIMESTAMP</label>
                <span className="value">{Math.round(gamepad.timestamp)}</span>
              </li>
              <li>
                <label>INDEX</label>
                <span className="value">{gamepad.index}</span>
              </li>
              <li className="med">
                <label>MAPPING</label>
                <span className="value">{this.mappingString(gamepad.mapping)}</span>
              </li>
            </ul>
          </div>
          <div className="axes">
            {
              gamepad.axes.map(axis =>
                <ul>
                  <li style={this.axisStyle(axis)}>
                    <label>AXIS {0}</label>
                    <span className="value">{axis}</span>
                  </li>
                </ul>
              )
            }
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h2 className="active">
            <span className="icon">{this.props.index + 1} </span>
            <span>n/a</span>
          </h2 >
        </div >
      )
    }
  }
}