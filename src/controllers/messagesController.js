/*
  Here is where the heavy lifting for the backend will take place. I create all
  the methods for interacting with the data on the back end here. 
*/

import MessagesModel from '../models/MessagesModel';

export function list(req, res, next) {
  MessagesModel.find({}).exec()
    .then(messages => {
      return res.json(messages);
    })
    .catch(err => {
      next(err);
    });

}

export function show(req, res, next) {
  MessagesModel.findById(req.params.id).exec()
    .then(messages => {
      return res.json(messages);
    })
    .catch(err => {
      next(err);
    });
}

export function remove(request, response, next) {
  MessagesModel.findByIdAndRemove(request.params.id).exec()
    .then(deleteEvent => {
      return response.json(deleteEvent);
    })
    .catch(err => {
      next(err);
    });
}



export function update(request, response, next) {
  MessagesModel.findById(request.params.id).exec()
    .then(event => {
      event.message = request.body.message || event.message;

      event.save()
      .then(updatedEvent => {
        return response.json(updatedEvent);
      });
    })
    .catch(err => {
      next(err);
    });
}

export function create(req, res, next) {
  const {message} = req.body;
  const messages = new MessagesModel({
    message
  });
  messages.save()
      .then(savedMessage => {
        return res.json(savedMessage);
      })
       .catch(err => {
         next(err);
       });
}
