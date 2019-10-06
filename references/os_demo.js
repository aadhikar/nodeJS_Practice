const os =require('os');

let printMe  = (msg) => console.log(msg);

// Platform
printMe(os.platform());

// CPU Arch
printMe(os.arch());

// CPU Core Info
printMe(os.cpus());

// Free memory
printMe(os.freemem());

// Total memory
printMe(os.totalmem());

// Home dir
printMe(os.homedir());

// Uptime
printMe(os.uptime());

printMe(os.getPriority());