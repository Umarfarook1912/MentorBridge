package org.mentorbridge.customeException;

public class AmountValidationException extends Exception {
    String errorCode;
    String severity;



    public AmountValidationException(String message, String errorCode, String severity) {
        super(message);
        this.errorCode = errorCode;
        this.severity = severity;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public String getSeverity() {
        return severity;
    }

}
