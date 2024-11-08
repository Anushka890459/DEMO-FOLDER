function getData() {
    fetch("https://api.github.com/users")
        .then(response => {
            // Check if the response is okay (status in the range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Return the parsed JSON data
        })
        .then(data => {
            console.log(data); // Handle the data here (e.g., log it to the console)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error); // Handle errors
        });
}


   