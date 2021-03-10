import chrome from 'chrome-aws-lambda';

type MyPlatforms = 'win32' | 'linux' | 'darwin';

const chromeExecPaths = {
  win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  linux: '/usr/bin/google-chrome',
  darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
};

const exePath = chromeExecPaths[process.platform as MyPlatforms];

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
  ignoreHTTPSErrors?: boolean;
}

async function getOptions(isDev: boolean): Promise<Options> {
  let options: Options;

  if (isDev)
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  else
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
      ignoreHTTPSErrors: true,
    };

  return options;
}

// eslint-disable-next-line import/prefer-default-export
export { getOptions };
