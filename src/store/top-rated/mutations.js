export function INIT_SELECTED_POSTS(state) {
  const selectedPosts = localStorage.getItem('selectedPosts');
  if (!selectedPosts) return;
  Object.assign(state, { selectedPosts: JSON.parse(selectedPosts) });
}

export function SET_SELECTED_POSTS(state, selectedPosts) {
  Object.assign(state, { selectedPosts });
  localStorage.setItem('selectedPosts', JSON.stringify(selectedPosts));
}

export function SET_TOTAL_POSTS_COUNT(state, totalPostsCount) {
  Object.assign(state, { totalPostsCount });
}
