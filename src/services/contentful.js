import request, { GET } from "./request";

const CONTENTFUL_URL = `https://cdn.contentful.com/spaces/6fmuqje9nkz0/environments/master/entries?access_token=yNcU-W6qITUmC18PRtK6Gyy32Vy7oGLRAWzW-2zyUaM&content_type=blog-entry`;

// TODO: Update the method below to utilize contentful's pagination functionality to return only 6 entries
//       NOTE: remember on "load more" it's 6 *additional* entries
export const getAllArticles = async () => {
  try {
    const response = await request(GET, CONTENTFUL_URL);
    let firstSix = [];
    // console.log(response.items);
    for (let i = 0; i < 6; i++) {
      firstSix.push(response.items[i]);
    }
    // console.log(firstSix);
    // return response.items;
    return firstSix;
  } catch (e) {
    console.log("getAllArticles failed:", e);
  }
};

export const getPaginatedArticles = async (limit, skip) => {
  try {
    // const response = await request(GET, CONTENTFUL_URL);
    const response = await request(
      GET,
      `https://cdn.contentful.com/spaces/6fmuqje9nkz0/environments/master/entries?access_token=yNcU-W6qITUmC18PRtK6Gyy32Vy7oGLRAWzW-2zyUaM&content_type=blog-entry&limit=${limit}&&skip=${skip}`
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
    // console.log(Object.values(response.items));
    let newArr = Object.values(response.items).sort(
      (a, b) => a.fields.date > b.fields.date
    );
    console.log(newArr);
    return newArr[0];
  } catch (e) {
    console.log("getArticlesByCategory failed:", e);
  }
};

// TODO: Using the category argument, update the method below by making a GET
//       request and returning entries from contentful filtered by the category.
//       NOTE: this method will need to be connected to ../contexts/Store!
export const getArticlesByCategory = async category => {
  return [];
};

// Possibly useful documentation:
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters
// - https://www.contentful.com/developers/docs/references/content-management-api/#/reference/entries/entries-collection/get-all-entries-of-a-space/console
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/introduction/collection-resources-and-pagination
