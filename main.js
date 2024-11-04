//Task 1:  Fetch Tickets Using Async/Await and Handle Errors
async function fetchTickets() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url);

        // Check response
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const tickets = await response.json();

        // Check for tickets
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available.');
        }

        return tickets;
    } catch (error) {

 document.getElementById('error-message').textContent = error.message;
 throw error; 
} finally {
 console.log('Fetch attempt complete.');
}
}

// Call function to fetch tickets
fetchTickets().then(tickets => {
if (tickets) {
 displayTickets(tickets);
}
});

