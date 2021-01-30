import { E_ERROR } from './enum'

export interface ITarget {
  target: {
    value: React.SetStateAction<string>
  }
  preventDefault(): void
}

export interface IMsg {
  msg: string | any
}

export interface IUser {
  name?: string
  email: string
  password: string
}

export interface IError {
  id: E_ERROR
  msg: IMsg
}

export interface IAuthForm {
  isAuth?: boolean
  error: IError
  clearErrors(): void
}

export interface ILoginModal extends IAuthForm {
  login(user: IUser): void
}

export interface IRegisterModal extends IAuthForm {
  register(user: IUser): void
}

export interface ILogoutProps {
  logout(): void
}

export interface IAuthReduxProps {
  auth: { isAuth: boolean }
  error: IError
}

export interface IConfigHeaders {
  headers: {
    [index: string]: string
  }
}

export interface IAppNavbar {
  auth?: {
    isAuth: boolean
    user: IUser
  }
}

export interface IExistingItem {
  _id: string
  name: string
}

export interface IItem {
  _id?: string
  name: string
}

export interface IItemModal {
  isAuth: boolean
  addItem(item: IItem): void
}

export interface IItemReduxProps extends IAuthReduxProps {
  item: {
    items: IExistingItem[]
  }
}

export interface IShoppingList {
  item: {
    items: IExistingItem[]
  }
  getItems(): void
  deleteItem(id: string): void
  isAuth: boolean
}

export interface IAuthFunction {
  name?: string
  email: string
  password: string
}

export interface IReturnErrors {
  msg: {
    msg: string | any
  }
  status: string
  id: any
}

export interface IAction {
  type: string
  payload?: any
}
