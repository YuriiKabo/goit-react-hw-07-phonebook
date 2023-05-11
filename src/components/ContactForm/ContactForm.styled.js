import styled from '@emotion/styled';
import {
  Form as FormikForm,
  Formik as FormikFormik,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  padding: 4px;
  width: 270px;
  border-radius: 4px;
`;

export const Formik = styled(FormikFormik)`
  margin-bottom: 0px;
`;

export const Field = styled(FormikField)`
  border: 1px solid #212121;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  display: inline-block;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #000000;
  border-radius: 4px;
  height: 18px;
  width: 100px;
  background-color: #fff;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:focus {
    box-shadow: none;
  }
`;
