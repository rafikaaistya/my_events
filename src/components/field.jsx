import React from "react";

export const required = (value) => (value ? undefined : "Wajib diisi");

export const emailValid = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(value)
    ? "Alamat email tidak valid"
    : undefined;

export const onlyNumber = (value) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, "");
  return onlyNums;
};

export const minLength = (min) => (value) =>
  value && value.length < min ? `Harus ${min} karakter atau lebih` : undefined;

export const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Tidak boleh melebihi ${max} karakter`
    : undefined;

export const minBaNumber = (value) =>
  value && value.length < 16 ? `Harus 13 angka` : undefined;
export const minNIKNumber = (value) =>
  value && value.length < 19 ? `Harus 16 karakter atau lebih` : undefined;

export function formatBytes(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) {
    return 0;
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return `${bytes} ${sizes[i]}`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Hanya karakter huruf dan angka"
    : undefined;

export const mustAlphaNumeric = (value) =>
  value && /^[a-z0-9_-]+$/i.test(value)
    ? "Minimal harus karakter huruf dan angka"
    : undefined;

export const inputField = (props) => {
  const {
    input,
    type,
    label,
    className,
    classLabel,
    placeholder,
    required,
    disabled,
    meta: { touched, error, warning },
  } = props;

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={input.name} className={classLabel}>
          {label}
          {required && <span className="form-error"> *</span>}
        </label>
      )}
      <input
        {...input}
        id={input.name}
        type={type}
        placeholder={placeholder}
        className={`form-control ${touched && error ? "focus-error" : ""}`}
        disabled={disabled}
      />
      {touched &&
        ((error && <span className="form-error">{error}</span>) ||
          (warning && <span className="form-error">{warning}</span>))}
    </div>
  );
};

export const inputGroupField = (props) => {
  const {
    input,
    type,
    label,
    prepend,
    append,
    className,
    classLabel,
    placeholder,
    required,
    disabled,
    meta: { touched, error, warning },
  } = props;

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={input.name} className={classLabel}>
          {label}
          {required && <span className="form-error"> *</span>}
        </label>
      )}
      <div className={`input-group ${touched && error ? "focus-error" : ""}`}>
        {prepend && (
          <div className="input-group-prepend">
            <span className="input-group-text" id={input.name}>
              {prepend}
            </span>
          </div>
        )}
        <input
          {...input}
          id={input.name}
          type={type}
          placeholder={placeholder}
          aria-label={placeholder}
          aria-describedby={input.name}
          className="form-control"
          disabled={disabled}
        />
        {append && (
          <div className="input-group-append">
            <span className="input-group-text" id={input.name}>
              {append}
            </span>
          </div>
        )}
      </div>
      {touched &&
        ((error && <span className="form-error">{error}</span>) ||
          (warning && <span className="form-error">{warning}</span>))}
    </div>
  );
};

export const textAreaField = (props) => {
  const {
    input,
    label,
    placeholder,
    rows,
    required,
    disabled,
    meta: { touched, error, warning },
  } = props;

  return (
    <div className="form-group" style={{ color: "white" }}>
      {label && (
        <label htmlFor={input.name} className="font-weight-semibold">
          {label}
          {required && <span className="form-error"> *</span>}
        </label>
      )}
      <textarea
        {...input}
        id={input.name}
        placeholder={placeholder}
        rows={rows}
        className={`form-control ${touched && error ? "focus-error" : ""}`}
        disabled={disabled}
        style={{ color: "white" }}
      />
      {touched &&
        ((error && <span className="form-error">{error}</span>) ||
          (warning && <span className="form-error">{warning}</span>))}
    </div>
  );
};
