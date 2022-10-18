const booksService = require('../services/books.services.js');

class BooksController {
  async getBooks(req, res, next) {
    try {
      const {query, page, limit, type} = req.query;

      const books = await booksService.getBooks(query, page, limit, type);
      
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  // async getBooksByAuthor(req, res, next) {
  //   try {
  //     const {id, page, limit} = req.query;

  //     const books = await booksService.getBooks(id, page, limit);
      
  //     res.status(200).json(books);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

module.exports = new BooksController();
