import {body} from "express-validator"

export const registerValidation = [
    body('login', "Логин должен содержать минимум 5 символов").isLength({min : 5}),
    body('password', "Пароль должен быть минимум 5 символов").isLength({min : 5}),
    body('firstName', "Укажите имя").isLength({min : 5}),
    body('lastName', "Укажите фамилию").isLength({min : 5}),
]

export const loginValidation = [
    body('login', "Логин должен содержать минимум 5 символов").isLength({min : 5}),
    body('password', "Пароль должен быть минимум 5 символов").isLength({min : 5}),
]