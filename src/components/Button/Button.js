import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ addImages, pages, currentPage }) {
    console.log('pages button = availablePages', pages)
    // console.log('max pages button', Math.ceil(pages / 12))
    // const maxMages = Math.ceil(pages / 12);
    // console.log('maxMages', maxMages)
    const message = (currentPage < pages) ? 'Load more...' : "That's all";
// console.log('currentPage',currentPage)
    const disabled = (currentPage < pages) ? false : true;
    // console.log(disabled)
  return (
    <button
          type="button"
          className={s.button}
          onClick={() => addImages()}
          disabled = { disabled}
      >
         
        {message}
    </button>
  );
}

Button.protoType = {
    addImages: PropTypes.func,
    pages:PropTypes.string,
};

export default Button;