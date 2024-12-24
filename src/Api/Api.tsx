import axios from "axios";

const key = "HD8a7nzqSCIuZgWulcZb4uNBftEJwJewIYNsf0KFCJg";
axios.defaults.baseURL = "https://api.unsplash.com/";

type  FetchImagesParams = {
  query: string;
  per_page: number;
  page: number;
}


type  Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string | null;
  description: string | null;
}


type FetchImagesResponse = {
  results: Image[];
  total_pages: number;
  total: number;
}


const fetchImages = async (
  query: string,
  per_page: number = 10,
  page: number = 1
): Promise<FetchImagesResponse> => {
  const params = {
    headers: {
      Authorization: `Client-ID ${key}`,
    },
    params: {
      per_page,
      page,
      query,
    },
  };

  const response = await axios.get<FetchImagesResponse>("search/photos?", params);
  return response.data;
};

export default fetchImages;