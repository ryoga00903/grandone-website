"use server";

import { Resend } from "resend";
import { contactFormSchema, ContactFormValues } from "@/lib/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormValues) {
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
        return { success: false, error: "入力内容に誤りがあります" };
    }

    try {
        const { name, company, email, tel, message } = result.data;

        const { error } = await resend.emails.send({
            from: "Grand One Website <onboarding@resend.dev>", // Update this with your verified domain later
            to: ["delivered@resend.dev"], // Update this with the client's email
            subject: `【お問い合わせ】${name}様より`,
            text: `
お名前: ${name}
貴社名: ${company || "なし"}
メールアドレス: ${email}
電話番号: ${tel}

お問い合わせ内容:
${message}
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, error: "メールの送信に失敗しました" };
        }

        return { success: true };
    } catch (error) {
        console.error("Server Error:", error);
        return { success: false, error: "サーバーエラーが発生しました" };
    }
}
