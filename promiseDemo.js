const callApi1 = async () => {
    console.log("Calling API 1...")
    return "API 1: success\n"
}

const callApi2 = async (msg) => {
    console.log("Calling API 2...", msg)
    return "API 2: success\n"
}

const callApi3 = async (msg) => {
    console.log("Calling API 3...", msg)
    return "API 3: success\n"

}

const callApi4 = async (msg) => {
    console.log("Calling API 4...", msg)
    throw "api4"
}

const failureCallback = async (msg) => {
    console.log("Fail to finish calling API", msg)
}

callApi1()
.then(callApi2)
.then(callApi3)
.then(callApi4)
.catch(failureCallback);