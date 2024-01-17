const delbooking = (email, id) => (
    fetch('http://192.168.1.138:81/api/delbooking.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({email, id})
    })
    .then(res => res.text())
);

module.exports = delbooking;
