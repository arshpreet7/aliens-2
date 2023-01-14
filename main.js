function startClassification()


{
navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4m7ftIvy4/', modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}
