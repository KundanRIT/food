import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer pdijqNhuEKAPQBLluQY3nob5PSh2LBiw7-PjfHxey_8os9LxLCRayhIvp6KNcKT5YPkwNYONow___FbyZ_RCCRTiDQJ6NPtpe96ZbzXBXVVMnd2vkq73o4sdkYfWXnYx"
  }
});

