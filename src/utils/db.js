import Dexie from 'dexie';

const dbName = 'todoList';
const dbVersion = 1;

const db = new Dexie(dbName);

db.version(dbVersion).stores({
  todoList: '++id, text, done, created_at',
});

export default db;
