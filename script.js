navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(function (stream) {
    videoIn.srcObject = stream;
    videoIn.play();

    videoOut.srcObject = stream;
    videoOut.play();
  })
  .catch(function (err) {
    console.log("An error occurred: " + err);
  });
  