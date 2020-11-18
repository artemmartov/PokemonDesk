import config from '../config';

function getUrlWithParamsConfig(endPointConfig: string, query: Record<string, unknown>) {
  const url = {
    ...config.client.server,
    ...(config.client.endpoint as any)[endPointConfig].url,
    query,
  };

  return url;
}

export default getUrlWithParamsConfig;
