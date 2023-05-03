/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ParticipantCreateFormInputValues = {
    fullname?: string;
    email?: string;
    status?: string;
};
export declare type ParticipantCreateFormValidationValues = {
    fullname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ParticipantCreateFormOverridesProps = {
    ParticipantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ParticipantCreateFormProps = React.PropsWithChildren<{
    overrides?: ParticipantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ParticipantCreateFormInputValues) => ParticipantCreateFormInputValues;
    onSuccess?: (fields: ParticipantCreateFormInputValues) => void;
    onError?: (fields: ParticipantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ParticipantCreateFormInputValues) => ParticipantCreateFormInputValues;
    onValidate?: ParticipantCreateFormValidationValues;
} & React.CSSProperties>;
export default function ParticipantCreateForm(props: ParticipantCreateFormProps): React.ReactElement;
