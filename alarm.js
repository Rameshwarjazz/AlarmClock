// Function to update the clock
function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    clockElement.textContent = now.toLocaleTimeString();
  }
  
  // Function to check and trigger alarms
  function checkAlarms() {
    const now = new Date();
    const alarms = document.querySelectorAll('.alarm');
  
    alarms.forEach(alarm => {
      const time = alarm.dataset.time;
      if (time === now.toLocaleTimeString([], { hour24: false })) {
        alarm.classList.add('active');
        alarm.querySelector('button').disabled = true;
        alert('Alarm!');
      }
    });
  }
  
  // Function to create an alarm element
  function createAlarmElement(time) {
    const alarmsList = document.getElementById('alarms');
  
    const li = document.createElement('li');
    li.classList.add('alarm');
    li.dataset.time = time;
  
    const timeText = document.createTextNode(time);
    li.appendChild(timeText);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      li.remove();
    });
    li.appendChild(deleteButton);
  
    alarmsList.appendChild(li);
  }
  
  // Event listener for the "Set Alarm" button
  document.getElementById('set-alarm').addEventListener('click', function () {
    const hour = document.getElementById('alarm-hour').value;
    const minute = document.getElementById('alarm-minute').value;
    const second = document.getElementById('alarm-second').value;
    const ampm = document.getElementById('alarm-ampm').value;
  
    // Format the time
    let time = hour.padStart(2, '0') + ':' + minute.padStart(2, '0') + ':' + second.padStart(2, '0') + ' ' + ampm;
  
    // Add the alarm element
    createAlarmElement(time);
  });
  
  // Update clock every second
  setInterval(updateClock, 1000);
  // Check alarms every second
  setInterval(checkAlarms, 1000);
  