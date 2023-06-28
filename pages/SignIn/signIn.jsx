import axios from 'axios';
const SignIn = () => {
    const getData = () => {
        console.log('wwww')
        // const url  =
        // 'https://accounts.zoho.com/oauth/v2/token?response_type=code&client_id=1000.W0NPL9G80Q1AI83G3T3UYWP3LRI1AU&scope=ZohoProjects.portals.ALL&redirect_uri=http://localhost:3001/SignIn/signIn&prompt=consent'

        // axios.post(url)
        // .then((res) => console.log('res', res))
    }
    return (  
        <div>
            <button onClick={getData}>Sign In with Facebook</button>
        </div>
    );
}
 
export default SignIn;