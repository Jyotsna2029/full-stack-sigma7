// let a = 'jyotsna';
// console.log(a);


console.log(process.argv);
// we can pass arguments as well with node aBackend.js argument1 arguments2....etc

// Print process info
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);

// Access environment variable
console.log("Environment:", process.env.NODE_ENV || "development");

// Exit after 2 seconds
setTimeout(() => {
  console.log("Exiting...");
  process.exit(0);
}, 2000);

