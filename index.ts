import * as cluster from 'cluster'

if (cluster.isMaster) {
  cluster.setupMaster();
  console.log('launching child');
  let worker = cluster.fork();
  setTimeout(()=>console.log("in the parent:", process.pid), 1000);
} else {
  setTimeout(()=>console.log("in the child:", process.pid), 1000);
}
