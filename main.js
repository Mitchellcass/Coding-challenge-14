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
