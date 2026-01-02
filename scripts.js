// JavaScript for Hamburger Menu
function toggleMenu() {
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.classList.toggle('show');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('dropdownMenu');
  const hamburger = document.querySelector('.hamburger-menu');
  
  if (!hamburger.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove('show');
  }
});

// Close dropdown when pressing Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    document.getElementById('dropdownMenu').classList.remove('show');
  }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-item a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
  
function DisplaySearchbar(){
  document.getElementById('searchBar').addEventListener('onclick', DisplaySearchbar());
}
  


// YouTube video functions - Updated to play in video section
function playVideoInSection(videoUrl) {
  // Extract YouTube video ID from URL
  let videoId = '';
  
  // Handle different YouTube URL formats
  if (videoUrl.includes('youtube.com/watch?v=')) {
    videoId = videoUrl.split('v=')[1].split('&')[0];
  } else if (videoUrl.includes('youtu.be/')) {
    videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
  } else if (videoUrl.includes('youtube.com/embed/')) {
    videoId = videoUrl.split('embed/')[1].split('?')[0];
  }
  
  if (videoId) {
    // Get the video section elements
    const videoSection = document.getElementById('video-box');
    const videoPlaceholder = document.getElementById('video-placeholder');
    const videoPlayer = document.getElementById('video-player');
    const videoIframe = document.getElementById('video-iframe');
    
    if (videoSection && videoPlaceholder && videoPlayer && videoIframe) {
      // Hide placeholder and show video player
      videoPlaceholder.style.display = 'none';
      videoPlayer.style.display = 'block';
      
      // Update the iframe src to play the selected video
      videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      
      // Scroll to video section
      videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

// Function to reset video section to placeholder
function resetVideoSection() {
  const videoPlaceholder = document.getElementById('video-placeholder');
  const videoPlayer = document.getElementById('video-player');
  const videoIframe = document.getElementById('video-iframe');
  
  if (videoPlaceholder && videoPlayer && videoIframe) {
    videoPlaceholder.style.display = 'block';
    videoPlayer.style.display = 'none';
    videoIframe.src = '';
  }
}

// Function to handle YouTube button clicks
function handleYouTubeButtonClick(event) {
  event.preventDefault(); // Prevent default link behavior
  const videoUrl = event.currentTarget.href;
  playVideoInSection(videoUrl);
}

// Add event listeners for YouTube buttons
document.addEventListener('DOMContentLoaded', function() {
  // Get all YouTube buttons
  const youtubeButtons = document.querySelectorAll('.youtube-btn');
  
  // Add click event listeners to each button
  youtubeButtons.forEach(button => {
    button.addEventListener('click', handleYouTubeButtonClick);
  });
});