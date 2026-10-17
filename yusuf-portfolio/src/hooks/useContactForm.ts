import { useCallback, useReducer, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail, validateMessage, validateName } from "../utils/validators";

export type Field = "name" | "email" | "message";
export type Status = "idle" | "sending" | "sent" | "error";
type Fields = Record<Field, string>;

interface State {
  values: Fields;
  errors: Fields;
  touched: Record<Field, boolean>;
  status: Status;
}

type Action =
  | { type: "change"; field: Field; value: string }
  | { type: "blur"; field: Field }
  | { type: "invalid"; errors: Fields }
  | { type: "sending" }
  | { type: "sent" }
  | { type: "error" };

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
  status: "idle",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "change": {
      const values = { ...state.values, [action.field]: action.value };
      const errors = state.touched[action.field]
        ? { ...state.errors, [action.field]: validators[action.field](action.value) }
        : state.errors;
      const status = state.status === "sending" ? state.status : "idle";
      return { ...state, values, errors, status };
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
    case "sending":
      return { ...state, status: "sending" };
    case "sent":
      return { ...initialState, status: "sent" };
    case "error":
      return { ...state, status: "error" };
    default:
      return state;
  }
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

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
    async (e: FormEvent) => {
      e.preventDefault();
      if (state.status === "sending") return;

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

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error("EmailJS keys are missing. Check your .env file and restart npm run dev.");
        dispatch({ type: "error" });
        return;
      }

      dispatch({ type: "sending" });

      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            name: name.trim(),
            email: email.trim(),
            title: `Portfolio message from ${name.trim()}`,
            message: message.trim(),
            time: new Date().toLocaleString(),
          },
          { publicKey: PUBLIC_KEY }
        );
        dispatch({ type: "sent" });
      } catch (err) {
        console.error("EmailJS error:", err);
        dispatch({ type: "error" });
      }
    },
    [state.values, state.status]
  );

  return { ...state, handleChange, handleBlur, handleSubmit };
}