class UserInfo {
    constructor({profileName, profileDescription}) {
        this._name = profileName;
        this._description = profileDescription;
    }

    getUserInfo() {
        this._user = {
            'name': this._name.textContent,
            'description': this._description.textContent
        }
        return this._user;
    }

    setUserInfo({name, description}) {
        this._name.textContent = name;
        this._description.textContent = description;
    }
}

export default UserInfo;