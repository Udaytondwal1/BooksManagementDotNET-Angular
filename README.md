# Books Management System

The **Books Management System** is a comprehensive library management application built using **Angular** for the frontend and **.NET** for the backend. The application provides an intuitive user interface with Angular Material and robust backend functionality to handle book inventory, categories, user profiles, and library operations.

## Features

### 1. **Book Management**
   - Add new books to the library with detailed information.
   - Manage book inventory and stock levels.
   - Issue books to users and track returns.

### 2. **Category Management**
   - Create and manage book categories for better organization.

### 3. **Profile Management**
   - Manage user profiles, including library users and administrators.

### 4. **Book Stock Management**
   - Monitor and update stock levels for each book in the library.

### 5. **Order Reports**
   - Generate reports on book orders and transactions.

### 6. **Book Issue & Return**
   - Issue books to users and track their return dates.
   - Maintain a record of issued and returned books.

### 7. **Fine Calculation**
   - Automatically calculate fines for overdue book returns.

### 8. **User Interface**
   - A clean and modern UI designed using **Angular Material** for enhanced user experience.

---

## Tech Stack

### Frontend:
- **Framework:** Angular 12
- **UI Library:** Angular Material
- **CSS Framework:** Bootstrap (optional for responsive design)

### Backend:
- **Framework:** .NET 6
- **Language:** C#
- **Database:** SQL Server
- **API Documentation:** Swagger

---

## Setup Instructions

### Prerequisites:
1. **Frontend:**
   - Node.js (v14 or above)
   - Angular CLI (`npm install -g @angular/cli`)
2. **Backend:**
   - .NET 6 SDK
   - SQL Server

---

### Steps to Run the Project:
#### Backend (API):

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/books-management.git

2. Navigate to the backend directory in Visual Studio IDE:
   ```bash
  cd books-management/backend

3. Restore dependencies:
   ```bash
   dotnet restore

4. Update the database - (Don't Forget to add Connection String in backend/appsettings.json):
   ```bash
   dotnet ef database update

5. Run the backend server:
   ```bash
   dotnet run

#### Frontend (UI):

1. Navigate to the frontend directory:
   ```bash
   cd books-management/frontend:

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   ng serve

4. The application will be available at: http://localhost:4200


5. please Star this repo.