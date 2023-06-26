import axios from 'axios';
const SignIn = () => {
    const getData = () => {
        const url  =
        'https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=1000.XRLYI3W3KK105KBUKTB92LR7EK8K1Z&scope=ZohoProjects.projects.ALL&redirect_uri=http://localhost:3000/SignIn/signIn&prompt=consent'
        axios.get(url)
        .then((res) => console.log('res', res))
    }
    return (  
        <div>
            <button onClick={getData}>Sign In with Facebook</button>
        </div>
    );
}
 
export default SignIn;