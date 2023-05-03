/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Meeting } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MeetingUpdateFormInputValues = {
    fullName?: string;
    location?: string;
    date?: string;
};
export declare type MeetingUpdateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MeetingUpdateFormOverridesProps = {
    MeetingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MeetingUpdateFormProps = React.PropsWithChildren<{
    overrides?: MeetingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    meeting?: Meeting;
    onSubmit?: (fields: MeetingUpdateFormInputValues) => MeetingUpdateFormInputValues;
    onSuccess?: (fields: MeetingUpdateFormInputValues) => void;
    onError?: (fields: MeetingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MeetingUpdateFormInputValues) => MeetingUpdateFormInputValues;
    onValidate?: MeetingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MeetingUpdateForm(props: MeetingUpdateFormProps): React.ReactElement;
