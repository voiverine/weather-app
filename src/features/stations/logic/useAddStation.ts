import { useMutation, useQueryClient } from "react-query";
import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { axiosApi } from "../../../app/axios";
import { apiPaths } from "../../../app/constants";
import { showToast } from "../../../app/showToast";
import { Station } from "./types";

type FormValues = {
  name: string;
  latitude: string | number;
  longitude: string | number;
  altitude: string | number;
};

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  latitude: yup
    .number()
    .min(-90, "Must be higher than -90.")
    .max(90, "Must be lower than 90.")
    .required(),
  longitude: yup
    .number()
    .min(-180, "Must be higher than -180.")
    .max(180, "Must be lower than 180.")
    .required(),
  altitude: yup
    .number()
    .min(-100, "Must be higher than -100.")
    .max(9000, "Must be lower than 9000")
    .required(),
});

const useAddStation = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    (newStation: Record<string, string | number>) => {
      return axiosApi.post(apiPaths.stations, newStation);
    },
    {
      onError: (error) => {
        showToast((error as any) || "Couldn't add your station.");
      },
      onSuccess: (data: Station) => {
        showToast("Your station has been added.", "success");
        queryClient.setQueryData(
          [apiPaths.stations],
          (input: Station[] | undefined): Station[] => {
            const parsedData = { ...data, id: data.ID || data.id };

            return [...(input ? input : []), parsedData];
          }
        );
      },
    }
  );

  const handleSubmit = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) => {
    const parsedValues = {
      ...values,
      external_id: `${values.latitude}_${values.longitude}_${values.altitude}`,
    };
    const { ID } = await mutateAsync(parsedValues);
    if (ID) {
      helpers.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      latitude: "",
      longitude: "",
      altitude: "",
    } as FormValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return { formik };
};

export { useAddStation };
