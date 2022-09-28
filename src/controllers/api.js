const contentfulApi = "https://cdn.contentful.com";
const apiUrl = "http://localhost:3000";

const getAsset = async () => {
  const url = `${apiUrl}/api/assets`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Assets");
  console.log(result);
  return result;
};

const getDestinations = async () => {
  const url = `${apiUrl}/api/destinations`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Destinations");
  console.log(result);
  return result;
};

const getDestinationsById = async (id) => {
  const url = `${apiUrl}/api/destinations/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("DestinationsById");
  console.log(result);
  return result;
};

const postDestination = async (destination) => {
  const url = `${apiUrl}/api/destinations`;
  const response =  await fetch(url, {
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

const getHotel = async () => {
  const url = `${apiUrl}/api/hotel`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Hotel");
  console.log(result);
  return result;
};

const postHotel = async (hotel) => {
  const url = `${apiUrl}/api/hotel`;
  const response =  await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(hotel),
  });
  return response;
};
const getBlogs = async () => {
  const url = `${apiUrl}/api/blog`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Blogs");
  console.log(result);
  return result;
};

async function getBlogByID() {
  const url = `${apiUrl}/api/blog`;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result;
}

async function editBlog(blogItem) {
  editBlogByID(blogItem.id, blogItem);
}
async function editBlogByID(id, blog) {
  console.log(id, blog);
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
  const url = `${apiUrl}/api/blog`;
  const response =  await fetch(url, {
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

export { getAsset, getBlogs, postBlog, getBlogByID,getDestinations,getDestinationsById,postDestination,postHotel};
