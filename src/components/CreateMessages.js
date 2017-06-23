import React from 'react';

class CreateMessages extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: {
        message: ''
      },
    };
  }

  render() {
    return (
      <div>
      <div>
        <h1>Create Message</h1>
        <form onSubmit={ e => {
          e.preventDefault();
          if (this.props.createMessages) {
            this.props.createMessages(this.state.messages);
          }
        }}>
          <div>
            Message: <input onChange={ e => {
              const messages = {message: e.target.value};
              this.setState({
                messages: Object.assign(this.state.messages,messages)
              });
            }}/>
          </div>
          <button>
          Create
          </button>
        </form>
      </div>
    </div>
    );
  }
}

export default CreateMessages;
