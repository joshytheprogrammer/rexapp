export const useSearchUtilities = () => {
  function buildQuery(term, c_id) {
    const regex = /[^a-zA-Z0-9-_?! ]/g;
  
    // Remove special characters from the term string
    term = term.replace(regex, '');

    if(term.length < 3) {return}
  
    if (!c_id) {
      c_id = "all";
    }
    if (c_id.length < 1) {
      c_id = "all";
    }
  
    navigateTo({
      path: '/search',
      query: {
        q: term,
        c: c_id
      }
    });
  }
  
  function isValidObjectId(id) {
    const objectIdPattern = /^[0-9a-fA-F]{24}$/;
    return objectIdPattern.test(id);
  }

  function constructSearch(terms) {
    const values = Object.values(terms);
    
    const searchString = values.join(' ').toLowerCase();

    if(searchString.length < 5) {return}

    navigateTo({
      path: '/search',
      query: {
        q: searchString,
      }
    });
  }

  return {
    buildQuery,
    isValidObjectId,
    constructSearch
  }
}