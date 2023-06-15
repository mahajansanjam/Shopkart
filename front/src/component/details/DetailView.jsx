
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getproductDetails } from '../../redux/actions/productActions';
import { Box, Typography ,Grid ,styled,TableBody, TableCell,Table,TableRow} from '@mui/material';
import {LocalOffer as Badge }from '@mui/icons-material';

import ActionItem from './ActionItem';



import productDetail from './productDetail';
const Component = styled(Box)`
     background:#F2F2F2;
     margin-top:55px;
`;
const Container =styled(Grid)(({ theme}) =>({
    background:'#FFFFFF',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
}))

const RightContainer =styled(Grid)`
margin-top : 50px;
`;
const SmallText =styled(Box)`
font-size:14px;
vertical-align:baseline;
& > p{
    font-size:14px;
    margin-top:10px;
}
`;

const styledBadge =styled(Badge)`
margin-right:10px;
color:#00CC00;
font-size:15px;
`;
const ColumnText = styled(TableRow)`
font-size:14x;
vertical-align:baseline;
& > td {
font-size:14px;
margin-top:10px;
border:none;
}
`

const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, product } = useSelector(state => state.getproductDetails);

    
    const kassured ='https://tse1.mm.bing.net/th/id/OIP.agpLwBkNiN-ow0aGAip0gAHaE4?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    const adURL='https://i.pinimg.com/originals/9a/0f/43/9a0f4314813d3c452f161858d11cf075.jpg'
    const date = new Date(new Date().getTime()+(5 *24 *60 * 60 *100));
    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getproductDetails(id))
    }, [dispatch, id, product, loading])
    return (
        <Component>
            {
                product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md ={4} sm={8} xs={12}>
                        <ActionItem product={product}/>
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12} >
                    <Typography>{product.title.longTitle}</Typography>
        <Typography style={{marginTop:5, color:'#878787',fontSize:14}} >
         40%Ratings & ExtraReviews
        <Box component="span"><img src={kassured} style={{width:77, marginLeft:20}}/></Box>
     </Typography>
    <Typography>
    <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
  <Box component="span" style={{color:'#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
 <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
</Typography>
<>
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{marginTop:5, color:'#878787',fontSize:14}} >
         100%Ratings & DoubleReviews
        <Box component="span"><img src={kassured} style={{width:77, marginLeft:20}}/></Box>
     </Typography>
    <Typography>
    <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
  <Box component="span" style={{color:'#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
 <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
</Typography>
<Typography>Avialable offers</Typography>
 <SmallText>
<Typography> <styledBadge/>Get 50% off upto 50 on 1 item(s) T&C</Typography>
<Typography> <styledBadge/>Get extra 100% off (price inclusive of discount) T&C</Typography>
 <Typography> <styledBadge/>Sign up for shopping pay later and get shopping GIft Card worth 100 *know More</Typography>
 <Typography> <styleBadge/>Buy 10 items save 20%;Buy  10 or more save 50% T & C</Typography>
                                    
                                    
                         
 <Typography> 20% cashback on shopping Axis Bank card</Typography>
 <Typography> No Cost EMI on Bajaj Finsev EMI Card value  above value above 5000 T&C </Typography>
</SmallText>
<Table>
    <TableBody>
        <ColumnText>
            <TableCell style={{color:'#878787'}}>Delivery fastly</TableCell>
            <TableCell style={{fontWeight:600}}>Delivery very hardly {date.toDateString()} | ₹100</TableCell>


        </ColumnText>
        <ColumnText>
            <TableCell style={{color:'#878787'}}>Garunity</TableCell>
            <TableCell style={{fontWeight:600}}> No Garuinty</TableCell>


        </ColumnText>

        <ColumnText>
            <TableCell style={{color:'#878787'}}>Best Seller</TableCell>
            <TableCell > 
            <Box component="span" style={{color:'#2874f0'}}>high diller</Box>
            <Typography>GST invoice aviable here </Typography>
            <Typography>see idea and costless from₹{product.price.cost}</Typography>
            </TableCell>


        </ColumnText>
        <ColumnText>
            <TableCell colSpan={2} >
                <img src={adURL} style={{widh:300}} alt="shopspoints"/>

            </TableCell>
        </ColumnText>
        <TableRow>
            <TableCell style={{color:'#878787'}}>proper Description</TableCell>
            <TableCell> {product.description}</TableCell>


        </TableRow>
    </TableBody>
</Table>

  </>
                        
 <productDetail product={product}/>
                            
 </RightContainer>
</Container>
    }
</Component>
    )
}

export default DetailView;