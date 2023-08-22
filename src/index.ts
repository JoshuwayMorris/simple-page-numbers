export const paginate = (currentPage = 1, totalPages = 0, spread = 1) => {

  // Create pages array
  let pages = Array.from({length: totalPages}, (_, i) => i + 1)
  
  // Calculate spread
  let spread = (spread * 2) + 1

  // Initialise start and end for trimming array
  let start = (currentPage - 1) - spread
  let end = currentPage + spread

  // If the current page is less than the spread, reset the start and set the end to spread
  if (currentPage <= spread) {
    start = 0
    end = spread
  }

  // If the current page is greater than the total minus the neigbours, reset the start to the total pages minus the spread
  if (currentPage >= (totalPages - spread)) {
    start = (totalPages - spread)
  }

  // Trim the pages array
  pages = pages.slice(start, end)

  // Return object
  return {
    previousPage: currentPage - 1 ? currentPage - 1 : null,
    nextPage: (totalPages > currentPage) ? currentPage + 1 : null,
    totalPages: totalPages,
    pages: pages
  };
};