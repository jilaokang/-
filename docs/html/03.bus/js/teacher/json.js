let json = new Promise((resolve, reject) => {
    try {
        $.getJSON("data.json", function (result) {
            resolve(result)
        });
    }
    catch (err) {
        reject(err)
    }
})