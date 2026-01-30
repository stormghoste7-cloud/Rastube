// Fonction de matching basique
async function findMoodMatches() {
  const currentUserMood = await getUserMood();
  const allUsers = await getAllUsers();
  
  return allUsers.filter(user => 
    user.mood === currentUserMood && 
    user.id !== currentUserId
  ).slice(0, 10); // Limiter à 10 matches
}