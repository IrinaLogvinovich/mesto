import { ESC_KEYCODE } from '../utils/constants.js'; 

class Popup {
    constructor (popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this); 
    }

    open() {
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keyup', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keyup', this._handleEscClose);
    }

    _handleEscClose(evt) {
        evt.preventDefault();
        if (evt.which === ESC_KEYCODE) {
            this.close();
        }
    }

    setEventListeners(){
        this._popup.querySelector('.popup__close').addEventListener('click', () => { this.close()});
        this._popup.addEventListener('click', (evt)=>{
            if (evt.target.classList.contains('popup')) {
                this.close();
            }
        });
    }
}

export default Popup;