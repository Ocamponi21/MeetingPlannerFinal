/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Host } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HostUpdateFormInputValues = {
    fullName?: string;
    email?: string;
};
export declare type HostUpdateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HostUpdateFormOverridesProps = {
    HostUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HostUpdateFormProps = React.PropsWithChildren<{
    overrides?: HostUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    host?: Host;
    onSubmit?: (fields: HostUpdateFormInputValues) => HostUpdateFormInputValues;
    onSuccess?: (fields: HostUpdateFormInputValues) => void;
    onError?: (fields: HostUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HostUpdateFormInputValues) => HostUpdateFormInputValues;
    onValidate?: HostUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HostUpdateForm(props: HostUpdateFormProps): React.ReactElement;
