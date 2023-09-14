const body = document.createElement("div")

const firsPage = document.createElement("div");
body.appendChild(firsPage)

firsPage.style.background = "rgba(37, 43, 66, 1)";
firsPage.style.display = "flex";
firsPage.style.alignItems = "center";
firsPage.style.justifyContent = "center";
firsPage.style.flexDirection = "column";
firsPage.style.padding = "224px 197px";
firsPage.style.paddingBottom = "50px"

const welcome = document.createElement("p");
welcome.innerHTML = "Welcome";
welcome.style.color = "rgba(35, 166, 240, 1)";
welcome.style.fontSize = "16px";
firsPage.appendChild(welcome);

const title = document.createElement("h1");
title.innerText = "Selling on the internet like a pro";
title.style.color = "white";
title.style.fontSize = "58px";
title.style.font = "Montserrat"
title.style.padding = "0px 200px";
title.style.textAlign = "center";
firsPage.appendChild(title);

const text = document.createElement("p");
text.innerHTML ="We know how large objects will act, but things on a small scale just do not act that way.";
text.style.fontSize = "20px";
text.style.padding = "0px 200px";
text.style.textAlign = "center";
text.style.color = "white";
firsPage.appendChild(text);

const buttons = document.createElement("div");
buttons.style.display = "flex";
buttons.style.gap = "10px";
firsPage.appendChild(buttons);

const qouteButton = document.createElement("button");
qouteButton.innerHTML = "Get Quote Now";
qouteButton.style.color = "white";
qouteButton.style.background = "#23A6F0";
qouteButton.style.borderRadius = "5px";
qouteButton.style.border = "none";
qouteButton.style.padding = "15px 40px";
qouteButton.style.cursor = "pointer";
buttons.appendChild(qouteButton);

const learningButton = document.createElement("button");
learningButton.innerHTML = "Learn More";
learningButton.style.color = "#23A6F0";
learningButton.style.borderRadius = "5px";
learningButton.style.borderColor = "#23A6F0";
learningButton.style.padding = "15px 40px";
learningButton.style.width = "171px";
learningButton.style.backgroundColor = "rgba(37, 43, 66, 1)";
learningButton.style.cursor = "pointer";
buttons.appendChild(learningButton);

const boxes = document.createElement("div");
boxes.style.display = "flex"
boxes.style.gap = "20px"
boxes.style.marginTop = "120px"
boxes.style.marginBottom = "80px"
firsPage.appendChild(boxes);

const trainBox = document.createElement("div");
trainBox.style.backgroundColor = "white";
trainBox.style.padding = "35px 40px";
boxes.appendChild(trainBox);

const trainImg = document.createElement ("img")
trainImg.src = "trainingIcon.png"
trainBox.appendChild(trainImg)

const trainH3 = document.createElement("h3");
trainH3.innerHTML = "training Courses";
trainH3.style.color = "rgba(37, 43, 66, 1)";
trainBox.appendChild(trainH3);

const line = document.createElement("div")
line.style.width = "50px"
line.style.height = "2px"
line.style.background = "rgba(231, 64, 64, 1)"
trainBox.appendChild(line)

const trainP = document.createElement("p");
trainP.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour...";
trainBox.appendChild(trainP);

const onlineBox = document.createElement("div");
onlineBox.style.backgroundColor = "white";
onlineBox.style.padding = "35px";
boxes.appendChild(onlineBox);

const onlineImg = document.createElement ("img")
onlineImg.src = "onlineIcon.png"
onlineBox.appendChild(onlineImg)

const onlineH3 = document. createElement ("h3")
onlineH3.innerHTML = "2,769 online courses"
onlineBox.appendChild(onlineH3)

const line2 = document.createElement("div")
line2.style.width = "50px"
line2.style.height = "2px"
line2.style.background = "rgba(231, 64, 64, 1)"
onlineBox.appendChild(line2)

const onlineP = document.createElement("p")
onlineP.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour..."
onlineBox.appendChild(onlineP)

const cardBox = document.createElement("div")
cardBox.style.backgroundColor = "rgba(35, 166, 240, 1)";
cardBox.style.padding = "35px";
boxes.appendChild(cardBox);

const cardImg = document.createElement ("img")
cardImg.src = "cardIcon.png"
cardBox.appendChild(cardImg)

const cardH3 = document.createElement("h3");
cardH3.innerHTML = "training Courses";
cardH3.style.color = "white";
cardBox.append(cardH3);

const line3 = document.createElement("div")
line3.style.width = "50px"
line3.style.height = "2px"
line3.style.background = "white"
cardBox.appendChild(line3)

const cardP = document.createElement("p");
cardP.style.color = "white";
cardP.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour...";
cardBox.appendChild(cardP);

const secondPage = document.createElement ("div");
secondPage.style.background = "white";
secondPage.style.display = "flex";
secondPage.style.margin = "160px 197px"
secondPage.style.textAlign = "center";
secondPage.style.flexDirection  = "column"
body.appendChild(secondPage);

const secondtitle = document.createElement("p")
secondtitle.innerHTML = "Practice Advice"
secondtitle.style.color = "rgba(35, 166, 240, 1)"
secondPage.appendChild(secondtitle)

const productsH1 = document.createElement("h1")
productsH1.innerHTML = "Featured Products"
productsH1.style.marginBottom = "0px"
secondPage.appendChild(productsH1)

const productsP = document.createElement("p")
productsP.innerHTML = "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
productsP.style.padding = "10px 260px 80px 260px"
productsP.style.margin = "0px"
secondPage.appendChild(productsP)

const subscribevell = document.createElement("div")
secondPage.appendChild(subscribevell)

const subscribe = document.createElement("input")
subscribe.type = "email"
subscribe.placeholder = "Your Email"
subscribe.style.background = "rgba(249, 249, 249, 1)"
subscribe.style.padding = "15px 291px 15px 20px" 
subscribe.style.border = "solid 1px"
subscribe.style.borderRadius = "5px"
subscribe.style.borderColor = "rgba(115, 115, 115, 1)"
subscribevell.appendChild(subscribe)

const subscribeButton = document.createElement("button");
subscribeButton.innerHTML = "Subscribe";
subscribeButton.style.color = "white";
subscribeButton.style.background = "#23A6F0";
subscribeButton.style.borderRadius = "5px";
subscribeButton.style.border = "none";
subscribeButton.style.padding = "15px 40px";
subscribeButton.style.cursor = "pointer";
subscribevell.appendChild(subscribeButton);



document.body.appendChild(body);
