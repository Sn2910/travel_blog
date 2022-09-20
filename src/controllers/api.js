const apiHost = "https://cdn.contentful.com";
const apiHost2 = "http://localhost:5000";

const getAsset = async () => {
  const url = `${apiHost}/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/assets?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Assets");
  console.log(result);
  return result;
};

const getBlogs = async () => {
  const url = `${apiHost2}/api/blog`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Blogs");
  console.log(result);
  return result;
};

async function getBlogByID(id) {
  const url = `${apiHost2}/api/blog/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result;
}

async function editBlogByID(id, blog) {
  const url = `${apiHost2}/api/blog/${id}`;
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  if (response.ok) {
    return getBlogs();
  }
}

const postBlog = async (blog) => {
  const url = `${apiHost2}/api/blog`;
  const response = fetch(url, {
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

export { getAsset, getBlogs, postBlog, getBlogByID, editBlogByID };
