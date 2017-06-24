function loadMessageError(message) {
  return {
    type: 'MESSAGE_LOAD_ERROR',
    message
  };
}

function loadUserError(message) {
  return {
    type: 'USER_LOAD_ERROR',
    message
  };
}

export function loadUsers() {
  return function (dispatch) {
    fetch("/api/users")
    .then( response => {
      return response.json();
    }).then(vehicles => {
      dispatch(usersLoaded(vehicles));
    })
    .catch(err => {
      dispatch(loadUserError(err));
    });
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

function usersLoaded(users) {
  return {
    type: 'USERS_LOADED',
    value: users
  };
}

function messagesLoaded(message) {
  return {
    type: 'MESSAGES_LOADED',
    value: message
  };
}

function createMessageError(message) {
  return {
    type: 'MESSAGE_CREATE_ERROR',
    message
  };
}

function createUserError(message) {
  return {
    type: 'USER_CREATE_ERROR',
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

export function createUsers(u) {
  return function (dispatch) {
    fetch("/api/users", {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(u)
    }).then(() => dispatch(loadUsers()))
    .catch(err => {
      dispatch(createUserError(err));
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

export function getUsers(id) {
  return function (dispatch) {
    fetch(`api/users/${id}`)
    .then(res => res.json())
    .then(users => {
      dispatch(getUsersDone(users));
    });
  };
}


function getUsersDone(vehicles) {
  return {
    type: 'GET_USERS_DONE',
    value: vehicles
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

function deleteUserError(message) {
  return {
    type: 'USER_DELETE_ERROR',
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

export function deleteUsers(id) {
  return function (dispatch) {
    fetch(`api/users/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': "application/json"},
    })
    .then(() => dispatch(userDeleted()))
    .then(() => dispatch(loadUsers()))
    .catch(err => {
      dispatch(deleteUserError(err));
    });
  };
}

function messageDeleted(message) {
  return {
    type: 'MESSAGE_DELETED',
    value: message
  };
}

function userDeleted(user) {
  return {
    type: 'USER_DELETED',
    value: user
  };
}
