// user-service.js - Minimal JSON integration
class UserService {
    constructor() {
        this.userData = null;
        this.init();
    }

    async init() {
        try {
            const response = await fetch('./data/user-data.json');
            this.userData = await response.json();
            console.log('✅ User data loaded from JSON:', this.userData);
            
            // Optional: Use demo user data if no users exist
            this.initializeDemoUser();
        } catch (error) {
            console.log('❌ Could not load user-data.json, using localStorage only');
            this.userData = { users: [], appInfo: {} };
        }
    }

    initializeDemoUser() {
        const existingUsers = JSON.parse(localStorage.getItem('dermamind-users')) || [];
        
        if (existingUsers.length === 0 && this.userData.users.length > 0) {
            // Add demo user to localStorage
            localStorage.setItem('dermamind-users', JSON.stringify(this.userData.users));
            console.log('✅ Demo user initialized from JSON');
        }
    }

    // Simple method to prove JSON is being used
    getAppInfo() {
        return this.userData?.appInfo || { name: 'DermaMind', collegeProject: true };
    }

    // Check if JSON data is loaded
    isJSONLoaded() {
        return this.userData !== null;
    }
}

// Initialize the service
const userService = new UserService();