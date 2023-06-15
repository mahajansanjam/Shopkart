
import { Grid, Typography ,Box,styled} from "@mui/material";
import { useSelector } from "react-redux";

//components
import cartItem from "./cartItem";
import Totalview from "./TotalView";

const Container =styled(Grid)`
padding: 30px 135px;
`;
const Header =styled(Box)`
padding :15px 24px;
`


const Cart =() =>{
   const{ cartItems} =useSelector(state => state.cart);
    return(
        <>
            {
                cartItems.length ?
                < Container container>
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>Some Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item =>(
                                <cartItem item={item}/>
                            ))
                        }

                    </Grid>
                    <Grid item  lg={3} md={3} sm={12} xs={12}>
                        <Totalview/>

                    </Grid>
                </Container>
                :<div>Empty</div>
               
            }

        </>

    )
}

export default Cart;