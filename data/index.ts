export const movieGenres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

export const moodToGenreMap: Record<string, number[]> = {
    "slay-mode": [28, 10749], // Action, Romance
    "main-character": [18, 10749], // Drama, Romance
    "chill-vibes": [35, 10751], // Comedy, Family
    "hustling": [36, 18], // History, Drama
    "heartbroken": [18, 10749], // Drama, Romance
    "adventurous": [12, 14], // Adventure, Fantasy
    "nostalgic": [18, 9648], // Drama, Mystery
    "wholesome": [10751, 16], // Family, Animation
    "romantic": [10749], // Romance
    "energetic": [10402, 35], // Music, Comedy
    "lazy": [35], // Comedy
    "party-mood": [10402, 10751], // Music, Family
    "mysterious": [9648, 53], // Mystery, Thriller
    "comedy-central": [35], // Comedy
    "dark-mood": [27, 9648], // Horror, Mystery
    "thrilling": [53, 28], // Thriller, Action
    "sad-boi-hours": [18, 10749], // Drama, Romance
    "dreamy": [14, 878], // Fantasy, Science Fiction
    "empowered": [28, 18], // Action, Drama
    "feel-good": [35, 10751] // Comedy, Family
};