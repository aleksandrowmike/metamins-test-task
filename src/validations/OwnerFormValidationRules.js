export default function validate(values) {
    let errors = {};
    if (values.profits < 0) {
        errors.profits = 'Profits cannot be less than zero';
    }
    if (values.losses < 0) {
        errors.losses = 'Profits cannot be less than zero';
    }
    if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(values.phone)) {
        errors.phone = 'Phone is invalid';
    }
    return errors;
  };