<template>
  <article class="article-container">
    <img loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/f7dd8e77dcfe4504b1da5d2d682eab2f/8775aba4a4329e3dc48783ceae77ef0dd0a62453615f05264b474b64cbde6ff3?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&"
      class="hero-image" alt="Hypnotica Festival 2025 main stage with dramatic lighting and crowd" />
    <div class="article-header">
      <h1 class="article-title">
        The Countdown Begins: Berlin Awaits Hypnotica Festival 2025
      </h1>
      <time datetime="2024-12-20" class="article-date">December 20, 2024</time>
    </div>
    <section class="article-content">
      <p class="article-text">
        Berlin, the epicenter of electronic music and cultural innovation, is
        gearing up for one of the most anticipated events of the year: the
        Hypnotica Festival 2025. <br /><br />Spanning three electrifying days and
        nights from January 3 to January 5, 2025, this groundbreaking festival
        promises to transform the city into a pulsating hub of cutting-edge sound,
        visual artistry, and unforgettable experiences.<br /><br />Set against the
        backdrop of Berlin's most iconic venues, Hypnotica will feature a
        staggering 100+ performances, showcasing the very best of techno, deep
        house, trance, drum and bass, and other electronic music genres.
        <br /><br />Each venue, from the legendary Berghain to the sprawling Arena
        Berlin, will immerse attendees in unique sonic journeys, enhanced by
        stunning visuals and state-of-the-art production.
      </p>
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/f7dd8e77dcfe4504b1da5d2d682eab2f/40b8d3da957c79e0992c66e721d1c012ea6c9fe77a65fd452171a640ed8eb77d?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&"
        class="content-image" alt="Festival attendees dancing at a previous Hypnotica event" />
      <p class="article-text">
        This year, Hypnotica is raising the bar with a lineup that includes some
        of the biggest names in the global electronic music scene.
        <br /><br />Fans can look forward to headlining sets from Charlotte de
        Witte, Adam Beyer, and a host of other trailblazing DJs and producers, all
        delivering high-energy performances that will keep the dancefloors alive
        until dawn.<br /><br />But Hypnotica is more than just music—it's an
        experience. From exclusive afterparties in hidden Berlin clubs to chill
        daytime sessions at Tempelhof Airport, the festival caters to every
        mood.<br /><br />For those seeking deeper engagement, the event offers
        artist Q&A sessions, immersive workshops, and even a secret stage hidden
        in the city for adventurous festivalgoers to discover.
      </p>
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/f7dd8e77dcfe4504b1da5d2d682eab2f/a51e96f1cc075cdfe8eccca2d47dff8ff66d4258cb365abdad5ebb4336ee4718?apiKey=f7dd8e77dcfe4504b1da5d2d682eab2f&"
        class="content-image" alt="Sustainable stage setup with solar panels at Hypnotica Festival" />
      <p class="article-text">
        Is also leading the charge for sustainability in music festivals. With
        eco-friendly initiatives such as solar-powered stages, recycling programs,
        and sustainable merchandise, the festival aims to minimize its
        environmental footprint while delivering an unparalleled experience.<br /><br />As
        the countdown to January begins, the excitement is palpable. Whether
        you're a die-hard fan of Berlin's electronic music scene or a curious
        newcomer ready to dive into its hypnotic beats, Hypnotica Festival 2025
        promises to be the ultimate start to your new year.<br /><br /><br />Get
        ready to lose yourself in the music, the culture, and the energy of
        Berlin. Tickets are selling fast! Don't miss your chance to be part of
        this landmark event!
      </p>
    </section>
    <div class="section-divider" role="separator"></div>
    <h2 class="more-news-heading">More News</h2>
  </article>
</template>

<style scoped>
.article-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  margin-top: 100px;
}

.hero-image,
.content-image {
  width: 100%;
  border-radius: 15px;
  margin: 32px 0 0;
  max-width: 1344px;
}

.hero-image {
  aspect-ratio: 2.28;
}

.content-image {
  aspect-ratio: 2.02;
  max-width: 1114px;
  margin: 48px 0 0;
}

.article-header {
  display: flex;
  margin: 32px 0 0;
  width: 100%;
  max-width: 1344px;
  flex-direction: column;
  font-family: Aspekta, sans-serif;
  text-align: left;
  /* Título e data alinhados à esquerda */
}

.article-title {
  color: var(--Main-White, #fafafa);
  font: 600 64px Aspekta, sans-serif;
  margin: 0 0 0 37px;
}

.article-date {
  color: var(--Gray-200, #a2aab1);
  font: 250 24px Aspekta, sans-serif;
  margin: 16px 0 0 40px;
}

.article-text {
  color: var(--Gray-100, #bec7ce);
  letter-spacing: 1.2px;
  margin: 48px auto 0;
  /* Centraliza horizontalmente */
  width: 800px;
  font: 300 24px Aspekta, sans-serif;
  text-align: center;
  /* Centraliza o texto */
}

.section-divider {
  margin: 95px 0 0;
  width: 1344px;
  height: 1px;
  border: 1px solid rgba(255, 255, 255, 1);
}

.more-news-heading {
  color: var(--Main-White, #fafafa);
  text-align: center;
  margin: 96px auto 0;
  /* Centraliza horizontalmente */
  font: 700 64px Aspekta, sans-serif;
}

@media (max-width: 991px) {

  .hero-image,
  .content-image {
    max-width: 100%;
  }

  .content-image {
    margin-top: 40px;
  }

  .article-header {
    max-width: 100%;
  }

  .article-title {
    font-size: 40px;
  }

  .article-text {
    max-width: 100%;
    margin-top: 40px;
  }

  .section-divider {
    margin-top: 40px;
  }

  .more-news-heading {
    margin-top: 40px;
    font-size: 40px;
  }
}
</style>
