import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }
  
  render() {
    return (
      <div>
        {this.state.editMode
          ? <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.profileStatus} />
          : <span onClick={this.activateEditMode.bind(this)}>{this.props.profileStatus}</span>}
      </div >
    )
  }
}

export default ProfileStatus