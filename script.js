const targetDate = new Date('July 8, 2026').getTime();
const startDate = new Date('August 9, 2024').getTime();
const totalDays = Math.floor((targetDate - startDate)/(1000 * 60 * 60 * 24));

function updateCountdown() {
    const now = new Date().getTime();
    const timePassed = now - startDate;
    const daysPassed = Math.floor(timePassed / (1000 * 60 * 60 * 24));
    const daysRemaining = totalDays - daysPassed;

    document.getElementById('days').innerHTML = daysRemaining;

    const progressPercentage = (daysPassed / totalDays) * 100;
    
    document.getElementById('progress-bar').style.width = progressPercentage + '%';
    document.getElementById('percent').innerHTML = progressPercentage.toFixed(2);
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set values
updateCountdown();
