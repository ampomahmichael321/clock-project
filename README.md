Timer Flow Summary

User sets time → handled by handleChange().

User clicks Start → isRunning becomes true.

useEffect() starts an interval that counts down each second.

Each tick:

totalSecondsLeft decreases.

timeLeft updates.

When time ends:

The timer stops automatically (isRunning = false).

Reset button clears everything.

🧱 Example Flow
User Action	Effect
Input 0 hrs, 1 min, 30 secs	totalSeconds = 90
Click Start	Timer begins counting down
After 30 secs	totalSecondsLeft = 60 → shows 00:01:00
Click Stop	Timer pauses
Click Start again	Resumes countdown
When reaches 0	Automatically stops
Click Reset	Clears everything
🧾 Summary of Core Logic
Function	Responsibility
handleChange	Capture user input and compute total time
useEffect	Control countdown logic while running
handleReset	Reset timer to zero
setIsRunning	Toggle between start and stop
Progressbar	Visually show countdown progress
