// src/hooks/useContactUs.js
import { useMutation } from "@tanstack/react-query";
import { ContactUs } from "../api/post_contact";

export const useContactUs = () => {
  return useMutation({
    mutationFn: ContactUs,
  });
};
