window.addEventListener('keypress', function(event) {
  if (event.code === 'Space') {
    playSound();
  }
});

var volume = 0.5; // default volume

function changeVolume(newVolume) {
  volume = newVolume;
}

function playSound() {
  // Create an AudioContext object
  var audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Create an oscillator node
  var oscillator = audioContext.createOscillator();

  // Set the oscillator frequency
  freqs = document.querySelector(".freq").value;
  oscillator.frequency.value = freqs;

// Set the oscillator to a certain waveform
  type = document.querySelector(".types");
  val = type.value;
  oscillator.type = val;

  // Create a gain node
  var gainNode = audioContext.createGain();

  // Connect the oscillator to the gain node
  oscillator.connect(gainNode);

  // Connect the gain node to the audio context's destination (i.e., the speakers)
  gainNode.connect(audioContext.destination);

  // Set the gain node's gain value to the current volume
  gainNode.gain.value = volume;

  // Start the oscillator
  oscillator.start();

setTimeout(function() {
    oscillator.stop();
  }, 200);
}