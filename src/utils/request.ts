import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: Record<string, unknown>): Promise<void> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  return await fetch(uri).then((res) => res.json());
}

export default req;
