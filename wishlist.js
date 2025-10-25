// Wishlist functionality for wishlist.html
class WishlistManager {
    constructor() {
        this.wishlistKey = 'dermamind-wishlist';
        this.init();
    }

    init() {
        this.displayWishlist();
        this.updateWishlistCount();
        this.setupEventListeners();
        this.updateWishlistStats();
    }

    // Get wishlist from localStorage
    getWishlist() {
        const wishlist = localStorage.getItem(this.wishlistKey);
        return wishlist ? JSON.parse(wishlist) : [];
    }

    // Save wishlist to localStorage
    saveWishlist(wishlist) {
        localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
        this.updateWishlistCount();
        this.updateWishlistStats();
    }

    // Remove product from wishlist
    removeFromWishlist(productId) {
        const wishlist = this.getWishlist();
        const product = wishlist.find(item => item.id === productId);
        const updatedWishlist = wishlist.filter(item => item.id !== productId);
        this.saveWishlist(updatedWishlist);
        this.displayWishlist();
        this.showMessage(`"${product?.name || 'Product'}" removed from wishlist`);
    }

    // Clear entire wishlist
    clearWishlist() {
        if (this.getWishlist().length === 0) {
            this.showMessage('Your wishlist is already empty');
            return;
        }

        if (confirm('Are you sure you want to clear your entire wishlist? This action cannot be undone.')) {
            localStorage.removeItem(this.wishlistKey);
            this.displayWishlist();
            this.updateWishlistCount();
            this.updateWishlistStats();
            this.showMessage('Wishlist cleared successfully');
        }
    }

    // Display wishlist items
    displayWishlist() {
        const container = document.getElementById('wishlist-container');
        const emptyState = document.getElementById('empty-wishlist');
        const wishlist = this.getWishlist();

        if (wishlist.length === 0) {
            container.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }

        container.style.display = 'grid';
        emptyState.style.display = 'none';

        container.innerHTML = wishlist.map(product => this.createProductCard(product)).join('');
    }

    // Create product card HTML
    createProductCard(product) {
        // Extract price from product details or use the price property
        let price = product.price;
        if (!price && product.description) {
            // Try to extract price from description if not available directly
            const priceMatch = product.description.match(/₹[\d,]+/);
            if (priceMatch) {
                price = priceMatch[0];
            }
        }
        
        return `
            <div class="wishlist-product-card" data-product-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="wishlist-product-image" onerror="this.src='https://via.placeholder.com/300x300?text=Product+Image'">
                <div class="wishlist-product-info">
                    <h4 class="wishlist-product-name">${product.name}</h4>
                    <p class="wishlist-product-details">${product.description || ''}${price ? `<br>${price}` : ''}</p>
                    
                    <div class="wishlist-product-meta">
                        <span class="wishlist-product-rating">
                            <i class="fas fa-star"></i> ${product.rating || '4.0'}
                        </span>
                        <span class="wishlist-product-reviews">${product.reviews || '0'} reviews</span>
                    </div>
                    
                    <div class="wishlist-buttons-container">
                        <button class="view-details-btn" onclick="window.location.href='product-detail.html?id=${product.id}'">
                            View Details
                        </button>
                        <button class="remove-btn" onclick="wishlistManager.removeFromWishlist('${product.id}')">
                            Remove from Wishlist
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Update wishlist count in navigation
    updateWishlistCount() {
        const countElement = document.getElementById('wishlist-count');
        const wishlist = this.getWishlist();
        if (countElement) {
            countElement.textContent = wishlist.length;
        }
    }

    // Update wishlist statistics
    updateWishlistStats() {
        const wishlist = this.getWishlist();
        const totalItemsElement = document.getElementById('total-items');
        const totalPriceElement = document.getElementById('total-price');
        
        if (totalItemsElement) {
            totalItemsElement.textContent = wishlist.length;
        }
        
        if (totalPriceElement) {
            // Calculate total price (this is a simplified calculation)
            // In a real app, you'd want to store the actual numeric price
            let total = 0;
            wishlist.forEach(product => {
                if (product.price) {
                    // Extract numeric value from price string (e.g., "₹2,950" -> 2950)
                    const priceMatch = product.price.match(/₹?([\d,]+)/);
                    if (priceMatch) {
                        const priceValue = parseInt(priceMatch[1].replace(/,/g, ''));
                        if (!isNaN(priceValue)) {
                            total += priceValue;
                        }
                    }
                }
            });
            
            totalPriceElement.textContent = `₹${total.toLocaleString()}`;
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // Clear wishlist button
        const clearButton = document.getElementById('clear-wishlist');
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                this.clearWishlist();
            });
        }

        // Listen for storage events to sync across tabs
        window.addEventListener('storage', (e) => {
            if (e.key === this.wishlistKey) {
                this.displayWishlist();
                this.updateWishlistCount();
                this.updateWishlistStats();
            }
        });

        // Listen for custom events from other pages
        window.addEventListener('wishlistUpdated', () => {
            this.displayWishlist();
            this.updateWishlistCount();
            this.updateWishlistStats();
        });
    }

    // Show message
    showMessage(message, type = 'info') {
        const messageElement = document.getElementById('wishlist-message');
        if (!messageElement) return;

        // Set message and style based on type
        messageElement.textContent = message;
        messageElement.style.display = 'block';
        
        // Reset styles
        messageElement.style.backgroundColor = '#e8f5e8';
        messageElement.style.color = '#2e7d32';
        
        if (type === 'error') {
            messageElement.style.backgroundColor = '#ffebee';
            messageElement.style.color = '#c62828';
        } else if (type === 'warning') {
            messageElement.style.backgroundColor = '#fff3e0';
            messageElement.style.color = '#ef6c00';
        }

        // Hide after 4 seconds
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 4000);
    }
}

// Initialize wishlist manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.wishlistManager = new WishlistManager();
});

// Dispatch event to update other pages when wishlist changes
function dispatchWishlistUpdate() {
    const event = new CustomEvent('wishlistUpdated');
    window.dispatchEvent(event);
    
    // Also update localStorage to trigger storage event for other tabs
    const currentWishlist = localStorage.getItem('dermamind-wishlist');
    localStorage.setItem('dermamind-wishlist', currentWishlist || '[]');
}

// Add this function to be called from index2.html when wishlist changes
function updateWishlistFromMain() {
    if (window.wishlistManager) {
        window.wishlistManager.displayWishlist();
        window.wishlistManager.updateWishlistCount();
        window.wishlistManager.updateWishlistStats();
    }
}