import Dexie from 'dexie';

export default class DB {

  constructor(dbName) {
    this.db = new Dexie(dbName);
    this.db.version(1).stores({
      todoList: '++id, text, done, created_at',
    });
  }

  async get() {
    return await this.db.todoList.toArray();
  }

  async add(value) {
    await this.db.todoList.add(value);
  }

  update(id, key, value) {
    this.db.todoList.update(id, { [key]: value });
  }

  delete(id) {
    this.db.todoList.delete(id);
  }

}
