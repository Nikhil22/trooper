import fetch from '../core/fetch';

async function loadSettingsData () {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{user{id,email,profile}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    return data;
};

export default loadSettingsData;
