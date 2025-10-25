// products.js - Central Product Database for DermaMind

const productDatabase = [
    // Original 6 Products (updated without videos)
    {
        id: 'forest-essentials',
        name: 'FOREST ESSENTIALS',
        description: 'Soundarya Radiance Cream',
        fullDescription: 'A luxurious Ayurvedic cream that enhances skin radiance with 24K gold and precious ingredients. Formulated with saffron, gold bhasma, and pearl, it helps reduce pigmentation and gives your skin a natural glow. Perfect for special occasions and daily use for radiant skin.',
        price: '₹2,950',
        category: 'moisturizer',
        skinTypes: ['dry', 'combination', 'normal'],
        concerns: ['dullness', 'pigmentation', 'aging'],
        ingredients: ['Saffron', 'Gold Bhasma', 'Pearl', 'Aloe Vera', 'Sandalwood'],
        image: './11zon_resized (2).jpeg',
        rating: 4.5,
        reviews: 128,
        size: '50ml'
    },
    {
        id: 'dyou-hustle',
        name: 'D\'you Hustle',
        description: 'Repairing Serum',
        fullDescription: 'An intensive overnight repair serum that works while you sleep to rejuvenate skin. Powered by SOS™ technology, it tackles multiple concerns including fine lines, dark spots, and uneven texture. Lightweight and fast-absorbing, perfect for all skin types.',
        price: '₹2,100',
        category: 'serum',
        skinTypes: ['all'],
        concerns: ['aging', 'fine lines', 'dark spots', 'uneven texture'],
        ingredients: ['Niacinamide', 'Peptides', 'Hyaluronic Acid', 'Vitamin C', 'Squalane'],
        image: './11zon_resized (1).jpeg',
        rating: 4.3,
        reviews: 89,
        size: '30ml'
    },
    {
        id: 'quench-botanics',
        name: 'Quench Botanics',
        description: 'Mama Cica Face Mist',
        fullDescription: 'A soothing face mist with Centella Asiatica that calms irritated skin and provides instant hydration. Enriched with hyaluronic acid and botanical extracts, it helps strengthen skin barrier and reduce redness. Perfect for post-sun exposure and sensitive skin.',
        price: '₹699',
        category: 'toner',
        skinTypes: ['sensitive', 'dry', 'combination'],
        concerns: ['redness', 'irritation', 'dehydration'],
        ingredients: ['Centella Asiatica', 'Hyaluronic Acid', 'Green Tea', 'Chamomile', 'Aloe Vera'],
        image: './11zon_resized (11).jpeg',
        rating: 4.2,
        reviews: 156,
        size: '100ml'
    },
    {
        id: 'kama-ayurveda',
        name: 'Kama Ayurveda',
        description: 'Kumkumadi Revitalizing Face Oil',
        fullDescription: 'An authentic Ayurvedic face oil with 21 precious ingredients including saffron and sandalwood. This rejuvenating oil helps reduce signs of aging, improves skin texture, and imparts a natural glow. Cold-pressed and traditionally prepared for maximum potency.',
        price: '₹2,495',
        category: 'face-oil',
        skinTypes: ['dry', 'normal', 'mature'],
        concerns: ['aging', 'dullness', 'dryness'],
        ingredients: ['Saffron', 'Sandalwood', 'Lotus', 'Turmeric', 'Almond Oil'],
        image: './11zon_resized (8).jpeg',
        rating: 4.6,
        reviews: 203,
        size: '15ml'
    },
    {
        id: 'foxtale',
        name: 'Foxtale',
        description: 'Dewy Sunscreen',
        fullDescription: 'A lightweight, non-greasy sunscreen that provides broad spectrum SPF 50 protection while giving a dewy finish. Formulated with hyaluronic acid and niacinamide, it protects against UV damage while hydrating and brightening the skin. Water-resistant for up to 4 hours.',
        price: '₹745',
        category: 'sunscreen',
        skinTypes: ['all'],
        concerns: ['sun protection', 'dehydration', 'dullness'],
        ingredients: ['Zinc Oxide', 'Hyaluronic Acid', 'Niacinamide', 'Vitamin E', 'Aloe Vera'],
        image: './11zon_resized (9).jpeg',
        rating: 4.4,
        reviews: 178,
        size: '50g'
    },
    {
        id: 'put-simply',
        name: 'Put Simply',
        description: 'Water Dam Moisturizer',
        fullDescription: 'A gel-based moisturizer that acts like a water dam for your skin, locking in hydration for 72 hours. With 5 types of hyaluronic acid and ceramides, it plumps skin and strengthens the moisture barrier without feeling heavy or greasy.',
        price: '₹1,099',
        category: 'moisturizer',
        skinTypes: ['oily', 'combination', 'sensitive'],
        concerns: ['dehydration', 'sensitivity', 'oiliness'],
        ingredients: ['5D Hyaluronic Acid', 'Ceramides', 'Squalane', 'Allantoin', 'Green Tea'],
        image: './11zon_resized (7).jpeg',
        rating: 4.1,
        reviews: 94,
        size: '50ml'
    },

    // New Products - Cleansers
    {
        id: 'suganda',
        name: 'Suganda',
        description: 'Green Tea Face Wash',
        fullDescription: 'A gentle foaming cleanser with green tea and centella that effectively removes impurities without stripping natural oils. Perfect for acne-prone and sensitive skin, it calms inflammation and prevents breakouts while maintaining skin pH balance.',
        price: '₹425',
        category: 'cleanser',
        skinTypes: ['oily', 'combination', 'sensitive'],
        concerns: ['acne', 'oiliness', 'sensitivity'],
        ingredients: ['Green Tea', 'Centella Asiatica', 'Tea Tree Oil', 'Aloe Vera', 'Glycerin'],
        image: 'https://suganda.co/cdn/shop/files/CGTFW_A_8_1280x.jpg?v=1759484270',
        rating: 4.3,
        reviews: 267,
        size: '100ml'
    },
    {
        id: 'dermaco',
        name: 'Dermaco',
        description: 'Ceramide Glow Face Wash',
        fullDescription: 'A creamy cleanser enriched with ceramides and hyaluronic acid that cleanses while maintaining skin barrier. Leaves skin soft, hydrated, and glowing. Sulfate-free formula suitable for daily use, even on sensitive skin.',
        price: '₹399',
        category: 'cleanser',
        skinTypes: ['dry', 'sensitive', 'normal'],
        concerns: ['dryness', 'sensitivity', 'barrier damage'],
        ingredients: ['Ceramides', 'Hyaluronic Acid', 'Oat Extract', 'Niacinamide', 'Vitamin E'],
        image: 'https://m.media-amazon.com/images/I/41zse6bDtFL.jpg',
        rating: 4.0,
        reviews: 189,
        size: '100ml'
    },

    // New Products - Serums
    {
        id: 'minimalist',
        name: 'Minimalist',
        description: '10% Niacinamide Serum',
        fullDescription: 'A potent serum with 10% niacinamide that controls sebum production, minimizes pores, and improves skin texture. Combined with zinc PCA and hyaluronic acid, it effectively targets acne marks and provides hydration without clogging pores.',
        price: '₹649',
        category: 'serum',
        skinTypes: ['oily', 'combination', 'acne-prone'],
        concerns: ['acne', 'large pores', 'oiliness', 'hyperpigmentation'],
        ingredients: ['10% Niacinamide', 'Zinc PCA', 'Hyaluronic Acid', 'Marine Hyaluronic'],
        image: 'https://images-static.nykaa.com/media/catalog/product/3/9/394e9c5MINIM00000001_a.jpg',
        rating: 4.5,
        reviews: 892,
        size: '30ml'
    },
    {
        id: 'pulp',
        name: 'Pulp',
        description: 'Date Night Glow Serum',
        fullDescription: 'An exfoliating serum with 16% AHA/BHA complex that reveals brighter, smoother skin overnight. Formulated with mandelic acid, glycolic acid, and salicylic acid to target texture, dullness, and congestion. Perfect for weekly use.',
        price: '₹1,250',
        category: 'serum',
        skinTypes: ['normal', 'combination', 'oily'],
        concerns: ['texture', 'dullness', 'congestion', 'blackheads'],
        ingredients: ['Mandelic Acid', 'Glycolic Acid', 'Salicylic Acid', 'Niacinamide', 'Green Tea'],
        image: 'https://img.tatacliq.com/images/i7/437Wx649H/MP000000009745500_437Wx649H_202107201837101.jpeg',
        rating: 4.2,
        reviews: 156,
        size: '30ml'
    },

    // New Products - Moisturizers
    {
        id: 'dot-key',
        name: 'Dot & Key',
        description: 'Barrier Repair Moisturizer',
        fullDescription: 'A ceramide-rich moisturizer that repairs damaged skin barrier and locks in moisture. With 5 types of ceramides and prebiotics, it strengthens skin defense system and soothes irritation. Non-comedogenic and suitable for sensitive skin.',
        price: '₹695',
        category: 'moisturizer',
        skinTypes: ['sensitive', 'dry', 'normal'],
        concerns: ['barrier damage', 'sensitivity', 'redness'],
        ingredients: ['5 Ceramides', 'Prebiotics', 'Niacinamide', 'Oat Extract', 'Squalane'],
        image: 'https://m.media-amazon.com/images/I/612gxDPcCGL.jpg',
        rating: 4.4,
        reviews: 324,
        size: '50ml'
    },
    {
        id: 'aqualogica',
        name: 'Aqualogica',
        description: 'Hydrate+ Glow Sleeping Mask',
        fullDescription: 'An overnight sleeping mask that works while you sleep to deliver intense hydration and wake up to glowing skin. With watermelon extract and hyaluronic acid, it plumps and brightens skin without feeling heavy.',
        price: '₹599',
        category: 'moisturizer',
        skinTypes: ['dry', 'combination', 'normal'],
        concerns: ['dehydration', 'dullness', 'dry patches'],
        ingredients: ['Watermelon Extract', 'Hyaluronic Acid', 'Vitamin C', 'Squalane', 'Jojoba Oil'],
        image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/020573fd-f63e-461b-bcb3-2270e6080ebe.__CR0,0,970,600_PT0_SX970_V1___.jpg',
        rating: 4.1,
        reviews: 178,
        size: '80g'
    },

    // New Products - Sunscreens
    {
        id: 'requil',
        name: 'Re\'equil',
        description: 'Ultra Matte Dry Touch Sunscreen',
        fullDescription: 'A matte finish sunscreen specifically formulated for oily and acne-prone skin. Provides SPF 50 PA++++ protection with zinc oxide and offers a completely non-greasy, dry touch finish that works well under makeup.',
        price: '₹675',
        category: 'sunscreen',
        skinTypes: ['oily', 'combination', 'acne-prone'],
        concerns: ['oiliness', 'acne', 'sun protection'],
        ingredients: ['Zinc Oxide', 'Silica', 'Vitamin E', 'Licorice Extract', 'Willow Bark'],
        image: 'https://m.media-amazon.com/images/I/51aJl-uPJfL._AC_UF350,350_QL80_.jpg',
        rating: 4.6,
        reviews: 567,
        size: '50g'
    },
    {
        id: 'ipca',
        name: 'IPCA',
        description: 'Acne-UV Gel Sunscreen',
        fullDescription: 'A specialized sunscreen for acne-prone skin that provides broad spectrum protection while being non-comedogenic. Oil-free and lightweight formula that doesn\'t clog pores or cause breakouts. Recommended by dermatologists.',
        price: '₹720',
        category: 'sunscreen',
        skinTypes: ['acne-prone', 'oily', 'sensitive'],
        concerns: ['acne', 'sun protection', 'sensitivity'],
        ingredients: ['Zinc Oxide', 'Octinoxate', 'Niacinamide', 'Aloe Vera', 'Vitamin E'],
        image: 'https://m.media-amazon.com/images/I/61cBzkn0ojL._AC_UF350,350_QL80_.jpg',
        rating: 4.3,
        reviews: 423,
        size: '50g'
    },

    // New Products - Face Oils
    {
        id: 'bloom',
        name: 'Bloom',
        description: 'Rosehip Regenerating Face Oil',
        fullDescription: 'A lightweight face oil rich in omega fatty acids and vitamin A that helps regenerate skin cells and improve elasticity. Excellent for reducing scars, fine lines, and improving overall skin texture without feeling greasy.',
        price: '₹1,450',
        category: 'face-oil',
        skinTypes: ['dry', 'combination', 'mature'],
        concerns: ['scarring', 'aging', 'dryness', 'uneven texture'],
        ingredients: ['Rosehip Oil', 'Jojoba Oil', 'Sea Buckthorn', 'Vitamin E', 'Carrot Seed'],
        image: 'https://m.media-amazon.com/images/I/51llyg9bkxL._AC_UF1000,1000_QL80_.jpg',
        rating: 4.4,
        reviews: 189,
        size: '30ml'
    },
    {
        id: 'juicy',
        name: 'Juicy Chemistry',
        description: 'Organic Blood Orange Face Oil',
        fullDescription: 'A 100% organic face oil that brightens and evens skin tone while providing antioxidant protection. Cold-pressed blood orange oil combined with rosehip and pomegranate delivers vitamins and fatty acids for radiant skin.',
        price: '₹1,850',
        category: 'face-oil',
        skinTypes: ['all'],
        concerns: ['dullness', 'hyperpigmentation', 'aging'],
        ingredients: ['Blood Orange Oil', 'Rosehip Oil', 'Pomegranate Oil', 'Jojoba Oil', 'Vitamin E'],
        image: 'https://m.media-amazon.com/images/I/71rF+fv3buL._AC_UF350,350_QL80_.jpg',
        rating: 4.2,
        reviews: 134,
        size: '30ml'
    },

    // New Products - Treatments
    {
        id: 'dr-seth',
        name: 'Dr. Seth\'s',
        description: 'Anti-Acne Spot Corrector',
        fullDescription: 'A targeted treatment with 2% salicylic acid and tea tree oil that quickly reduces acne and prevents future breakouts. Calms inflammation and fades post-acne marks. Can be used as spot treatment or all over face.',
        price: '₹349',
        category: 'treatment',
        skinTypes: ['oily', 'combination', 'acne-prone'],
        concerns: ['acne', 'inflammation', 'blackheads'],
        ingredients: ['2% Salicylic Acid', 'Tea Tree Oil', 'Zinc', 'Niacinamide', 'Willow Bark'],
        image: 'https://m.media-amazon.com/images/I/61UDVJ-4LLL.jpg',
        rating: 4.3,
        reviews: 278,
        size: '15ml'
    },
    {
        id: 'deconstruct',
        name: 'Deconstruct',
        description: 'Brightening Clearing Serum',
        fullDescription: 'A dual-action serum with 10% niacinamide and 0.3% alpha arbutin that targets both active acne and post-acne marks. Regulates sebum production while fading dark spots and improving skin clarity.',
        price: '₹799',
        category: 'serum',
        skinTypes: ['oily', 'combination', 'acne-prone'],
        concerns: ['acne', 'hyperpigmentation', 'oiliness'],
        ingredients: ['10% Niacinamide', '0.3% Alpha Arbutin', 'Zinc PCA', 'Hyaluronic Acid'],
        image: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/d/2df84ecDECON00000009_1.jpg',
        rating: 4.5,
        reviews: 456,
        size: '30ml'
    }
];

// Helper functions
const productHelpers = {
    // Get all products
    getAllProducts: () => productDatabase,
    
    // Get product by ID
    getProductById: (id) => productDatabase.find(product => product.id === id),
    
    // Get products by category
    getProductsByCategory: (category) => 
        productDatabase.filter(product => product.category === category),
    
    // Get products by skin type
    getProductsBySkinType: (skinType) => 
        productDatabase.filter(product => product.skinTypes.includes(skinType)),
    
    // Get products by concern
    getProductsByConcern: (concern) => 
        productDatabase.filter(product => product.concerns.includes(concern)),
    
    // Search products
    searchProducts: (query) => {
        const lowerQuery = query.toLowerCase();
        return productDatabase.filter(product => 
            product.name.toLowerCase().includes(lowerQuery) ||
            product.description.toLowerCase().includes(lowerQuery) ||
            product.category.toLowerCase().includes(lowerQuery) ||
            product.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(lowerQuery)
            )
        );
    },
    
    // Get categories
    getCategories: () => {
        const categories = [...new Set(productDatabase.map(product => product.category))];
        return categories;
    },
    
    // Get skin types
    getSkinTypes: () => {
        const allSkinTypes = productDatabase.flatMap(product => product.skinTypes);
        return [...new Set(allSkinTypes)];
    },
    
    // Get concerns
    getConcerns: () => {
        const allConcerns = productDatabase.flatMap(product => product.concerns);
        return [...new Set(allConcerns)];
    }
};