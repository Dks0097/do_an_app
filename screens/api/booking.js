const booking = (rooms_id,email, name, check_in,check_out,actual_price,subtotal,phone,discount) => (
    fetch('http://192.168.1.138:81/api/booking.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ rooms_id,email, name, check_in,check_out,actual_price,subtotal,phone,discount })
    })
    .then(res => res.text())
);

module.exports = booking;
