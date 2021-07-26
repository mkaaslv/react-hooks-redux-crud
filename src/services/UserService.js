import http from "../http-common";

const getAll = () => {
  return http.get("/users");
};

const getOverAll = () => {
    return http.get("/admin/users");
};

const getAllDeleted = () => {
    return http.get("/admin/users/deleted");
};

const get = id => {
  return http.get(`/users/${id}`);
};

const create = data => {
  return http.post("/users", data);
};

const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const remove = id => {
  return http.delete(`/users/${id}`);
};

const removeAll = () => {
  return http.delete(`/users`);
};

const findByEmail = email => {
  return http.get(`/users?email=${email}`);
};

const findByUsername = username => {
    return http.get(`/users?username=${username}`);
  };

const UserService = {
  getAll,
  getOverAll,
  getAllDeleted,
  get,
  create,
  update,
  remove,
  removeAll,
  findByEmail,
  findByUsername
};

export default UserService;
