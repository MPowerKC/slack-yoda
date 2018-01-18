import colors from 'colors';

const exit = (message = null, exitCode = 0) => {
  const msg = message || `Server exiting with code ${exitCode}`;

  if(exitCode === 0)
    console.log(msg)
  else
    console.error(colors.red(msg));

  process.exit(exitCode);
}

export {
  exit
}
