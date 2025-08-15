const URL = "https://random.dog/woof.json";

const getRandomImg = async () => {
    console.log("getting data......");
    let response = await fetch(URL);
    console.log(response.status);
};

getRandomImg();