const posts = [
  { id: 1, name: "Post One" },
  { id: 1, name: "Post Two" },
];

// Module exports
// export const getPosts = () => posts
// export {getPosts} // Named/Multiple export
const getPosts = () => posts
export default getPosts; // Default Export

export const postLength = () => posts.length