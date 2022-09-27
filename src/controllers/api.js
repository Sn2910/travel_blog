const apiHost = "https://cdn.contentful.com";
const apiHost2 = "http://localhost:3000";

const getAsset = async () => {
  const url = `${apiHost2}/api/assets`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Assets");
  console.log(result);
  return result;
};

const getDestinations = async () => {
  const url = `${apiHost2}/api/destinations`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Destinations");
  console.log(result);
  return result;
};
const getDestinationsById = async (id) => {
  const url = `${apiHost2}/api/destinations/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("DestinationsById");
  console.log(result);
  return result;
};
const postDestination = async (destination) => {
  const url = `${apiHost2}/api/destinations`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(destination),
  });
  if (response.ok) {
    return getDestinations();
  }
};
const getBlogs = async () => {
  const url = `${apiHost2}/api/blog`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Blogs");
  console.log(result);
  return result;
};

async function getBlogByID() {
  const url = `${apiHost2}/api/blog`;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result;
}
const postBlog = async (blog) => {
  const url = `${apiHost2}/api/blog`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  if (response.ok) {
    return getBlogs();
  }
};

export {
  getAsset,
  getBlogs,
  postBlog,
  getBlogByID,
  getDestinations,
  getDestinationsById,
  postDestination,
};
