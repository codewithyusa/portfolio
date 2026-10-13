import { useCallback, useReducer, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import { validateEmail, validateMessage, validateName } from "../utils/validators";

export type Field = "name" | "email" | "message";
type Fields = Record<Field, string>;

interface State {
  values: Fields;
  errors: Fields;
  touched: Record<Field, boolean>;
  sent: boolean;
}

type Action =
  | { type: "change"; field: Field; value: string }
  | { type: "blur"; field: Field }
  | { type: "invalid"; errors: Fields }
  | { type: "sent" };

const validators: Record<Field, (v: string) => string> = {
  name: validateName,
  email: validateEmail,
  message: validateMessage,
};

const empty: Fields = { name: "", email: "", message: "" };

const initialState: State = {
  values: empty,
  errors: empty,
  touched: { name: false, email: false, message: false },
  sent: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "change": {
      const values = { ...state.values, [action.field]: action.value };
      const errors = state.touched[action.field]
        ? { ...state.errors, [action.field]: validators[action.field](action.value) }
        : state.errors;
      return { ...state, values, errors, sent: false };
    }
    case "blur":
      return {
        ...state,
        touched: { ...state.touched, [action.field]: true },
        errors: {
          ...state.errors,
          [action.field]: validators[action.field](state.values[action.field]),
        },
      };
    case "invalid":
      return { ...state, errors: action.errors, touched: { name: true, email: true, message: true } };
    case "sent":
      return { ...initialState, sent: true };
    default:
      return state;
  }
}

const EMAIL = "yusufumer26@gmail.com";

export function useContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      dispatch({ type: "change", field: e.target.name as Field, value: e.target.value }),
    []
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      dispatch({ type: "blur", field: e.target.name as Field }),
    []
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const { name, email, message } = state.values;
      const errors: Fields = {
        name: validateName(name),
        email: validateEmail(email),
        message: validateMessage(message),
      };

      if (Object.values(errors).some(Boolean)) {
        dispatch({ type: "invalid", errors });
        return;
      }

      const subject = encodeURIComponent(`Message from ${name.trim()}`);
      const body = encodeURIComponent(
        `${message.trim()}\n\nFrom: ${name.trim()} (${email.trim()})`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      dispatch({ type: "sent" });
    },
    [state.values]
  );

  return { ...state, handleChange, handleBlur, handleSubmit };
}