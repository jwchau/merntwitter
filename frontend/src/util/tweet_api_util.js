import axios from 'axios';

export const getTweets = () => {
    return axios.get('/api/tweets');
}

export const getUserTweets = id => (
    axios.get(`/api/tweets/user/${id}`)
);

export const writeTweet = data => (
    axios.post("/api/tweets", data)
);