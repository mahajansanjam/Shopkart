
import { Typography,Box,styled } from "@mui/material";


const cartItem =({item}) =>{
    return (
        <Box>
        <Box>
            <img src={item.Url} alt="product"/>
            <Box>
            </Box>
                 <Typography>{item.title.longTitle}</Typography>
            </Box>
        </Box>
    )
}

export default cartItem;
