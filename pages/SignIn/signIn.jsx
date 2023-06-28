import axios from 'axios';
const SignIn = () => {
    const getData = () => {
        console.log('wwww')
        // const url  =
        // 'https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=1000.0TA4E9SZNQYLO5AWXP2HASB597VRXA&scope=ZohoProjects.portals.ALL&redirect_uri=http://localhost:3001/SignIn/signIn&prompt=consent'

        // axios.get(url)
        // .then((res) => console.log('res', res))
    }
    return (  
        <div>
            <button onClick={getData}>Sign In with Facebook</button>
        </div>
    );
}
 
export default SignIn;