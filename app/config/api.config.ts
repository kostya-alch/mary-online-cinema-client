export const API_URL = `${process.env.API_URL}/api`;

export const getAuthUrl = (string: string) => `/auth${string}`;
export const getUsersUrl = (string: string) => `/users${string}`;
export const getActorsUrl = (string: string) => `/actors${string}`;
export const getGenresUrl = (string: string) => `/genres${string}`;
export const getRatingsUrl = (string: string) => `/ratings${string}`;
export const getMoviesUrl = (string: string) => `/movies${string}`;