import {Button } from 'reactstrap';

const MyButton = ({
    color="primary",
    onClickAction,
}) => {

    return(
        <>
            <MyButton
            color={color}
            onClick={(e) => {
                onClickAction(e);
                }
            }
            
            
            
            
            ></MyButton>

        
        </>
    )
}

export default MyButton;