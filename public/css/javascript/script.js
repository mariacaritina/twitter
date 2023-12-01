document.addEventListener('DOMContentLoaded', function () {
    const tweets = [
        {
            author: "Devan",
            tweet: "Hello everyone! 🤠",
            id: "1",
            likes: "10"
        },
        {
            author: "Garfield",
            tweet: "I hate Mondays",
            id: "2",
            likes: "1"
        },
        {
            author: "Pam",
            tweet: "Where's Jim?",
            id: "3",
            likes: "60"
        },
        {
            author: "Bob",
            tweet: "Its snowing outside!",
            id: "4",
            likes: "100"
        },
        {
            author: "Aaron",
            tweet: "Is this Twitter or X?",
            id: "5",
            likes: "3"
        },
        {
            author: "Walter",
            tweet: "We gotta cook, Jesse!",
            id: "6",
            likes: "1"
        },
        {
            author: "Alice",
            tweet: "Exploring the wonderland",
            id: "7",
            likes: "25"
        },
        {
            author: "Charlie",
            tweet: "Coding all day!",
            id: "8",
            likes: "50"
        }
    ];

    const tweetsContainer = document.getElementById('tweets-container');

    function renderTweets(tweets) {
        tweets.forEach(tweet => {
            const tweetElement = document.createElement('div');
            tweetElement.classList.add('tweet');

            tweetElement.innerHTML = `
                <div class="author">Author: ${tweet.author}</div>
                <div>Tweet: ${tweet.tweet}</div>
                <div class="likes">Likes: ${tweet.likes}</div>
            `;

            tweetsContainer.appendChild(tweetElement);
        });
    }

    renderTweets(tweets);
});
