# 🎮 VALORANT QUIZ GAMES

Interactive VALORANT quiz application with multiple game modes, daily challenges, and competitive ranking system.

## ✨ Features

### 🏆 Daily Ranked Mode
- **4 Random Challenges Daily**: Everyone gets the same 4 challenges each day (rotates automatically)
- **Competitive Scoring**: Earn up to 1000+ points based on performance
- **Rank System**: Get ranked from Iron to Radiant based on your score
- **Global Leaderboard**: Submit your score and compete with players worldwide
- **One Play Per Day**: Complete the daily challenge once and track your progress

### 🎯 Game Modes

1. **Smash or Pass - Agents** ⚡
   - Choose between Smash or Pass for each VALORANT agent
   - See your results at the end

2. **Guess by Ability** 🎯
   - Identify the agent by their ability icon
   - 6 attempts per question
   - Autocomplete feature for agent names

3. **Guess by Quote** 💬
   - Identify which agent says the quote
   - Database with quotes from all agents
   - 6 attempts per question

4. **Guess the Agent** 🎭
   - **NEW: Blur Effect!** Image starts very blurred
   - Gets clearer with each failed attempt
   - 6 attempts to guess correctly

5. **Weapon Quiz** 🔫
   - Identify VALORANT weapons
   - Multiple choice (4 options)
   - Auto-advance to next question

6. **Map Quiz** 🗺️
   - Identify maps by their image
   - Multiple choice (4 options)
   - Auto-advance to next question

### 🏅 Ranking System

**VALORANT Ranks** (based on score):
- 🌟 **Radiant**: 950+ points
- 💎 **Immortal**: 850-949 points
- 🔺 **Ascendant**: 750-849 points
- 💠 **Diamond**: 650-749 points
- 🔷 **Platinum**: 550-649 points
- 🟡 **Gold**: 450-549 points
- ⚪ **Silver**: 350-449 points
- 🟤 **Bronze**: 250-349 points
- ⚫ **Iron**: 0-249 points

### 📊 Ranking Board
- View daily rankings
- Navigate between different dates
- See top players, scores, and ranks
- Gold, Silver, Bronze podium colors for top 3

## 🚀 Setup Instructions

### 1. Firebase Configuration (Required for Online Ranking)

The application uses Firebase Realtime Database for storing and retrieving rankings.

**Steps to configure Firebase:**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing)
3. Go to Project Settings > General
4. Scroll down to "Your apps" and click "Web" icon
5. Copy your Firebase configuration
6. Open `firebase-config.js` and replace the placeholder values:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

7. Go to Realtime Database in Firebase Console
8. Create database in test mode (or production mode with rules)
9. **Database Rules** (for public read/write):

```json
{
  "rules": {
    "rankings": {
      ".read": true,
      ".write": true
    }
  }
}
```

**Note**: If Firebase is not configured, the app will fallback to localStorage (local only, no global rankings).

### 2. Change Favicon (Optional)

To use VALORANT favicon instead of the current one:

1. Download VALORANT logo/icon (PNG format)
2. Use a favicon generator like [favicon.io](https://favicon.io/) to create all sizes
3. Replace these files in the root directory:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`
   - `apple-touch-icon.png`

### 3. Deploy

You can deploy this to any static hosting service:

- **Vercel**: Just push to GitHub and connect repository
- **Netlify**: Drag and drop the folder
- **GitHub Pages**: Enable in repository settings
- **Firebase Hosting**: `firebase deploy`

## 🎮 How to Play

### Daily Ranked Mode
1. Click "🏆 Daily Ranked" from the menu
2. View today's 4 challenges
3. Click "START DAILY RANKED"
4. Complete all 4 challenges
5. Get your final score and rank
6. Enter username and submit to ranking
7. View the leaderboard!

### Free Mode
1. Select any game mode from the menu
2. Play without restrictions
3. No ranking, just practice!

### Ranking Board
1. Click "🏅 Ranking" from the menu
2. View today's top players
3. Navigate to previous days with arrows
4. See everyone's scores and ranks

## 🔧 Technical Details

### Technologies Used
- Pure JavaScript (Vanilla JS)
- HTML5 & CSS3
- Firebase Realtime Database
- VALORANT API (valorant-api.com)

### API Integration
- Uses `valorant-api.com/v1` public API
- No API key required
- Loads:
  - Agents (with abilities, roles, images)
  - Weapons
  - Maps

### Daily Rotation System
- Uses seeded random based on date
- Same challenges for everyone worldwide
- Changes automatically at midnight UTC

### Scoring System
Each game mode has a maximum score:
- Ability Quiz: 300 points
- Quote Quiz: 300 points
- Guess Agent: 300 points
- Weapon Quiz: 250 points
- Map Quiz: 250 points

**Total Maximum**: 1400 points (but 4 modes only, so max ~1000-1200)

### Storage
- **Daily Play Status**: localStorage
- **Today's Score**: localStorage
- **Rankings**: Firebase Realtime Database (with localStorage fallback)

## 📱 Responsive Design

- Desktop optimized
- Mobile friendly
- Tablet compatible
- Touch gestures supported

## 🐛 Bug Fixes Implemented

✅ All critical bugs fixed
✅ Robust error handling
✅ API validation
✅ Input re-enabling after questions
✅ Score initialization
✅ Blur effect on Guess Agent
✅ Autocomplete dropdown closes on Enter

## 📝 Notes

- Daily Ranked can only be played once per day
- Rankings are sorted by score (highest first)
- Usernames must be 2-20 characters
- All game modes have autocomplete for agent names
- Blur effect in Guess Agent decreases with each attempt

## 🎯 Future Enhancements

Potential features to add:
- [ ] User accounts with login
- [ ] Personal statistics tracking
- [ ] Achievement system
- [ ] Custom challenges
- [ ] Multiplayer modes
- [ ] Share results on social media
- [ ] More agent quotes
- [ ] Ability sound quiz

## 📄 License

This project is for educational purposes. VALORANT and all related properties are owned by Riot Games.

## 🙏 Credits

- **VALORANT API**: [valorant-api.com](https://valorant-api.com/)
- **Game**: Riot Games
- **Design**: Inspired by VALORANT's UI

---

**Not affiliated with Riot Games**

Made with ❤️ for the VALORANT community
