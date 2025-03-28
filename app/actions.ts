"use server"

export async function sendContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const surname = formData.get("surname") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For demonstration purposes, we're just logging the data
    console.log("Sending contact form data to tsa@tsaacademy.com.br:")
    console.log({ name, surname, email, phone, company, message })

    // Here you would add your email sending logic
    // Example with Nodemailer (you would need to install and configure it):
    /*
    const transporter = nodemailer.createTransport({
      host: "your-smtp-host",
      port: 587,
      secure: false,
      auth: {
        user: "your-email",
        pass: "your-password",
      },
    });

    await transporter.sendMail({
      from: '"TSA Website" <noreply@tsacomunica.com.br>',
      to: "tsa@tsaacademy.com.br",
      subject: `Novo contato de ${name} ${surname}`,
      text: `
        Nome: ${name} ${surname}
        Email: ${email}
        Telefone: ${phone}
        Empresa: ${company}
        Mensagem: ${message}
      `,
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });
    */

    return { success: true, message: "Mensagem enviada com sucesso!" }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return { success: false, message: "Erro ao enviar mensagem. Por favor, tente novamente." }
  }
}

export async function sendJobApplication(formData: FormData) {
  try {
    // Extract all form data
    const formValues: Record<string, string> = {}
    formData.forEach((value, key) => {
      formValues[key] = value as string
    })

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    console.log("Sending job application to tsa@tsaacademy.com.br:")
    console.log(formValues)

    // Here you would add your email sending logic similar to the contact form

    return { success: true, message: "Candidatura enviada com sucesso!" }
  } catch (error) {
    console.error("Error sending job application:", error)
    return { success: false, message: "Erro ao enviar candidatura. Por favor, tente novamente." }
  }
}