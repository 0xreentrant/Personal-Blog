
var app = document.getElementById('face');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString(':)')
  .pauseFor(5000)
  .deleteAll()
  .typeString(';)')
  .pauseFor(5000)
  .deleteAll()
  .typeString(':O')
  .pauseFor(5000)
  .deleteAll()
  .typeString(';P')
  .pauseFor(5000)
  .deleteAll()
  .start();
