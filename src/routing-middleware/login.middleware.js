import fetch from '../core/fetch';

async function authenticate() {
  const resp = await fetch('/graphql', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: '{me{id,email}}',
    }),
    credentials: 'include',
  });
  const { data } = await resp.json();
  if (data && data.me) {
    return { redirect: '/' };
  }
  return null;
}

export default authenticate;
