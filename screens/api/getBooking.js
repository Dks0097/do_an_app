// const getBooking = (email) => (
//     fetch('http://192.168.1.138:81/api/bookings.php')
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return res.json();
//     })
// );
// export default getBooking;

// export default getBooking;
const getBooking = (email) => (
    fetch('http://192.168.1.138:81/api/bookings.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(res => res.json())
);

module.exports = getBooking;
