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
    "slay-mode": [28, 878],             // Action, Science Fiction (for empowerment and high-energy vibes)
    "main-character": [18, 10749, 28], // Drama, Action, Fantasy (for a dreamy or dramatic storyline)
    "chill-vibes": [35, 10751],         // Comedy, Family (light-hearted, relaxing themes)
    "hustling": [36, 80],               // History, Crime (motivational or intense themes)
    "heartbroken": [18, 10749],         // Drama, Romance (emotional, love-centered themes)
    "adventurous": [12, 14, 28],        // Adventure, Fantasy, Action (exploring new worlds and adrenaline rushes)
    "nostalgic": [10751, 16, 18],       // Family, Animation, Drama (childhood memories, touching stories)
    "wholesome": [10751, 16, 35],       // Family, Animation, Comedy (uplifting and heartwarming)
    "romantic": [10749, 18],            // Romance, Drama (love stories)
    "energetic": [10402, 28, 35],       // Music, Action, Comedy (high-energy, fun themes)
    "lazy": [35, 10751],                // Comedy, Family (easy-going, light entertainment)
    "party-mood": [10402, 10770],       // Music, TV Movie (fun, event-focused themes)
    "mysterious": [9648, 53, 27],       // Mystery, Thriller, Horror (dark, suspenseful themes)
    "comedy-central": [35],             // Comedy (humorous themes)
    "dark-mood": [27, 36, 9648],        // Horror, History, Mystery (intense, brooding themes)
    "thrilling": [53, 28, 9648],        // Thriller, Action, Mystery (edge-of-your-seat action and suspense)
    "sad-boi-hours": [18, 10749, 10752], // Drama, Romance, War (emotional, poignant themes)
    "dreamy": [14, 878, 16],            // Fantasy, Science Fiction, Animation (imaginative, otherworldly)
    "empowered": [28, 18, 36],          // Action, Drama, History (inspiring, powerful themes)
    "feel-good": [35, 10751, 10402]     // Comedy, Family, Music (uplifting, cheerful vibes)
};