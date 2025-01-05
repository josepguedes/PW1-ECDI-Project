<template>
    <main class="venue-page">  
      <section class="venue-hero" aria-labelledby="venue-name">
        <img src="https://cdn.builder.io/api/v1/image/assets/f7dd8e77dcfe4504b1da5d2d682eab2f/a19112baa017021230f23563371010f9af6cdea0c04eb5ea9ee82e855e9df376?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&" alt="KitKatClub venue interior" class="hero-image" />
        <h2 id="venue-name" class="venue-title">KitKatClub</h2>
      </section>
  
      <section class="venue-description" aria-label="Venue description">
        <p class="description-text">
          The KitKatClub is a legendary Berlin venue celebrated for its bold,
          open-minded atmosphere and unforgettable electronic music events. Known
          for embracing individuality and freedom, it has become an iconic hotspot
          in the city's vibrant nightlife scene.
        </p>
      </section>
  
      <section class="venue-gallery" aria-labelledby="gallery-title">
        <h2 id="gallery-title" class="section-title">Venue Photos</h2>
        <div class="gallery-slider" role="region" aria-label="Venue photo gallery">
          <img src="https://cdn.builder.io/api/v1/image/assets/f7dd8e77dcfe4504b1da5d2d682eab2f/c295d6bf810e73671a7564c56dcb5f9768e248d0df306a59c61fab74ef1570af?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&" alt="Gallery image 1" class="gallery-image" />
          <div class="slider-controls">
            <button class="slider-button prev" aria-label="Previous image">
              <img src="https://cdn.builder.io/api/v1/image/assets/f7dd8e77dcfe4504b1da5d2d682eab2f/a7efd23b1aed10e58e8ab1b71e5d7745030c404bc9903e940352130ddc6c9314?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&" alt="" />
            </button>
            <div class="slider-indicators" role="tablist">
              <button role="tab" aria-selected="true" class="indicator active"></button>
              <button role="tab" aria-selected="false" class="indicator"></button>
              <button role="tab" aria-selected="false" class="indicator"></button>
              <button role="tab" aria-selected="false" class="indicator"></button>
              <button role="tab" aria-selected="false" class="indicator"></button>
            </div>
            <button class="slider-button next" aria-label="Next image">
              <img src="https://cdn.builder.io/api/v1/image/assets/f7dd8e77dcfe4504b1da5d2d682eab2f/5f4a92bf2a170ea6f25b8d812c3b8315dcf047aa0e93c41a9011cf9b0c2dc90b?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&" alt="" />
            </button>
          </div>
        </div>
      </section>
  
      <section class="related-events" aria-labelledby="events-title">
        <h2 id="events-title" class="section-title">Related Events</h2>
        
        <div class="events-group">
          <h3 class="date-heading">Friday, 24th of January</h3>
          <ul class="events-list">
            <li class="event-item">
              <div class="event-header">
                <h4 class="event-title">Hypnøtica opening party</h4>
                <p class="event-venue">KitKatClub</p>
                <div class="event-time">
                  <time datetime="20:00-05:00">20:00-05:00</time>
                  <img src="https://cdn.builder.io/api/v1/image/assets/f7dd8e77dcfe4504b1da5d2d682eab2f/4fa684cc3e9979ecb53ee6a94fcea9476ea97b4527e5a5606e4d9ab59dca7840?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&" alt="" class="event-icon" />
                </div>
              </div>
              <p class="event-artists">Mischluft, Charlotte de Witte, 6ejou, Ace Ventura</p>
            </li>
          </ul>
        </div>
  
        <div class="events-group">
          <h3 class="date-heading">Saturday, 25th of January</h3>
          <ul class="events-list">
            <li class="event-item">
              <div class="event-header">
                <h4 class="event-title">Hypnøtica opening party</h4>
                <p class="event-venue">KitKatClub</p>
                <div class="event-time">
                  <time datetime="20:00-05:00">20:00-05:00</time>
                  <img src="https://cdn.builder.io/api/v1/image/assets/f7dd8e77dcfe4504b1da5d2d682eab2f/4fa684cc3e9979ecb53ee6a94fcea9476ea97b4527e5a5606e4d9ab59dca7840?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&" alt="" class="event-icon" />
                </div>
              </div>
              <p class="event-artists">Mischluft, Charlotte de Witte, 6ejou, Ace Ventura</p>
            </li>
          </ul>
        </div>
      </section>
  
      <section class="venue-location" aria-labelledby="location-title">
        <h2 id="location-title" class="section-title">Location</h2>
        <div class="map-container">
          <img src="https://cdn.builder.io/api/v1/image/assets/f7dd8e77dcfe4504b1da5d2d682eab2f/8c74c3cd95083f89bcac7e18329a678c2845100ce3ab503e0175074afd7c3f21?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&" alt="Map showing venue location" class="map-image" />
          <span class="map-marker">ø</span>
        </div>
      </section>
      
    </main>
  </template>
  
  <style scoped>
  /* Original styles preserved and organized */
  .venue-page {
    background: var(--Main-Black, #010306);
    width: 100%;
    overflow: hidden;
  }
  
  .venue-hero {
    position: relative;
    min-height: 587px;
    padding: 396px 64px 54px;
  }
  
  .hero-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .venue-title {
    position: relative;
    color: var(--Main-White, #fafafa);
    font: 700 96px Aspekta, sans-serif;
  }
  
  .venue-description {
    padding: 64px;
    text-align: center;
  }
  
  .description-text {
    color: var(--Gray-100, #bec7ce);
    font: 300 30px Aspekta, sans-serif;
    letter-spacing: 1.5px;
    max-width: 914px;
    margin: 0 auto;
  }
  
  .section-title {
    color: var(--Main-White, #fafafa);
    font: 600 64px Aspekta, sans-serif;
    margin: 64px 0 32px 48px;
  }
  
  .gallery-slider {
    padding: 40px 64px;
  }
  
  .gallery-image {
    width: 100%;
    aspect-ratio: 3.25;
    object-fit: contain;
  }
  
  .slider-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
  
  .slider-button {
    padding: 8px;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .slider-indicators {
    display: flex;
    gap: 10px;
    padding: 8px;
  }
  
  .indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--Carousel-Gray, #999);
    border: none;
    padding: 0;
    cursor: pointer;
  }
  
  .indicator.active {
    width: 16px;
    height: 16px;
    background-color: var(--Blue-300, #0067ca);
  }
  
  .events-group {
    margin: 35px 42px;
  }
  
  .date-heading {
    color: var(--Main-White, #fafafa);
    font: 400 48px Aspekta, sans-serif;
  }
  
  .events-list {
    list-style: none;
    padding: 0;
    margin: 32px 0;
  }
  
  .event-item {
    border-top: 1px solid var(--Gray-500, #52595f);
    border-bottom: 1px solid var(--Gray-500, #52595f);
    padding: 32px 0;
  }
  
  .event-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--Main-White, #fafafa);
    font: 400 24px Aspekta, sans-serif;
  }
  
  .event-time {
    display: flex;
    align-items: center;
    gap: 48px;
  }
  
  .event-icon {
    width: 28px;
    aspect-ratio: 0.93;
  }
  
  .event-artists {
    color: var(--Gray-100, #bec7ce);
    font: 350 20px Aspekta, sans-serif;
    margin-top: 12px;
  }
  
  .map-container {
    position: relative;
    border-radius: 20px;
    min-height: 700px;
    margin: 64px 42px;
  }
  
  .map-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
    border-radius: 20px;
  }
  
  .map-marker {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 39px;
    height: 39px;
    border-radius: 8px;
    background: var(--Main-Black, #010306);
    border: 1px solid var(--Main-White, #fafafa);
    color: transparent;
    -webkit-text-stroke: 1px var(--Main-White, #fafafa);
    font: 500 24px Aspekta, sans-serif;
    text-transform: uppercase;
  }
  
  .site-footer {
    border-top: 1px solid var(--Gray-500, #52595f);
    padding: 96px 48px;
    margin-top: 115px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    gap: 100px;
    flex-wrap: wrap;
  }
  
  .newsletter-section {
    flex: 0 1 427px;
  }
  
  .footer-heading {
    color: var(--Gray-100, #bec7ce);
    font: 500 20px Aspekta, sans-serif;
  }
  
  .newsletter-form {
    display: flex;
    gap: 24px;
    margin-top: 32px;
  }
  
  .email-input {
    flex: 1;
    min-width: 240px;
    border: none;
    border-bottom: 1px solid var(--Gray-400, #6b737a);
    background: transparent;
    color: var(--Gray-400, #6b737a);
    padding-bottom: 12px;
    font: 400 16px Aspekta, sans-serif;
  }
  
  .submit-button {
    border-radius: 12px;
    background: var(--Main-White, #fafafa);
    color: var(--Main-Black, #010306);
    padding: 12px 24px;
    font: 500 16px Aspekta, sans-serif;
    border: none;
    cursor: pointer;
  }
  
  .footer-nav {
    display: flex;
    gap: 96px;
    flex-wrap: wrap;
  }
  
  .nav-section {
    min-width: 81px;
  }
  
  .nav-title {
    color: var(--Gray-100, #bec7ce);
    font: 400 18px Aspekta, sans-serif;
    margin-bottom: 16px;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-links a {
    color: var(--Main-White, #fafafa);
    text-decoration: none;
    font: 500 20px Aspekta, sans-serif;
    display: block;
    margin-bottom: 8px;
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  
  @media (max-width: 991px) {
    .header {
      padding: 20px;
    }
  
    .venue-hero {
      padding: 100px 20px 0;
    }
  
    .venue-title {
      font-size: 40px;
    }
  
    .section-title {
      font-size: 40px;
      margin: 40px 10px;
    }
  
    .gallery-slider {
      padding: 20px;
    }
  
    .date-heading {
      font-size: 40px;
    }
  
    .events-group {
      margin: 40px 10px;
    }
  
    .map-container {
      margin: 40px 10px;
    }
  
    .site-footer {
      padding: 40px 20px;
      margin-top: 40px;
    }
  
    .footer-content {
      gap: 40px;
    }
  }
  </style>