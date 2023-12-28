function Compo() {
    const name = 'Hrishi '
    const url = "C:\\Users\\hrishi.nikam\\OneDrive\\Desktop\\wpt\\WPT Self\\React\\01-app\\src\\Github_Profile.jpg"
    return ( < div >
        <
        h1 > Hello, { name }
        your full name is { Name(user) }
        and your sum is { add(2, 5) } < /h1> <
        img src = { url }
        alt = "Profile" / >
        <
        /div> );
    }

    function add(num1, num2) {
        return num1 + num2;
    }

    function Name(user) {
        return user.firstname + ' ' + user.lastname + " ";
    }



    const user = {
        firstname: 'Hrishi',
        lastname: 'Nikam'
    };




    export default Compo;