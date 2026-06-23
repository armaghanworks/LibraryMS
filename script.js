// Library Management System - JavaScript

class LibraryMS {
    constructor() {
        this.books = [];
        this.users = [];
        this.borrowedBooks = [];
        this.cart = [];
        this.currentUser = null;
        this.currentCategory = 'All';
        this.searchResults = null;
        
        this.initializeData();
        this.initializeEventListeners();
        this.renderBooks();
        this.renderCategories();
        this.updateUI();
    }

    initializeData() {
        // Initialize sample books with various categories
        this.books = [
            {
                id: '1',
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                isbn: '978-0-06-112008-4',
                category: 'Fiction',
                description: 'A gripping tale of racial injustice and childhood innocence in the American South.',
                coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
                totalCopies: 5,
                availableCopies: 3,
                borrowedBy: []
            },
            {
                id: '2',
                title: '1984',
                author: 'George Orwell',
                isbn: '978-0-452-28423-4',
                category: 'Science Fiction',
                description: 'A dystopian social science fiction novel about totalitarian control.',
                coverImage: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop',
                totalCopies: 4,
                availableCopies: 2,
                borrowedBy: []
            },
            {
                id: '3',
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                isbn: '978-0-7432-7356-5',
                category: 'Classic',
                description: 'A tale of decadence and excess in the Jazz Age.',
                coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
                totalCopies: 6,
                availableCopies: 4,
                borrowedBy: []
            },
            {
                id: '4',
                title: 'Pride and Prejudice',
                author: 'Jane Austen',
                isbn: '978-0-14-143951-8',
                category: 'Romance',
                description: 'A romantic novel about manners, upbringing, morality, and marriage.',
                coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
                totalCopies: 3,
                availableCopies: 1,
                borrowedBy: []
            },
            {
                id: '5',
                title: 'The Catcher in the Rye',
                author: 'J.D. Salinger',
                isbn: '978-0-316-76948-0',
                category: 'Fiction',
                description: 'A controversial novel about teenage rebellion and alienation.',
                coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
                totalCopies: 4,
                availableCopies: 2,
                borrowedBy: []
            },
            {
                id: '6',
                title: 'Dune',
                author: 'Frank Herbert',
                isbn: '978-0-441-17271-9',
                category: 'Science Fiction',
                description: 'An epic science fiction novel about politics, religion, and ecology.',
                coverImage: 'https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=400&fit=crop',
                totalCopies: 5,
                availableCopies: 3,
                borrowedBy: []
            },
            {
                id: '7',
                title: 'The Hobbit',
                author: 'J.R.R. Tolkien',
                isbn: '978-0-547-92822-7',
                category: 'Fantasy',
                description: 'A fantasy adventure about a hobbit\'s unexpected journey.',
                coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
                totalCopies: 6,
                availableCopies: 4,
                borrowedBy: []
            },
            {
                id: '8',
                title: 'A Brief History of Time',
                author: 'Stephen Hawking',
                isbn: '978-0-553-38016-3',
                category: 'Science',
                description: 'A popular science book on cosmology and the universe.',
                coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop',
                totalCopies: 3,
                availableCopies: 2,
                borrowedBy: []
            },
            {
                id: '9',
                title: 'The Art of War',
                author: 'Sun Tzu',
                isbn: '978-1-59030-963-7',
                category: 'Philosophy',
                description: 'An ancient Chinese military treatise on strategy and tactics.',
                coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop',
                totalCopies: 4,
                availableCopies: 3,
                borrowedBy: []
            },
            {
                id: '10',
                title: 'Gone Girl',
                author: 'Gillian Flynn',
                isbn: '978-0-307-58836-4',
                category: 'Mystery',
                description: 'A psychological thriller about a missing wife and her husband.',
                coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
                totalCopies: 5,
                availableCopies: 3,
                borrowedBy: []
            },
            {
                id: '11',
                title: 'Becoming',
                author: 'Michelle Obama',
                isbn: '978-1-5247-6313-8',
                category: 'Biography',
                description: 'A memoir by former First Lady Michelle Obama.',
                coverImage: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=300&h=400&fit=crop',
                totalCopies: 4,
                availableCopies: 2,
                borrowedBy: []
            },
            {
                id: '12',
                title: 'Sapiens',
                author: 'Yuval Noah Harari',
                isbn: '978-0-06-231609-7',
                category: 'History',
                description: 'A narrative of humanity\'s creation and evolution.',
                coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
                totalCopies: 6,
                availableCopies: 4,
                borrowedBy: []
            }
        ];

        // Initialize default users
        this.users = [
            {
                id: '1',
                username: 'umer',
                email: 'umer@libraryms.com',
                password: 'umer123',
                role: 'admin',
                fines: 0,
                borrowedBooks: [],
                createdAt: new Date('2023-01-01').toISOString()
            },
            {
                id: '2',
                username: 'Armaghan Khan',
                email: 'armaghan@gmail.com',
                password: 'armaghan123',
                role: 'user',
                fines: 0,
                borrowedBooks: [],
                createdAt: new Date('2023-06-15').toISOString()
            },
            {
                id: '3',
                username: 'Taha Ali',
                email: 'Taha@gmail.com',
                password: 'Taha123',
                role: 'user',
                fines: 0,
                borrowedBooks: [],
                createdAt: new Date('2023-06-15').toISOString()
            }
        ];

        this.borrowedBooks = [];
    }

    initializeEventListeners() {
        // Authentication
        document.getElementById('auth-btn').addEventListener('click', () => this.showAuthModal());
        document.getElementById('logout-btn').addEventListener('click', () => this.logout());
        
        // Demo buttons
        document.getElementById('admin-demo-btn').addEventListener('click', () => this.fillDemoCredentials('admin'));
        document.getElementById('user-demo-btn').addEventListener('click', () => this.fillDemoCredentials('user'));
        
        // Form switching
        document.getElementById('switch-to-signup').addEventListener('click', (e) => {
            e.preventDefault();
            this.showSignupForm();
        });
        document.getElementById('switch-to-login').addEventListener('click', (e) => {
            e.preventDefault();
            this.showLoginForm();
        });
        
        // Form submissions
        document.getElementById('login-form-element').addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('signup-form-element').addEventListener('submit', (e) => this.handleSignup(e));
        
        // Search
        document.getElementById('search-btn').addEventListener('click', () => this.handleSearch());
        document.getElementById('clear-search-btn').addEventListener('click', () => this.clearSearch());
        document.getElementById('search-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSearch();
        });
        
        // Cart
        document.getElementById('cart-btn').addEventListener('click', () => this.showCartModal());
        document.getElementById('clear-cart-btn').addEventListener('click', () => this.clearCart());
        document.getElementById('borrow-books-btn').addEventListener('click', () => this.borrowBooks());
        
        // Profile
        document.getElementById('admin-btn').addEventListener('click', () => this.showAdminModal());
        
        // Admin
        document.getElementById('add-book-btn').addEventListener('click', () => this.showAddBookModal());
        document.getElementById('add-book-form').addEventListener('submit', (e) => this.handleAddBook(e));
        
        // Profile tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e));
        });
        
        // Fine payment
        document.getElementById('pay-fine-btn').addEventListener('click', () => this.handlePayFine());
        
        // Modal close events
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                if (modal) modal.style.display = 'none';
            });
        });
        
        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
    }

    // Authentication Methods
    showAuthModal() {
        if (this.currentUser) {
            this.showProfileModal();
        } else {
            document.getElementById('auth-modal').style.display = 'block';
            this.showLoginForm();
        }
    }

    showLoginForm() {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
    }

    showSignupForm() {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    }

    fillDemoCredentials(type) {
        if (type === 'admin') {
            document.getElementById('login-username').value = 'umer';
            document.getElementById('login-password').value = 'umer123';
        } else {
            document.getElementById('login-username').value = 'Armaghan Khan';
            document.getElementById('login-password').value = 'armaghan123';
        }
    }

    handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        
        if (!username || !password) {
            this.showToast('Please fill in all fields', 'error');
            return;
        }
        
        const user = this.users.find(u => u.username === username && u.password === password);
        
        if (user) {
            this.currentUser = user;
            this.updateUI();
            document.getElementById('auth-modal').style.display = 'none';
            this.showToast('Login successful!', 'success');
            
            // Clear form
            document.getElementById('login-form-element').reset();
        } else {
            this.showToast('Invalid username or password', 'error');
        }
    }

    handleSignup(e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        
        if (!username || !email || !password || !confirmPassword) {
            this.showToast('Please fill in all fields', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            this.showToast('Passwords do not match', 'error');
            return;
        }
        
        if (password.length < 6) {
            this.showToast('Password must be at least 6 characters long', 'error');
            return;
        }
        
        // Check if user already exists
        if (this.users.find(u => u.username === username || u.email === email)) {
            this.showToast('Username or email already exists', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now().toString(),
            username,
            email,
            password,
            role: 'user',
            fines: 0,
            borrowedBooks: [],
            createdAt: new Date().toISOString()
        };
        
        this.users.push(newUser);
        this.showToast('Account created successfully! You can now sign in.', 'success');
        
        // Clear form and switch to login
        document.getElementById('signup-form-element').reset();
        setTimeout(() => {
            this.showLoginForm();
        }, 1500);
    }

    logout() {
        this.currentUser = null;
        this.cart = [];
        this.updateUI();
        this.showToast('Logged out successfully', 'success');
    }

    // Book Management
    renderBooks() {
        const container = document.getElementById('books-container');
        const booksToShow = this.searchResults || this.getFilteredBooks();
        
        if (booksToShow.length === 0) {
            container.innerHTML = '<div class="empty-state"><i class="fas fa-book"></i><p>No books found in this category.</p></div>';
            return;
        }
        
        container.innerHTML = booksToShow.map(book => `
            <div class="book-card">
                <div class="book-card-inner">
                    <div class="book-card-front">
                        <img src="${book.coverImage}" alt="${book.title}" class="book-image" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop'">
                        <div class="book-front-info">
                            <div class="book-title">${book.title}</div>
                            <div class="book-author">by ${book.author}</div>
                            <div class="book-category">${book.category}</div>
                        </div>
                    </div>
                    <div class="book-card-back">
                        <div class="book-back-info">
                            <div class="book-back-title">${book.title}</div>
                            <div class="book-details">
                                <div class="book-detail">
                                    <i class="fas fa-user"></i>
                                    <span>${book.author}</span>
                                </div>
                                <div class="book-detail">
                                    <i class="fas fa-hashtag"></i>
                                    <span>${book.isbn}</span>
                                </div>
                                <div class="book-detail">
                                    <i class="fas fa-calendar"></i>
                                    <span>${book.availableCopies}/${book.totalCopies} available</span>
                                </div>
                            </div>
                            <div class="book-description">${book.description}</div>
                        </div>
                        <div class="book-actions">
                            ${this.renderBookButton(book)}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderBookButton(book) {
        if (!this.currentUser) {
            return `<button class="btn-primary" onclick="libraryMS.showAuthModal()">
                <i class="fas fa-book-open"></i> Login to Borrow
            </button>`;
        }
        
        if (this.currentUser.role === 'user') {
            if (book.availableCopies === 0) {
                return `<button class="btn-primary" disabled>
                    <i class="fas fa-shopping-cart"></i> Out of Stock
                </button>`;
            }
            return `<button class="btn-primary" onclick="libraryMS.addToCart('${book.id}')">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>`;
        }
        
        return '';
    }

    getFilteredBooks() {
        if (this.currentCategory === 'All') {
            return this.books;
        }
        return this.books.filter(book => book.category === this.currentCategory);
    }

    renderCategories() {
        const container = document.getElementById('categories-container');
        const categories = ['All', ...new Set(this.books.map(book => book.category))];
        
        container.innerHTML = categories.map(category => `
            <button class="category-btn ${category === this.currentCategory ? 'active' : ''}" 
                    onclick="libraryMS.selectCategory('${category}')">
                ${category}
            </button>
        `).join('');
    }

    selectCategory(category) {
        this.currentCategory = category;
        this.searchResults = null;
        this.renderBooks();
        this.renderCategories();
        this.updateCollectionTitle();
    }

    updateCollectionTitle() {
        const title = document.getElementById('collection-title');
        if (this.searchResults) {
            title.textContent = `Search Results (${this.searchResults.length} books)`;
        } else if (this.currentCategory === 'All') {
            title.textContent = 'Our Complete Collection';
        } else {
            title.textContent = `${this.currentCategory} Books`;
        }
    }

    // Search Functionality
    handleSearch() {
        const query = document.getElementById('search-input').value.trim();
        const searchType = document.getElementById('search-type').value;
        
        if (!query) {
            this.clearSearch();
            return;
        }
        
        this.searchResults = this.searchBooks(query, searchType);
        this.renderBooks();
        this.updateCollectionTitle();
        this.showToast(`Found ${this.searchResults.length} books`, 'success');
    }

    searchBooks(query, searchType) {
        const searchQuery = query.toLowerCase();
        return this.books.filter(book => {
            switch (searchType) {
                case 'title':
                    return book.title.toLowerCase().includes(searchQuery);
                case 'author':
                    return book.author.toLowerCase().includes(searchQuery);
                case 'isbn':
                    return book.isbn.toLowerCase().includes(searchQuery);
                default:
                    return false;
            }
        });
    }

    clearSearch() {
        document.getElementById('search-input').value = '';
        this.searchResults = null;
        this.renderBooks();
        this.updateCollectionTitle();
    }

    // Cart Management
    addToCart(bookId) {
        if (!this.currentUser || this.currentUser.role !== 'user') {
            this.showToast('Please login as a user to borrow books', 'error');
            return;
        }
        
        const book = this.books.find(b => b.id === bookId);
        if (!book || book.availableCopies === 0) {
            this.showToast('Book is not available', 'error');
            return;
        }
        
        const existingItem = this.cart.find(item => item.book.id === bookId);
        if (existingItem) {
            if (existingItem.quantity < book.availableCopies) {
                existingItem.quantity++;
                this.showToast('Book quantity updated in cart', 'success');
            } else {
                this.showToast('No more copies available', 'error');
                return;
            }
        } else {
            this.cart.push({ book, quantity: 1 });
            this.showToast('Book added to cart', 'success');
        }
        
        this.updateCartCount();
    }

    removeFromCart(bookId) {
        this.cart = this.cart.filter(item => item.book.id !== bookId);
        this.updateCartCount();
        this.renderCartItems();
        this.showToast('Book removed from cart', 'success');
    }

    clearCart() {
        this.cart = [];
        this.updateCartCount();
        this.renderCartItems();
        this.showToast('Cart cleared', 'success');
    }

    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cart-count').textContent = count;
        document.getElementById('cart-count').style.display = count > 0 ? 'flex' : 'none';
    }

    showCartModal() {
        if (!this.currentUser) {
            this.showAuthModal();
            return;
        }
        
        document.getElementById('cart-modal').style.display = 'block';
        this.renderCartItems();
    }

    renderCartItems() {
        const container = document.getElementById('cart-items');
        
        if (this.cart.length === 0) {
            container.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
            return;
        }
        
        container.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.book.coverImage}" alt="${item.book.title}" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop'">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.book.title}</div>
                    <div class="cart-item-author">${item.book.author}</div>
                    <div class="cart-item-quantity">Quantity: ${item.quantity}</div>
                </div>
                <button class="cart-remove-btn" onclick="libraryMS.removeFromCart('${item.book.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    borrowBooks() {
        if (this.cart.length === 0) {
            this.showToast('Cart is empty', 'error');
            return;
        }
        
        const borrowDate = new Date();
        const dueDate = new Date(borrowDate.getTime() + (14 * 24 * 60 * 60 * 1000)); // 14 days
        
        this.cart.forEach(item => {
            // Update book availability
            const book = this.books.find(b => b.id === item.book.id);
            book.availableCopies -= item.quantity;
            
            // Create borrowed book record
            for (let i = 0; i < item.quantity; i++) {
                const borrowedBook = {
                    id: Date.now().toString() + i,
                    userId: this.currentUser.id,
                    bookId: item.book.id,
                    borrowDate: borrowDate.toISOString(),
                    dueDate: dueDate.toISOString(),
                    status: 'borrowed',
                    fine: 0,
                    returnDate: null
                };
                this.borrowedBooks.push(borrowedBook);
            }
        });
        
        this.clearCart();
        this.renderBooks();
        document.getElementById('cart-modal').style.display = 'none';
        this.showToast('Books borrowed successfully!', 'success');
    }

    // Profile Management
    showProfileModal() {
        if (!this.currentUser) {
            this.showAuthModal();
            return;
        }
        
        document.getElementById('profile-modal').style.display = 'block';
        document.getElementById('profile-username').textContent = `Profile - ${this.currentUser.username}`;
        this.renderProfileStats();
        this.renderBorrowedBooks();
        this.renderBookHistory();
        this.showTab('overview');
    }

    renderProfileStats() {
        const activeBorrowedBooks = this.borrowedBooks.filter(bb => 
            bb.userId === this.currentUser.id && bb.status === 'borrowed'
        );
        
        document.getElementById('active-loans-count').textContent = activeBorrowedBooks.length;
        document.getElementById('outstanding-fines').textContent = `$${this.currentUser.fines.toFixed(2)}`;
        document.getElementById('member-since').textContent = new Date(this.currentUser.createdAt).toLocaleDateString();
        
        const finePayment = document.getElementById('fine-payment');
        if (this.currentUser.fines > 0) {
            finePayment.style.display = 'block';
            document.getElementById('payment-amount').max = this.currentUser.fines;
        } else {
            finePayment.style.display = 'none';
        }
    }

    renderBorrowedBooks() {
        const container = document.getElementById('borrowed-books');
        const activeBorrowedBooks = this.borrowedBooks.filter(bb => 
            bb.userId === this.currentUser.id && bb.status === 'borrowed'
        );
        
        if (activeBorrowedBooks.length === 0) {
            container.innerHTML = '<div class="empty-state"><i class="fas fa-book"></i><p>No currently borrowed books</p></div>';
            return;
        }
        
        container.innerHTML = activeBorrowedBooks.map(borrowedBook => {
            const book = this.books.find(b => b.id === borrowedBook.bookId);
            const dueDate = new Date(borrowedBook.dueDate);
            const isOverdue = new Date() > dueDate;
            
            return `
                <div class="borrowed-book">
                    <img src="${book.coverImage}" alt="${book.title}" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop'">
                    <div class="book-info">
                        <div class="cart-item-title">${book.title}</div>
                        <div class="cart-item-author">${book.author}</div>
                        <div class="book-badges">
                            <span class="badge badge-outline">Due: ${dueDate.toLocaleDateString()}</span>
                            ${isOverdue ? '<span class="badge badge-destructive">Overdue</span>' : ''}
                        </div>
                    </div>
                    <button class="return-btn" onclick="libraryMS.returnBook('${borrowedBook.id}')">
                        Return Book
                    </button>
                </div>
            `;
        }).join('');
    }

    renderBookHistory() {
        const container = document.getElementById('book-history');
        const returnedBooks = this.borrowedBooks.filter(bb => 
            bb.userId === this.currentUser.id && bb.status === 'returned'
        );
        
        if (returnedBooks.length === 0) {
            container.innerHTML = '<div class="empty-state"><i class="fas fa-history"></i><p>No returned books yet</p></div>';
            return;
        }
        
        container.innerHTML = returnedBooks.map(borrowedBook => {
            const book = this.books.find(b => b.id === borrowedBook.bookId);
            
            return `
                <div class="history-book">
                    <img src="${book.coverImage}" alt="${book.title}" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop'">
                    <div class="book-info">
                        <div class="cart-item-title">${book.title}</div>
                        <div class="cart-item-author">${book.author}</div>
                        <div class="book-badges">
                            <span class="badge badge-secondary">Returned</span>
                            ${borrowedBook.returnDate ? `<span class="badge badge-outline">Returned: ${new Date(borrowedBook.returnDate).toLocaleDateString()}</span>` : ''}
                            ${borrowedBook.fine > 0 ? `<span class="badge badge-destructive">Fine: $${borrowedBook.fine.toFixed(2)}</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    returnBook(borrowedBookId) {
        const borrowedBook = this.borrowedBooks.find(bb => bb.id === borrowedBookId);
        if (!borrowedBook) return;
        
        borrowedBook.status = 'returned';
        borrowedBook.returnDate = new Date().toISOString();
        
        // Calculate fine if overdue
        const dueDate = new Date(borrowedBook.dueDate);
        const returnDate = new Date(borrowedBook.returnDate);
        if (returnDate > dueDate) {
            const daysOverdue = Math.ceil((returnDate - dueDate) / (1000 * 60 * 60 * 24));
            borrowedBook.fine = daysOverdue * 0.50; // $0.50 per day
            this.currentUser.fines += borrowedBook.fine;
        }
        
        // Update book availability
        const book = this.books.find(b => b.id === borrowedBook.bookId);
        book.availableCopies++;
        
        this.renderBooks();
        this.renderProfileStats();
        this.renderBorrowedBooks();
        this.renderBookHistory();
        this.showToast('Book returned successfully!', 'success');
    }

    handlePayFine() {
        const amount = parseFloat(document.getElementById('payment-amount').value);
        if (amount > 0 && amount <= this.currentUser.fines) {
            this.currentUser.fines -= amount;
            document.getElementById('payment-amount').value = '';
            this.renderProfileStats();
            this.showToast(`Fine of $${amount.toFixed(2)} paid successfully!`, 'success');
        } else {
            this.showToast('Invalid payment amount', 'error');
        }
    }

    // Admin Functions
    showAdminModal() {
        if (!this.currentUser || this.currentUser.role !== 'admin') {
            this.showToast('Admin access required', 'error');
            return;
        }
        
        document.getElementById('admin-modal').style.display = 'block';
        this.renderAdminBooks();
        this.renderAdminUsers();
        this.renderAdminStats();
        this.showAdminTab('admin-books');
    }

    renderAdminBooks() {
        const container = document.getElementById('admin-books-list');
        container.innerHTML = this.books.map(book => `
            <div class="admin-book-item">
                <img src="${book.coverImage}" alt="${book.title}" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop'">
                <div class="admin-item-info">
                    <div class="cart-item-title">${book.title}</div>
                    <div class="cart-item-author">${book.author}</div>
                    <div>ISBN: ${book.isbn}</div>
                    <div class="book-badges">
                        <span class="badge badge-outline">${book.category}</span>
                        <span class="badge badge-secondary">${book.availableCopies}/${book.totalCopies} available</span>
                    </div>
                </div>
                <div class="admin-actions">
                    <button class="edit-btn" onclick="libraryMS.editBook('${book.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn" onclick="libraryMS.deleteBook('${book.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    renderAdminUsers() {
        const container = document.getElementById('admin-users-list');
        const userAccounts = this.users.filter(u => u.role === 'user');
        
        container.innerHTML = userAccounts.map(user => {
            const borrowedCount = this.borrowedBooks.filter(bb => bb.userId === user.id && bb.status === 'borrowed').length;
            
            return `
                <div class="admin-user-item">
                    <div class="admin-item-info">
                        <div class="cart-item-title">${user.username}</div>
                        <div class="cart-item-author">${user.email}</div>
                        <div class="book-badges">
                            <span class="badge badge-outline">Borrowed: ${borrowedCount}</span>
                            ${user.fines > 0 ? `<span class="badge badge-destructive">Fines: $${user.fines.toFixed(2)}</span>` : ''}
                        </div>
                    </div>
                    <div class="admin-actions">
                        <button class="delete-btn" onclick="libraryMS.deleteUser('${user.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderAdminStats() {
        const userCount = this.users.filter(u => u.role === 'user').length;
        const availableBooks = this.books.reduce((sum, book) => sum + book.availableCopies, 0);
        
        document.getElementById('total-books-count').textContent = this.books.length;
        document.getElementById('total-users-count').textContent = userCount;
        document.getElementById('available-books-count').textContent = availableBooks;
    }

    showAddBookModal() {
        document.getElementById('add-book-modal').style.display = 'block';
    }

    handleAddBook(e) {
        e.preventDefault();
        
        const title = document.getElementById('book-title').value;
        const author = document.getElementById('book-author').value;
        const isbn = document.getElementById('book-isbn').value;
        const category = document.getElementById('book-category').value;
        const description = document.getElementById('book-description').value;
        const coverImage = document.getElementById('book-cover').value || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop';
        const totalCopies = parseInt(document.getElementById('book-copies').value) || 1;
        
        if (!title || !author || !isbn) {
            this.showToast('Please fill in required fields', 'error');
            return;
        }
        
        const newBook = {
            id: Date.now().toString(),
            title,
            author,
            isbn,
            category: category || 'General',
            description: description || 'No description available.',
            coverImage,
            totalCopies,
            availableCopies: totalCopies,
            borrowedBy: []
        };
        
        this.books.push(newBook);
        document.getElementById('add-book-form').reset();
        document.getElementById('add-book-modal').style.display = 'none';
        
        this.renderBooks();
        this.renderCategories();
        this.renderAdminBooks();
        this.renderAdminStats();
        this.showToast('Book added successfully!', 'success');
    }

    editBook(bookId) {
        // For simplicity, just show an alert. In a real app, you'd open an edit modal
        this.showToast('Edit functionality would open an edit form', 'success');
    }

    deleteBook(bookId) {
        if (confirm('Are you sure you want to delete this book?')) {
            this.books = this.books.filter(book => book.id !== bookId);
            this.renderBooks();
            this.renderCategories();
            this.renderAdminBooks();
            this.renderAdminStats();
            this.showToast('Book deleted successfully!', 'success');
        }
    }

    deleteUser(userId) {
        if (confirm('Are you sure you want to delete this user?')) {
            this.users = this.users.filter(user => user.id !== userId);
            this.renderAdminUsers();
            this.renderAdminStats();
            this.showToast('User deleted successfully!', 'success');
        }
    }

    // Tab Management
    switchTab(e) {
        const tabName = e.target.dataset.tab;
        this.showTab(tabName);
    }

    showTab(tabName) {
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Remove active from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected tab
        const tabContent = document.getElementById(`${tabName}-tab`);
        const tabButton = document.querySelector(`[data-tab="${tabName}"]`);
        
        if (tabContent) tabContent.classList.add('active');
        if (tabButton) tabButton.classList.add('active');
    }

    showAdminTab(tabName) {
        // Hide all admin tab contents
        document.querySelectorAll('#admin-modal .tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Remove active from all admin buttons
        document.querySelectorAll('#admin-modal .tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected admin tab
        const tabContent = document.getElementById(`${tabName}-tab`);
        const tabButton = document.querySelector(`#admin-modal [data-tab="${tabName}"]`);
        
        if (tabContent) tabContent.classList.add('active');
        if (tabButton) tabButton.classList.add('active');
    }

    // UI Updates
    updateUI() {
        const authBtn = document.getElementById('auth-btn');
        const authText = document.getElementById('auth-text');
        const logoutBtn = document.getElementById('logout-btn');
        const adminBtn = document.getElementById('admin-btn');
        
        if (this.currentUser) {
            authText.textContent = this.currentUser.username;
            logoutBtn.style.display = 'block';
            
            if (this.currentUser.role === 'admin') {
                adminBtn.style.display = 'block';
            } else {
                adminBtn.style.display = 'none';
            }
        } else {
            authText.textContent = 'Login';
            logoutBtn.style.display = 'none';
            adminBtn.style.display = 'none';
        }
        
        this.updateCartCount();
        this.renderBooks();
    }

    // Toast Notifications
    showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
        
        toast.innerHTML = `
            <i class="${icon}"></i>
            <span>${message}</span>
        `;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}

// Global function to close modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.libraryMS = new LibraryMS();
});
