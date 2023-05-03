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
export declare type MeetingCreateFormInputValues = {
    fullName?: string;
    location?: string;
    date?: string;
};
export declare type MeetingCreateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MeetingCreateFormOverridesProps = {
    MeetingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MeetingCreateFormProps = React.PropsWithChildren<{
    overrides?: MeetingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MeetingCreateFormInputValues) => MeetingCreateFormInputValues;
    onSuccess?: (fields: MeetingCreateFormInputValues) => void;
    onError?: (fields: MeetingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MeetingCreateFormInputValues) => MeetingCreateFormInputValues;
    onValidate?: MeetingCreateFormValidationValues;
} & React.CSSProperties>;
export default function MeetingCreateForm(props: MeetingCreateFormProps): React.ReactElement;
