import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(1, { message: "お名前を入力してください" }),
    company: z.string().optional(),
    email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
    tel: z.string().min(1, { message: "電話番号を入力してください" }),
    message: z.string().min(1, { message: "お問い合わせ内容を入力してください" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
