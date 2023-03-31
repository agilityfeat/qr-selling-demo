interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    password: HTMLInputElement;
    code: HTMLInputElement;
    isApprovedTerms: HTMLInputElement;
    rememberMe: HTMLInputElement;
  }
  
  interface SignUpFormElements extends HTMLFormElement {
    readonly elements: Omit<FormElements, 'rememberMe'>;
  }
  
  interface SignInFormElements extends HTMLFormElement {
    readonly elements: Omit<FormElements, 'name' & 'isApprovedTerms'>;
  }
  
  export type { SignUpFormElements as SignUpFormElementsType, SignInFormElements as SignInFormElementsType };
  