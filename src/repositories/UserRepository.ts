const users = ["Diego", "Felipe", "Luciana", "Alessandra", "Robson"];

export function getusers() {
  return users;
}

export function addUser(user) {
  users.push(user);
}
