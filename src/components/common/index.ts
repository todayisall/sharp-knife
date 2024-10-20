import NaiveProvider from "./NaiveProvider/index.vue";

const VERSION = "1.0.0";

export const CommonPasswordReg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,20}$/;

export enum SendCodeType {
  EMAIL_LOGIN = "EMAIL_LOGIN",
  EMAIL_REGISTER = "EMAIL_REGISTER",
}

const pageSizeOptions = ["10", "20", "30", "40", "50"];

export { VERSION, NaiveProvider, pageSizeOptions };
