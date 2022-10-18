const FlibustaAPI = require('flibusta').default;

class BookService {
  async getBooks(query, page, limit) {
    const flibustaApi = new FlibustaAPI();

    const books = await flibustaApi.getBooksByNameFromOpdsPaginated(query, page, limit);

    return books;
  }

  // async getBooksByAuthor(id, page, limit) {
  //   const flibustaApi = new FlibustaAPI();
    
  //   const books = await flibustaApi.getBooksByAuthorOpdsPaginated(id, page, limit);
    
  //   return books;
  // }
}

module.exports = new BookService();
