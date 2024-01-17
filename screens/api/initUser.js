const initUser = (email) => (
    fetch('http://192.168.1.138:81/api/initUser.php',
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

module.exports = initUser;