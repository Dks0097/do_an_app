const initData = () => (
    fetch('http://192.168.1.138:81/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
