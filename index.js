// User stats data
const userData = {
    cerine5555: {
        kills: 190,
        playtime: '396 Mins',
        achievements: 'malekyoutuobe',
        matchesPlayed: 22
    },
    linakg: {
        kills: 38,
        playtime: '43 Mins',
        achievements: 'cerine5555',
        matchesPlayed: 0
    }
};

// Login functionality
document.getElementById('loginBtn').addEventListener('click', function() {
    const password = document.getElementById('username').value;
    const homeSection = document.getElementById('home');
    const statsSection = document.getElementById('stats');
    const leaderboardSection = document.getElementById('leaderboard');

    if (userData[password]) {
        // Hide login and show main sections
        document.getElementById('login').style.display = 'none';
        homeSection.style.display = 'block';
        statsSection.style.display = 'block';
        leaderboardSection.style.display = 'block';

        // Populate user stats
        const userStats = userData[password];
        document.getElementById('in-game-kills').innerText = userStats.kills;
        document.getElementById('playtime').innerText = userStats.playtime;
        document.getElementById('achievements').innerText = userStats.achievements;
        document.getElementById('matches-played').innerText = userStats.matchesPlayed;
    } else {
        alert('Incorrect password! Please try again.');
    }
});

// Sidebar button functionality
function showSection(sectionId) {
    // Check if the user is logged in by checking the login section
    const loginSection = document.getElementById('login');
    if (loginSection.style.display === 'block') {
        alert("Please log in to access this section.");
        return; // Prevent access to other sections if not logged in
    }

    // Hide all sections
    const sections = document.getElementsByClassName('content-section');
    for (let section of sections) {
        section.style.display = 'none';
    }

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Show leaks functionality
function toggleLeakDetails() {
    const leakDetails = document.getElementById("leak-details");
    leakDetails.style.display = leakDetails.style.display === "none" ? "block" : "none";
}

// Show events functionality