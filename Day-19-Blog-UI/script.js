
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with React Hooks",
        excerpt: "Learn how to use useState, useEffect, and other hooks to build modern React applications.",
        content: "React Hooks revolutionized how we write React components. In this post, we'll dive deep into the most useful hooks like useState for managing state, useEffect for side effects, and useContext for global state. You'll learn practical examples and best practices to write cleaner, more maintainable code.",
        category: "coding",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
        author: "Sarah Chen",
        date: "May 10, 2024",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "The Future of Web Design in 2025",
        excerpt: "Exploring upcoming trends in UI/UX, including glassmorphism, micro-interactions, and AI-driven design.",
        content: "Web design is evolving faster than ever. This year we're seeing a shift towards more immersive experiences, with glassmorphism taking center stage. Micro-interactions are becoming more sophisticated, and AI tools are helping designers create personalized experiences at scale. We'll explore these trends and how to implement them in your projects.",
        category: "design",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
        author: "Marcus Rivera",
        date: "May 8, 2024",
        readTime: "7 min read"
    },
    {
        id: 3,
        title: "10 Productivity Tips for Remote Workers",
        excerpt: "Boost your efficiency with these simple yet effective strategies for working from home.",
        content: "Working remotely offers freedom but also challenges. In this guide, we share 10 actionable tips to stay productive, including setting up a dedicated workspace, using time-blocking techniques, taking regular breaks, and leveraging collaboration tools. These strategies helped thousands of remote workers improve their focus and work-life balance.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&h=400&fit=crop",
        author: "Emma Watson",
        date: "May 5, 2024",
        readTime: "4 min read"
    },
    {
        id: 4,
        title: "Understanding JavaScript Closures",
        excerpt: "A beginner-friendly explanation of closures and how they work under the hood.",
        content: "Closures are one of JavaScript's most powerful features. They allow functions to remember variables from their outer scope even after the outer function has returned. This concept is crucial for understanding callbacks, event handlers, and functional programming patterns. We'll break it down with simple examples and real-world use cases.",
        category: "coding",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=400&fit=crop",
        author: "David Kim",
        date: "May 3, 2024",
        readTime: "6 min read"
    },
    {
        id: 5,
        title: "Building Your First REST API with Node.js",
        excerpt: "Step-by-step tutorial to create a simple REST API using Express and MongoDB.",
        content: "APIs power modern web applications. In this tutorial, you'll learn how to build a complete REST API from scratch using Node.js, Express framework, and MongoDB database. We'll cover routing, middleware, authentication, and best practices for structuring your code. By the end, you'll have a working API ready for production.",
        category: "tech",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
        author: "Alex Johnson",
        date: "April 30, 2024",
        readTime: "8 min read"
    },
    {
        id: 6,
        title: "Color Theory for UI Designers",
        excerpt: "Master the art of choosing color palettes that evoke the right emotions.",
        content: "Color choices can make or break your design. This comprehensive guide covers color psychology, harmony rules, accessibility considerations, and tools for creating stunning palettes. You'll learn how to use color to guide user attention, establish brand identity, and create emotional connections with your audience.",
        category: "design",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
        author: "Lisa Wang",
        date: "April 28, 2024",
        readTime: "5 min read"
    },
    {
        id: 7,
        title: "Meditation for Beginners",
        excerpt: "Simple techniques to reduce stress and improve mental clarity.",
        content: "Meditation isn't complicated. This beginner's guide walks you through simple breathing exercises, body scans, and mindfulness techniques you can practice anywhere. Learn how to quiet your mind, reduce anxiety, and cultivate presence in your daily life. No special equipment or experience needed.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
        author: "Priya Sharma",
        date: "April 25, 2024",
        readTime: "4 min read"
    },
    {
        id: 8,
        title: "CSS Grid vs Flexbox: When to Use Which",
        excerpt: "Understanding the strengths of each layout system and best use cases.",
        content: "Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Grid excels at two-dimensional layouts, while Flexbox is perfect for one-dimensional arrangements. This article explains the differences with practical examples, helping you choose the right tool for each layout challenge you face.",
        category: "coding",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
        author: "Tom Harris",
        date: "April 22, 2024",
        readTime: "6 min read"
    }
];

let currentFilter = 'all';

function getCategoryLabel(cat) {
    let labels = {
        tech: '💻 Tech',
        design: '🎨 Design',
        lifestyle: '🌿 Lifestyle',
        coding: '⚡ Coding'
    };
    return labels[cat] || cat;
}

function filterPosts() {
    if (currentFilter === 'all') {
        return blogPosts;
    } else {
        return blogPosts.filter(post => post.category === currentFilter);
    }
}

function renderBlogPosts() {
    let filtered = filterPosts();
    let gridContainer = document.getElementById('blogGrid');

    if (!gridContainer) return;

    if (filtered.length === 0) {
        gridContainer.innerHTML = `<div class="no-results"><i class="ri-inbox-line" style="font-size: 48px;"></i><p>No posts found in this category</p></div>`;
        return;
    }

    let cardsHtml = '';
    for (let post of filtered) {
        cardsHtml += `
                <div class="blog-card" data-id="${post.id}">
                    <img class="card-img" src="${post.image}" alt="${post.title}" onerror="this.src='https://placehold.co/600x400/e2e8f0/64748b?text=Blog+Image'">
                    <div class="card-content">
                        <span class="card-category">${getCategoryLabel(post.category)}</span>
                        <h3 class="card-title">${post.title}</h3>
                        <p class="card-excerpt">${post.excerpt.substring(0, 100)}...</p>
                        <div class="card-meta">
                            <span><i class="ri-user-line"></i> ${post.author}</span>
                            <span><i class="ri-calendar-line"></i> ${post.date}</span>
                        </div>
                        <div class="card-meta" style="margin-top: 10px;">
                            <span><i class="ri-time-line"></i> ${post.readTime}</span>
                            <a href="#" class="read-more" data-id="${post.id}">Read More <i class="ri-arrow-right-line"></i></a>
                        </div>
                    </div>
                </div>
            `;
    }

    gridContainer.innerHTML = cardsHtml;

    let allReadMore = document.querySelectorAll('.read-more');
    for (let btn of allReadMore) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            let postId = parseInt(this.getAttribute('data-id'));
            openPostModal(postId);
        });
    }
}

function openPostModal(postId) {
    let post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    let modal = document.getElementById('postModal');
    let modalContentDiv = document.getElementById('modalContent');

    if (!modal || !modalContentDiv) return;

    modalContentDiv.innerHTML = `
            <img class="modal-img" src="${post.image}" alt="${post.title}" onerror="this.src='https://placehold.co/700x400/e2e8f0/64748b?text=No+Image'">
            <h2 class="modal-title">${post.title}</h2>
            <div style="display: flex; gap: 20px; margin-bottom: 20px; font-size: 13px; color: #64748b;">
                <span><i class="ri-user-line"></i> ${post.author}</span>
                <span><i class="ri-calendar-line"></i> ${post.date}</span>
                <span><i class="ri-time-line"></i> ${post.readTime}</span>
                <span><i class="ri-price-tag-3-line"></i> ${getCategoryLabel(post.category)}</span>
            </div>
            <div class="modal-body-text">
                ${post.content}
            </div>
        `;

    modal.classList.add('open');

    let closeBtn = document.getElementById('closeModalBtn');
    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.classList.remove('open');
        };
    }

    modal.onclick = function (e) {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    };
}

function setupFilters() {
    let filterBtns = document.querySelectorAll('.filter-btn');
    for (let btn of filterBtns) {
        btn.addEventListener('click', function () {
            for (let b of filterBtns) {
                b.classList.remove('active');
            }
            this.classList.add('active');

            currentFilter = this.getAttribute('data-cat');
            renderBlogPosts();
        });
    }
}

function init() {
    renderBlogPosts();
    setupFilters();
}

init();