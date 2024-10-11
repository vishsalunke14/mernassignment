async function getAllUsers(){
    try {
        const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json')
        // console.log(response);
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E: ", error)
    }
}

getAllUsers()