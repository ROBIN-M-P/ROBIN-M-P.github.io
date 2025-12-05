// Initialize Icons
lucide.createIcons();

function switchTab(tabId) {
    // 1. Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
    });

    // 2. Remove 'active' class from all nav buttons
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
        selectedTab.classList.add('active');
    }

    // 4. Highlight the correct sidebar button
    // Find the button that calls this specific switchTab('tabId')
    // We iterate through buttons to match the onclick attribute or logic
    // A simpler way is to match by index, but let's do it by context.
    
    // In this specific HTML structure, we can just grab them by order
    // Order: About(0), Resume(1), Portfolio(2), Contact(3)
    const indexMap = {
        'about': 0,
        'resume': 1,
        'portfolio': 2,
        'contact': 3
    };
    
    if (navBtns[indexMap[tabId]]) {
        navBtns[indexMap[tabId]].classList.add('active');
    }
    
    // Re-initialize icons if dynamic content requires it (optional but good practice)
    lucide.createIcons();
}

// Set default tab on load (if not set in HTML)
document.addEventListener('DOMContentLoaded', () => {
    // Check if we want to start on a specific tab, else default to 'about'
    // This is already handled by the HTML classes (About has 'active', others 'hidden')
});
