import request, { GET } from "./request";

const CONTENTFUL_URL = `https://cdn.contentful.com/spaces/6fmuqje9nkz0/environments/master/entries?access_token=yNcU-W6qITUmC18PRtK6Gyy32Vy7oGLRAWzW-2zyUaM&content_type=blog-entry`;

// TODO: Update the method below to utilize contentful's pagination functionality to return only 6 entries
//       NOTE: remember on "load more" it's 6 *additional* entries

export const getCategoryNames = async () => {
  try {
    const response = await request(GET, CONTENTFUL_URL);
    // let categoryNames = [];

    // response.items.forEach(item => categoryNames.push(item.fields.category));

    return response.items.map(item => item.fields.category);
  } catch (e) {
    console.log("getCategoryNames failed:", e);
  }
};

export const getPaginatedArticles = async (limit, skip) => {
  try {
    // const response = await request(GET, CONTENTFUL_URL);
    const response = await request(
      GET,
      CONTENTFUL_URL + `&limit=${limit}&&skip=${skip}`
    );

    return response.items;
  } catch (e) {
    console.log("getPaginatedArticles failed:", e);
  }
};

// get featured articles
export const getFeaturedArticle = async () => {
  try {
    const response = await request(
      GET,
      CONTENTFUL_URL + "&fields.featured=true"
    );

    // parse data to sort timestamp
    let dateArr = [];
    let newestArticle;

    // get date-only array and sort them
    response.items.forEach(item => dateArr.push(item.fields.date));
    dateArr.sort().reverse();

    // assign newestArticle upon date match
    response.items.forEach(item => {
      if (item.fields.date === dateArr[0]) {
        newestArticle = item;
      }
    });

    return newestArticle;
  } catch (e) {
    console.log("getFeaturedArticle failed:", e);
  }
};

// TODO: Using the category argument, update the method below by making a GET
//       request and returning entries from contentful filtered by the category.
//       NOTE: this method will need to be connected to ../contexts/Store!

export const getArticlesByCategory = async (limit, skip, category) => {
  try {
    const response = await request(
      GET,
      CONTENTFUL_URL +
        `&limit=${limit}&&skip=${skip}&fields.category=${category}`
    );

    return response.items;
  } catch (e) {
    console.log("getArticlesByCategory failed:", e);
  }
};
// `&limit=${limit}&&skip=${skip}&fields.category=${category}`

// Possibly useful documentation:
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters
// - https://www.contentful.com/developers/docs/references/content-management-api/#/reference/entries/entries-collection/get-all-entries-of-a-space/console
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/introduction/collection-resources-and-pagination
