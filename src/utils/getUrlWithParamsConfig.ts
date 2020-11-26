import config from '../config';

function getUrlWithParamsConfig(endPointConfig: string, query: Record<string, unknown>) {
  const url = {
    ...config.client.server,
    ...(config.client.endpoint as any)[endPointConfig].url,
    query: {},
  };
  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      delete query[val];
      return result;
    }
    return acc;
  }, url.pathname);
  url.pathname = pathname;
  url.query = {
    ...query,
  };
  return url;
}

export default getUrlWithParamsConfig;
