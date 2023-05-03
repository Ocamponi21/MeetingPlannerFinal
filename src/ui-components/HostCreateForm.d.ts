/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HostCreateFormInputValues = {
    fullName?: string;
    email?: string;
};
export declare type HostCreateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HostCreateFormOverridesProps = {
    HostCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HostCreateFormProps = React.PropsWithChildren<{
    overrides?: HostCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HostCreateFormInputValues) => HostCreateFormInputValues;
    onSuccess?: (fields: HostCreateFormInputValues) => void;
    onError?: (fields: HostCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HostCreateFormInputValues) => HostCreateFormInputValues;
    onValidate?: HostCreateFormValidationValues;
} & React.CSSProperties>;
export default function HostCreateForm(props: HostCreateFormProps): React.ReactElement;
