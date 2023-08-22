export const paginate = (currentPage = 1, pageCount = 0, neighbours = 1) => {

  // Create pages array
  let pages = Array.from({length: pageCount}, (_, i) => i + 1)
  
  // Calculate spread
  let spread = (neighbours * 2) + 1

  // Initialise start and end for trimming array
  let start = (currentPage - 1) - neighbours
  let end = currentPage + neighbours

  // If the current page is less than the neighbours, reset the start and set the end to spread
  if (currentPage <= neighbours) {
    start = 0
    end = spread
  }

  // If the current page is greater than the total minus the neigbours, reset the start to the total pages minus the spread
  if (currentPage >= (pageCount - neighbours)) {
    start = (pageCount - spread)
  }

  // Trim the pages array
  pages = pages.slice(start, end)

  // Return object
  return {
    previousPage: currentPage - 1 ? currentPage - 1 : null,
    nextPage: (pageCount > currentPage) ? currentPage + 1 : null,
    pageCount: pageCount,
    pages: pages
  };
};