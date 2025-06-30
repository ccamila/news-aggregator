export const DEFAULT_SOURCES = ['theguardian', 'newsapi' , 'nytimes'] as const;

export const NEWS_SOURCES = {
    NEWS_API: 'newsapi',
    THE_GUARDIAN: 'theguardian',
    NY_TIMES: 'nytimes',
  } as const;


export const mockResponse = [
          {
              "id": "sport/live/2025/jun/30/wimbledon-2025-tennis-alcaraz-sabalenka-raducanu-zverev-day-one-live",
              "title": "Wimbledon 2025: Jabeur retires hurt; Alcaraz, Sabalenka and Raducanu in day one action – live",
              "description": "",
              "content": "",
              "url": "https://www.theguardian.com/sport/live/2025/jun/30/wimbledon-2025-tennis-alcaraz-sabalenka-raducanu-zverev-day-one-live",
              "imageUrl": "https://media.guim.co.uk/1f30a4949445977cd3def6f4665de66252fb0774/339_0_6555_5247/500.jpg",
              "publishedAt": "2025-06-30T12:02:43Z",
              "source": {
                  "id": "sport",
                  "name": "The Guardian"
              },
              "category": "general",
              "author": "Michael Butler",
              "apiSource": "The Guardian"
          },
          {
              "id": "sport/live/2025/jun/30/cricket-county-championship-day-two-yorkshire-essex-somerset-notts-surrey-durham-live",
              "title": "Yorkshire v Essex, Somerset v Notts and more: county cricket day two – live",
              "description": "",
              "content": "",
              "url": "https://www.theguardian.com/sport/live/2025/jun/30/cricket-county-championship-day-two-yorkshire-essex-somerset-notts-surrey-durham-live",
              "imageUrl": "https://media.guim.co.uk/b29f34b651fb35481098f0828175ce53dc650695/540_0_6055_4846/500.jpg",
              "publishedAt": "2025-06-30T12:01:12Z",
              "source": {
                  "id": "sport",
                  "name": "The Guardian"
              },
              "category": "general",
              "author": "Tanya Aldred at York",
              "apiSource": "The Guardian"
          },
          {
              "id": "us-news/2025/jun/30/democrats-trump-resistance",
              "title": "Throwing their bodies on the gears: the Democratic lawmakers showing up to resist Trump",
              "description": "",
              "content": "",
              "url": "https://www.theguardian.com/us-news/2025/jun/30/democrats-trump-resistance",
              "imageUrl": "https://media.guim.co.uk/4cc267a5511e6a746183e25f86e538134b5686c1/156_0_1749_1398/500.jpg",
              "publishedAt": "2025-06-30T12:00:21Z",
              "source": {
                  "id": "us-news",
                  "name": "The Guardian"
              },
              "category": "general",
              "author": "George Chidi",
              "apiSource": "The Guardian"
          },
          {
              "id": "food/2025/jun/30/quick-easy-recipe-courgette-linguine-trout-lemon-dill-rukmini-iyer",
              "title": "Rukmini Iyer’s quick and easy recipe for courgette linguine with trout, lemon and dill | Quick and easy",
              "description": "",
              "content": "",
              "url": "https://www.theguardian.com/food/2025/jun/30/quick-easy-recipe-courgette-linguine-trout-lemon-dill-rukmini-iyer",
              "imageUrl": "https://media.guim.co.uk/b1cacb27f08fef91176c95f5ea437dd0dbaf62f8/59_1209_2772_2217/500.jpg",
              "publishedAt": "2025-06-30T12:00:21Z",
              "source": {
                  "id": "food",
                  "name": "The Guardian"
              },
              "category": "general",
              "author": "Rukmini Iyer",
              "apiSource": "The Guardian"
          },
          {
              "id": "us-news/live/2025/jun/30/donald-trump-one-big-beautiful-bill-senate-republicans-iran-us-politics-live-news-updates",
              "title": "Senate wrangles over Trump’s ‘one big beautiful bill’ to continue – US politics live",
              "description": "",
              "content": "",
              "url": "https://www.theguardian.com/us-news/live/2025/jun/30/donald-trump-one-big-beautiful-bill-senate-republicans-iran-us-politics-live-news-updates",
              "imageUrl": "https://media.guim.co.uk/c521adf65ae5ef837b7ad4643960c541841d9725/229_0_2310_1848/500.jpg",
              "publishedAt": "2025-06-30T11:57:50Z",
              "source": {
                  "id": "us-news",
                  "name": "The Guardian"
              },
              "category": "general",
              "author": "Lucy Campbell (now) and Tom Ambrose (earlier)",
              "apiSource": "The Guardian"
          },
          {
              "id": "world/live/2025/jun/30/heatwave-sothern-europe-ukraine-russia-news-latest-updates",
              "title": "Heatwave grips southern Europe – latest updates",
              "description": "",
              "content": "",
              "url": "https://www.theguardian.com/world/live/2025/jun/30/heatwave-sothern-europe-ukraine-russia-news-latest-updates",
              "imageUrl": "https://media.guim.co.uk/d2a34417d91063444d8b291665e8c2d3b969e2b0/888_0_6880_5504/500.jpg",
              "publishedAt": "2025-06-30T11:55:05Z",
              "source": {
                  "id": "world",
                  "name": "The Guardian"
              },
              "category": "general",
              "author": "Jakub Krupa",
              "apiSource": "The Guardian"
          },
          {
              "id": "business/2025/jun/30/lindsey-oil-refinery-prax-group-administration",
              "title": "Lindsey oil refinery owner Prax falls into administration as ministers urged to intervene",
              "description": "",
              "content": "",
              "url": "https://www.theguardian.com/business/2025/jun/30/lindsey-oil-refinery-prax-group-administration",
              "imageUrl": "https://media.guim.co.uk/d302a26f2229a71ab1dfa231208cefc9ae72e3e8/339_0_2500_2000/500.jpg",
              "publishedAt": "2025-06-30T11:49:39Z",
              "source": {
                  "id": "business",
                  "name": "The Guardian"
              },
              "category": "general",
              "author": "Rob Davies",
              "apiSource": "The Guardian"
          },
          {
              "id": "business/live/2025/jun/30/uk-economic-growth-confirmed-07-first-quarter-household-saving-ratio-falls-mortgage-approvals-trade-deal-tariffs-business-live",
              "title": "UK economic growth confirmed at 0.7% in first quarter; Lincolnshire oil refinery calls in administrators – business live",
              "description": "",
              "content": "",
              "url": "https://www.theguardian.com/business/live/2025/jun/30/uk-economic-growth-confirmed-07-first-quarter-household-saving-ratio-falls-mortgage-approvals-trade-deal-tariffs-business-live",
              "imageUrl": "https://media.guim.co.uk/2b7272c843bf036b6e73543ec29b66d4d7f69be5/194_0_4411_3528/500.jpg",
              "publishedAt": "2025-06-30T11:47:29Z",
              "source": {
                  "id": "business",
                  "name": "The Guardian"
              },
              "category": "general",
              "author": "Julia Kollewe",
              "apiSource": "The Guardian"
          },
          {
              "id": "world/2025/jun/30/palestine-action-ban-judge-court-hearing",
              "title": "Judge grants Palestine Action urgent hearing to try to stop ban taking effect",
              "description": "",
              "content": "",
              "url": "https://www.theguardian.com/world/2025/jun/30/palestine-action-ban-judge-court-hearing",
              "imageUrl": "https://media.guim.co.uk/d8750892633177caa8e9e91f956912361b3c2d67/431_0_4320_3456/500.jpg",
              "publishedAt": "2025-06-30T11:45:29Z",
              "source": {
                  "id": "politics",
                  "name": "The Guardian"
              },
              "category": "general",
              "author": "Haroon Siddique Legal affairs correspondent",
              "apiSource": "The Guardian"
          },
          {
              "id": "world/live/2025/jun/30/israel-gaza-war-idf-evacuation-orders-middle-east-crisis-latest-news-updates",
              "title": "Israel continues deadly Gaza attacks ahead of potential US talks on ceasefire – Middle East crisis live",
              "description": "",
              "content": "",
              "url": "https://www.theguardian.com/world/live/2025/jun/30/israel-gaza-war-idf-evacuation-orders-middle-east-crisis-latest-news-updates",
              "imageUrl": "https://media.guim.co.uk/445d203f77f48587d640418f59cb191e3ab35aaf/322_0_3663_2930/500.jpg",
              "publishedAt": "2025-06-30T11:35:51Z",
              "source": {
                  "id": "world",
                  "name": "The Guardian"
              },
              "category": "general",
              "author": "Joe Coughlan (now) and Yohannes Lowe (earlier)",
              "apiSource": "The Guardian"
          },
          {
              "id": "https://www.nytimes.com/2025/06/30/podcasts/the-daily/trump-scotus-birthright.html",
              "title": "Supreme Court Hands Trump Even More Power",
              "description": "How a major ruling last week redefines the role of the courts — at a moment when President Trump is testing the limits of his powers.",
              "content": "How a major ruling last week redefines the role of the courts — at a moment when President Trump is testing the limits of his powers.",
              "url": "https://www.nytimes.com/2025/06/30/podcasts/the-daily/trump-scotus-birthright.html",
              "imageUrl": "https://static01.nyt.com/images/2025/06/30/multimedia/30DAILY-scotus-birthright-pmqv/30DAILY-scotus-birthright-pmqv-articleLarge.jpg",
              "publishedAt": "2025-06-30T10:00:20Z",
              "source": {
                  "id": "nytimes",
                  "name": "The New York Times"
              },
              "category": "podcasts",
              "author": "Rachel Abrams, Adam Liptak, Diana Nguyen, Rachelle Bonja, Rob Szypko, Patricia Willens, Rachel Quester, Elisheba Ittoop, Dan Powell, Rowan Niemisto, Pat McCusker, Marion Lozano and Alyssa Moxley",
              "apiSource": "NYTimes"
          },
          {
              "id": "https://www.nytimes.com/2025/06/30/podcasts/the-headlines/trump-bill-gen-z-retirement-jello.html",
              "title": "The New Cost of Trump’s Bill, and Gen Z’s Retirement Plan",
              "description": "Plus, the tricky science behind lime green Jell-O.",
              "content": "Plus, the tricky science behind lime green Jell-O.",
              "url": "https://www.nytimes.com/2025/06/30/podcasts/the-headlines/trump-bill-gen-z-retirement-jello.html",
              "imageUrl": "https://static01.nyt.com/images/2025/06/30/multimedia/30audio-headlines-promo-gkpc/30audio-headlines-promo-gkpc-articleLarge.jpg",
              "publishedAt": "2025-06-30T10:00:09Z",
              "source": {
                  "id": "nytimes",
                  "name": "The New York Times"
              },
              "category": "podcasts",
              "author": "Tracy Mumford, Will Jarvis, Ian Stewart, Jessica Metzger and Mattathias Schwartz",
              "apiSource": "NYTimes"
          },
          {
              "id": "https://www.nytimes.com/2025/06/30/crosswords/wordle-review-1473.html",
              "title": "Wordle Review No. 1,473",
              "description": "Scroll down for hints and conversation about the puzzle for Tuesday, July 1, 2025.",
              "content": "Scroll down for hints and conversation about the puzzle for Tuesday, July 1, 2025.",
              "url": "https://www.nytimes.com/2025/06/30/crosswords/wordle-review-1473.html",
              "imageUrl": "https://static01.nyt.com/images/2025/06/30/crosswords/01wordle-review-art-1473/01wordle-review-art-1473-articleLarge.jpg",
              "publishedAt": "2025-06-30T10:00:08Z",
              "source": {
                  "id": "nytimes",
                  "name": "The New York Times"
              },
              "category": "gameplay",
              "author": "New York Times Games",
              "apiSource": "NYTimes"
          },
          {
              "id": "https://www.nytimes.com/2025/06/30/crosswords/connections-companion-751.html",
              "title": "Connections Companion No. 751",
              "description": "Scroll down for hints and conversation about the puzzle for Tuesday, July 1, 2025.",
              "content": "Scroll down for hints and conversation about the puzzle for Tuesday, July 1, 2025.",
              "url": "https://www.nytimes.com/2025/06/30/crosswords/connections-companion-751.html",
              "imageUrl": "https://static01.nyt.com/images/2025/06/30/crosswords/01connections-art-789/01connections-art-789-articleLarge.jpg",
              "publishedAt": "2025-06-30T10:00:03Z",
              "source": {
                  "id": "nytimes",
                  "name": "The New York Times"
              },
              "category": "gameplay",
              "author": "New York Times Games",
              "apiSource": "NYTimes"
          },
          {
              "id": "https://www.nytimes.com/2025/06/30/crosswords/strands-sidekick-485.html",
              "title": "Strands Sidekick No. 485",
              "description": "Scroll down for hints and conversation about the puzzle for Tuesday, July 1, 2025.",
              "content": "Scroll down for hints and conversation about the puzzle for Tuesday, July 1, 2025.",
              "url": "https://www.nytimes.com/2025/06/30/crosswords/strands-sidekick-485.html",
              "imageUrl": "https://static01.nyt.com/images/2025/06/30/crosswords/01strands-art-750/01strands-art-750-articleLarge.jpg",
              "publishedAt": "2025-06-30T10:00:02Z",
              "source": {
                  "id": "nytimes",
                  "name": "The New York Times"
              },
              "category": "gameplay",
              "author": "New York Times Games",
              "apiSource": "NYTimes"
          },
          {
              "id": "https://www.nytimes.com/2025/06/30/world/africa/zambia-edgar-lungu-funeral.html",
              "title": "A Bitter Political Rivalry in Zambia Shows No Deference to Death",
              "description": "The burial site of Edgar Lungu, Zambia’s former president, has become the latest conflict in a relationship marred by hostility",
              "content": "The burial site of Edgar Lungu, Zambia’s former president, has become the latest conflict in a relationship marred by hostility",
              "url": "https://www.nytimes.com/2025/06/30/world/africa/zambia-edgar-lungu-funeral.html",
              "imageUrl": "https://static01.nyt.com/images/2025/06/26/multimedia/26safrica-zambia-1-gbkq/26safrica-zambia-1-gbkq-articleLarge.jpg",
              "publishedAt": "2025-06-30T09:29:41Z",
              "source": {
                  "id": "nytimes",
                  "name": "The New York Times"
              },
              "category": "world",
              "author": "Zimasa Matiwane and Rabecca Lungu",
              "apiSource": "NYTimes"
          },
          {
              "id": "https://www.nytimes.com/2025/06/30/us/politics/takeaways-trump-bukele-ms-13.html",
              "title": "Why Is Trump Returning MS-13 Leaders to El Salvador? 5 Takeaways From the Times Investigation.",
              "description": "The agreement with Nayib Bukele, the president of El Salvador, is undermining a long-running federal investigation into the gang, according to people familiar with the inquiry.",
              "content": "The agreement with Nayib Bukele, the president of El Salvador, is undermining a long-running federal investigation into the gang, according to people familiar with the inquiry.",
              "url": "https://www.nytimes.com/2025/06/30/us/politics/takeaways-trump-bukele-ms-13.html",
              "imageUrl": "https://static01.nyt.com/images/2025/06/30/multimedia/30dc-ms13-takeaways-1-wzpc/30dc-ms13-takeaways-1-wzpc-articleLarge.jpg",
              "publishedAt": "2025-06-30T09:03:14Z",
              "source": {
                  "id": "nytimes",
                  "name": "The New York Times"
              },
              "category": "u.s.",
              "author": "The New York Times",
              "apiSource": "NYTimes"
          },
          {
              "id": "https://www.nytimes.com/2025/06/30/opinion/trump-bezos-sanchez-iran.html",
              "title": "The (Gaudy) Tie That Binds Trump and Bezos",
              "description": "They’re champion exhibitionists in a culture made for that.",
              "content": "They’re champion exhibitionists in a culture made for that.",
              "url": "https://www.nytimes.com/2025/06/30/opinion/trump-bezos-sanchez-iran.html",
              "imageUrl": "https://static01.nyt.com/images/2025/06/30/opinion/30bruni-newsletter-image/30bruni-newsletter-image-articleLarge.jpg",
              "publishedAt": "2025-06-30T09:03:14Z",
              "source": {
                  "id": "nytimes",
                  "name": "The New York Times"
              },
              "category": "opinion",
              "author": "Frank Bruni",
              "apiSource": "NYTimes"
          },
          {
              "id": "https://www.nytimes.com/2025/06/30/business/computer-science-grads-tech-jobs.html",
              "title": "Are You Applying for Tech Jobs or Tech Internships? We Want to Hear About It.",
              "description": "Companies using A.I. tools to automate tasks like coding are changing job prospects for recent grads and college students. Tell us about your experiences.",
              "content": "Companies using A.I. tools to automate tasks like coding are changing job prospects for recent grads and college students. Tell us about your experiences.",
              "url": "https://www.nytimes.com/2025/06/30/business/computer-science-grads-tech-jobs.html",
              "imageUrl": "https://static01.nyt.com/images/2025/06/18/multimedia/Biz-AIjobs-callout-hbgq/Biz-AIjobs-callout-hbgq-articleLarge.jpg",
              "publishedAt": "2025-06-30T09:03:10Z",
              "source": {
                  "id": "nytimes",
                  "name": "The New York Times"
              },
              "category": "business",
              "author": "Natasha Singer",
              "apiSource": "NYTimes"
          },
          {
              "id": "https://www.nytimes.com/2025/06/30/opinion/university-of-virginia-doj-trump.html",
              "title": "What the University of Virginia Should Have Done",
              "description": "The university should have stood up to the Justice Department.",
              "content": "The university should have stood up to the Justice Department.",
              "url": "https://www.nytimes.com/2025/06/30/opinion/university-of-virginia-doj-trump.html",
              "imageUrl": "https://static01.nyt.com/images/2025/06/29/multimedia/heaphy30-qkfp/heaphy30-qkfp-articleLarge.jpg",
              "publishedAt": "2025-06-30T09:03:09Z",
              "source": {
                  "id": "nytimes",
                  "name": "The New York Times"
              },
              "category": "opinion",
              "author": "Timothy J. Heaphy",
              "apiSource": "NYTimes"
          }
      ]
    