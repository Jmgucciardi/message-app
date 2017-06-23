function loadMessageError(message) {
  return {
    type: 'MESSAGE_LOAD_ERROR',
    message
  };
}

export function loadMessages() {
  return function (dispatch) {
    fetch("/api/messages")
    .then( response => {
      return response.json();
    }).then(messages => {
      dispatch(messagesLoaded(messages));
    })
    .catch(err => {
      dispatch(loadMessageError(err));
    });
  };
}

function messagesLoaded(users) {
  return {
    type: 'MESSAGES_LOADED',
    value: users
  };
}

function createMessageError(message) {
  return {
    type: 'MESSAGE_CREATE_ERROR',
    message
  };
}

export function createMessages(m) {
  return function (dispatch) {
    fetch("/api/messages", {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(m)
    }).then(() => dispatch(loadMessages()))
    .catch(err => {
      dispatch(createMessageError(err));
    });
  };
}

export function getMessages(id) {
  return function (dispatch) {
    fetch(`api/messages/${id}`)
    .then(res => res.json())
    .then(messages => {
      dispatch(getMessagesDone(messages));
    });
  };
}

function getMessagesDone(vehicles) {
  return {
    type: 'GET_MESSAGES_DONE',
    value: vehicles
  };
}

function deleteMessageError(message) {
  return {
    type: 'MESSAGE_DELETE_ERROR',
    message
  };
}

export function deleteMessages(id) {
  return function (dispatch) {
    fetch(`api/messages/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': "application/json"},
    })
    .then(() => dispatch(messageDeleted()))
    .then(() => dispatch(loadMessages()))
    .catch(err => {
      dispatch(deleteMessageError(err));
    });
  };
}

function messageDeleted(message) {
  return {
    type: 'MESSAGE_DELETED',
    value: message
  };
}
