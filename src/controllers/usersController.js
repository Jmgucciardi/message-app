

import UsersModel from '../models/usersModel';

export function list(req, res, next) {
  UsersModel.find({}).exec()
    .then(pets => {
      return res.json(pets);
    })
    .catch(err => {
      next(err);
    });

}

export function show(req, res, next) {
  UsersModel.findById(req.params.id).exec()
    .then(pets => {
      return res.json(pets);
    })
    .catch(err => {
      next(err);
    });
}

export function remove(request, response, next) {
  UsersModel.findByIdAndRemove(request.params.id).exec()
    .then(deleteEvent => {
      return response.json(deleteEvent);
    })
    .catch(err => {
      next(err);
    });
}

export function update(request, response, next) {
  UsersModel.findById(request.params.id).exec()
    .then(event => {
      event.lastname = request.body.lastname || event.lastname;
      event.firstname = request.body.firstname || event.firstname;
      event.avatar = request.body.avatar || event.avatar;
      event.address = request.body.address || event.address;
      event.phonenumber = request.body.phonenumber || event.phonenumber;
      event.hobbies = request.body.hobbies || event.hobbies;
      event.username = request.body.name || event.username;

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
  const { lastname,firstname,avatar,address,
          phonenumber,hobbies,username } = req.body;

  const user = new UsersModel({
    lastname,
    firstname,
    avatar,
    address,
    phonenumber,
    hobbies,
    username
  });
  user.save()
      .then(savedUser => {
        return res.json(savedUser);
      })
       .catch(err => {
         next(err);
       });
}
