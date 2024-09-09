// Select all course cards and navigation buttons
const cards = document.querySelectorAll('.course-card');
const navButtons = document.querySelectorAll('.nav a');
const sortButton = document.querySelector('.btn');

// Filter cards by category
navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const category = e.target.textContent.toLowerCase(); // Get clicked category
        
        // Show all cards if 'All' is clicked
        if (category === 'all') {
            cards.forEach(card => card.style.display = 'block');
        } else {
            // Hide cards that don't match the selected category
            cards.forEach(card => {
                if (card.dataset.category.toLowerCase() === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });
});

// Sort cards by views
sortButton.addEventListener('click', () => {
    const container = document.querySelector('.container');
    
    // Convert NodeList to array for sorting
    const sortedCards = Array.from(cards).sort((a, b) => {
        const viewsA = parseInt(a.dataset.views);
        const viewsB = parseInt(b.dataset.views);
        return viewsB - viewsA; // Sort in descending order based on views
    });
    
    // Remove all existing cards from the container
    container.innerHTML = '';
    
    // Append sorted cards back to the container
    sortedCards.forEach(card => container.appendChild(card));
    
    // Re-append the "No Content" div after sorting
    container.appendChild(noContent);
});





const noContent = document.querySelector('.no-content');

// Filter cards by category
navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const category = e.target.textContent.toLowerCase(); // Get clicked category
        let hasContent = false; // Flag to check if there are any cards in the category

        // Show all cards if 'All' is clicked
        if (category === 'all') {
            cards.forEach(card => card.style.display = 'block');
            noContent.style.display = 'none'; // Hide "No Content" message
            hasContent = true; // Because 'All' will always show cards
        } else {
            // Hide cards that don't match the selected category
            cards.forEach(card => {
                if (card.dataset.category.toLowerCase() === category) {
                    card.style.display = 'block';
                    hasContent = true; // There's at least one card in this category
                } else {
                    card.style.display = 'none';
                }
            });

            // Show "No Content" message if no cards are found for the selected category
            if (!hasContent) {
                noContent.style.display = 'block'; // Show "No Content" section
            } else {
                noContent.style.display = 'none'; // Hide it if cards are present
            }
        }
    });
});

// Sort cards by views
sortButton.addEventListener('click', () => {
    const container = document.querySelector('.container');
    
    // Convert NodeList to array for sorting
    const sortedCards = Array.from(cards).sort((a, b) => {
        const viewsA = parseInt(a.dataset.views);
        const viewsB = parseInt(b.dataset.views);
        return viewsB - viewsA; // Sort in descending order
    });
    
    // Remove all existing cards from the container
    container.innerHTML = '';
    
    // Append sorted cards back to the container
    sortedCards.forEach(card => container.appendChild(card));
    
    // Re-append the "No Content" div after sorting
    container.appendChild(noContent);
});
