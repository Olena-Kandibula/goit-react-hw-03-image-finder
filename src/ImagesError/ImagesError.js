import PropTypes from 'prop-types';
// import s from './NotFound.module.css';

function ImagesError({ errorSearchQuery }) {
  console.log(errorSearchQuery)
  // console.log(this.props)
  return <p >Images with the name "{errorSearchQuery}" were not found, try again! </p>;
}

ImagesError.protoType = {
  errorSearchQuery: PropTypes.string,
};

export default ImagesError;