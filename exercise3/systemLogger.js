const os = require("os");
const fs = require("fs");

// Function to collect system info
function logSystemInfo() {
    const time = new Date().toLocaleString();
    const cpuInfo = os.cpus()[0].model;
    const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2); // GB
    const platform = os.platform();
    const logData = `
Time:${time}
Platform: ${platform}
CPU: ${cpuInfo}
Total Memory: ${totalMemory} GB
`;

    fs.appendFile("systemInfo.log", logData, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        }
    });
}

// Log every 5 seconds
setInterval(logSystemInfo, 5000);

console.log("System information logging started...");