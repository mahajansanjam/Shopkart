
import Slide from './Slide';
import { Box ,styled} from "@mui/material";

const Component= styled(Box)`
    display: flex;

`;
const LeftComponent = styled(Box) (({theme})=>({
     width: '83%',
     [theme.breakpoints.down('md')]:{
        width:'100%'
     }
     
}));
const RightComponent = styled(Box)(({ theme})=>({
background:'#FFFFFF',
padding:5,
marginTop:10,
marginLeft:10,
width:'17%',
textAlign: 'center',
[theme.breakpoints.down('md')]:{
    display:'none'
}

}));




const MidSlide =({products, title ,timer })=>{
    const adURL = 'https://tse2.mm.bing.net/th/id/OIP.Bkf-4J3P8db8YPN_zSj5RQHaEo?pid=ImgDet&rs=1';
    return (
        <Component>
            <LeftComponent>
            <Slide 
            products={products} 
            title={ title}
            timer={timer}
            />
            </LeftComponent>
                <RightComponent>
                
                <img src={adURL} alt="ad" style={{width:217}}/>
                </RightComponent>
            
        </Component>
    )
}
export default MidSlide;