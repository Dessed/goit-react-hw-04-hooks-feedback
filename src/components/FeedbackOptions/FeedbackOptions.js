import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ names, clickState }) => {
   
    return (
        <div>
            {names.map(name => (
            <Button key={name} type='button' name={name} onClick={clickState}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </Button>
            ))}
        </div>
    );    
};


FeedbackOptions.propTypes = {
    props: PropTypes.object,
    clickState: PropTypes.func,
};