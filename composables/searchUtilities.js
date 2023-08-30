export const useSearchUtilities = () => {
  function buildQuery(term, c_id) {
    if(!c_id) {c_id = "all"}
    if(c_id.length < 1) {c_id = "all"}

    navigateTo({
      path: '/search',
      query: {
        q: term,
        c: c_id
      }
    });
  }

  return {
    buildQuery
  }
}