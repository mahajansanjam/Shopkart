
import { Typography,Box ,styled, TableBody, TableCell,Table,TableRow} from '@mui/material';
import {LocalOffer as Badge }from '@mui/icons-material';

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
`

const productDetail =(product)=>{
    const kassured ='https://tse1.mm.bing.net/th/id/OIP.agpLwBkNiN-ow0aGAip0gAHaE4?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    const date = new Date(new Date().getTime()+(5 *24 *60 * 60 *100));
    return (
        <>
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{marginTop:5, color:'#878787',fontSize:14}} >
         10Ratings & ExtraReviews
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
 <Typography> <styledBadge/>Buy 10 items save 20%;Buy  10 or more save 50% T & C</Typography>
                                    
                                    
                         
 <Typography><styledBadge/> 20% cashback on shopping Axis Bank card</Typography>
 <Typography><styledBadge/> No Cost EMI on Bajaj Finsev EMI Card value  above value above 5000 T&C </Typography>
</SmallText>
<Table>
    <TableBody>
        <TableRow>
            <TableCell>Delivery</TableCell>
            <TableCell>Delivery by {date.toDateString()} | ₹40</TableCell>


        </TableRow>
    </TableBody>
</Table>
  </>
    )
}
export default productDetail;

