import {useState ,useContext} from  'react';

import { Dialog ,Box ,TextField, Typography,Button ,styled}  from '@mui/material';

import { authenticateSignup,authenticateLogin } from '../../service/api';
import {DataContext} from '../../context/DataProvider';

const Component= styled(Box)`
height:70vh;
width:90vh;

`;
const Address=styled(Box)`
display:flex;
flex-direction:coloumn;
padding:25px 35px;>p{
    margin-top:20px;
}flex:1;& >div,&> button ,&
`;
const Image =styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)center 85% no-repeat;
height:83%;
width:28%;
padding:45px 35px;

& > p, & > h5 {
    color:#FFFFFF;
    font-weight:600;
}

`;
const Wrapper =styled(Box)`
display:flex;
flex-direction: column;
padding:25px 35px;
flex:1;
& > div ,& >button, & >p {
    margin-top:20px;
}
`;
const LoginButton=styled(Button)`
text-transform:none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius:3px;

`;
const RequestOTP =styled(Button)`
text-transform:none;
background: #fff;
color: #2874f0;
height: 48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20% );
`;

const Text =styled(Typography)`
font-size:12px;
color: #878787;
`;

const CreateAccount =styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;
`;
const Error =styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
fint-weight:600;
`

const accountIntitalvalues={
    login :{
        view:'login',
        heading:'Login',
        subHeading:'Get access your orders, wishlists and Recomendation'

    },
    signup:{
        view:'signup',
        heading:"looks like you're new here!",
        subHeading:'Sign up with your mobile number to get started'
    }
}

const signupIntialValues= {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}
const loginInitialValues= {
    username:'',
    password:''

}
const LoginDialog =( {open, setopen}) =>{

    const [account,toogleAccount] =useState(accountIntitalvalues.login)
    const [signup, setSignup]= useState(signupIntialValues);
    const [login ,setLogin]=useState(loginInitialValues)
    const[error,setError]=useState(false);

    const {  setAccount}= useContext(DataContext);

    const handleClose = () =>{
        setopen(false);
        toogleAccount(accountIntitalvalues.login);
        setError(false);
    }
const toogleSignup =() =>{
    toogleAccount(accountIntitalvalues.signup);
}
const onInputchange =(e)=>{
    setSignup({...signup, [e.target.name]:e.target.value});

}
const signupUser = async() =>{
 let response= await  authenticateSignup(signup);
 if (!response) return;
 handleClose();
 setAccount(signup.firstname);
}
const OnValueChange = (e) =>{
    setLogin({...login,[e.target.name]:e.target.value });
}
 const loginUser = async() =>{
  let response=  await  authenticateLogin(login);
  console.log(response);
  if(response.status === 200) {
    handleClose();
    setAccount(response.data.data.firstname);
  }else {
setError(true);
  }

 }
    return (
        <Dialog open ={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Box style ={{display:'flex',height:'100%'}}>
                < Image>
                <Typography variant="h5">{account.heading}</Typography>
                <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                </Image>
                { 
                account.view ==='login'? 
             <Wrapper>
                    <TextField variant="standard" onChange={(e) =>OnValueChange(e)} name='username' label ="Enter Username "/>
                  { error && <Error>please enter valid username or password</Error>}

                    <TextField variant="standard" onChange={(e)=>OnValueChange(e)}name='password'  label ="Enter password "/>

                    <Text>By continuing ,you agree to kart Terms of use and privacy policy.</Text>
                    <LoginButton onClick={() =>loginUser()}>Login</LoginButton>
                    <Typography style={{textAlign: 'center' }}>OR</Typography>
                    <RequestOTP >Request OTP</RequestOTP>
                    <CreateAccount onClick={() => toogleSignup()}>New to kart? create an account</CreateAccount>
                
                </Wrapper>
                :
                <Wrapper>
                <TextField variant="standard"onChange={(e)=>onInputchange(e)}name='firstname' label ="Enter Firstname "/>
                <TextField variant="standard"onChange={(e)=>onInputchange(e)} name='lastname'label ="Enter lastname "/>
                <TextField variant="standard"onChange={(e)=>onInputchange(e)}name='username' label ="Enter username "/>
                <TextField variant="standard"onChange={(e)=>onInputchange(e)} name='email'label ="Enter Email "/>
                <TextField variant="standard"onChange={(e)=>onInputchange(e)} name='password'label ="Enter password "/>
                <TextField variant="standard"onChange={(e)=>onInputchange(e)}name='phone'label ="Enter Phone "/>
                
                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                

            </Wrapper>
            }
                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog;