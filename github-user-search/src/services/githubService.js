import.meta.env.VITE_APP_GITHUB_API_KEY
// src/services/githubService.js
import axios from 'axios';

export const fetchAdvancedUserSearch = async ({ username, location, minRepos }) => {
  let query = '';
  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`;

  const response = await axios.get(url);
  return response.data.items; // This returns a list of users
};

