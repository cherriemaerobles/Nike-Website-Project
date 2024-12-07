let favoriteCount = 0;   // This will track the total number of favorites

// Update the heart icon counter
const updateFavoriteCounter = () => {
    const heartIcon = document.querySelector('.fa-heart');
    let favoriteBadge = heartIcon.querySelector('.favorite-badge');

    // If the favorite badge doesn't exist, create one
    if (!favoriteBadge) {
        favoriteBadge = document.createElement('span');
        favoriteBadge.classList.add('favorite-badge');
        favoriteBadge.style.position = 'absolute';
        favoriteBadge.style.top = '0';
        favoriteBadge.style.right = '0';
        favoriteBadge.style.backgroundColor = '#c72092';
        favoriteBadge.style.color = 'white';
        favoriteBadge.style.borderRadius = '50%';
        favoriteBadge.style.padding = '5px';
        favoriteBadge.style.fontSize = '12px';
        favoriteBadge.style.fontWeight = 'bold';
        favoriteBadge.style.minWidth = '20px';
        favoriteBadge.style.textAlign = 'center';
        favoriteBadge.style.transform = 'translate(50%, -50%)';

        heartIcon.style.position = 'relative';
        heartIcon.appendChild(favoriteBadge);
    }

    // Update the favorite count badge with the current favorite count
    favoriteBadge.textContent = favoriteCount;
};

// Function to initialize the favorite button functionality
const initializeFavorites = () => {
    // Add event listener to the "Add to Favorites" button (class: .add-fav)
    document.querySelectorAll('.btn.add-fav').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();  // Prevent this event from bubbling up

            // Increment the favorite count every time the Favorite button is clicked
            favoriteCount++;
            updateFavoriteCounter();  // Update the heart icon counter
        });
    });

    // Add event listener to the "Details" button (class: .details)
    document.querySelectorAll('.btn.details').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();  // Prevent this event from affecting the heart icon count

            // Open the product details (or any other logic you want here)
            const productIndex = event.target.getAttribute('data-index');
            const product = products[productIndex];  // Get product details (if necessary)
            openProductDetails(product);  // Example function to open the product details
        });
    });
};

// Function to open the product details modal (you can customize this)
const openProductDetails = (product) => {
    // Here you could display the product details in a modal or another section of the page
    console.log('Opening details for product:', product);
};

// Function to initialize the heart icon and its badge when the page loads
document.addEventListener('DOMContentLoaded', initializeFavorites);
