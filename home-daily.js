loadHappyTalesDailyStory().then(homeDailyStory => {
  document.getElementById("dailyStoryImage").src = homeDailyStory.image;
  document.getElementById("dailyStoryImage").alt = homeDailyStory.imageAlt;
  document.getElementById("dailyStoryKicker").textContent = homeDailyStory.kicker;
  document.getElementById("dailyStoryTitle").textContent = homeDailyStory.title;
  document.getElementById("dailyStorySummary").textContent = homeDailyStory.summary;
  document.getElementById("dailyReadingTime").textContent = homeDailyStory.time;
  document.getElementById("dailyStoryChips").innerHTML = homeDailyStory.chips.map(chip => `<span class="chip">${chip}</span>`).join("");
});
