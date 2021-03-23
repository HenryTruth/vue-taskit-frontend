import { reactive } from 'vue'
import passwordComplexity from "joi-password-complexity"

class Store {
    constructor() {
        this.state = reactive({
            authenticated: true,
            username: '',
            email: '',
            password: '',
            password2: '',
            pas_pasword: '',
            validate_form: {
                validate_user: false,
                validate_email: false,
                validate_password: false,
                validate_confirm_password: false,
            },
            title:'',
            completed:false,
            startSpinner:true,
            spinner:false,
            todos: {},
            foltodos: [],
        })
    }

    validateuser = (val) => {
        this.state.validate_form = {...this.state.validate_form, validate_user: val}
    }

    validateemail = (val) => {
        this.state.validate_form = {...this.state.validate_form, validate_email: val}
    }

    validatepassword = (val) => {
        this.state.validate_form = {...this.state.validate_form, validate_password: val}
    }

    validatepassword2 = (val) => {
        this.state.validate_form = {...this.state.validate_form, validate_confirm_password: val}
    }

    validateUsername(username_value) {
        if (username_value[0] != null && username_value[0] == username_value[0].toLowerCase()) {
            this.validateuser(false)
            return "Username must start with a capital letter"
        } else if (username_value == "" || username_value == null) {
            this.validateuser(false)
            return "This field must not be empty"
        } else {
            this.validateuser(true)
        }
    }

    validateEmail(email_value) {
        if (email_value == "" ) {
            this.validateemail(false)
            return  "This field must not be empty"
        }else if(!email_value.includes('@') || !email_value.includes('.')){
            this.validateemail(false)
            return 'please input a valid email'
        }else{
            this.validateemail(true)
        }
    }

    validatePassword(password_value) {
        this.state.pas_pasword = password_value
        if (passwordComplexity().validate(password_value).error && passwordComplexity().validate(password_value).error != null) {
            this.validatepassword(false)
            return 'password' + passwordComplexity().validate(password_value).error.details[0].message.split('"')[2]
        }else{
            this.validatepassword(true)
        }
    }

    validatePassword2(confirm_password_value) {
        if (this.state.pas_pasword != confirm_password_value) {
            this.validatepassword2(false)
            return 'password does not match'
        } else if (confirm_password_value = "") {
            this.validatepassword2(false)
            return 'confirm password is not allowed to be empty'
        }else{
            this.validatepassword2(true)
        }
    }
}

export const store = new Store()