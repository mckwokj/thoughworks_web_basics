const callApi1 = async () => {
    console.log("Calling API 1...")
    return "API 1: success\n"
}

const callApi2 = async () => {
    console.log("Calling API 2...")
    return "API 2: success\n"
}

const callApi3 = async () => {
    console.log("Calling API 3...")
    return "API 3: success\n"
}

const callApi4 = async () => {
    console.log("Calling API 4...")
    return "API 4: success\n"
}

const failureCallback = () => {
    console.log("Fail to finish calling API")
}

Promise.all([callApi1, callApi2, callApi3, callApi4])
    .then(values => values.forEach(value => console.log(value())))
    .catch(failureCallback)