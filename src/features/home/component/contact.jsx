import { useState } from "react";
import { useForm } from "react-hook-form";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../../component/ui/buuton";
import Title from "../../../component/ui/title";
import { useContactUs } from "../../contact/hook/use_post_contact";

const inputClass =
  "w-full h-[3.7rem] rounded-sm border outline-none px-4 shadow-custom";

const textareaClass =
  "w-full h-[10rem] rounded-sm border outline-none p-[1rem] shadow-custom";

const infoTextClass = "w-[80%] text-[#333333] text-[1rem]";
const infoTitleClass = "text-secondary text-[1.1rem]";
const errorClass = "text-red-500 text-sm mt-1";

const Contact = ({ containerClass, marginClass, contactData }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    mutate: contactUsMutation,
    isPending,
    isError,
    isSuccess,
    error,
  } = useContactUs();

  const onSubmit = (data) => {
    contactUsMutation(data, {
      onSuccess: (response) => {
        // Success toast
        toast.success(t("message_sent_successfully"), {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#263F57",
            color: "#fff",
          },
        });
        reset();
      },
      onError: (error) => {
        // Error toast
        toast.error(error.message, {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#263F57",
            color: "#fff",
          },
        });
      },
    });
  };

  return (
    <>
      {/* Toaster component - add this at the root level */}
      <Toaster
        toastOptions={{
          // Default options for all toasts
          duration: 4000,
          position: "top-center",
          style: {
            borderRadius: "8px",
            padding: "16px",
          },
          success: {
            style: {
              background: "#263F57",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#10b981",
            },
          },
          error: {
            style: {
              background: "#ef4444",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#ef4444",
            },
          },
        }}
      />

      <div className={`${marginClass} ${containerClass} mx-auto`}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[3rem]">
          {/* First Column */}
          <div className="flex flex-col justify-center">
            <Title title={t("contact_us")} />
            <h1 className="font-bold text-primary text-[2rem] mt-[1rem]">
              {t("contact_information")}
            </h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-[2rem] gap-y-[2rem] mt-[1rem]">
              {/* Address */}
              <div className="flex flex-col">
                <h1 className={infoTitleClass}>{i18next.t("address")}</h1>
                <p className={infoTextClass}>{contactData?.data?.address}</p>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <h1 className={infoTitleClass}>{i18next.t("phone")}</h1>
                <p className={infoTextClass}>{contactData?.data?.phone_1}</p>
                <p className={infoTextClass}>{contactData?.data?.phone_2}</p>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <h1 className={infoTitleClass}>{i18next.t("email")}</h1>
                <p className={infoTextClass}>{contactData?.data?.website}</p>
                <p className={infoTextClass}>{contactData?.data?.email}</p>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-[22rem] mt-[2rem]">
              <iframe
                title="Google Map"
                src={contactData?.data?.location}
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="w-full h-auto border py-[4rem] lg:px-[3rem] px-[1rem] mt-[4rem] lg:mt-0 shadow-custom">
            <h1 className="text-[#002623] font-bold text-[2rem]">
              {t("contact")}
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-[1rem] space-y-[1.4rem]"
            >
              {/* Name Input */}
              <div>
                <input
                  className={`${inputClass} ${errors.name ? "border-red-500" : ""}`}
                  placeholder={t("your_name")}
                  {...register("name", {
                    required: t("name_required"),
                    minLength: {
                      value: 2,
                      message: t("name_min_length"),
                    },
                  })}
                />
                {errors.name && (
                  <p className={errorClass}>{errors.name.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <input
                  className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
                  placeholder={t("email")}
                  type="email"
                  {...register("email", {
                    required: t("email_required"),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t("invalid_email"),
                    },
                  })}
                />
                {errors.email && (
                  <p className={errorClass}>{errors.email.message}</p>
                )}
              </div>

              {/* Subject Input */}
              <div>
                <input
                  className={`${inputClass} ${errors.object ? "border-red-500" : ""}`}
                  placeholder={t("subject")}
                  {...register("object", {
                    required: t("subject_required"),
                  })}
                />
                {errors.object && (
                  <p className={errorClass}>{errors.object.message}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  className={`${textareaClass} ${errors.message ? "border-red-500" : ""}`}
                  placeholder={t("write_your_message")}
                  {...register("message", {
                    required: t("message_required"),
                    minLength: {
                      value: 10,
                      message: t("message_min_length"),
                    },
                  })}
                />
                {errors.message && (
                  <p className={errorClass}>{errors.message.message}</p>
                )}
              </div>

              <div className="flex justify-end">
                <div className="flex justify-end">
                  <Button
                    title={
                      isPending ? (
                        <span className="flex items-center justify-center gap-2">
                          {t("sending")}
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </span>
                      ) : (
                        i18next.t("send")
                      )
                    }
                    type="submit"
                    showIcon={!isPending} // Hide arrow when loading
                    disabled={isPending}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
