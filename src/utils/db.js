import Dexie from 'dexie';

const dbName = 'todoList';
const dbVersion = 1;
export default class DB {

  constructor() {
    this.db = new Dexie(dbName);

    this.db.version(dbVersion).stores({
      todoList: '++id, text, done, created_at',
    });
  }

  async getTodoList() {
    return await this.db.todoList.toArray()
  }

  async add(value) {
    await this.db.todoList.add(value);
  }

  update(id, key, value) {
    this.db.todoList.update(id, { [key]: value });
  }

  delete(id) {
    this.db.todoList.delete(id);
  };
};
