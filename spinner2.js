const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ']
let startTime = 0;

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
    }, startTime);
      startTime += 200 // saves new time after each character iteration
  };

// line break at the end
setTimeout(() => {
  process.stdout.write("\n");
}, startTime);