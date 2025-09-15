import { baseURL } from '../utils/baseUrl';

export async function getVisasApi() {
  const res = await fetch(`${baseURL}/api/visas`);

  if (!res) {
    const err = await res.json();
    throw new Error(err.message);
  }

  const data = await res.json();

  return data;
}

export async function getVisaApi(slug) {
  const res = await fetch(`${baseURL}/api/visas/${slug}`);

  if (!res) {
    const err = await res.json();
    throw new Error(err.message);
  }

  const data = await res.json();

  return data;
}
