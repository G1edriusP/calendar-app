const exec = require('shell-utils').exec;

const isWindows = process.platform === 'win32' ? true : false;

function run() {
  if (isWindows) {
    exec.execSync(`cd android && gradlew installDebug`);
  } else {
    exec.execSync(`cd android && ./gradlew installDebug`);
  }
}

run();
