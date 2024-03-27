import * as yup from "yup";


export const inputSchema= yup.object().shape({
input:yup.string().max(10, "Show's name is too long"),
})

export const UserSchema= yup.object().shape({
email: yup.string().email().required(),
password: yup.string().min(5, "The password must have at least 5 characters").max(15,"The password can't be longer than 15 characters").required(),//where nro is any number. Limits min and max characters for pass
})