function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });
}

async function getApple() {
  await delay();
  return "apple";
}

async function getBanana() {
  await delay();
  return "banana";
}

const promises = [];
