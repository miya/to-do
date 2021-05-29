const dbName = 'todo';
const version = 1;

const openReq = indexedDB.open(dbName, version);

openReq.onsuccess = () => {
  console.log('ok');
};

export default dbName;
