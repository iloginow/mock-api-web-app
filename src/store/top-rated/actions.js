export function init({ commit }) {
  commit('INIT_SELECTED_POSTS');
}

export function setTotalPostsCount({ commit }, totalPostsCount) {
  commit('SET_TOTAL_POSTS_COUNT', totalPostsCount);
}

export function selectPost({ state, commit }, id) {
  const selectedAt = Date.now();
  const selectedPosts = [...state.selectedPosts, { id, selectedAt }];
  commit('SET_SELECTED_POSTS', selectedPosts);
}

export function deselectPost({ state, commit }, id) {
  const selectedPosts = state.selectedPosts.filter((post) => post.id !== id);
  commit('SET_SELECTED_POSTS', selectedPosts);
}
