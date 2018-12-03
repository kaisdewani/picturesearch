import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ef77b65c8a272dc70f7ee57fe66275cfcd4d02fd697ba5d11905e8c594043534'
  }
});