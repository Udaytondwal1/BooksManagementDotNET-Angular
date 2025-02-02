﻿using BackEnd.Models;

namespace BackEnd.Data_Access
{
    public interface IDataAccess
    {
        int CreateUser(User user);
        bool IsEmailAvailable(string email);
        bool AuthenticateUser(string email, string password, out User? user);
        IList<Book> GetAllBooks();
        bool OrderBook(int userId, int bookId);
        IList<Order> GetOrdersOfUser(int userId);
        IList<Order> GetAllOrders();
        bool ReturnBook(int userId, int bookId);
        IList<User> GetUsers();
        void BlockUser(int userId);
        void UnblockUser(int userId);
        void DeactivateUser(int userId);
        void ActivateUser(int userId);
        IList<BookCategory> GetAllCategories();
        void InsertNewBook(Book book);
        bool DeleteBook(int bookId);
        void CreateCategory(BookCategory category);

        // New Methods for UpdateProfile
        User GetUserById(int id);  // Retrieve a user by ID
        bool UpdateUserProfile(User user);  // Update user profile

    }
}
