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

function displayTickets(tickets) {
    const ticketContainer = document.getElementById('ticket-container');

    tickets.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.innerHTML = `
            <h3>Ticket ID: ${ticket.id}</h3>
            <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
            <p><strong>Issue Description:</strong> ${ticket.title}</p>
            <p><strong>Details:</strong> ${ticket.body}</p>
            <hr>
        `;
        ticketContainer.appendChild(ticketElement);
    });
}
//Task 2: Display tickets dynamically on the page
function displayTickets(tickets) {
    const ticketContainer = document.getElementById('ticket-container');
    ticketContainer.innerHTML = ''; 

    tickets.forEach(ticket => {
        const ticketDiv = document.createElement('div');
        ticketDiv.innerHTML = `
            <h3>Ticket ID: ${ticket.id}</h3>
            <p>Customer Name: User ${ticket.userId}</p>
            <p>Issue Description: ${ticket.title}</p>
            <p>Details: ${ticket.body}</p>
            <hr>
        `;
        ticketContainer.appendChild(ticketDiv); 
    });
}

