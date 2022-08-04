import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

const Paypal = ({
  sum,
  transactionSuccess,
  transactionCancel,
  transactionError,
}) => {
  const onSuccess = (payment) => {
    transactionSuccess(payment);
  };

  const onCancel = (data) => {
    transactionCancel(data);
  };

  const onError = (err) => {
    transactionError(err);
  };

  let env = "sandbox";
  let currency = "USD";
  let total = sum;

  const client = {
    sandbox:
      "AZlSR8pVBEUuPjJxy9p9Z0DPHqVXqi9cyb8902WOG1nGXu32a8ivgqDyy-yIgLgI0AGmHqn5IyKqCRKm",
    production: "YOUR-PRODUCTION-APP-ID",
  };
  return (
    <div>
      <React.Fragment>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{ color: "gold", size: "responsive" }}
        />
      </React.Fragment>
    </div>
  );
};

export default Paypal;
