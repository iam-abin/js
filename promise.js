function isCorrectUset(userName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (userName == "abin") {
				resolve("correct user");
			} else {
				reject("incorrect user");
			}
		}, 3000);
	});
}

async function checkUser() {
	try {
		let result = await isCorrectUset("abind");
		console.log(result);
	} catch (error) {
        console.log("promise rejected ",error);
    }
}

checkUser();
