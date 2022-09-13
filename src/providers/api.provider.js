const defaultErrorText = 'Can not retrieve data. Try again.';
const baseUrl = process.env.API_URL;

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
    throw new Error(defaultErrorText);
  } catch (err) {
    throw new Error(defaultErrorText);
  }
}

export async function getPosts() {
  return getData(`${baseUrl}/posts`);
}

export async function getPostById(id) {
  return getData(`${baseUrl}/posts/${id}`);
}
