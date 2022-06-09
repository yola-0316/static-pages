const axios = require("axios");

export default async function handler(request, response) {
  const bing = "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1";
  const res = await axios.get(bing);
  const image = res.data.images[0].url;

  const fullUrl = `https://cn.bing.com/${image}`;

  response.json(fullUrl);
}
