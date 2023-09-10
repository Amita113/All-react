import PropTypes from 'prop-types';

function Component({name,age,grade,address}){

  
    return `${name} is now turning to  ${age+5} from grade ${grade} lives in ${address.flatNo} ${address.city}`

}
Component.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
}
Component.defaultProps={
    grade:3,
    address:{flatNo:204,city:"pune"}
}
export default Component;

