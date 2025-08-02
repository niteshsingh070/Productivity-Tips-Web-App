const tips = [
    "Use the 2-minute rule: If a task takes less than 2 minutes, do it immediately instead of adding it to your to-do list.",
    "Try the Pomodoro Technique: Work for 25 minutes, then take a 5-minute break. Repeat 4 times, then take a longer break.",
    "Batch similar tasks together to minimize context switching and maintain focus.",
    "Keep your workspace clean and organized. A cluttered desk often leads to a cluttered mind.",
    "Use the 'Eat the Frog' method: Tackle your most challenging or important task first thing in the morning.",
    "Turn off non-essential notifications during focused work sessions to avoid distractions.",
    "Write down your top 3 priorities for each day the night before.",
    "Use time-blocking: Schedule specific time slots for different types of work in your calendar.",
    "Take regular breaks and get some fresh air. Your brain needs rest to maintain peak performance.",
    "Practice the 'Two-Pizza Rule' for meetings: If you need more than two pizzas to feed everyone, the meeting is too big.",
    "Use keyboard shortcuts to speed up common computer tasks.",
    "Set artificial deadlines that are earlier than the real ones to avoid last-minute stress.",
    "Learn to say 'no' to commitments that don't align with your priorities.",
    "Use the 80/20 rule: Focus on the 20% of tasks that produce 80% of your results.",
    "Keep a 'done' list alongside your to-do list to track your accomplishments and boost motivation.",
    "Use templates for repetitive tasks like emails, reports, or presentations.",
    "Schedule your most important work during your natural energy peaks.",
    "Use the 'one-touch' rule for emails: Read, respond, or delete emails immediately rather than re-reading them multiple times.",
    "Create a morning routine that sets you up for a productive day.",
    "Use automation tools for repetitive tasks whenever possible.",
    "Practice mindfulness or meditation to improve focus and reduce stress.",
    "Keep a notebook handy to capture ideas and thoughts that pop up during the day.",
    "Use the 'Swiss cheese' method: Poke holes in large projects by completing small, random parts of them.",
    "Set up your environment the night before to reduce decision fatigue in the morning.",
    "Use the 'parking lot' technique in meetings: Write down off-topic ideas to discuss later instead of derailing the current discussion."
];

let currentTipIndex = -1;
let usedTips = [];

function showRandomTip() {
    // Reset if all tips have been shown
    if (usedTips.length === tips.length) {
        usedTips = [];
    }

    // Find an unused tip
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * tips.length);
    } while (usedTips.includes(randomIndex));

    usedTips.push(randomIndex);
    currentTipIndex = randomIndex;

    // Update the display
    document.getElementById('tipText').textContent = tips[randomIndex];
    document.getElementById('tipNumber').textContent = `Tip #${usedTips.length}`;

    // Add a subtle animation
    const tipContainer = document.querySelector('.tip-container');
    tipContainer.style.transform = 'scale(0.95)';
    tipContainer.style.opacity = '0.7';
    
    setTimeout(() => {
        tipContainer.style.transform = 'scale(1)';
        tipContainer.style.opacity = '1';
    }, 150);
}

// Show first tip on load
window.addEventListener('load', showRandomTip);