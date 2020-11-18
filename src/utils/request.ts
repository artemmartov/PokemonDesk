import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, query: Record<string, unknown>) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  console.log('URI', uri);

  return await fetch(uri).then((res) => res.json());
}

export default req;
