import { defineStore } from 'pinia';

export const useNewsStore = defineStore('news', {
    state: () => ({
      news: [
        {
          id: "1",
          title: "The Countdown Begins: Berlin Awaits Hypnotica Festival 2025",
          date: "2024-12-20",
          description: "Berlin prepares for Hypnotica Festival 2025 with over 100 performances and immersive experiences.",
          content: `Berlin, the epicenter of electronic music and cultural innovation, is gearing up for one of the most anticipated events of the year: the Hypnotica Festival 2025.
Spanning three electrifying days and nights from January 3 to January 5, 2025, this groundbreaking festival promises to transform the city into a pulsating hub of cutting-edge sound, visual artistry, and unforgettable experiences.
Set against the backdrop of Berlin's most iconic venues, Hypnotica will feature a staggering 100+ performances, showcasing the very best of techno, deep house, trance, drum and bass, and other electronic music genres.
Each venue, from the legendary Berghain to the sprawling Arena Berlin, will immerse attendees in unique sonic journeys, enhanced by stunning visuals and state-of-the-art production.
Festival attendees dancing at a previous Hypnotica event
This year, Hypnotica is raising the bar with a lineup that includes some of the biggest names in the global electronic music scene.
Fans can look forward to headlining sets from Charlotte de Witte, Adam Beyer, and a host of other trailblazing DJs and producers, all delivering high-energy performances that will keep the dancefloors alive until dawn.
But Hypnotica is more than just music—it's an experience. From exclusive afterparties in hidden Berlin clubs to chill daytime sessions at Tempelhof Airport, the festival caters to every mood.
For those seeking deeper engagement, the event offers artist Q&A sessions, immersive workshops, and even a secret stage hidden in the city for adventurous festivalgoers to discover.
Is also leading the charge for sustainability in music festivals. With eco-friendly initiatives such as solar-powered stages, recycling programs, and sustainable merchandise, the festival aims to minimize its environmental footprint while delivering an unparalleled experience.
As the countdown to January begins, the excitement is palpable. Whether you're a die-hard fan of Berlin's electronic music scene or a curious newcomer ready to dive into its hypnotic beats, Hypnotica Festival 2025 promises to be the ultimate start to your new year.
Get ready to lose yourself in the music, the culture, and the energy of Berlin. Tickets are selling fast! Don't miss your chance to be part of this landmark event!`,
          mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijsiOiFCjQzU2O_BFZsBmeG-aoss95AOYuA&s",
          secondaryImages: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FKx8_aCC4ZtsHjJkfDHBlF0oLmOGMfdFtg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFd8f8ujWZzkBMYUepmzpgtz4dMuonHgg30g&s"
          ],
        },
        {
          id: "2",
          title: "New York Fashion Week 2025: A Glimpse into the Future of Fashion",
          date: "2025-01-05",
          description: "New York Fashion Week 2025 is redefining the future of fashion with eco-friendly designs and technological innovations.",
          content: `New York Fashion Week 2025 is here, showcasing an exciting blend of futuristic designs, sustainable fashion, and innovative technology.
          
          From AI-powered fashion shows to biodegradable fabrics, the event is setting the tone for the future of style.`,
          mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQozidI_Sd1Vq3MFy0IfiN9mjD7rk5Vximg&s",
          secondaryImages: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTw9bQdSddV36J_TWyGXlJUmE2M_xa-YP0Ow&s",
            "https://i0.wp.com/mnmt.no/wp-content/uploads/2016/03/10_10499542_10152668382583755_2186614163480345366_o.jpg?fit=2048%2C1153&ssl=1"
          ],
        },
        {
          id: "3",
          title: "Virtual Reality Takes Center Stage at CES 2025",
          date: "2025-01-10",
          description: "At CES 2025, virtual reality innovations are pushing the boundaries of entertainment, gaming, and education.",
          content: `The Consumer Electronics Show (CES) 2025 in Las Vegas is unveiling cutting-edge virtual reality (VR) technologies.
          
          From immersive VR gaming experiences to educational simulations, this year's CES is a glimpse into the next era of digital interactivity.`,
          mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV33hTx8PWMyzxJoJv8OUYBAAeXhgleC2ww&s",
          secondaryImages: [
            "https://europebookings.com/wp-content/uploads/hideout-festival-papaya-club-stage-lights.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9h3VTFwjD2Evd-EyIOrJKmHwO15eMACRSkg&s"
          ],
        },
        {
          id: "4",
          title: "The Rise of Eco-Tourism: A Sustainable Way to Travel",
          date: "2025-01-08",
          description: "Eco-tourism is on the rise as travelers seek environmentally conscious ways to explore the world.",
          content: `Eco-tourism is rapidly gaining popularity as more people seek to travel sustainably while preserving natural landscapes and wildlife.
          
          From eco-friendly hotels to guided nature tours, the future of tourism is green, with travelers making an effort to reduce their carbon footprint.`,
          mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTrNIyuZiQgSMrYYSt9koZ9lYeBJN15cBaw&s",
          secondaryImages: [
            "https://i0.wp.com/thegroovecartel.com/wp-content/uploads/2024/01/rsz_20230611_verknipt_jessewensing_5.jpg?fit=770%2C512&ssl=1",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklOE-pi2P0iS0-VQoRpAnhXhy-ISUUmv4ow&s"
          ],
        },
        {
          id: "5",
          title: "Breakthrough in Quantum Computing: The Future of Technology",
          date: "2025-01-11",
          description: "Scientists have made a groundbreaking advancement in quantum computing, bringing us closer to a technological revolution.",
          content: `In a historic breakthrough, researchers have developed a new quantum computing method that promises to solve complex problems at unprecedented speeds.
          
          This advancement could lead to revolutions in fields like artificial intelligence, cryptography, and medicine.`,
          mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg0IP_kGJ722M6rxjYJga9NlNBzl_J_hTUQ&s",
          secondaryImages: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMo1c8YmCBXD9QBMIF-Cv-UoK4a19OtCb_yA&s",
            "https://www.technostation.tv/wp-content/uploads/2023/12/351377010_6386273988121268_3776490156528089739_n.jpg"
          ],
        },
      ],
    }),
  
    getters: {
      getNewsById: (state) => (id) => {
        return state.news.find(newsItem => newsItem.id === id);
      },
      getAllNews: (state) => {
        return state.news;
      },
    },
  
    actions: {
      addNews(newNews) {
        const newsExists = this.news.some(newsItem => newsItem.id === newNews.id);
        if (newsExists) {
          throw new Error('Já existe uma notícia com esse ID');
        }
        this.news.push(newNews);
      },
      removeNews(newsId) {
        const newsIndex = this.news.findIndex(newsItem => newsItem.id === newsId);
        if (newsIndex === -1) {
          throw new Error('Notícia não encontrada');
        }
        this.news.splice(newsIndex, 1);
      },
      updateNews(updatedNews) {
        const newsIndex = this.news.findIndex(newsItem => newsItem.id === updatedNews.id);
        if (newsIndex === -1) {
          throw new Error('Notícia não encontrada');
        }
        this.news[newsIndex] = { ...this.news[newsIndex], ...updatedNews };
      },
    },
  });
  