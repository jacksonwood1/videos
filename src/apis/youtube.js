import axios from 'axios';

const KEY = 'AIzaSyA0uF8y1Ss3HnuNL8iKk2_FrWsOniEDUik';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type:'video'
  }
});
