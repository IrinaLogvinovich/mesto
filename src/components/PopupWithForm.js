import Popup from '../components/Popup.js';

class PopupWithForm extends Popup {
    constructor({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputItems = Array.from(this._popup.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
        this._formValues = {};
        this._inputItems.forEach(item => this._formValues[item.name] = item.value);
        return this._formValues;
    }

    setEventListeners() {
        this._popup.addEventListener('submit', (evt)=> {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }
}

export default PopupWithForm;